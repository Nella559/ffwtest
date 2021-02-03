function openTab(evt, tabName) {    
    const tabsContainer = document.querySelectorAll('.tabs .tabs__container');
    const tabLinks = document.getElementsByClassName("tab__link");
    
    for(let tabItem of tabsContainer){
        tabItem.style.display = "none";
    }
    
    for(let tabLink of tabLinks){
        tabLink.className = tabLink.className.replace("active", "");
    }
    
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}