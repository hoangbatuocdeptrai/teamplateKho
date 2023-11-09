using Microsoft.AspNetCore.Mvc;

namespace WMS.Controllers
{
	public class SupplierController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
