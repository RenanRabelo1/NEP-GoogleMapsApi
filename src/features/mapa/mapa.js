function inicializarMapa() {
  const opcoesMapa = {
    center: { lat: -3.7683, lng: -38.4797 },
    zoom: 16
  };

  return new google.maps.Map(
    document.getElementById("map"),
    opcoesMapa
  );
}

function adicionarMarcador(latitude, longitude, titulo) {
}
