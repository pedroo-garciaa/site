function toggleMode() {
    const html = document.documentElement

    const image = document.querySelector('#profile img')
    html.classList.toggle("light")

    // if (html.classList.contains ("light")){
    //   html.classList.remove('light')
    //} else {
    //  html.classList.add ('light')
    //}


    //basicamente o toggle faz todo esse trampo ai de cima// 


    if (html.classList.contains("light")) {
        image.setAttribute('src', './elo/elo.webp')

    } else {
        image.setAttribute('src', './elo/bob.webp')
    }

}

