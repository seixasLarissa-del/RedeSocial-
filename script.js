document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector("#like-btn");
  const likeCountEl = document.querySelector("#like-count");

  if (!likeBtn || !likeCountEl) return;

  // Contador numérico real controlado exclusivamente pelo JS
  let count = 800;
  let isLiked = false;

  // Formata o número: exibe o valor normal até 999 e inclui o 'k' a partir de 1000
  const formatLikes = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  // Força a renderização inicial na tela para 800
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

    // Atualiza o texto na tela a cada clique
    likeCountEl.textContent = formatLikes(count);
  });
});