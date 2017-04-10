using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace scbwisummer2017.Data.Migrations
{
    public partial class totals : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "subtotal",
                table: "Registrations",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "total",
                table: "Registrations",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "subtotal",
                table: "Registrations");

            migrationBuilder.DropColumn(
                name: "total",
                table: "Registrations");
        }
    }
}
