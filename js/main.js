(() => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const year = document.querySelector('#copyright-year');
  const projectForm = document.querySelector('#project-form');
  const formStatus = document.querySelector('#form-status');
  const draftCopyFallback = document.querySelector('#draft-copy-fallback');
  const draftCopyText = document.querySelector('#draft-copy-text');
  const draftCopyButton = document.querySelector('#draft-copy-button');

  // Mail clients differ in how much URL data they accept. Keep long drafts
  // available as selectable text instead of risking truncation in a mailto URL.
  const maxMailtoLength = 8000;

  if (year) year.textContent = String(new Date().getFullYear());

  if (toggle && navigation) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.dataset.collapsed = 'true';
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      navigation.dataset.collapsed = String(isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a[href]')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
  }

  if (projectForm) {
    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!projectForm.checkValidity()) {
        projectForm.reportValidity();
        return;
      }

      const values = new FormData(projectForm);
      const inquiryType = String(values.get('Inquiry type') || 'General inquiry');
      const subject = `Project inquiry: ${inquiryType}`;
      const body = [
        `Name: ${values.get('Name') || ''}`,
        `Email: ${values.get('Email') || ''}`,
        `Company: ${values.get('Company') || 'Not provided'}`,
        `Inquiry type: ${inquiryType}`,
        `Expected timeframe: ${values.get('Expected timeframe') || 'Not provided'}`,
        '',
        String(values.get('Project description') || '')
      ].join('\n');
      const mailto = `mailto:fidanabdiu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (mailto.length > maxMailtoLength) {
        if (draftCopyText) {
          draftCopyText.value = `To: fidanabdiu@gmail.com\nSubject: ${subject}\n\n${body}`;
        }
        if (draftCopyFallback) draftCopyFallback.hidden = false;
        if (formStatus) {
          formStatus.textContent = 'This message is too long to open reliably as an email link. Copy the complete draft below and send it to Fidan. Nothing has been sent.';
        }
        if (draftCopyText) {
          draftCopyText.focus();
          draftCopyText.select();
        }
        return;
      }

      if (formStatus) {
        formStatus.textContent = 'Your email app should open with a draft. Review and send it there; this site has not received or stored your inquiry.';
      }

      window.location.href = mailto;
    });
  }

  if (draftCopyButton && draftCopyText) {
    draftCopyButton.addEventListener('click', async () => {
      if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(draftCopyText.value);
          if (formStatus) {
            formStatus.textContent = 'Draft copied. Paste it into an email to Fidan and send it when ready. Nothing has been sent.';
          }
          return;
        } catch {
          // Keep the selectable text fallback available when clipboard access is denied.
        }
      }

      draftCopyText.focus();
      draftCopyText.select();
      if (formStatus) {
        formStatus.textContent = 'The draft is selected. Copy it using your device’s copy command, then paste it into an email to Fidan. Nothing has been sent.';
      }
    });
  }

  document.documentElement.classList.add('js');
})();
