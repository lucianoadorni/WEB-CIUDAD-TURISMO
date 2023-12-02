$(document).ready(function(){
  // SLICK
  $('.imageshowcase').slick({
      dots: true,
      centerMode: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

  // CHART.JS
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', "Domingo"],
      datasets: [{
        label: '# de Grados Centigrados',
        data: [34, 36, 37, 37, 32, 29, 28],
        borderWidth: 1,
        borderColor: '#D52B1E',
        backgroundColor: '#FFFFFF',
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // AOS
  AOS.init();
});