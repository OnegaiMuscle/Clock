const syntaxDay = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}

const syntaxHour = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}

const hr = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const h2 = document.querySelector('h2')
const h1 = document.querySelector('h1')

function displayTime() {
  let date = new Date()

  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()

  let hRotation = 30*hh + mm/2
  let mRotation = 6*mm
  let sRotation = 6*ss

  hr.style.transform = `rotate(${hRotation}deg)`
  min.style.transform = `rotate(${mRotation}deg)`
  sec.style.transform = `rotate(${sRotation}deg)`

  h2.textContent = date.toLocaleString('fr-FR', syntaxDay)
  h1.textContent = date.toLocaleString('fr-FR', syntaxHour)
}

setInterval(displayTime,1000)
