// Create an array for images of major project
var major_images = ["main_page.png", "gantt_chart.png", "story_board.png"];

// Create a counter for major_images
var major_counter = 0;

// function to move major images forward
function major_next_function() {
    if (major_counter == 2) {
        major_counter = 0;
    } else {
        major_counter++;
    }

    document.getElementById("major_image").src = major_images[major_counter];
}

// function to move major images backwards
function major_back_function() {
    if (major_counter == 0) {
        major_counter = 2;
    } else {
        major_counter--;
    }

    document.getElementById("major_image").src = major_images[major_counter];
}


// Create an array for images of robot project
var robot_images = ["robot_both.png", "robot_front.png", "robot_side.png"];

// Create a counter for robot_images
var robot_counter = 0;

// function to move robot images forward
function robot_next_function() {
    if (robot_counter == 2) {
        robot_counter = 0;
    } else {
        robot_counter++;
    }

    document.getElementById("robot_image").src = robot_images[robot_counter];
}

// function to move robot images backwards
function robot_back_function() {
    if (robot_counter == 0) {
        robot_counter = 2;
    } else {
        robot_counter--;
    }

    document.getElementById("robot_image").src = robot_images[robot_counter];
}


// Create an array for images of mini project
var mini_images = ["connect_four.png", "connect_four_2.png", "connect_four_code.png"];

// Create a counter for mini_images
var mini_counter = 0;

// function to move mini images forward
function mini_next_function() {
    if (mini_counter == 2) {
        mini_counter = 0;
    } else {
        mini_counter++;
    }

    document.getElementById("mini_image").src = mini_images[mini_counter];
}

// function to move mini images backwards
function mini_back_function() {
    if (mini_counter == 0) {
        mini_counter = 2;
    } else {
        mini_counter--;
    }

    document.getElementById("mini_image").src = mini_images[mini_counter];
}

var mode_change__outer_div = document.querySelector("#mode_change_outer");
var mode_change__inner_div = document.querySelector("#mode_change_inner");

var count = 0;

function change_mode_function() {
    count++;

    document.getElementById("mini_back").addEventListener('mouseover', () => {
        document.getElementById("mini_back").style.color = "#bc6c25"
    })
    
    document.getElementById("mini_next").addEventListener('mouseover', () => {
        document.getElementById("mini_next").style.color = "#bc6c25"
    })

    document.getElementById("major_back").addEventListener('mouseover', () => {
        document.getElementById("major_back").style.color = "#bc6c25"
    })
    
    document.getElementById("major_next").addEventListener('mouseover', () => {
        document.getElementById("major_next").style.color = "#bc6c25"
    })

    document.getElementById("robot_back").addEventListener('mouseover', () => {
        document.getElementById("robot_back").style.color = "#bc6c25"
    })
    
    document.getElementById("robot_next").addEventListener('mouseover', () => {
        document.getElementById("robot_next").style.color = "#bc6c25"
    })

    if (count % 2 == 0) {
        document.getElementById("mode_change_inner").style.transform = "translateX(0)";
        document.getElementById("mode_change_outer").style.backgroundColor = "black";
        
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll("p")[i].style.color = "white";
        }

        for (let j = 1; j < 7; j++) {
            document.querySelectorAll("button")[j].style.color = "white";
            document.querySelectorAll("button")[j].style.backgroundColor = "#1D1F20";
        }

        document.getElementsByClassName("project_1")[0].style.backgroundColor = "#1D1F20";
        document.getElementsByClassName("project_2")[0].style.backgroundColor = "#1D1F20";
        document.getElementsByClassName("project_3")[0].style.backgroundColor = "#1D1F20";
        document.querySelector(".socials").style.backgroundColor = "#344e41";
        document.querySelector("footer").style.backgroundColor = "#344e41";

        document.getElementById("mini_back").addEventListener('mouseout', () => {
            document.getElementById("mini_back").style.color = "white"
        })
        
        document.getElementById("mini_next").addEventListener('mouseout', () => {
            document.getElementById("mini_next").style.color = "white"
        })
    
        document.getElementById("major_back").addEventListener('mouseout', () => {
            document.getElementById("major_back").style.color = "white"
        })
        
        document.getElementById("major_next").addEventListener('mouseout', () => {
            document.getElementById("major_next").style.color = "white"
        })
    
        document.getElementById("robot_back").addEventListener('mouseout', () => {
            document.getElementById("robot_back").style.color = "white"
        })
        
        document.getElementById("robot_next").addEventListener('mouseout', () => {
            document.getElementById("robot_next").style.color = "white"
        })

    } else {
        document.getElementById("mode_change_inner").style.transform = "translateX(30px)";
        document.getElementById("mode_change_outer").style.backgroundColor = "white";
        
        for (var i = 0; i < 4; i++) {
            document.querySelectorAll("p")[i].style.color = "black";
        }
        for (let j = 1; j < 7; j++) {
            document.querySelectorAll("button")[j].style.color = "black";
            document.querySelectorAll("button")[j].style.backgroundColor = "whitesmoke";
        }
        
        document.getElementsByClassName("project_1")[0].style.backgroundColor = "whitesmoke";
        document.getElementsByClassName("project_2")[0].style.backgroundColor = "whitesmoke";
        document.getElementsByClassName("project_3")[0].style.backgroundColor = "whitesmoke";
        document.querySelector(".socials").style.backgroundColor = "#a3b18a";
        document.querySelector("footer").style.backgroundColor = "#a3b18a";

        document.getElementById("mini_back").addEventListener('mouseout', () => {
            document.getElementById("mini_back").style.color = "black"
        })
        
        document.getElementById("mini_next").addEventListener('mouseout', () => {
            document.getElementById("mini_next").style.color = "black"
        })
    
        document.getElementById("major_back").addEventListener('mouseout', () => {
            document.getElementById("major_back").style.color = "black"
        })
        
        document.getElementById("major_next").addEventListener('mouseout', () => {
            document.getElementById("major_next").style.color = "black"
        })
    
        document.getElementById("robot_back").addEventListener('mouseout', () => {
            document.getElementById("robot_back").style.color = "black"
        })
        
        document.getElementById("robot_next").addEventListener('mouseout', () => {
            document.getElementById("robot_next").style.color = "black"
        })
    }
}

