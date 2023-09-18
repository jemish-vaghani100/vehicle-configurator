using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace demo1.Migrations
{
    /// <inheritdoc />
    public partial class version2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "alternet_component",
                columns: table => new
                {
                    alt_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    model_id = table.Column<int>(type: "int", nullable: false),
                    comp_id = table.Column<int>(type: "int", nullable: false),
                    alt_comp_id = table.Column<int>(type: "int", nullable: false),
                    delta_price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_alternet_component", x => x.alt_id);
                });

            migrationBuilder.CreateTable(
                name: "Component",
                columns: table => new
                {
                    comp_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    comp_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    sub_type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Component", x => x.comp_id);
                });

            migrationBuilder.CreateTable(
                name: "Segment",
                columns: table => new
                {
                    Seg_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Seg_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Qty = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Segment", x => x.Seg_id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    emailid = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    comp_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telephone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    holding = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name_auth_person = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    designation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    auth_tel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    auth_cell = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    comp_st_no = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    vat_no = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    pan = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Manufacturer",
                columns: table => new
                {
                    Mfg_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mfg_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Seg_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Manufacturer", x => x.Mfg_id);
                    table.ForeignKey(
                        name: "FK_Manufacturer_Segment_Seg_id",
                        column: x => x.Seg_id,
                        principalTable: "Segment",
                        principalColumn: "Seg_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Variant",
                columns: table => new
                {
                    Model_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Model_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Seg_id = table.Column<int>(type: "int", nullable: false),
                    Mfg_id = table.Column<int>(type: "int", nullable: false),
                    SegmentSeg_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Variant", x => x.Model_id);
                    table.ForeignKey(
                        name: "FK_Variant_Manufacturer_Mfg_id",
                        column: x => x.Mfg_id,
                        principalTable: "Manufacturer",
                        principalColumn: "Mfg_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Variant_Segment_Seg_id",
                        column: x => x.Seg_id,
                        principalTable: "Segment",
                        principalColumn: "Seg_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Variant_Segment_SegmentSeg_id",
                        column: x => x.SegmentSeg_id,
                        principalTable: "Segment",
                        principalColumn: "Seg_id");
                });

            migrationBuilder.CreateTable(
                name: "Vehicle_detail",
                columns: table => new
                {
                    config_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    comp_type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    id_configurable = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    price = table.Column<double>(type: "float", nullable: false),
                    model_id = table.Column<int>(type: "int", nullable: false),
                    comp_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicle_detail", x => x.config_id);
                    table.ForeignKey(
                        name: "FK_Vehicle_detail_Component_comp_id",
                        column: x => x.comp_id,
                        principalTable: "Component",
                        principalColumn: "comp_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Vehicle_detail_Variant_model_id",
                        column: x => x.model_id,
                        principalTable: "Variant",
                        principalColumn: "Model_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Manufacturer_Seg_id",
                table: "Manufacturer",
                column: "Seg_id");

            migrationBuilder.CreateIndex(
                name: "IX_Variant_Mfg_id",
                table: "Variant",
                column: "Mfg_id");

            migrationBuilder.CreateIndex(
                name: "IX_Variant_Seg_id",
                table: "Variant",
                column: "Seg_id");

            migrationBuilder.CreateIndex(
                name: "IX_Variant_SegmentSeg_id",
                table: "Variant",
                column: "SegmentSeg_id");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicle_detail_comp_id",
                table: "Vehicle_detail",
                column: "comp_id");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicle_detail_model_id",
                table: "Vehicle_detail",
                column: "model_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "alternet_component");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Vehicle_detail");

            migrationBuilder.DropTable(
                name: "Component");

            migrationBuilder.DropTable(
                name: "Variant");

            migrationBuilder.DropTable(
                name: "Manufacturer");

            migrationBuilder.DropTable(
                name: "Segment");
        }
    }
}
