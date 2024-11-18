namespace RelataBH.Service.Relato.Category
{
    public interface ICategoryService
    {
        public Task<IEnumerable<RelataBH.Model.Relato.Category>> GetCategories();
    }
}
