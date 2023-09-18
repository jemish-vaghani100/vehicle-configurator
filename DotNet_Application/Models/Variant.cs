using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace demo1.Models
{
    [Table("Variant")]
    public class Variant
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Model_id { get; set; }
        public string Model_name { get; set; }
        public double Price { get; set; }

        
        public int Seg_id { get; set; }
        [ForeignKey("Seg_id")]
        public Segment Segment { get; set; }


        public int Mfg_id { get; set; }
        [ForeignKey("Mfg_id")]
        public Manufacturer Manufacturer { get; set; }
    }
}
