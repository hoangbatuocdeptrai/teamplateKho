using Microsoft.AspNetCore.Mvc;

namespace WMS.Controllers
{
	public class InventoryController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
