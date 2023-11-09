using Microsoft.AspNetCore.Mvc;

namespace WMS.Controllers
{
	public class WorkerController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
