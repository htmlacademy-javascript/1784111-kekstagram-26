const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

const uploadImgElement = document.querySelector('#upload-file');
const previewImageElement = document.querySelector('.img-upload__preview img');

uploadImgElement.addEventListener('change', () => {
  const file = uploadImgElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewImageElement.src = URL.createObjectURL(file);
  }
});

