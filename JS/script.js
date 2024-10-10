// ------------Navbar---------------------
// Toggle class active untuk hamburger menu

const navbarNav = document.querySelector('.navbar-nav');

			// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// Klik di luar element
const hm = document.querySelector('#hamburger-menu');



document.addEventListener('click', function (e) {
	if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}

});
// ------------------------------------------------------------//



// Tampilkan gambar pertama dan aktifkan dot pertama
showImage(currentImageIndex);


// EXPERIENCE
function openModal(imageSrc) {
    // Menampilkan modal
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    // Menampilkan gambar di dalam modal
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;

    // Caption (bisa diambil dari data lain jika diperlukan)
    const caption = document.getElementById("caption");
    caption.innerHTML = "This is the image related to the experience"; // Bisa diganti dengan caption yang relevan
}

function closeModal() {
    // Menutup modal dengan transisi yang mulus
    const modal = document.getElementById("modal");
    modal.style.opacity = 0;  // Ubah opacity untuk animasi keluar
    setTimeout(() => {
        modal.style.display = "none"; // Setelah animasi, baru sembunyikan
        modal.style.opacity = 1;  // Reset opacity untuk modal berikutnya
    }, 500); // Sesuaikan durasi dengan animasi CSS (0.5s)
}



