const DEFAULT_DISPLAYED_USER_COMMENTS = 5;

const socialCommentsElement = document.querySelector('.social__comments');
const сommentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const сommentCountElement = document.querySelector('.social__comment-count');
const loadCommentsButton = document.querySelector('.comments-loader');

export default function initComments() {
  loadMoreComment();
  loadCommentsButton.addEventListener('click', loadMoreComment);

  function loadMoreComment(allComments) {
    const currentNumber = socialCommentsElement.childElementCount;
    let endsOfComment = currentNumber + DEFAULT_DISPLAYED_USER_COMMENTS;
    const {length} = allComments;
    const allCommentsWillBeDisplayed = endsOfComment > length;

    endsOfComment = allCommentsWillBeDisplayed ? length : endsOfComment;

    userCommentsRendering(allComments.slice(currentNumber, endsOfComment));
    сommentCountElement.textContent = `${endsOfComment} из ${length} комментариев`;
    loadCommentsButton.hidden = allCommentsWillBeDisplayed;
  }

  return function resetUserComments() {
    socialCommentsElement.textContent = '';
    loadCommentsButton.removeEventListener('click', loadMoreComment);
  };
}

function userCommentsRendering(comments) {
  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = сommentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsListFragment.append(commentElement);
  });

  socialCommentsElement.append(commentsListFragment);
}
