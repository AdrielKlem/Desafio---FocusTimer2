import state from "./state";
import * as el from "./elements.js"

export function toggleRunning() {
    state.isRunning = el.controls
}


export function reset() {
    state.isRunning = false
}