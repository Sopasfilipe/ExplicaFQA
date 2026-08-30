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

  // Contact form -> envio direto por email (via FormSubmit), sem abrir
  // o programa de email do utilizador.
  var form = document.getElementById('contact-form');
  if (form) {
    var submitButton = form.querySelector('button[type="submit"]');
    var note = form.querySelector('.form-note');
    var defaultNoteText = note ? note.textContent : '';

    var setNote = function (text, isError) {
      if (!note) return;
      note.textContent = text;
      note.style.color = isError ? '#b73c1d' : '';
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'A enviar...';
      }
      setNote('A enviar o pedido...', false);

      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Falha no envio');
          form.reset();
          if (submitButton) submitButton.textContent = 'Pedido enviado';
          setNote('Pedido enviado com sucesso. Entrarei em contacto brevemente.', false);
        })
        .catch(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar pedido';
          }
          setNote('Não foi possível enviar agora. Tente novamente ou contacte por WhatsApp/email.', true);
        });
    });
  }

});
