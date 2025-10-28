
        const trailerVideo = document.getElementById("trailerVideo");
        const trailerModal = document.getElementById("trailerModal");

        function playTrailer(url) {
            trailerVideo.src = url;
        }

        trailerModal.addEventListener('hidden.bs.modal', () => {
            trailerVideo.src = ""; // stops video when closed
        });

        // Wait for everything to load
    window.addEventListener('load', function () {
      const loadingScreen = document.getElementById('loadingScreen');
      const mainContent = document.getElementById('mainContent');

      loadingScreen.classList.add('fade-out'); // fade effect
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
      }, 2500);
    });
    