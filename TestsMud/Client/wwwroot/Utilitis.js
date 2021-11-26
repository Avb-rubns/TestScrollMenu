function ShowMenu(show) {
    console.log("Quitando HideMenu", show)
    var element = document.getElementById("ContainerScrollMenu");
    if (show) {
        element.classList.remove("LocationMenu")
        element.classList.add("HideMenu")
    } else {
        element.classList.remove("HideMenu");
        element.classList.add("LocationMenu")
    }
    //var home = document.querySelector("#Menu1");
    //home.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
function ScrollCard(start, end, Menus) {
    console.log("Estoy en:" + start + "Voy a " + end)
    console.log(Menus)
    const list = Menus;
    let MLen = list.length;
    /*for (let i = 0; i < MLen; i++) {
        console.log(Menus[i])
        if (!Menus[i].compareTo(start)==0 && Menus[i].compareTo(end)==0 ) {
            document.querySelector(Menus[i]).classList.remove("cards");
            document.querySelector(Menus[i]).classList.add("HideMenu");
        } else {
            document.querySelector(Menus[i]).classList.remove("HideMenu");
            document.querySelector(Menus[i]).classList.add("cards");
        }
    }*/
    var element = document.querySelector(end);
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });

}