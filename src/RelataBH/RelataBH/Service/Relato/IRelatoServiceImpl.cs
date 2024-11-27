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
    public class IRelatoServiceImpl(RelatoContext relatoContext, IImageUploader imageUploader) : IRelatoService
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

        public async Task<IEnumerable<VW_RELATOS>> GetRelatosPoint(string lat, string log)
        {
            return await relatoContext.VW_RELATOS
                .FromSqlRaw(BuildSql(lat, log, 2))
                .ToListAsync();
        }

        public async Task<Model.Relato.Relato> SaveRelato(RelatoRequest relato, List<IFormFile> images)
        {
            var imagePaths = await imageUploader.UploadImage(images);
            var relatoSalvo = await relatoContext
                .Relatos
                .AddAsync(RelatoMapper.MapRequestToModel(relato, imagePaths));
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
                relatoEditado.idBairro = 321;
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

        public async Task<IEnumerable<VW_RELATOS>> GetRelatosInArea(AreaRequest relatoArea)
        {
            return [];
        }

        private static string BuildSql(string latitude, string longitude, int distanceInKM)
        {
            return new StringBuilder()
                .Append("SELECT * FROM [VW_RELATOS] AS [v] ")
                .Append($"WHERE [v].[POINT].STDistance(geography::Point({latitude}, {longitude}, 4326)) * 0.001E0 <= {distanceInKM}")
                .ToString()
            ;
        }
    }
}
