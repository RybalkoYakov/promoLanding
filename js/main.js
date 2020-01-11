(function (){
    const logoReloadURL = "index.html";
    const body = document.getElementById('body');

    document.getElementById('header-logo').addEventListener('click', function () {
        location.href = logoReloadURL;
    });
})();