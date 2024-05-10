export function generateMahasiswaTable(mahasiswa) {
    const alamat = mahasiswa.alamat;
    const fullAlamat = `${alamat.jalan} No. ${alamat.no_rumah}, RT ${alamat.rt} / RW ${alamat.rw}, Kode Pos: ${alamat.kodepos}`;
    return `
        <td>
            <span class="fw-normal">${mahasiswa.nama}</span>
        </td>
        <td>
            <span class="fw-normal">${mahasiswa.phone_number}</span>
        </td>
        <td>
            <span class="fw-normal">${mahasiswa.kelas}</span>
        </td>
        <td>
        <span class="fw-normal">${fullAlamat}</span>
    </td>
    `;
}
