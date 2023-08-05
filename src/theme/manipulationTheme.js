function removeAll(equal) {
    forest.classList.remove('toggleTheme')
    cafe.classList.remove('toggleTheme')
    rain.classList.remove('toggleTheme')
    fireplace.classList.remove('toggleTheme')
}

export default function changeTheme(isThere, theme) {
    if (isThere) {
        removeAll()
        theme.classList.toggle('toggleTheme')
        return
    } else {
        removeAll()
        return
    }
}