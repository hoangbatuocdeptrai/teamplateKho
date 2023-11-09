using Microsoft.AspNetCore.Mvc;

namespace WMS.Controllers
{
	public class ExportKhoController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
		public IActionResult Create()
		{
			return View();
		}
	}
}
