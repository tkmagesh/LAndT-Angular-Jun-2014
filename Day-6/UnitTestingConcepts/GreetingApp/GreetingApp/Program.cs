using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreetingApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var timeService = new TimeService();
            var greeter = new Greeter(timeService);
            Console.WriteLine("Enter the name..");
            var name = Console.ReadLine();
            Console.WriteLine(greeter.Greet(name));
            Console.ReadLine();
        }
    }

    public interface ITimeService
    {
        DateTime GetCurrentTime();
    }

    public class TimeService : ITimeService {
        public DateTime GetCurrentTime()
        {
            return DateTime.Now;
        }

    }

    public class Greeter {
        private ITimeService _timeService;
        public Greeter(ITimeService timeService) {
            _timeService = timeService;
        }
        public string Greet(string name) {
            if (_timeService.GetCurrentTime().Hour < 12)
            {
                return string.Format("Hi {0}, Good Morning", name);
            }
            return string.Format("Hi {0}, Good Evening", name);
        }

    }
}
