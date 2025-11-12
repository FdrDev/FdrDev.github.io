
function typed() {
  var typed = new Typed("#typed", {
  strings: ["I'm Federico"],
  smartBackspace: true,
  typeSpeed:120,
  backSpeed:50

  });
}

function particles(){
  // Riduce il numero di particles su mobile
  var particleCount = 150;
  if (window.innerWidth <= 480) {
    particleCount = 50;
  } else if (window.innerWidth <= 768) {
    particleCount = 80;
  }

  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": particleCount,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#ccc"
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1
        }
      },
      "size": {
        "value": 2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 30
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
}


function init(){
  // typed();
  particles();
}

$(document).ready(init);
