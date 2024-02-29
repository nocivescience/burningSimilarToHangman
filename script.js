const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const conteo = document.getElementById('conteo');
const figureParts = document.querySelectorAll('.part');
const timer = document.querySelector('.timer');
const notes = document.getElementById('notes');
const hintEl = document.getElementById('hint');
const fail = new Audio('./audios/fail.mp3');
const Ale = new Audio('./audios/Ale.mp3');
const losing = new Audio('./audios/perder.mp3');
for (audio of [fail, Ale, losing]) {
  audio.volume = 0.5
}

const attemptsEl = document.getElementById('attempts');
var attempts = 5;

const words = [
  'Titanic',
  'TheSilentOfTheLambs',
  'LeageOfLeagues',
  'Terminator',
  'Bourne',
  'Avatar',
  'CallOfDuty',
  'SuperMan',
  'Batman',
  'Ironman',
  'CaptainAmerica',
  'LeagueOfJustice',
  'Avenger',
  'Allien',
  'TheGoodFather',
  'GrandTheftAuto',
  'NeedForSpeed',
  'GrandTurismo',
  'SplinterCell',
  'MetalGear'
];

const pistas = {
  "Titanic": [
    {
      "id": 1,
      "pista": "Es una película épica dirigida por James Cameron."
    },
    {
      "id": 2,
      "pista": "El nombre de este barco es el mismo que el de la película."
    },
    {
      "id": 3,
      "pista": "Se hundió en su viaje inaugural en 1912."
    },
    {
      "id": 4,
      "pista": "Es uno de los barcos más famosos de la historia."
    },
    {
      "id": 5,
      "pista": "Leonardo DiCaprio y Kate Winslet protagonizan la película."
    }
  ],
  "TheSilentOfTheLambs": [
    {
      "id": 1,
      "pista": "Es una película de suspenso dirigida por Jonathan Demme."
    },
    {
      "id": 2,
      "pista": "Se basa en la novela homónima de Thomas Harris."
    },
    {
      "id": 3,
      "pista": "Anthony Hopkins interpreta a Hannibal Lecter."
    },
    {
      "id": 4,
      "pista": "Jodie Foster interpreta a la agente del FBI Clarice Starling."
    },
    {
      "id": 5,
      "pista": "Ganó cinco premios Oscar, incluyendo Mejor Película."
    }
  ],
  "LeageOfLeagues": [
    {
      "id": 1,
      "pista": "Es un videojuego de estrategia en tiempo real."
    },
    {
      "id": 2,
      "pista": "Desarrollado y publicado por Riot Games."
    },
    {
      "id": 3,
      "pista": "Cuenta con un conjunto diverso de campeones jugables."
    },
    {
      "id": 4,
      "pista": "Es uno de los juegos más populares en el género de los MOBA."
    },
    {
      "id": 5,
      "pista": "Los jugadores compiten en equipos para destruir el Nexo enemigo."
    }
  ],
  "Terminator": [
    {
      "id": 1,
      "pista": "Es una película de ciencia ficción dirigida por James Cameron."
    },
    {
      "id": 2,
      "pista": "Arnold Schwarzenegger interpreta al icónico personaje de la película."
    },
    {
      "id": 3,
      "pista": "La trama gira en torno a la lucha contra las máquinas del futuro."
    },
    {
      "id": 4,
      "pista": "La frase 'Hasta la vista, baby' se popularizó gracias a esta película."
    },
    {
      "id": 5,
      "pista": "Ha dado lugar a varias secuelas y adaptaciones en otros medios."
    }
  ],
  "Bourne": [
    {
      "id": 1,
      "pista": "Es una serie de películas de acción y espionaje."
    },
    {
      "id": 2,
      "pista": "Basada en el personaje de ficción Jason Bourne, creado por Robert Ludlum."
    },
    {
      "id": 3,
      "pista": "Matt Damon interpreta al protagonista en la mayoría de las películas."
    },
    {
      "id": 4,
      "pista": "Las películas son conocidas por sus intensas escenas de acción y persecuciones."
    },
    {
      "id": 5,
      "pista": "La primera película de la serie se estrenó en 2002."
    }
  ],
  "Avatar": [
    {
      "id": 1,
      "pista": "Es una película de ciencia ficción dirigida por James Cameron."
    },
    {
      "id": 2,
      "pista": "Se desarrolla en el planeta ficticio de Pandora."
    },
    {
      "id": 3,
      "pista": "La trama gira en torno a la explotación de recursos naturales y la lucha de los nativos."
    },
    {
      "id": 4,
      "pista": "Es conocida por su revolucionaria tecnología de captura de movimiento."
    },
    {
      "id": 5,
      "pista": "Es la película con mayor recaudación de la historia del cine."
    }
  ],
  "CallOfDuty": [
    {
      "id": 1,
      "pista": "Es una serie de videojuegos de disparos en primera persona."
    },
    {
      "id": 2,
      "pista": "Desarrollada por varias compañías, incluyendo Infinity Ward y Treyarch."
    },
    {
      "id": 3,
      "pista": "Cada entrega se centra en conflictos militares de diferentes épocas y escenarios."
    },
    {
      "id": 4,
      "pista": "La serie es conocida por su modo multijugador y su modo campaña para un jugador."
    },
    {
      "id": 5,
      "pista": "Ha sido criticada y elogiada por su representación de la guerra moderna."
    }
  ],
  "SuperMan": [
    {
      "id": 1,
      "pista": "Es un superhéroe ficticio creado por Jerry Siegel y Joe Shuster."
    },
    {
      "id": 2,
      "pista": "Tiene superpoderes como la súper fuerza, la velocidad y la invulnerabilidad."
    },
    {
      "id": 3,
      "pista": "Su alter ego es Clark Kent, un periodista del Daily Planet."
    },
    {
      "id": 4,
      "pista": "Es originario del planeta ficticio Krypton."
    },
    {
      "id": 5,
      "pista": "Es uno de los superhéroes más icónicos de DC Comics."
    }
  ],
  "Batman": [
    {
      "id": 1,
      "pista": "Es un superhéroe de DC Comics, creado por Bob Kane y Bill Finger."
    },
    {
      "id": 2,
      "pista": "Su identidad secreta es Bruce Wayne, un multimillonario filántropo."
    },
    {
      "id": 3,
      "pista": "No tiene superpoderes, pero es un maestro en artes marciales y detective hábil."
    },
    {
      "id": 4,
      "pista": "Utiliza una variedad de gadgets y vehículos tecnológicos en su lucha contra el crimen."
    },
    {
      "id": 5,
      "pista": "Tiene un fiel mayordomo llamado Alfred Pennyworth."
    }
  ],
  "Ironman": [
    {
      "id": 1,
      "pista": "Es un superhéroe de Marvel Comics."
    },
    {
      "id": 2,
      "pista": "Su identidad secreta es Tony Stark, un genio, multimillonario, filántropo y playboy."
    },
    {
      "id": 3,
      "pista": "Utiliza un traje de alta tecnología con armamento avanzado."
    },
    {
      "id": 4,
      "pista": "Fue creado por Stan Lee, Larry Lieber, Don Heck y Jack Kirby."
    },
    {
      "id": 5,
      "pista": "Es uno de los miembros fundadores de los Vengadores."
    }
  ],
  "CaptainAmerica": [
    {
      "id": 1,
      "pista": "Es un superhéroe de Marvel Comics."
    },
    {
      "id": 2,
      "pista": "Su alter ego es Steve Rogers, un soldado mejorado con un suero experimental."
    },
    {
      "id": 3,
      "pista": "Lucha en la Segunda Guerra Mundial como un símbolo de patriotismo."
    },
    {
      "id": 4,
      "pista": "Lleva un escudo indestructible hecho de un metal llamado vibranium."
    },
    {
      "id": 5,
      "pista": "Es conocido como el 'primer vengador'."
    }
  ],
  "LeagueOfJustice": [
    {
      "id": 1,
      "pista": "Es un equipo de superhéroes de DC Comics."
    },
    {
      "id": 2,
      "pista": "Incluye personajes como Superman, Batman, Wonder Woman, Flash y Green Lantern, entre otros."
    },
    {
      "id": 3,
      "pista": "Trabajan juntos para proteger al mundo de amenazas sobrenaturales y supervillanos."
    },
    {
      "id": 4,
      "pista": "A menudo se los compara con los Vengadores de Marvel Comics."
    },
    {
      "id": 5,
      "pista": "La Liga de la Justicia ha aparecido en cómics, series de televisión y películas."
    }
  ],
  "Avenger": [
    {
      "id": 1,
      "pista": "Es un equipo de superhéroes de Marvel Comics."
    },
    {
      "id": 2,
      "pista": "Incluye personajes como Iron Man, Thor, Capitán América, Hulk, Viuda Negra y Ojo de Halcón, entre otros."
    },
    {
      "id": 3,
      "pista": "Se han producido varias películas de este equipo de superhéroes, que han sido muy exitosas en taquilla."
    },
    {
      "id": 4,
      "pista": "La primera película de este equipo se estrenó en 2012."
    },
    {
      "id": 5,
      "pista": "Han enfrentado amenazas como Loki, Ultron y Thanos en sus películas."
    }
  ],
  "Alien": [
    {
      "id": 1,
      "pista": "Es una franquicia de ciencia ficción creada por Ridley Scott."
    },
    {
      "id": 2,
      "pista": "El primer film fue lanzado en 1979 y es conocido por su mezcla de terror y ciencia ficción."
    },
    {
      "id": 3,
      "pista": "La criatura principal de la serie es un xenomorfo, una forma de vida extraterrestre altamente agresiva."
    },
    {
      "id": 4,
      "pista": "Ha dado lugar a varias secuelas, precuelas, cómics y videojuegos."
    },
    {
      "id": 5,
      "pista": "La protagonista principal de la serie es la teniente Ellen Ripley, interpretada por Sigourney Weaver."
    }
  ],
  "TheGoodFather": [
    {
      "id": 1,
      "pista": "Es una película de crimen y drama dirigida por Francis Ford Coppola."
    },
    {
      "id": 2,
      "pista": "Basada en la novela del mismo nombre de Mario Puzo."
    },
    {
      "id": 3,
      "pista": "Está protagonizada por Marlon Brando y Al Pacino."
    },
    {
      "id": 4,
      "pista": "Sigue la historia de una poderosa familia criminal italiana-estadounidense."
    },
    {
      "id": 5,
      "pista": "Es considerada una de las mejores películas de la historia del cine."
    }
  ],
  "GrandTheftAuto": [
    {
      "id": 1,
      "pista": "Es una serie de videojuegos de acción y aventura."
    },
    {
      "id": 2,
      "pista": "Desarrollada por Rockstar North y publicada por Rockstar Games."
    },
    {
      "id": 3,
      "pista": "Permite a los jugadores explorar mundos abiertos y realizar diversas actividades delictivas."
    },
    {
      "id": 4,
      "pista": "La serie ha sido objeto de controversia debido a su representación de la violencia y el crimen."
    },
    {
      "id": 5,
      "pista": "El juego más reciente de la serie es Grand Theft Auto V."
    }
  ],
  "NeedForSpeed": [
    {
      "id": 1,
      "pista": "Es una serie de videojuegos de carreras desarrollada por Electronic Arts."
    },
    {
      "id": 2,
      "pista": "Ofrece una variedad de modos de juego, incluyendo carreras callejeras, carreras de circuito y persecuciones policiales."
    },
    {
      "id": 3,
      "pista": "La serie se centra en la personalización de autos y la persecución de la adrenalina a alta velocidad."
    },
    {
      "id": 4,
      "pista": "Ha sido adaptada a varias películas, incluyendo una protagonizada por Aaron Paul."
    },
    {
      "id": 5,
      "pista": "El juego más reciente de la serie es Need for Speed: Heat, lanzado en 2019."
    }
  ],
  "GrandTurismo": [
    {
      "id": 1,
      "pista": "Es una serie de videojuegos de carreras desarrollada por Polyphony Digital."
    },
    {
      "id": 2,
      "pista": "Conocida por su énfasis en la simulación de carreras y la variedad de automóviles disponibles."
    },
    {
      "id": 3,
      "pista": "Ha sido exclusiva de las consolas PlayStation desde su debut en 1997."
    },
    {
      "id": 4,
      "pista": "Ofrece modos de juego como carreras de circuito, carreras de resistencia y pruebas de licencia."
    },
    {
      "id": 5,
      "pista": "El último juego de la serie en el momento de esta escritura es Gran Turismo 7."
    }
  ],
  "SplinterCell": [
    {
      "id": 1,
      "pista": "Es una serie de videojuegos de sigilo desarrollada por Ubisoft."
    },
    {
      "id": 2,
      "pista": "El protagonista principal es Sam Fisher, un agente de la ficticia Agencia Nacional de Seguridad."
    },
    {
      "id": 3,
      "pista": "Los juegos se centran en misiones de infiltración y espionaje en entornos hostiles."
    },
    {
      "id": 4,
      "pista": "Destaca por su jugabilidad táctica y su énfasis en evitar el combate directo."
    },
    {
      "id": 5,
      "pista": "La serie ha recibido elogios por su narrativa y diseño de niveles."
    }
  ],
  "MetalGear": [
    {
      "id": 1,
      "pista": "Es una serie de videojuegos de acción y sigilo creada por Hideo Kojima."
    },
    {
      "id": 2,
      "pista": "El protagonista principal es Solid Snake, un soldado especializado en infiltración y combate."
    },
    {
      "id": 3,
      "pista": "La serie es conocida por su compleja trama política y sus temas filosóficos."
    },
    {
      "id": 4,
      "pista": "Ha sido aclamada por su innovadora jugabilidad y su enfoque en la narrativa cinematográfica."
    },
    {
      "id": 5,
      "pista": "El último juego de la serie principal es Metal Gear Solid V: The Phantom Pain."
    }
  ]
};
const random= Math.floor(Math.random() * words.length);
let selectedWord = words[random].toLowerCase();
let withoutToLowerCase = words[random];
attemptsEl.innerHTML = `Intentos: ${attempts}`;
console.log(pistas[withoutToLowerCase][Math.floor(Math.random()*5)].pista);
const correctLetters = [];
const wrongLetters = [];
wordEl.style.display = "flex";
wordEl.style.flexDirection = 'row';
wordEl.style.justifyContent = 'center';
wordEl.style.alignItems = 'center';
// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');
  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Felicitaciones';
    Ale.play();
    popup.style.display = 'flex';
  }
}
// Update the wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Erradas</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;
  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = 'grid';
    } else {
      part.style.display = 'none';
    }
  });

  // Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Perdiste. 💩';
    losing.play();
    document.getElementById('centering').classList.add('my-filter');
    popup.style.display = 'flex';
  }
}
// Show notification
function showNotification() {
  notification.classList.add('show');
  fail.play();
  setTimeout(() => {
    notification.classList.remove('show');
  }, 500);
}

// Keydown letter press
window.addEventListener('keydown', e => {
  // console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
        for (let i = 0; i < figureParts.length; i++) {
          figureParts[i].classList.add('turn')
        }
        attempts--;
        hintEl.innerHTML = `Pista: ${pistas[withoutToLowerCase][Math.floor(Math.random()*5)].pista}`;
      } else {
        showNotification();
      }
    }
  }
  attemptsEl.innerHTML = `Intentos: ${attempts}`;
});

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
  //  Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
  document.getElementById('centering').classList.remove('my-filter');
  displayWord();
  updateWrongLettersEl();
  popup.style.display = 'none';
  attempts = 5;
  attemptsEl.innerHTML = `Intentos: ${attempts}`;
});
displayWord();
// Timer();99b3
