function toWall() {
  document.getElementById('ciontHidd').style.transform = "translateY(-272px)"
  document.getElementById('ciontHidd').style.transition = "all 400ms"
}
function toScr() {
  document.getElementById('ciontHidd').style.transform = "translateY(-544px)"
  document.getElementById('ciontHidd').style.transition = "all 400ms"
}
function toVid() {
  document.getElementById('ciontHidd').style.transform = "translateY(0px)"
  document.getElementById('ciontHidd').style.transition = "all 400ms"
}

function onmousWall() {
  document.getElementById('media_video').style = `background: url(/assets/images/Islam/media\ button.png)`
}
function onmousScr() {
  document.getElementById('media_video').style = `background: url(/assets/images/Islam/media\ button.png)`
}












function overmousmed() {
  document.getElementById('media_wall').style.transform = "translateY(100px)"
  document.getElementById('media_wall').style.transition = "all 5s"
}

function scrol() {
  document.getElementById('fixtl').style = `background: url(/assets/images/Islam/13.png);`
  document.getElementById('fixbl').style = `background: url(/assets/images/Islam/11.png);`
  document.getElementById('fixtr').style = `background: url(/assets/images/Islam/12.png);`
  document.getElementById('fixbr').style = `background: url(/assets/images/Islam/14.png);`
  document.getElementById("topleftline").style = (`background-color: #a9b9c0;`)
  document.getElementById("toprightline").style = (`background-color: #a9b9c0;`)
  document.getElementById("leftline").style = (`background-color: #a9b9c0;`)
  document.getElementById("rightline").style = (`background-color: #a9b9c0;`)
  document.getElementById("botrightline").style = (`background-color: #a9b9c0;`)
  document.getElementById("botleftline").style = (`background-color: #a9b9c0;`)
}