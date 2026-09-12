function inicializarMapa(opcoesMapa) {
  return new google.maps.Map(
    document.getElementById("map"),
    opcoesMapa
  );
}
