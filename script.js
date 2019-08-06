
function typed() {
  var typed = new Typed("#typed", {
  strings: ["&#60;&#8260;Hell0 W0rld&#62;","Ciao a tutti", "I'm Federico"],
  smartBackspace: true,
  typeSpeed:120,
  backSpeed:50

  });
}

function particles(){
  particlesJS.load('particles-js', 'particles.json', function(){
    console.log('particles.json loaded...');
  });
}


function init(){
  typed();
  particles();
}

$(document).ready(init);
