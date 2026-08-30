document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('main-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form -> mailto
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nome = form.nome.value.trim();
      var email = form.email.value.trim();
      var telefone = form.telefone.value.trim();
      var ano = form.ano.value;
      var modalidade = form.modalidade.value;
      var mensagem = form.mensagem.value.trim();

      var subject = 'Pedido de informações — Explica FQA';
      var bodyLines = [
        'Nome: ' + nome,
        'Email: ' + email,
        'Telefone: ' + (telefone || '—'),
        'Ano: ' + ano,
        'Modalidade: ' + modalidade,
        '',
        mensagem
      ];

      var mailto =
        'mailto:explica.fqa@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;
    });
  }

});
