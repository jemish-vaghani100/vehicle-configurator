﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Vehicle.Models;

#nullable disable

namespace demo1.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20230906124023_version4")]
    partial class version4
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("demo1.Models.Alternate_Component", b =>
                {
                    b.Property<int>("alt_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("alt_id"));

                    b.Property<int>("alt_comp_id")
                        .HasColumnType("int");

                    b.Property<int>("comp_id")
                        .HasColumnType("int");

                    b.Property<double>("delta_price")
                        .HasColumnType("float");

                    b.Property<int>("model_id")
                        .HasColumnType("int");

                    b.HasKey("alt_id");

                    b.ToTable("alternet_component");
                });

            modelBuilder.Entity("demo1.Models.Component", b =>
                {
                    b.Property<int>("comp_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("comp_id"));

                    b.Property<string>("comp_name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("sub_type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("comp_id");

                    b.ToTable("Component");
                });

            modelBuilder.Entity("demo1.Models.Manufacturer", b =>
                {
                    b.Property<int>("Mfg_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Mfg_id"));

                    b.Property<string>("Mfg_name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Seg_id")
                        .HasColumnType("int");

                    b.HasKey("Mfg_id");

                    b.HasIndex("Seg_id");

                    b.ToTable("Manufacturer");
                });

            modelBuilder.Entity("demo1.Models.Segment", b =>
                {
                    b.Property<int>("Seg_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Seg_id"));

                    b.Property<int>("Qty")
                        .HasColumnType("int");

                    b.Property<string>("Seg_name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Seg_id");

                    b.ToTable("Segment");
                });

            modelBuilder.Entity("demo1.Models.User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("auth_cell")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("auth_tel")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("comp_name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("comp_st_no")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("designation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("emailid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("holding")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name_auth_person")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("pan")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("telephone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("vat_no")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("demo1.Models.Variant", b =>
                {
                    b.Property<int>("Model_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Model_id"));

                    b.Property<int>("Mfg_id")
                        .HasColumnType("int");

                    b.Property<string>("Model_name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int>("Seg_id")
                        .HasColumnType("int");

                    b.Property<int?>("SegmentSeg_id")
                        .HasColumnType("int");

                    b.HasKey("Model_id");

                    b.HasIndex("Mfg_id");

                    b.HasIndex("Seg_id");

                    b.HasIndex("SegmentSeg_id");

                    b.ToTable("Variant");
                });

            modelBuilder.Entity("demo1.Models.Vehicle_detail", b =>
                {
                    b.Property<int>("config_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("config_id"));

                    b.Property<int>("comp_id")
                        .HasColumnType("int");

                    b.Property<string>("comp_type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("id_configurable")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("model_id")
                        .HasColumnType("int");

                    b.Property<double>("price")
                        .HasColumnType("float");

                    b.HasKey("config_id");

                    b.HasIndex("comp_id");

                    b.HasIndex("model_id");

                    b.ToTable("Vehicle_detail");
                });

            modelBuilder.Entity("demo1.Models.Manufacturer", b =>
                {
                    b.HasOne("demo1.Models.Segment", "segment")
                        .WithMany("Manufacturers")
                        .HasForeignKey("Seg_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("segment");
                });

            modelBuilder.Entity("demo1.Models.Variant", b =>
                {
                    b.HasOne("demo1.Models.Manufacturer", "Manufacturer")
                        .WithMany("Variants")
                        .HasForeignKey("Mfg_id")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("demo1.Models.Segment", "Segment")
                        .WithMany()
                        .HasForeignKey("Seg_id")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("demo1.Models.Segment", null)
                        .WithMany("Variants")
                        .HasForeignKey("SegmentSeg_id");

                    b.Navigation("Manufacturer");

                    b.Navigation("Segment");
                });

            modelBuilder.Entity("demo1.Models.Vehicle_detail", b =>
                {
                    b.HasOne("demo1.Models.Component", "component")
                        .WithMany("Vehicle_Details")
                        .HasForeignKey("comp_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("demo1.Models.Variant", "variant")
                        .WithMany()
                        .HasForeignKey("model_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("component");

                    b.Navigation("variant");
                });

            modelBuilder.Entity("demo1.Models.Component", b =>
                {
                    b.Navigation("Vehicle_Details");
                });

            modelBuilder.Entity("demo1.Models.Manufacturer", b =>
                {
                    b.Navigation("Variants");
                });

            modelBuilder.Entity("demo1.Models.Segment", b =>
                {
                    b.Navigation("Manufacturers");

                    b.Navigation("Variants");
                });
#pragma warning restore 612, 618
        }
    }
}
