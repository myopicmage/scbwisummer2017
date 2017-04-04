using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scbwisummer2017.Models.Data
{
    public class Price : Common
    {
        public string type { get; set; }
        public bool late { get; set; }
        public bool member { get; set; }
        public decimal value { get; set; }
    }
}
