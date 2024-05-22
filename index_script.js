var mode_change__outer_div = document.querySelector("#mode_change_outer");
var mode_change__inner_div = document.querySelector("#mode_change_inner");

var count = 0;

// mode_change__outer_div.addEventListener("click", change_mode_function);

function change_mode_function() {
    count++;

    if (count % 2 == 0) {
        document.getElementById("mode_change_inner").style.transform = "translateX(0)";
        document.getElementById("mode_change_inner").style.cursor = "pointer";
        document.getElementById("mode_change_outer").style.backgroundColor = "black";
        document.getElementsByClassName("main")[0].style.backgroundColor = "#344e41";
        document.querySelector("body").style.backgroundColor = "#1D1F20";
        document.getElementsByClassName("items")[0].style.color = "white";
        document.querySelector(".socials").style.backgroundColor = "#344e41";
        document.querySelector("footer").style.backgroundColor = "#344e41";
        for (let i = 0; i < 4; i++ ) {
            document.querySelectorAll("p")[i].style.color = "white";
        }
        document.getElementById("mode_indicator").innerText = "View in Light Mode";
    } else {
        document.getElementById("mode_change_inner").style.transform = "translateX(30px)";
        document.getElementById("mode_change_inner").style.cursor = "pointer";
        document.getElementById("mode_change_outer").style.backgroundColor = "white";
        document.getElementsByClassName("main")[0].style.backgroundColor = "#a3b18a";
        document.querySelector("body").style.backgroundColor = "white";
        document.getElementsByClassName("items")[0].style.color = "black";
        document.querySelector(".socials").style.backgroundColor = "#a3b18a";
        document.querySelector("footer").style.backgroundColor = "#a3b18a";
        for (let i = 0; i < 4; i++ ) {
            document.querySelectorAll("p")[i].style.color = "black";
        }
        document.getElementById("mode_indicator").innerText = "View in Dark Mode";
        
    }
}

