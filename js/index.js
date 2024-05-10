import { getNilai } from "./controller/getNilai.js";

function loadIndex() {
    getNilai()
}

window.onload = loadIndex;