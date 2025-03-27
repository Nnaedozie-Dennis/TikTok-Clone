

document.querySelectorAll("#heart-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    this.classList.toggle("liked");
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
          entry.target.currentTime = 0; 
        }
      });
    },
    { threshold: 0.5 }
  );

  videos.forEach((video) => {
    video.loop = true;

    observer.observe(video);

    video.addEventListener("play", () => {
      videos.forEach((v) => {
        if (v !== video) {
          v.pause();
          v.currentTime = 0; 
        }
      });
    });

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});









