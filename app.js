/* --------- CONFIGURAZIONE: loghi remoti --------- */
const TIME_LIMIT = 3; // secondi

// Lista con URL pubblici (Wikimedia Commons o siti ufficiali)
const LOGOS = [
  // TRANS
  {url:"https://upload.wikimedia.org/wikipedia/commons/0/0a/ILGA_World_logo.svg", tag:"TRANS"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/8/8b/TGEU_logo.svg", tag:"TRANS"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/9/93/Trans_Lifeline_logo.svg", tag:"TRANS"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Mermaids_UK_logo.svg", tag:"TRANS"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Transgender_Europe_logo.svg", tag:"TRANS"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/4/44/Akava%27ine_logo.svg", tag:"TRANS"},

  // TRANSPORT
  {url:"https://upload.wikimedia.org/wikipedia/commons/6/61/FedEx_Express.svg", tag:"TRANSPORT"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Maersk_Line_logo.svg", tag:"TRANSPORT"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Uber_logo_2018.svg", tag:"TRANSPORT"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Trenitalia_logo.svg", tag:"TRANSPORT"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/5/54/Latam-logo.svg", tag:"TRANSPORT"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/1/1a/TransSiberianRailway-logo.svg", tag:"TRANSPORT"}
];

/* --------- LOGICA DI GIOCO --------- */
let score = 0, total = 0, current, timer;

const logoImg   = document.getElementById('logo');
const btnTrans  = document.getElementById('btnTrans');
const btnTransp = document.getElementById('btnTransport');
const scoreDiv  = document.getElementById('score');

function nextLogo() {
  clearTimeout(timer);
  document.body.className = "";

  // seleziona logo casuale
  current = LOGOS[Math.floor(Math.random() * LOGOS.length)];
  logoImg.src = current.url;

  total++;
  scoreDiv.textContent = `Score: ${score} / ${total-1}`;

  timer = setTimeout(() => check(null), TIME_LIMIT * 1000);
}

function check(answer) {
  clearTimeout(timer);
  if (answer === current.tag) {
    score++;
    document.body.className = "correct";
  } else {
    document.body.className = "wrong";
  }
  scoreDiv.textContent = `Score: ${score} / ${total}`;
  setTimeout(nextLogo, 1000);
}

btnTrans.addEventListener('click', () => check("TRANS"));
btnTransp.addEventListener('click', () => check("TRANSPORT"));

/* --------- AVVIO --------- */
nextLogo();
