using System.ComponentModel.DataAnnotations.Schema;

namespace RelataBH.Model
{
    public class User
    {
        public User(string id, string email)
        {
            this.Id = id;
            this.Email = email;
            this.Name = "";
            this.Token = "";
        }

        public User(string id, string email, string name, string token)
        {
            this.Id = id;
            this.Email = email;
            this.Name = name;
            this.Token = token;
        }

        public User(string id, string email, string name)
        {
            this.Id = id;
            this.Email = email;
            this.Name = name;
            this.Token = "";
        }

        public string Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }

        [NotMapped]
        public string Token { get; set; }
    }
}

