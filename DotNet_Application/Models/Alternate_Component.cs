using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace demo1.Models
{
    [Table("alternet_component")]
    public class Alternate_Component
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int alt_id { get; set; }
        public int model_id { get; set; }
        public int comp_id { get; set; }
        public int alt_comp_id { get; set; }
        public double delta_price { get; set;}
    }
}
