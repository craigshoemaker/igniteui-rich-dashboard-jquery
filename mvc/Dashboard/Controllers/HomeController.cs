using Dashboard.Models;
using System.Web.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Dashboard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ResourcesRepository repository = new ResourcesRepository();
            var data = repository.GetAll();

            return View(data);
        }
    }
}