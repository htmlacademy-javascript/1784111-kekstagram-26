const DEFAULT_DISPLAED_USER_COMMENTS = 5;

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
  document.body.classList.add('modal-open');
  bigPictureImgElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  socialCaptionElement.textContent = photo.description;

  userCommentsRendering(photo.comments);

  const socialCommentCollection = socialCommentsElement.children;

  for(let i = DEFAULT_DISPLAED_USER_COMMENTS; i < photo.comments.length; i++) {
    socialCommentCollection[i].classList.add('hidden');
  }

  let currentDisplayedUserComments = DEFAULT_DISPLAED_USER_COMMENTS;

  socialCommentCountElement.textContent = (photo.comments.length < DEFAULT_DISPLAED_USER_COMMENTS) ?
    `${socialCommentCollection.length} из ${photo.comments.length} комментариев`:
    `${DEFAULT_DISPLAED_USER_COMMENTS} из ${photo.comments.length} комментариев`;

  if (DEFAULT_DISPLAED_USER_COMMENTS >= photo.comments.length) {
    commentsLoaderElement.classList.add('hidden');
  }

  function displayUserComments () {
    for(let i = 0; i < 5; ++i) {
      if (currentDisplayedUserComments < photo.comments.length) {
        socialCommentCollection[currentDisplayedUserComments].classList.remove('hidden');
        currentDisplayedUserComments++;
      }
    }

    if (currentDisplayedUserComments === photo.comments.length) {
      commentsLoaderElement.classList.add('hidden');
    }

    socialCommentCountElement.textContent = `${currentDisplayedUserComments} из ${photo.comments.length} комментариев`;
  }

  commentsLoaderElement.addEventListener('click', displayUserComments);
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
  commentsLoaderElement.classList.remove('hidden');
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
