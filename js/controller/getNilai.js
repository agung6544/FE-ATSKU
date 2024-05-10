import { nilaihero } from "../config/url.js";
import { generateNilaiTable } from "../temp/nilai.js";

function displayNilai(nilaiData) {
    const tableBody = document.getElementById('iniTabel');
    tableBody.innerHTML = '';

    nilaiData.forEach(nilai => {
        const row = document.createElement('tr');
        row.className = "bg-white border-b dark:bg-zinc-800 dark:border-zinc-700";
        row.innerHTML = generateNilaiTable(nilai);
        tableBody.appendChild(row);
    });
}

export function getNilai() {
    console.log('Fetching Nilai Data...');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(nilaihero, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Nilai Data:', data.data);
            displayNilai(data.data);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}