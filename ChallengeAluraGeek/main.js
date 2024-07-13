const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const card = e.target.parentNode; // seleciona o card pai do botão
    card.remove();
  });
});




