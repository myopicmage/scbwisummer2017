using Microsoft.AspNetCore.Mvc;
using scbwisummer2017.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scbwisummer2017.Controllers
{
    public class ScbwiController : Controller
    {
        protected ApplicationDbContext _db;

        public IActionResult Success(string message = "") => Json(new { success = true, message = message });
        public IActionResult Success<T>(T data, string message = "") => Json(new { success = true, message = message, data = data });
        public IActionResult Failure(string error = "") => Json(new { success = false, message = error });

        public async Task<IActionResult> Save()
        {
            try
            {
                await _db.SaveChangesAsync();

                return Success();
            }
            catch (Exception ex)
            {
                return Failure(ex.Message);
            }
        }
    }
}
