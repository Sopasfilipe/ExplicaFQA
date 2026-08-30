const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
  });
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent('Pedido de informações — Explica FQA');
  const body = encodeURIComponent(
`Nome: ${data.get('nome')}
Email: ${data.get('email')}
Telefone: ${data.get('telefone') || 'Não indicado'}
Ano de escolaridade: ${data.get('ano')}
Modalidade: ${data.get('modalidade')}

Mensagem:
${data.get('mensagem')}`
  );
  window.location.href = `mailto:explica.fqa@gmail.com?subject=${subject}&body=${body}`;
});
