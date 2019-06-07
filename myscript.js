window.onload = function(){
  var thergb="rgb(255,255,255)";
  var total=document.getElementsByTagName("a");
  for(i=0;i<total.length;i++){
    total[i].style.color=thergb;
  }
}


function myfunctionrgb(){
  var slider = document.getElementById('red').value;
  document.getElementById("redvalue").innerHTML = slider;
  var slideg = document.getElementById('green').value;
  document.getElementById("greenvalue").innerHTML = slideg;
  var slideb = document.getElementById('blue').value;
  document.getElementById("bluevalue").innerHTML = slideb;
  var thergb = "rgb(" + slider+","+slideg+","+slideb+")";
  document.getElementById('navbar').style.background = thergb;
}


function myfunctionfooter(){
  var slider = document.getElementById('fred').value;
  document.getElementById("footerredvalue").innerHTML = slider;
  var slideg = document.getElementById('fgreen').value;
  document.getElementById("footergreenvalue").innerHTML = slideg;
  var slideb = document.getElementById('fblue').value;
  document.getElementById("footerbluevalue").innerHTML = slideb;
  var thergb = "rgb(" + slider+","+slideg+","+slideb+")";
  document.getElementById('footer').style.background = thergb;
  document.getElementById('footer-color').style.background = thergb;
}


function myfunctionfont(){
  var slider = document.getElementById('fontred').value;
  document.getElementById("fontredvalue").innerHTML = slider;
  var slideg = document.getElementById('fontgreen').value;
  document.getElementById("fontgreenvalue").innerHTML = slideg;
  var slideb = document.getElementById('fontblue').value;
  document.getElementById("fontbluevalue").innerHTML = slideb;
  var thergb = "rgb(" + slider+","+slideg+","+slideb+")";
  var total=document.getElementsByTagName("a");
  for(i=0;i<total.length;i++){
    total[i].style.color=thergb;
  }
  document.getElementById('disclaimer').style.color = thergb;
}
