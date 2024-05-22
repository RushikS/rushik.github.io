var i = 0;
var photos = ["cycling_image.jpg", "art_image.jpg", "hiking_image.jpg"];
var hobby_names = ["Cycling", "Painting", "Trekking"];
var hobby_descriptions = ["I cycled very often with my friends. Going all the way from Parramatta to Olympic Park via Rydalmere. ", 
                          "I was experimenting a little with water colours and it was a relaxing experience. I drew a lot of birds and explored silhouette art.",
                          "Trekking is something that I often do. Long walks around hilly areas tests my endurance which is why I find trekking awesome. "
                        ]
function previous_photo() {
    if (i == 0) {
        i = 2;
        document.getElementById("hobby_image").src = photos[i];
        document.getElementById("hobby_description").innerText = hobby_descriptions[i];
        document.getElementById("hobby_name").innerText = hobby_names[i];
    } else {
        i--;
        document.getElementById("hobby_image").src = photos[i];
        document.getElementById("hobby_description").innerText = hobby_descriptions[i];
        document.getElementById("hobby_name").innerText = hobby_names[i];
    }
}

function next_photo() {
    if (i == 2) {
        i = 0;
        document.getElementById("hobby_image").src = photos[i];
        document.getElementById("hobby_description").innerText = hobby_descriptions[i];
        document.getElementById("hobby_name").innerText = hobby_names[i];
    } else {
        i++;
        document.getElementById("hobby_image").src = photos[i];
        document.getElementById("hobby_description").innerText = hobby_descriptions[i];
        document.getElementById("hobby_name").innerText = hobby_names[i];
    }
}


var mode_change__outer_div = document.querySelector("#mode_change_outer");
var mode_change__inner_div = document.querySelector("#mode_change_inner");

var count = 0;


document.getElementById("back").addEventListener('mouseover', () => {
    document.getElementById("back").style.color = "blue"
})

document.getElementById("next").addEventListener('mouseover', () => {
    document.getElementById("next").style.color = "blue"
})



function change_mode_function() {
    count++;

    document.getElementById("back").addEventListener('mouseover', () => {
        document.getElementById("back").style.color = "#bc6c25"
    })


    
    document.getElementById("next").addEventListener('mouseover', () => {
        document.getElementById("next").style.color = "#bc6c25"
    })

    if (count % 2 == 0) {
        document.getElementById("mode_change_inner").style.transform = "translateX(0)";
        document.getElementById("mode_change_outer").style.backgroundColor = "black";
        document.getElementById("hobby_description").style.color = "white";
        document.querySelector("body").style.backgroundColor = "#1D1F20";

        document.getElementById("back").style.backgroundColor = "#1D1F20";
        document.getElementById("next").style.backgroundColor = "#1D1F20";
        document.getElementById("back").style.color = "white";
        document.getElementById("next").style.color = "white";

        document.querySelector(".socials").style.backgroundColor = "#344e41";
        document.querySelector("footer").style.backgroundColor = "#344e41";

        document.getElementById("back").addEventListener('mouseout', () => {
            document.getElementById("back").style.color = "white"
        })

        document.getElementById("next").addEventListener('mouseout', () => {
            document.getElementById("next").style.color = "white"
        })
        
    } else {
        document.getElementById("mode_change_inner").style.transform = "translateX(30px)";
        document.getElementById("mode_change_outer").style.backgroundColor = "white";
        document.querySelector("body").style.backgroundColor = "white";

        document.getElementById("back").style.backgroundColor = "white";
        document.getElementById("next").style.backgroundColor = "white";
        document.getElementById("back").style.color = "#1D1F20";
        document.getElementById("next").style.color = "#1D1F20";

        document.getElementById("hobby_description").style.color = "black";
        document.querySelector(".socials").style.backgroundColor = "#a3b18a";
        document.querySelector("footer").style.backgroundColor = "#a3b18a";

        document.getElementById("back").addEventListener('mouseout', () => {
            document.getElementById("back").style.color = "black"
        })

        document.getElementById("next").addEventListener('mouseout', () => {
            document.getElementById("next").style.color = "black"
        })
    }
}

