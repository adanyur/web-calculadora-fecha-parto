document.getElementById("button-calcular").addEventListener("click", (e) => {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let anio = document.getElementById("anio").value;

  const fechaUltimRegla = new Date(anio + "/" + mes + "/" + dia);

  const semanaDeGestacion = new Date(semanaGestacion(fechaUltimRegla));
  const fechaProbableParto = new Date(fechaParto(fechaUltimRegla));

  message(semanaDeGestacion, fechaProbableParto);
  limpiarDatos();
  document.getElementById("modal-btn").checked = true;
  e.preventDefault();
});

const fechaParto = (fechaProbableParto) =>
  fechaProbableParto.setDate(fechaProbableParto.getDate() + 280);

const semanaGestacion = (fecha) => new Date() - new Date(fecha);

const message = (semanaDeGestacion, fechaProbableParto) => {
  const diasTranscurrido = Math.floor(
    semanaDeGestacion / (1000 * 60 * 60 * 24)
  );

  let options = { year: "numeric", month: "long", day: "numeric" };
  let elemet = document.querySelector("#message");
  let template = `
  <ul class="list-message">
  <li class="list-item"><span class="title">!Felicidades¡</span></li>
  <li class="list-item"><span class="title-two">Tu fecha probable de parto es</span></li>
  <li class="list-item"><span class="text-content">${fechaProbableParto.toLocaleDateString(
    "default",
    options
  )}</span></li>
      <li class="list-item"><span class="title-two">Tienes:</span></li>
      <li class="list-item"><span class="text-content">${Math.round(
        diasTranscurrido / 7
      )} semanas de embarazo</span></li>
      <li class="list-item">
        <button class="btn" type="submit" id="button-reset"> Calcular de nuevo</button>
      </li>
      </ul>
      `;

  elemet.innerHTML = template;
};

const limpiarDatos = () => {
  document.getElementById("form-calculadora").reset();
};
