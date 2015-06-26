using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dashboard.Models
{
    public class Employee
    {
        public string fullName { get; set; }
        public string id { get; set; }
        public List<HoursData> hours { get; set; }
        public Employee()
        {
            this.hours = new List<HoursData>();
        }
    }
}