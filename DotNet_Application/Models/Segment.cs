using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace demo1.Models
{
    [Table("Segment")]
    public class Segment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Seg_id { get; set; }
        public string Seg_name { get; set; }
        public int Qty { get; set; }

        public ICollection<Manufacturer> Manufacturers { get; set; }
        public ICollection<Variant> Variants { get; set; }
    }
}
