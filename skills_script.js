var mode_change__outer_div = document.querySelector("#mode_change_outer");
var mode_change__inner_div = document.querySelector("#mode_change_inner");

var count = 0;

// mode_change__outer_div.addEventListener("click", change_mode_function);

function change_mode_function() {
    count++;

    if (count % 2 == 0) {
        document.getElementById("mode_change_inner").style.transform = "translateX(0)";
        document.getElementById("mode_change_outer").style.backgroundColor = "black";
       
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("p")[i].style.color = "white";
        }
        document.getElementsByClassName("stats_CSS")[0].style.backgroundColor = "#1D1F20";
        document.getElementsByClassName("stats_HTML")[0].style.backgroundColor = "#1D1F20";
        document.getElementsByClassName("stats_JS")[0].style.backgroundColor = "#1D1F20";
        document.querySelector(".stats").style.backgroundColor = "#1D1F20";
        document.querySelector("body").style.backgroundColor = "#1D1F20";
        document.querySelector(".socials").style.backgroundColor = "#344e41";
        document.querySelector("footer").style.backgroundColor = "#344e41";

       
    } else {
        document.getElementById("mode_change_inner").style.transform = "translateX(30px)";
        document.getElementById("mode_change_outer").style.backgroundColor = "white";
       
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("p")[i].style.color = "black";
        }
        document.getElementsByClassName("stats_CSS")[0].style.backgroundColor = "whitesmoke";
        document.getElementsByClassName("stats_HTML")[0].style.backgroundColor = "whitesmoke";
        document.getElementsByClassName("stats_JS")[0].style.backgroundColor = "whitesmoke";
        document.querySelector(".stats").style.backgroundColor = "whitesmoke";
        document.querySelector("body").style.backgroundColor = "whitesmoke";

        document.querySelector(".socials").style.backgroundColor = "#a3b18a";
        document.querySelector("footer").style.backgroundColor = "#a3b18a";
        
    }
}

