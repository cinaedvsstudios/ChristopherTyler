const video = document.getElementById('project-video');
const source = document.getElementById('project-source');
const files = ['introvideo.mp4', 'whalevid.mp4', 'gameplay.mp4'];
const buttons = document.querySelectorAll('.video-dot');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    video.pause();
    source.src = files[index];
    video.load();

    buttons.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
  });
});