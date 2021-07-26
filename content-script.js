setInterval(() => {
  document.querySelectorAll("[aria-label='「興味なし」に設定']").forEach(el => {
    el.click();
  });
}, 3000);
