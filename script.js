document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector("#like-btn");
  const likeCountEl = document.querySelector("#like-count");

  if (!likeBtn || !likeCountEl) return;

  let count = 800;
  let isLiked = false;

  const formatLikes = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  likeCountEl.textContent = formatLikes(count);

  likeBtn.addEventListener("click", () => {
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
  });
});