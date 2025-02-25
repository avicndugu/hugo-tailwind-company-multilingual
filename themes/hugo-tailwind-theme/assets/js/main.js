document.addEventListener("DOMContentLoaded", function(){
    var menuButton=document.getElementById('menu-button');
    var menuList=document.getElementById('menu-list');

    menuButton.addEventListener("click", function(){
        menuList.classList.toggle("hidden");
    });

});
