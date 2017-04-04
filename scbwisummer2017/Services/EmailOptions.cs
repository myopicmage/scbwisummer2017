using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scbwisummer2017.Services
{
    public class EmailOptions
    {
        public string supportemail { get; set; }
        public string supportemailname { get; set; }
        public bool sendtoself { get; set; }
        public string self { get; set; }
        public bool ccra { get; set; }
    }
}
