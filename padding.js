function updatePaddingTop() {
  const body = document.querySelector('body');
  const fixedElement = document.querySelector('.header'); // Замените на селектор вашего элемента

  if (body && fixedElement) {
    const paddingTop = window.getComputedStyle(body).getPropertyValue('padding-top');
    fixedElement.style.paddingTop = paddingTop;
  }
}

// Создание экземпляра MutationObserver
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      updatePaddingTop();
    }
  });
});

// Наблюдение за изменениями атрибута 'style' у тега <body>
const body = document.querySelector('body');
if (body) {
  observer.observe(body, { attributes: true, attributeFilter: ['style'] });
}
