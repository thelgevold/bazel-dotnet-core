using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Friends {
    [Route ("")]
    public class ValuesController : Controller {
        [Route ("{*url}")]
        public IActionResult Index () {
            var file = Path.Combine (Directory.GetCurrentDirectory (), "Friends/server.exe/index.html");

            return PhysicalFile (file, "text/html");
        }
    }
}