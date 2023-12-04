$(document).ready(function(){
  // SLICK
  $('.imageshowcase').slick({
      dots: true,
      centerMode: true,
      arrows: true,
      appendArrows: $(".imageshowcase"),
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
            breakpoint: 1185,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
      ]
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
  AOS.refresh();

  // ACCORDION
  $('.accordion').on('click', '.accordion-control', function(e){
    e.preventDefault();
    $(this)
    .next('.accordion-panel')
    .not(':animated')
    .slideToggle();
  });
});

// Afura del anonimus function de jQuery porque o si no, no funciona
// COOKIES
function hideCookie() {
  $("#cookie-consent").hide();
};