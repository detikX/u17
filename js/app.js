$(document).ready(function () {
  AOS.init();
})
// if (event.cancelable) event.preventDefault();


$('.daysx').slick({
  dots: true,
  infinite: true,
  speed: 300,

  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$(".bawah li").attr({ "data-aos": "fade-in", "data-aos-delay": "300", "data-aos-duration": "1000" })

$(".card_anim .imgs").attr({ "data-aos": "fade-in", "data-aos-delay": "300", "data-aos-duration": "1000" })



$(".alumni .player .img").attr({ "data-aos": "zoom-in", "data-aos-delay": "300", "data-aos-duration": "700" })

$(".is").attr({ "data-aos": "fade-right", "data-aos-delay": "300", "data-aos-duration": "500" })

$(".polemik .content").attr({ "data-aos": "fade-in", "data-aos-delay": "300", "data-aos-duration": "1000" })
$(".polemik .image").attr({ "data-aos": "fade-in", "data-aos-delay": "300", "data-aos-duration": "500" })



//countdown
// Set the date we're counting down to
var countDownDate = new Date("Nov 10, 2023 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var jam = ("0" + hours).slice(-2);
  var min = ("0" + minutes).slice(-2);
  var hari = ("0" + days).slice(-2);
  var tik = ("0" + seconds).slice(-2);

  // Output the result in an element with id="demo"
  //   document.getElementById("demo").innerHTML = days + " Hari " + hours + " Jam "
  //   + minutes + " Menit " + seconds + " Detik ";

  $(".day").html(`
    ${hari} <small>Hari</small>
`)
  $(".ho").html(`
    ${jam} <small>Jam</small>
`)
  $(".min").html(`
    ${min} <small>Menit</small>
`)
  $(".sec").html(`
    ${tik} <small>Detik</small>
`)

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";

    $("#demo").html(
      `
        <div class="expired">Piala Dunia sedang berlangsung</div>
      `
    )
  }
}, 1000);

var team = $(".show-team");
team.hide();
$(".btn-all").click(function(){
  team.slideToggle(
    function(){
      $('html, body').animate({
        scrollTop: $(".skuad").offset().top
    }, 500);
    }
  )

  $(this).text() === 'Lihat Semua Pemain' ? $(this).text('Tutup Semua Pemain') : $(this).text('Lihat Semua Pemain');
})