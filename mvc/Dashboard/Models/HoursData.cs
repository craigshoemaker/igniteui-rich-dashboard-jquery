using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dashboard.Models
{
    public class HoursData
    {
        public int worked { get; set; }
        public int planned { get; set; }
        public int other { get; set; }
        public int overtime { get; set; }
        public int total { get; set; }
    }
}