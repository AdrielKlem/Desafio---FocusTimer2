import { forest, rain, cafe, fireplace } from './elements-theme.js'

let exportResult = ''

function removeAll(equal) {
    if(equal = forest.classList.remove('toggleTheme')){

    }
    cafe.classList.remove('toggleTheme')
    rain.classList.remove('toggleTheme')
    fireplace.classList.remove('toggleTheme')
}

forest.addEventListener('click', (e) => {
    removeAll()
    forest.classList.toggle('toggleTheme')
})

rain.addEventListener('click', (e) => {
    rain.classList.toggle('toggleTheme')
})

cafe.addEventListener('click', (e) => {
    cafe.classList.toggle('toggleTheme')
})

fireplace.addEventListener('click', (e) => {
    fireplace.classList.toggle('toggleTheme')
})