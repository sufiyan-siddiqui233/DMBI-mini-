window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("bt").style.display = "block";
    } else {
        document.getElementById("bt").style.display = "none";
    }
}
function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}