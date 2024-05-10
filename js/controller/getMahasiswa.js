import { mahasiswahero } from "../config/url.js";
import { generateMahasiswaTable } from "../temp/mahasiswa.js";

function displayMahasiswa(nilaiData) {
    const tableBody = document.getElementById('iniMahasiswa');
    tableBody.innerHTML = '';

    nilaiData.forEach(mhs => {
        const row = document.createElement('tr');
        row.className = "bg-white border-b dark:bg-zinc-800 dark:border-zinc-700";
        row.innerHTML = generateMahasiswaTable(mhs);
        tableBody.appendChild(row);
    });
}

export function getMahasiswa() {
    console.log('Fetching Mahasiswa Data...');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(mahasiswahero, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Mahasiswa Data:', data.data);
            displayMahasiswa(data.data);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}