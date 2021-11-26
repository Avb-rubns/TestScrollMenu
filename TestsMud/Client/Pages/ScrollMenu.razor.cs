using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestsMud.Client.Pages
{
    public partial class ScrollMenu
    {
        [Inject]
        public IJSRuntime js { get; set; }

        public string[] Menus = new string[]{"#Menu1", "#Menu2", "#Menu3", "#Menu4" };

        void Scrolling(string star, string end, string[] list)
        {
            js.InvokeVoidAsync("ScrollCard", star, end, list);
        }
    }
}
