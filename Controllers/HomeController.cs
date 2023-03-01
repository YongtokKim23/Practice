using Microsoft.AspNetCore.Mvc;
using Practice.Models;
using Practice.Utilities;
using System.Diagnostics;

/// <summary>
/// Author: Yong Tok Kim
/// Date: 02/25/2023
/// App Name: Practice
/// </summary>

namespace Practice.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.IndexClick = "active";
            SetUsername();
            return View();
        }

        public IActionResult Privacy()
        {
            ViewBag.PrivacyClick = "active";
            SetUsername();
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private void SetUsername()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("UserName")))
            {
                if (User.Identity == null)
                    HttpContext.Session.SetString("UserName", UserName.GetUsername("Anonymity"));
                else
                    HttpContext.Session.SetString("UserName", UserName.GetUsername(User.Identity.Name));
            }
        }
    }
}