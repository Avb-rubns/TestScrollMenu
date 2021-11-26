using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestsMud.Client.Pages
{
    public partial class Index
    {
        [Inject]
        public IJSRuntime js { get; set; }

        bool ShowMenuToggle = false;

        void ShowMenu()
        {
            Console.WriteLine("Show menu");
            js.InvokeVoidAsync("ShowMenu", ShowMenuToggle);
            ShowMenuToggle = !ShowMenuToggle;
        }
    }
}
