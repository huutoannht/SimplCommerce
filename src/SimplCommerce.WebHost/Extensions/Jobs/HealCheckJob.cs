using Hangfire;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace SimplCommerce.WebHost.Extensions.Jobs
{
    public static class HealCheckJob
    {
        private static readonly HttpClient client = new HttpClient();
        public static async Task HealBeatAsync()
        {
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
            client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

            var stringTask = client.GetStringAsync("https://laptopcudanang.com/Home/HealBeat");

            var msg = await stringTask;
            Console.Write(msg);
        }
    }
}
