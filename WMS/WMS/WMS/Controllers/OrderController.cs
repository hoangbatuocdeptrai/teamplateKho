using Microsoft.AspNetCore.Mvc;

namespace WMS.Controllers
{
	public class OrderController : Controller
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
