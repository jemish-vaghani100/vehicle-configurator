using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace demo1.Models
{
    [Table("Component")]
    public class Component
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int comp_id { get; set; }
        public string comp_name { get; set; }
        public string sub_type { get; set; }

        public ICollection<Vehicle_detail> Vehicle_Details { get; set; }
    }
}
