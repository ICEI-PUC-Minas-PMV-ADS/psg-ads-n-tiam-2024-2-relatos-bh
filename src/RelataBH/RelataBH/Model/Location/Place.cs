namespace RelataBH.Model.Location
{
    public class Place(int id, string name, PlaceType type)
    {
        public int ID { get; set; } = id;
        public string Name { get; set; } = name;
        public PlaceType Type { get; set; } = type;
    }
}
