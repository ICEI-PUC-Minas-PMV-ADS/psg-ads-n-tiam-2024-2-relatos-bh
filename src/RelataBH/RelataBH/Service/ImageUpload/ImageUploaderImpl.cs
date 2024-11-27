
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace RelataBH.Service.ImageUpload
{
    public class ImageUploaderImpl: IImageUploader
    {
        private static readonly string connectionString = "DefaultEndpointsProtocol=https;AccountName=relatabh;AccountKey=tapdz3NR0jSb5fxn1GFc3Ca49y1Eyyi0FLICe2mmSOUVTrV3gbOPlL8uBudvgWBFUD77I1Q843vH+AStdh2bjg==;EndpointSuffix=core.windows.net";
        private static readonly string containerName = "relatabh";

        public async Task<List<string>> UploadImage(List<IFormFile> files)
        {

            BlobContainerClient container = new(connectionString, containerName);
            await container.CreateIfNotExistsAsync();

            List<Task> uploadTasks = [];
            List<string> paths = [];

            foreach (var image in files)
            {
                var fileExtension = Path.GetExtension(image.FileName);
                var blobClient = container.GetBlobClient($"{(long)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalMilliseconds}{fileExtension}");
                var header = new BlobHttpHeaders() { ContentType = $"image/{fileExtension.Replace(".", "")}" };
 
                var uploadTask = blobClient.UploadAsync(image.OpenReadStream(), header)
                    .ContinueWith(task =>
                    {
                        if (task.IsCompletedSuccessfully)
                        {
                            paths.Add(blobClient.Uri.ToString());
                        }
                        else
                        {
                            Console.WriteLine($"Error uploading file: {image.FileName}, {task.Exception?.Message}");
                        }
                    });

                // Add the task to the list
                uploadTasks.Add(uploadTask);
            }

            // Wait for all upload tasks to complete
            await Task.WhenAll(uploadTasks);

            return paths;
        }
    }
}
