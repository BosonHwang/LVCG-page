document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-bibtex');
  const bibtexEl = document.getElementById('bibtex');

  if (copyBtn && bibtexEl) {
    copyBtn.addEventListener('click', async () => {
      const text = bibtexEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      } catch {
        copyBtn.textContent = 'Failed';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      }
    });
  }
});
