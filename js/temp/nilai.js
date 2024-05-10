export function generateNilaiTable(nilai) {
    return `
        <td>
            <span class="fw-normal">${nilai.biodata.nama}</span>
        </td>
        <td>
            <span class="fw-normal">${nilai.mata_kuliah}</span>
        </td>
        <td>
            <span class="fw-normal">${nilai.nilai_mhs}</span>
        </td>
        <td>
            <span class="fw-normal">${nilai.biodata.kelas}</span>
        </td>
    `;
}