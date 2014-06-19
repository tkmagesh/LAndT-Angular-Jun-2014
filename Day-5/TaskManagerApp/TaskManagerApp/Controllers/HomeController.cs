using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace TaskManagerApp.Controllers
{

    public class Task
    {
        public int id { get; set; }
        public string name { get; set; }
        public bool isCompleted { get; set; }
    }

    public static class TaskService
    {
        private static IList<Task> tasks = new List<Task>(){
            new Task{id = 1, name = "Explore ASP.NET MVC", isCompleted = false},
            new Task{id=2, name="Learn Angular.js", isCompleted = false}
        };

        public static Task[] GetAll()
        {
            return tasks.ToArray();
        }

        
        public static Task AddNew(string taskName) {
            var newId = tasks.Max(t => t.id) + 1;
            var newTask = new Task { id = newId, name = taskName, isCompleted = false };
            tasks.Add(newTask);
            return newTask;
        }
    }
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Tasks()
        {
            Thread.Sleep(10000);
            return Json(TaskService.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Add(string taskName) {
            return Json(TaskService.AddNew(taskName), JsonRequestBehavior.DenyGet);
        }

    }
}
