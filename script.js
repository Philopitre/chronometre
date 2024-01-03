//Les variables dont ont à besoin

const sp = document.getElementsByTagName("span");
const btn_start = document.getElementById("start");
const btn_stop = document.getElementById("stop");
const btn_reset = document.getElementById("reset");
let t;
let ms = 0, s = 0, mn = 0, h = 0;

//Mise en place du compteur

let update_chrono = () => {
  ms += 1;
  if (ms === 10) {
    ms = 1;
    s += 1;
  }
  if (s === 60) {
    s = 0;
    mn += 1;
  }
  if (mn === 60) {
    mn = 0;
    h += 1;
  }
  //Insertion des valeurs dans les spans

  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
};

//Fonction boutton start

let start = () => {
  t = setInterval(update_chrono, 100);
  btn_start.disabled = true;
};

//Fonction boutton start

let stop = () => {
  clearInterval(t);
  btn_start.disabled = false;
}

//Initialisation du compteur
let reset = () => {
  clearInterval(t);
  btn_start.disabled = false;
  ms = 0, s = 0, mn = 0, h = 0;
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

// Initialisation des bouttons

btn_start.addEventListener("click", start);
btn_stop.addEventListener("click", stop);
btn_reset.addEventListener("click", reset);