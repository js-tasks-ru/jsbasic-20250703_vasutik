function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const toggleText = document.getElementById('text');

  toggleButton.addEventListener('click', () => {
    toggleText.hidden = !toggleText.hidden;
  });
}
