$(".open").click(function(){
  
  $(".list").css('display','flex')
})
$(".x").click(function(){
  $(".list").css('display','none')
})
//=========================
$(".div").click(function(){
  $(this).next().slideToggle()
  $(".sub").not($(this).next()).slideUp()

})
//================
let countDownDate = new Date("Jan 5, 2024 10:37:25").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  $("#days").html(days + "d ")
  $("#hours").html(hours + "h ") 
  $("#minutes").html(minutes + "m ")
  $("#seconds").html(seconds + "s " )
  
}, 100);
//=============================
$("textarea").keyup(function(){
  let tlength= $(this).val().length;
  $(".num").text(100-tlength<=0 ? "0" : 100-tlength)
})
