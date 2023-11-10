using Microsoft.AspNetCore.Mvc;

namespace WMS.Controllers
{
	public class CustomerController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
