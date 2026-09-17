document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector("#like-btn");
  const likeCountEl = document.querySelector("#like-count");
  const postMedia = document.querySelector(".post-media");

  if (!likeBtn || !likeCountEl) return;

  let count = 800;
  let isLiked = false;

  const formatLikes = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  likeCountEl.textContent = formatLikes(count);

  const toggleLike = () => {
    if (!isLiked) {
      count += 1;
      isLiked = true;
      likeBtn.classList.add("liked");
    } else {
      count -= 1;
      isLiked = false;
      likeBtn.classList.remove("liked");
    }
    likeCountEl.textContent = formatLikes(count);
  };

  // Curtir pelo botão de coração
  likeBtn.addEventListener("click", toggleLike);

  // Curtir ao dar duplo clique na foto/tela
  if (postMedia) {
    postMedia.addEventListener("dblclick", () => {
      if (!isLiked) {
        toggleLike();
      }
    });
  }
});