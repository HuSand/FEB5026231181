document.addEventListener('DOMContentLoaded', function () {
    const topButtons = document.getElementById('top-buttons');
    const capsule = document.getElementById('capsule');

    function checkScrollPosition() {
        const capsuleTop = capsule.getBoundingClientRect().top;
        const topButtonsBottom = topButtons.getBoundingClientRect().bottom;
        
        if (topButtonsBottom >= capsuleTop) {
            // Kalau tombol bawahnya udah nyentuh atau ngelewati atas capsule
            topButtons.classList.add('hidden');
        } else {
            // Aman, belum nyentuh capsule
            topButtons.classList.remove('hidden');
        }
        }

    // Jalankan saat scroll dan resize
    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    checkScrollPosition(); // Jalankan sekali di awal
});
  
