using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace demo1.Models
{
    [Table("Manufacturer")]
    public class Manufacturer
    {
        [Key] 
        public int Mfg_id { get; set; }
        public string Mfg_name { get; set; }


        public int Seg_id { get; set; }
        [ForeignKey("Seg_id")]
        public Segment segment { get; set; }

        public ICollection<Variant> Variants { get; set; }
    }
}
