using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace Friends {
  [Route ("api/[controller]")]
  public class FriendsController : Controller {
    [Route ("")]
    public IEnumerable<Friend> Get () {
      return new Friend[] { new Friend () { Name = "Joe" }, new Friend () { Name = "Jane" }, new Friend () { Name = "Jim" } };
    }
  }
}