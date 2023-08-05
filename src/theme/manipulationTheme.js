import * as sounds from './sounds.js'

function removeAll() {
    forest.classList.remove('toggleTheme')
    cafe.classList.remove('toggleTheme')
    rain.classList.remove('toggleTheme')
    fireplace.classList.remove('toggleTheme')
}

export default function changeTheme(isThere, theme, key) {
    if (isThere) {
        removeAll()
        theme.classList.toggle('toggleTheme')
       sounds.playAudio(key);
        return
    } else {
        removeAll()
        sounds.pauseAudio(key);
        return
    }
}