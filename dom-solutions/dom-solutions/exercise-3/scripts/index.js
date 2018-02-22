let button = document.getElementById("submit");
let link = document.getElementById('myLink');

button.addEventListener('click', function() {
    let id = link.getAttribute('id');
    let href = link.getAttribute('href');
    let target = link.getAttribute('target');
    let hreflang = link.getAttribute('hreflang');

    console.log(id, href, target, hreflang);
});