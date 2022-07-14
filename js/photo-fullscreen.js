const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = document.querySelector('.big-picture__img img');
const socialCommentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const likesCountElement = document.querySelector('.likes-count');
const socialCaptionElement = document.querySelector('.social__caption');
const socialCommentsElement = document.querySelector('.social__comments');
const UserCommentTemplate = document.querySelector('#user-comment').content.querySelector('.social__comment');


function openFullScreenPhoto(photo) {
  bigPictureElement.classList.remove('hidden');
  socialCommentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.body.classList.add('modal-open');

  bigPictureImgElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  socialCommentCountElement.textContent = (photo.comments.length < 5) ? 'Показаны все комментарии' :
    `5 из ${photo.comments.length} комментариев`;
  socialCaptionElement.textContent = photo.description;

  userCommentsRendering(photo.comments);

  bigPictureCancelElement.addEventListener('click', closeFullScreenPhotoOnClick);
  document.addEventListener('keydown', closeFullScreenPhotoOnEsc);
}

function userCommentsRendering(comments) {
  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = UserCommentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    commentsListFragment.append(commentElement);
  });

  socialCommentsElement.append(commentsListFragment);
}

function resetUserComments() {
  socialCommentsElement.textContent = '';
}

function closeFullScreenPhotoOnClick () {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetUserComments();

  bigPictureCancelElement.removeEventListener('click', closeFullScreenPhotoOnClick);
  document.removeEventListener('keydown', closeFullScreenPhotoOnEsc);
}

function closeFullScreenPhotoOnEsc (evt) {
  if (evt.key === 'Escape') {
    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    resetUserComments();

    bigPictureCancelElement.removeEventListener('click', closeFullScreenPhotoOnClick);
    document.removeEventListener('keydown', closeFullScreenPhotoOnEsc);
  }
}

export {openFullScreenPhoto};
