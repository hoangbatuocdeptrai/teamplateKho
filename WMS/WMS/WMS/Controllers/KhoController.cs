using Microsoft.AspNetCore.Mvc;

namespace WMS.Controllers
{
	public class KhoController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
