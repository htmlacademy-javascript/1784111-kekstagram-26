const ALERT_SHOW_TIME = 10000;

function displayLoadErrorMessage() {
  const loadErrorMessage = document.createElement('p');
  loadErrorMessage.style.position = 'absolute';
  loadErrorMessage.style.left = '0';
  loadErrorMessage.style.top = '0';
  loadErrorMessage.style.right = '0';
  loadErrorMessage.style. margin = 0;
  loadErrorMessage.style.padding = '20px 3px';
  loadErrorMessage.style.fontSize = '16px';
  loadErrorMessage.style.textTransform = 'none';
  loadErrorMessage.style.textAlign = 'center';
  loadErrorMessage.style.backgroundColor = 'red';
  loadErrorMessage.textContent = 'Ошибка загрузки фотографий других пользователей. Попробуйте перезагрузить страницу, если проблема не будет устранена, попробуйте позже.';
  document.body.append(loadErrorMessage);

  setTimeout(() => {
    loadErrorMessage.remove();
  }, ALERT_SHOW_TIME);
}

export{displayLoadErrorMessage};
