using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace demo1.Models
{
    [Table("Users")]
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string emailid { get; set; }

        [Required(ErrorMessage = "Username is mandatory")]
        public string username { get; set; }

        [Required(ErrorMessage = "Password is Mandatory")]
        public string password { get; set; }

        [Required(ErrorMessage = "Company name is mandatory")]
        public string comp_name { get; set; }

        [Required(ErrorMessage = "Address is mandatory")]
        public string address { get; set; }

        [RegularExpression("^[0-9]{10}$", ErrorMessage = "Invalid mobile number format")]
        public string telephone { get; set; }

        [Required(ErrorMessage = "Holding is required")]
        public string holding { get; set; }

        [Required(ErrorMessage = "Authorized person name is mandatory")]
        public string name_auth_person { get; set; }

        [Required(ErrorMessage = "Designation is required")]
        public string designation { get; set; }

        [RegularExpression("^[0-9]{10}$", ErrorMessage = "Invalid mobile number format")]
        public string auth_tel { get; set; }

        [RegularExpression("^[0-9]{10}$", ErrorMessage = "Invalid mobile number format")]
        public string auth_cell { get; set; }

        [Required(ErrorMessage = "Company ST number is required")]
        public string comp_st_no { get; set; }

        [Required(ErrorMessage = "VAT number is required")]
        public string vat_no { get; set; }

        [Required(ErrorMessage = "PAN Number is mandatory")]
        public string pan { get; set; }
    }
}
