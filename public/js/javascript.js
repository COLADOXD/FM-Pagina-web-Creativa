const preguntas = document.querySelectorAll(".pregunta");
const idTexto = document.querySelectorAll(".Texto-del-parrafo");
const svgs = document.querySelectorAll(".svgs");

for (let i = 0; i < preguntas.length; i++) {
  const pregunta = preguntas[i];
  pregunta.addEventListener("click", () => {
    abriridTexto(i);
    console.log(pregunta);
  });
}

function abriridTexto(id) {
  const textoId = idTexto[id];
  const pregunta = preguntas[id];
  const svg = svgs[id];

  const idTextoClosed = textoId.classList.contains("hidden");

  if (idTextoClosed) {
    textoId.classList.remove("hidden");
    pregunta.classList.add("font-bold");
    svg.classList.add("-scale-y-100");
  }
  if (!idTextoClosed) {
    textoId.classList.add("hidden");
    pregunta.classList.remove("font-bold");
    svg.classList.remove("-scale-y-100");
  }
}
