// Data riwayat pendakian
const dataPendakian = {
    Lukman: [
        { nama: "Mt. Penanggungan", gambar: "20250405_070153_📸LEICA✨ XIAOMI ✨.jpg" },
        { nama: "Mt. Tanggung", gambar: "IMG-20240916-WA0055.jpg" },
        { nama: "Mt. penanggungan", gambar: "IMG_20241013_044120.jpg" }
    ],
    siti: [
        { nama: "Mt. Buthak", gambar: "IMG-20251025-WA0331.jpg" },
        { nama: "Mt. Penanggungan", gambar: "Salinan IMG-20240916-WA0046.jpg" },
        { nama: "Mt. Puthuk gragal", gambar: "DSCO1166.JPG" }
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
