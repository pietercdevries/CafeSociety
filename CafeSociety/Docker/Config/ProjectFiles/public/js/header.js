// Show and hide Menu
window.onload = function changeMenu()
{
    let myNav = document.getElementById("nav");
    let rightContainer = document.getElementById("right-inner-container");
    let menuButton = document.getElementById("menu-button");
    let menuLink = document.getElementById("menu-links");
    let navCallToAction = document.getElementById("nav-cta");
    let hamburgerButton = document.getElementById("menu-button-img");

    menuButton.addEventListener("click", function()
    {
        if (myNav.classList.contains("collapsed"))
        {
            // Collapse
            myNav.classList.remove("collapsed");
            rightContainer.classList.remove("collapsed");
            menuLink.style.display = "none";
            hamburgerButton.src = "/public/img/hamburger-menu.svg";

            // Mobile
            if (window.screen.width < 700)
            {
                rightContainer.style.width = "20%";
                rightContainer.style.top = "inherit";
                rightContainer.style.position = "inherit";
                rightContainer.style.right = "inherit";
            }
            else
            {
                navCallToAction.style.display = "inline-block";
            }
        }
        else
        {
            // Collapsed
            myNav.classList.add("collapsed");
            rightContainer.classList.add("collapsed");
            menuLink.style.display = "inline-block";
            hamburgerButton.src = "/public/img/close-menu-icon.svg";

            // Mobile
            if (window.screen.width < 700)
            {
                rightContainer.style.width = "100%";
                rightContainer.style.top = "20px";
                rightContainer.style.position = "absolute";
                rightContainer.style.right = "20px";
            }
            else
            {
                navCallToAction.style.display = "none";
            }
        }
    });

    changeNavScrollClass();

    window.onscroll = function ()
    {
        changeNavScrollClass();
    };
}

function changeNavScrollClass()
{
    let myNav = document.getElementById('nav');

    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200)
    {
        myNav.classList.add("scrolled");
    }
    else
    {
        myNav.classList.remove("scrolled");
    }
}
