var callToActions = document.getElementsByName("CallToAction");

for (var i = 0; i < callToActions.length; i++) {
    callToActions.item(i).addEventListener("click", function ()
    {
        document.location.href = "/pages/lets-talk.php";
    }, false);
}

var homeLinks = document.getElementsByClassName("menu-logo");

for (var i = 0; i < homeLinks.length; i++) {
    homeLinks.item(i).addEventListener("click", function ()
    {
        document.location.href = "/";
    }, false);
}

var homeLinksText = document.getElementsByClassName("menu-logo-text");

for (var i = 0; i < homeLinksText.length; i++) {
    homeLinksText.item(i).addEventListener("click", function ()
    {
        document.location.href = "/";
    }, false);
}