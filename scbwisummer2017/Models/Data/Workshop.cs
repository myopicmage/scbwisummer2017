using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scbwisummer2017.Models.Data
{
    public class Workshop : Common
    {
        public string title { get; set; }
        public string description { get; set; }
        public string presenters { get; set; }
        public int maxattendees { get; set; }
    }
}
