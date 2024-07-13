const form = document.getElementById('product-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const price = formData.get('price');
  console.log(`Nome: ${name}, Preço: R$ ${price}`);
  // Aqui você pode enviar os dados para o servidor ou fazer outras ações
});
