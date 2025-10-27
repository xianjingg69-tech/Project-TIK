// Data riwayat pendakian
const dataPendakian = {
    Lukman: [
        { nama: "Mt. Penanggungan", gambar: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Mount_Gede_Pangrango.jpg" },
        { nama: "Mt. Tanggung", gambar: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Mount_Semeru_in_the_morning.jpg" },
        { nama: "Bukit Krapyak", gambar: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Merbabu_2020.jpg" }
    ],
    siti: [
        { nama: "Mt. Buthak", gambar: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Bromo-Semeru-Batok-Widodaren.jpg" },
        { nama: "Mt. Penanggungan", gambar: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Mount_Rinjani_2013.jpg" },
        { nama: "Mt. Puthuk gragal", gambar: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gunung_Papandayan_1.jpg" }
    ]
};

// Menampilkan riwayat pendakian ketika nama diklik
function tampilkanRiwayat(nama) {
    const container = document.getElementById(`riwayat-${nama}`);
    container.innerHTML = ""; // hapus isi sebelumnya

    dataPendakian[nama].forEach(item => {
        const tombol = document.createElement("button");
        tombol.textContent = item.nama;
        tombol.onclick = () => tampilkanGambar(item.gambar);
        container.appendChild(tombol);
    });
}

// Menampilkan gambar dalam modal
function tampilkanGambar(url) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modalImg.src = url;
    modal.style.display = "flex";
}

// Menutup modal saat diklik
function tutupModal() {
    document.getElementById("modal").style.display = "none";
}
