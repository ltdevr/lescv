// NAVBAR

document.querySelector('.toggleMenu').addEventListener('click', toggleNav);

let toggleMenu = document.querySelector('.toggleMenu');
let nav = document.querySelector('.nav');

// Function to close the navigation by removing the 'active' class
function closeNavigation() {
    nav.classList.remove('active');
}

// Toggle menu click event
toggleMenu.onmouseover = function() {
    nav.classList.toggle('active');
};

function toggleNav() {
    document.body.classList.toggle('nav-active');
}

// toggleMenu.onclick = function() {
//     navigation.classList.toggle('active');
// };

// Event listeners for each menu item
document.querySelectorAll('.nav li a').forEach(function(menuItem) {
    menuItem.addEventListener('click', closeNavigation);
});


        // let toggleMenu = document.querySelector('.toggleMenu');
        // let navigation = document.querySelector('.navigation');
        // toggleMenu.onclick = function(){
        //     navigation.classList.toggle('active');
        // }

    
// ABOUT ME
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

// VIDEOS
let clips = document.querySelectorAll('.vid');

    clips.forEach(clip => {
        clip.addEventListener("mouseover", function () {
            clip.play();
        });

        clip.addEventListener("mouseout", function () {
            clip.pause();
        });
    });

