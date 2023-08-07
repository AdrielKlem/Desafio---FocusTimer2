import * as Audio from "../theme/sounds.js"

export default function changeVolume(key, volume) {
    if (Audio.sounds[key]!=Audio.sounds[key].paused) {
        console.log(`o ${Audio.sounds[key]} tem o volume ${Audio.sounds[key].volume} e receberá ${volume, typeof volume} ${Audio.sounds[key].volume = volume}`)
        Audio.sounds[key].volume = volume
    } else {
        return
    }
}