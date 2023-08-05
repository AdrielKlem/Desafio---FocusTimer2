import { forest, rain, cafe, fireplace } from './elements-theme.js'

function removeAll(equal) {
    forest.classList.remove('toggleTheme')
    cafe.classList.remove('toggleTheme')
    rain.classList.remove('toggleTheme')
    fireplace.classList.remove('toggleTheme')
}

forest.addEventListener('click', (e) => {
    let isThere = forest.classList.toggle('toggleTheme')
  
    if (isThere) {
        removeAll()
        forest.classList.toggle('toggleTheme')
        return
    } else {
        removeAll()
    }
})

rain.addEventListener('click', (e) => {
    let isThere = rain.classList.toggle('toggleTheme')

    if (isThere) {
        removeAll()
        rain.classList.toggle('toggleTheme')
        return
    } else {
        removeAll()
    }
})

cafe.addEventListener('click', (e) => {
    let isThere = cafe.classList.toggle('toggleTheme')

    if (isThere) {
        removeAll()
        cafe.classList.toggle('toggleTheme')
        return
    } else {
        removeAll()
    }
})

fireplace.addEventListener('click', (e) => {
    let isThere = fireplace.classList.toggle('toggleTheme')

    if (isThere) {
        removeAll()
        fireplace.classList.toggle('toggleTheme')
        return
    } else {
        removeAll()
    }
})