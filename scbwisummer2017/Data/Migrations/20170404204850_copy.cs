using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace scbwisummer2017.Data.Migrations
{
    public partial class copy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "maxattendees",
                table: "Comprehensives",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Copy",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    page = table.Column<string>(nullable: true),
                    text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Copy", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Copy");

            migrationBuilder.DropColumn(
                name: "maxattendees",
                table: "Comprehensives");
        }
    }
}
