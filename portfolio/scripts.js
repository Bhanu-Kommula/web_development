function playVideo(videoFileName) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoFileName; // Make sure the video path matches the actual video location
    videoPlayer.style.display = 'block'; // Make the video player visible
    videoPlayer.load(); // Necessary to reload the new source
    videoPlayer.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the video player

    videoPlayer.play().catch(error => {
        console.error("Error trying to play the video:", error.message);
    });
}


