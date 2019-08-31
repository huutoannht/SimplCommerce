using Microsoft.EntityFrameworkCore.Migrations;

namespace SimplCommerce.WebHost.Migrations
{
    public partial class AddPromotion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Localization_Culture",
                keyColumn: "Id",
                keyValue: "en-US");


            migrationBuilder.AddColumn<string>(
                name: "NamePromotion",
                table: "Catalog_Product",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PromotionImageUrl",
                table: "Catalog_Product",
                nullable: true);

            //migrationBuilder.InsertData(
            //    table: "Localization_Culture",
            //    columns: new[] { "Id", "Name" },
            //    values: new object[] { "vi-VN", "English (US)" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Localization_Culture",
                keyColumn: "Id",
                keyValue: "vi-VN");

            migrationBuilder.DropColumn(
                name: "IsPublished",
                table: "Core_WidgetZone");

            migrationBuilder.DropColumn(
                name: "NamePromotion",
                table: "Catalog_Product");

            migrationBuilder.DropColumn(
                name: "PromotionImageUrl",
                table: "Catalog_Product");

            migrationBuilder.InsertData(
                table: "Localization_Culture",
                columns: new[] { "Id", "Name" },
                values: new object[] { "en-US", "English (US)" });
        }
    }
}
