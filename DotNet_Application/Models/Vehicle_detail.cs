using Microsoft.AspNetCore.Routing.Constraints;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace demo1.Models
{
    [Table("Vehicle_detail")]
    public class Vehicle_detail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int config_id { get; set; }
        public string comp_type { get; set; }
        public string id_configurable { get; set; }
        public double price { get; set; }
        public int model_id { get; set; }
        [ForeignKey("model_id")]
        public Variant variant { get; set; }

        public int comp_id { get; set; }
        [ForeignKey("comp_id")]
        [JsonIgnore]
        public Component component { get; set; }
    }
}
