
        const trailerVideo = document.getElementById("trailerVideo");
        const trailerModal = document.getElementById("trailerModal");

        function playTrailer(url) {
            trailerVideo.src = url;
        }

        trailerModal.addEventListener('hidden.bs.modal', () => {
            trailerVideo.src = ""; // stops video when closed
        });
    