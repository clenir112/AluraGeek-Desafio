function removeCard(icon) {
  var card = icon.parentNode.parentNode; // Seleciona o elemento <div> que contém o produto do card
  card.remove(); // Remove o elemento <div> do DOM
}

export default removeCard;