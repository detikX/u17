$(document).ready(function() {
    AOS.init()
})

$(".bawah li").attr({"data-aos":"fade-in", "data-aos-delay":"500", "data-aos-duration":"1000"})

// $(".card_anim .imgs").attr({"data-aos":"fade-in", "data-aos-delay":"500", "data-aos-duration":"1000"})

$(".alumni .player .img").attr({"data-aos":"fade-in", "data-aos-delay":"1200", "data-aos-duration":"1000"})
// $(".alumni .player .name").attr({"data-aos":"zoom-in", "data-aos-delay":"500", "data-aos-duration":"500"})


//countdown
// Set the date we're counting down to
var countDownDate = new Date("Nov 10, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + " Hari " + hours + " Jam "
//   + minutes + " Menit " + seconds + " Detik ";

$(".day").html(`
    ${days} <small>Hari</small>
`)
$(".ho").html(`
    ${hours} <small>Jam</small>
`)
$(".min").html(`
    ${minutes} <small>Menit</small>
`)
$(".sec").html(`
    ${seconds} <small>Detik</small>
`)
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);