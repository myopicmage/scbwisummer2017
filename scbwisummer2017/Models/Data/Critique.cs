using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scbwisummer2017.Models.Data
{
    public class Critique : Common
    {
        public Registration registration { get; set; }
        public CritiqueType type { get; set; }
        public string path { get; set; }
    }
    
    public enum CritiqueType
    {
        Manuscript,
        Portfolio
    }
}
