const idTexto1 = document.querySelector("#texto1");
const pregunta1 = document.querySelector("#pregunta1");
const idTexto2 = document.querySelector("#texto2");
const pregunta2 = document.querySelector("#pregunta2");
const idTexto3 = document.querySelector("#texto3");
const pregunta3 = document.querySelector("#pregunta3");
const idTexto4 = document.querySelector("#texto4");
const pregunta4 = document.querySelector("#pregunta4");
const idTexto5 = document.querySelector("#texto5");
const pregunta5 = document.querySelector("#pregunta5");
const svg1 = document.querySelector("#svg1");
const svg2 = document.querySelector("#svg2");
const svg3 = document.querySelector("#svg3");
const svg4 = document.querySelector("#svg4");
const svg5 = document.querySelector("#svg5");

pregunta1.addEventListener("click", abriridTexto1);
pregunta2.addEventListener("click", abriridTexto2);
pregunta3.addEventListener("click", abriridTexto3);
pregunta4.addEventListener("click", abriridTexto4);
pregunta5.addEventListener("click", abriridTexto5);

function abriridTexto1() {
  const idTextoClosed = idTexto1.classList.contains("hidden");

  if (idTextoClosed) {
    idTexto1.classList.remove("hidden");
    pregunta1.classList.add("font-bold");
    svg1.classList.add("-scale-y-100");
  }

  if (!idTextoClosed) {
    idTexto1.classList.add("hidden");
    pregunta1.classList.remove("font-bold");
    svg1.classList.remove("-scale-y-100");
  }
}

function abriridTexto2() {
  const idTextoClosed = idTexto2.classList.contains("hidden");

  if (idTextoClosed) {
    idTexto2.classList.remove("hidden");
    pregunta2.classList.add("font-bold");
    svg2.classList.add("-scale-y-100");
  }

  if (!idTextoClosed) {
    idTexto2.classList.add("hidden");
    pregunta2.classList.remove("font-bold");
    svg2.classList.remove("-scale-y-100");
  }
}

function abriridTexto3() {
  const idTextoClosed = idTexto3.classList.contains("hidden");

  if (idTextoClosed) {
    idTexto3.classList.remove("hidden");
    pregunta3.classList.add("font-bold");
    svg3.classList.add("-scale-y-100");
  }

  if (!idTextoClosed) {
    idTexto3.classList.add("hidden");
    pregunta3.classList.remove("font-bold");
    svg3.classList.remove("-scale-y-100");
  }
}

function abriridTexto4() {
  const idTextoClosed = idTexto4.classList.contains("hidden");

  if (idTextoClosed) {
    idTexto4.classList.remove("hidden");
    pregunta4.classList.add("font-bold");
    svg4.classList.add("-scale-y-100");
  }

  if (!idTextoClosed) {
    idTexto4.classList.add("hidden");
    pregunta4.classList.remove("font-bold");
    svg4.classList.remove("-scale-y-100");
  }
}

function abriridTexto5() {
  const idTextoClosed = idTexto5.classList.contains("hidden");

  if (idTextoClosed) {
    idTexto5.classList.remove("hidden");
    pregunta5.classList.add("font-bold");
    svg5.classList.add("-scale-y-100");
  }

  if (!idTextoClosed) {
    idTexto5.classList.add("hidden");
    pregunta5.classList.remove("font-bold");
    svg5.classList.remove("-scale-y-100");
  }
  console.log(idTexto5);
}
