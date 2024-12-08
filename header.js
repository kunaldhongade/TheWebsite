fetch('/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('headerBuilder').innerHTML = data
  })

document.onclick = MenuClick
function MenuClick (e) {
  console.warn('SDFSF')
  var navMenuDiv = document.getElementById('nav-content')
  var navMenu = document.getElementById('nav-toggle')
  var target = (e && e.target) || (event && event.srcElement)

  //Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains('hidden')) {
        navMenuDiv.classList.remove('hidden')
      } else {
        navMenuDiv.classList.add('hidden')
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add('hidden')
    }
  }
}
function checkParent (t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true
    }
    t = t.parentNode
  }
  return false
}
