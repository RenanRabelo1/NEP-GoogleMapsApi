let mapa;

function inicializarMapa() {
  const opcoesMapa = {
    center: { lat: -3.7683, lng: -38.4797 },
    zoom: 16
  };

  mapa = new google.maps.Map(
    document.getElementById("map"),
    opcoesMapa
  );

  mapa.addListener("click", (evento) => {
    adicionarMarcador(
      evento.latLng.lat(),
      evento.latLng.lng(),
      campoTitulo.value
    );
  });

  return mapa;
}

function adicionarMarcador(latitude, longitude, titulo) {
  return new google.maps.Marker({
    map: mapa,
    position: { lat: latitude, lng: longitude },
    title: titulo,
    draggable: true
  });
}

const botaoAdicionarPonto = document.getElementById("adicionar-ponto");
const campoCoordenadas = document.getElementById("coordenadas");
const campoTitulo = document.getElementById("titulo-marcador");

botaoAdicionarPonto.addEventListener("click", () => {
  const [latitude, longitude] = campoCoordenadas.value.split(",").map(Number);

  adicionarMarcador(latitude, longitude, campoTitulo.value);
});
