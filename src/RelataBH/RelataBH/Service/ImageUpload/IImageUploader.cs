namespace RelataBH.Service.ImageUpload
{
    public interface IImageUploader
    {
        Task<List<string>> UploadImage(List<IFormFile> files);
    }
}
