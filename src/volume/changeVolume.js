import * as Audio from "../theme/sounds.js"

export function changeVolume(key, volume) {
console.log(key)
console.log(Audio.sounds[key])

    if (Audio.sounds[key]!=Audio.sounds[key].paused) {
        Audio.sounds[key].volume = volume
    } else {
        return
    }
}