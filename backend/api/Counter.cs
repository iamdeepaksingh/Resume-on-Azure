using Newtonsoft.Json;


namespace Company.Function
{
    public class Counter
    {

        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "count")] // Should match with the item that we created in Azure Cosmos Container.
        public int Count { get; set; }
    }
}