
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

// Dati dei comandi e risposte del terminale
var terminalCommands = [
  {
    command: "whoami",
    output: '<div class="output">Federico - Full Stack Developer</div>'
  },
  {
    command: "cat /dev/skills",
    output: `
      <div class="output category-title">━━━ Frontend ━━━</div>
      <div class="output">HTML5 • CSS3 • JavaScript • TypeScript • Next.js</div>
      <div class="output category-title">━━━ Backend ━━━</div>
      <div class="output">PHP • Laravel • Symfony • Nest.js • Express.js • Node.js</div>
      <div class="output category-title">━━━ Database ━━━</div>
      <div class="output">MySQL • PostgreSQL • MongoDB</div>
      <div class="output category-title">━━━ DevOps & Tools ━━━</div>
      <div class="output">Docker • Git • K8s</div>
      <div class="output category-title">━━━ Environment ━━━</div>
      <div class="output">Linux • MacOS</div>
    `
  },
  {
    command: "cat /dev/portfolio",
    output: '<div class="output"><a href="https://asdalma.it" target="_blank" rel="noopener noreferrer">asdalma.it</a> • <a href="https://danilogaias.it" target="_blank" rel="noopener noreferrer">danilogaias.it</a></div>'
  },
  {
    command: "cat /dev/contacts",
    output: `
      <div class="output category-title">━━━ Contatti ━━━</div>
      <div class="output">
        <a href="tel:+393421944260"><i class="fas fa-phone"></i> +39 342 19 44 260</a><br>
        <a href="https://wa.me/393421944260" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> WhatsApp</a><br>
        <a href="mailto:federicod.dev@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i> federicod.dev@gmail.com</a><br>
        <a href="https://www.linkedin.com/in/federicodente/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a><br>
        <a href="https://github.com/FdrDev" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
      </div>
    `
  }
];

var currentCommandIndex = 0;
var typedInstance = null;

function animateOutput(outputHtml, callback) {
  // Crea un contenitore temporaneo per parsare l'HTML
  var $temp = $('<div>').html(outputHtml);
  var $elements = $temp.children();

  if ($elements.length === 0) {
    // Se non ci sono elementi figli, aggiungi direttamente
    $('#terminal-content').append(outputHtml);
    if (callback) callback();
    return;
  }

  var index = 0;

  function addNextElement() {
    if (index >= $elements.length) {
      if (callback) callback();
      return;
    }

    var $el = $($elements[index]);
    $el.addClass('animated');
    $('#terminal-content').append($el);

    // Scroll automatico
    var terminalBody = $('.terminal-body')[0];
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    index++;
    setTimeout(addNextElement, 150); // Delay tra ogni riga
  }

  addNextElement();
}

function typeNextCommand() {
  if (currentCommandIndex >= terminalCommands.length) {
    // Tutti i comandi completati, mostra cursore finale
    var $finalLine = $('<div class="line"><span class="prompt">~</span> _</div>');
    $('#terminal-content').append($finalLine);
    $('.terminal-input-line').hide();
    return;
  }

  var cmd = terminalCommands[currentCommandIndex];

  // Pulisci l'elemento typed-command
  var typedElement = document.getElementById('typed-command');
  if (!typedElement) {
    console.error('Elemento typed-command non trovato');
    return;
  }

  typedElement.innerHTML = '';

  // Mostra il cursore e la linea di input
  $('.cursor-blink').show();
  $('.terminal-input-line').show();

  // Crea nuova istanza di Typed
  typedInstance = new Typed('#typed-command', {
    strings: [cmd.command],
    typeSpeed: 50,
    backSpeed: 0,
    showCursor: false,
    loop: false,
    onComplete: function(self) {
      // Comando digitato completamente
      setTimeout(function() {
        // Nascondi la linea di input
        $('.terminal-input-line').hide();

        // Aggiungi il comando completato al contenuto SENZA animazione
        var $commandLine = $('<div class="line"><span class="prompt">~</span> <span class="cmd">' + cmd.command + '</span></div>');
        $('#terminal-content').append($commandLine);

        // Scroll automatico
        var terminalBody = $('.terminal-body')[0];
        if (terminalBody) {
          terminalBody.scrollTop = terminalBody.scrollHeight;
        }

        // Aspetta un po' prima di mostrare l'output
        setTimeout(function() {
          // Aggiungi l'output CON animazione graduale
          animateOutput(cmd.output, function() {
            // Output completato, distruggi l'istanza di Typed
            if (typedInstance) {
              typedInstance.destroy();
              typedInstance = null;
            }

            // Passa al prossimo comando
            currentCommandIndex++;

            setTimeout(function() {
              typeNextCommand();
            }, 500);
          });
        }, 200);

      }, 300);
    }
  });
}

function terminalAnimation() {
  // Aspetta un momento prima di iniziare per essere sicuri che il DOM sia pronto
  setTimeout(function() {
    console.log('Inizio animazione terminale');
    typeNextCommand();
  }, 1000);
}

function init(){
  particles();
  terminalAnimation();
}

$(document).ready(init);




