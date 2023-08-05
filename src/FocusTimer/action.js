import state from "./state";
import * as el from "./elements.js"
import * as timer from './timer.js'

export function toggleRunning() {
    state.isRunning = el.playBtn.classList.toggle("toggleControls")
    el.pauseBtn.classList.remove("toggleControls")

    if(state.isRunning) {
        timer.countdown()
        return
    } else {
        reset()
    }
}


export function reset() {
    state.isRunning = false
    el.pauseBtn.classList.add("toggleControls")
    el.playBtn.classList.remove("toggleControls")
}