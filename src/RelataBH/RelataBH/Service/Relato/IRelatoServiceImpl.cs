using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using NetTopologySuite.Geometries;
using RelataBH.Database;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;
using System.Globalization;
using System.Web.Http.Results;
using static System.Net.Mime.MediaTypeNames;

namespace RelataBH.Service.Relato
{
    public class IRelatoServiceImpl(RelatoContext relatoContext) : IRelatoService
    {
        public async Task<IEnumerable<VW_RELATOS>> GetRelatos()
        {
            return await relatoContext.VW_RELATOS.ToListAsync();
        }

        public async Task<VW_RELATOS> GetRelatoId(int Id)
        {
            var relato =  await relatoContext.VW_RELATOS.FirstOrDefaultAsync(x => x.IdRelato == Id);
            return relato;
        }

        public async Task<IEnumerable<VW_RELATOS>> GetRelatosPoint(string lat, string log)
        {
            var pointCenter = new Point(double.Parse(log, CultureInfo.InvariantCulture), double.Parse(lat, CultureInfo.InvariantCulture)){SRID = 4326};

            var relatos = await relatoContext.VW_RELATOS
                .Where(item => item.point.Distance(pointCenter) <= 0.025)
                .ToListAsync();

            return relatos;
        }

        public async Task<Model.Relato.Relato> SaveRelato(RelatoRequest relato)
        {
            var relatoSalvo = await relatoContext.Relatos.AddAsync(new()
            {
                latitude = relato.Latitude,
                longitude = relato.Longitude,
                endereco = relato.Endereco,
                createdAt = DateOnly.FromDateTime(DateTime.Now),
                dsc = relato.DescricaoRelato,
                titulo = relato.Titulo,
                codIndicador = relato.IdCategoria,
                idUser = relato.IdUser,
                idBairro = relato.IdBairro,
            });
            await relatoContext.SaveChangesAsync();
            return relatoSalvo.Entity;
        }

        public async Task<Model.Relato.Relato> UpdateRelato(RelatoRequest relato)
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
                await relatoContext.Relatos.Where(x => x.id == Id).ExecuteDeleteAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
