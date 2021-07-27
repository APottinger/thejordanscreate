window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("message-container").style.display = "block";
    } else {
        document.getElementById("message-con-container").style.display = "none";
    }
}
export default showFunction