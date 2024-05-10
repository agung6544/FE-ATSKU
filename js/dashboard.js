import { getMahasiswa } from "./controller/getMahasiswa.js";

function loadIndex() {
    getMahasiswa()
}

window.onload = loadIndex;