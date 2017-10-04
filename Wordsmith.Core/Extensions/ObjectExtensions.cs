using System;
using System.Collections.Generic;
using System.Text;

namespace Wordsmith.Core.Extensions
{
    public static class ObjectExtensions
    {
        public static void ThrowIfNull(this object o, string paramName)
        {
            if (o == null) throw new ArgumentNullException(paramName);
        }
    }
}
