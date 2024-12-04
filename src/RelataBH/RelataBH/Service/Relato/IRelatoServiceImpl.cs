using Microsoft.EntityFrameworkCore;
using RelataBH.Database;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;
using RelataBH.Service.ImageUpload;
using RelataBH.Service.Relato.Domain;
using RelataBH.Service.Relato.Mapper;
using System.Text;

namespace RelataBH.Service.Relato
{
    public class IRelatoServiceImpl(
        RelatoContext relatoContext, 
        IImageUploader imageUploader,
        LocationContext locationContext
    ) : IRelatoService
    {
        public async Task<IEnumerable<VW_RELATOS>> GetRelatos()
        {
            return await relatoContext
                .VW_RELATOS
                .ToListAsync();
        }

        public async Task<Model.Relato.Relato?> GetRelatoId(int Id)
        {
            return await relatoContext
                .Relatos
                .Where(x => x.id == Id)
                .Include(r => r.feedback)
                .Include(i => i.images)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Model.Relato.Relato>> GetRelatosPoint(string lat, string log)
        {
            return await relatoContext.Relatos
                .FromSqlRaw(BuildSql(lat, log, 2))
                .Include(r => r.feedback)
                .Include(i => i.images)
                .ToListAsync();
        }

        public async Task<IEnumerable<Model.Relato.Relato>> SearchByCidade(int id)
        {
            return await relatoContext.Relatos
                .Where(x => x.idCidade == id)
                .Include(r => r.feedback)
                .Include(i => i.images)
                .ToListAsync();
        }

        public async Task<Model.Relato.Relato> SaveRelato(RelatoRequest relato, List<IFormFile> images)
        {
            var imagePaths = await imageUploader.UploadImage(images);

            var idCidade = await locationContext
                .Cidade
                .FirstOrDefaultAsync(x => x.Name.ToLower().Contains(relato.NomeCidade.ToLower()));

            var relatoSalvo = await relatoContext
                .Relatos
                .AddAsync(RelatoMapper.MapRequestToModel(relato, idCidade?.ID ?? -1, imagePaths));

            await relatoContext.SaveChangesAsync();
            return relatoSalvo.Entity;
        }

        public async Task<Model.Relato.Relato?> UpdateRelato(RelatoRequest relato)
        {
            var relatoEditado = await relatoContext.Relatos.FirstOrDefaultAsync(x => x.id == relato.Id);
            if(relatoEditado != null)
            {
                relatoEditado.latitude = relato.Latitude;
                relatoEditado.longitude = relato.Longitude;
                relatoEditado.endereco = relato.Endereco;
                relatoEditado.dsc = relato.DescricaoRelato;
                relatoEditado.titulo = relato.Titulo;
                relatoEditado.codIndicador = 50;
                relatoEditado.idUser = 100;
                relatoEditado.idCidade = 321;
            }
            await relatoContext.SaveChangesAsync();
            return relatoEditado;
        }

        public async Task<bool> DeleteRelato(int Id)
        {
            try
            {
                return await relatoContext
                    .Relatos
                    .Where(x => x.id == Id)
                    .ExecuteDeleteAsync() > 0;
            }
            catch
            {
                return false;
            }
        }

        public async Task<IEnumerable<Model.Relato.Relato>> GetRelatosInArea(AreaRequest relatoArea)
        {
            var sqlToSearchInArea = BuildPolygonSql(
                relatoArea.TopLeft.Latitude, 
                relatoArea.TopLeft.Longitude, 
                relatoArea.BottomRight.Latitude, 
                relatoArea.BottomRight.Longitude
            );

            return await relatoContext.Relatos
                .FromSqlRaw(sqlToSearchInArea)
                .Include(r => r.feedback)
                .Include(i => i.images)
                .ToListAsync();
        }

        private static string BuildSql(string latitude, string longitude, int distanceInKM)
        {
            return new StringBuilder()
                .Append($"SELECT * FROM RELATOS AS r WHERE geography::Point(CAST(r.LATITUDE AS FLOAT), CAST(r.LONGITUDE AS FLOAT), 4326).STDistance(geography::Point({latitude}, {longitude}, 4326)) * 0.001 <= {distanceInKM}")
                .ToString()
            ;
        }

        private static string BuildPolygonSql(string point1Lat, string point1Lng, string point2Lat, string point2Lng)
        {
            return new StringBuilder()

                // Add DECLARE statements to define input parameters for the points
                .AppendLine($"DECLARE @Point1_Lat FLOAT = {point1Lat},")
                .AppendLine($"        @Point1_Lng FLOAT = {point1Lng},")
                .AppendLine($"        @Point2_Lat FLOAT = {point2Lat},")
                .AppendLine($"        @Point2_Lng FLOAT = {point2Lng};")
                .AppendLine()

                // Build the SQL query using the STWithin function to find points inside the polygon
                .AppendLine("SELECT * FROM RELATOS AS r")
                .AppendLine("WHERE geography::Point(CAST(r.LATITUDE AS FLOAT), CAST(r.LONGITUDE AS FLOAT), 4326)")
                .AppendLine("      .STWithin(")
                .AppendLine("          geography::STGeomFromText(")
                .AppendLine("              POLYGON(( ")
                .AppendLine("              CAST(MIN(@Point1_Lng, @Point2_Lng) AS VARCHAR) CAST(MIN(@Point1_Lat, @Point2_Lat) AS VARCHAR),")
                .AppendLine("              CAST(MIN(@Point1_Lng, @Point2_Lng) AS VARCHAR) CAST(MAX(@Point1_Lat, @Point2_Lat) AS VARCHAR),")
                .AppendLine("              CAST(MAX(@Point1_Lng, @Point2_Lng) AS VARCHAR) CAST(MAX(@Point1_Lat, @Point2_Lat) AS VARCHAR),")
                .AppendLine("              CAST(MAX(@Point1_Lng, @Point2_Lng) AS VARCHAR) CAST(MIN(@Point1_Lat, @Point2_Lat) AS VARCHAR),")
                .AppendLine("              CAST(MIN(@Point1_Lng, @Point2_Lng) AS VARCHAR) CAST(MIN(@Point1_Lat, @Point2_Lat) AS VARCHAR))),")
                .AppendLine("              4326")
                .AppendLine("          )")
                .AppendLine("      ) = 1;")
                .ToString();
        }
    }
}
