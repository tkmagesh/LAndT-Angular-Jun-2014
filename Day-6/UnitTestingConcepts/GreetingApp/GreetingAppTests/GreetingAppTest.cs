using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GreetingApp;

namespace GreetingAppTests
{
    public class FakeTimeService : ITimeService
    {
        private DateTime _givenTime;
        public FakeTimeService(DateTime seedTime)
        {
            _givenTime = seedTime;
        }
        public DateTime GetCurrentTime()
        {
            return _givenTime;
        }
    }

    public class FakeTimeServiceForMorning : ITimeService
    {
        public DateTime GetCurrentTime()
        {
            return new DateTime(2014, 06, 19, 10, 00, 00);
        }
    }

    public class FakeTimeServiceForEvening : ITimeService
    {
        public DateTime GetCurrentTime()
        {
            return new DateTime(2014, 06, 19, 17, 00, 00);
        }
    }

    [TestClass]
    public class GreetingAppTest
    {
        [TestMethod]
        public void Greeted_With_GoodMorning_Before_12()
        {
            //var mts = new FakeTimeServiceForMorning();
            var mts = new FakeTimeService(new DateTime(2014, 6, 29, 10, 0, 0));
            var sut = new GreetingApp.Greeter(mts);
            var name = "Magesh";

            var greetMsg = sut.Greet(name);

            Assert.AreEqual("Hi Magesh, Good Morning", greetMsg);
        }
        [TestMethod]
        public void Greeted_With_GoodEvening_After_12()
        {
            //var ets = new FakeTimeServiceForEvening();
            var ets = new FakeTimeService(new DateTime(2014, 6, 29, 17, 0, 0));
            var sut = new GreetingApp.Greeter(ets);
            var name = "Magesh";

            var greetMsg = sut.Greet(name);

            Assert.AreEqual("Hi Magesh, Good Evening", greetMsg);
        }
    }
}
