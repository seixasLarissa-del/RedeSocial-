document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão de curtir e o texto com o contador
  const likeBtn = document.querySelector("#like-btn");
  const likeCountEl = document.querySelector("#like-count");

  // Se o botão não existir na página, encerra a execução
  if (!likeBtn || !likeCountEl) return;

  // Define a quantidade inicial de likes e o estado (se já foi curtido ou não)
  let count = 1200; 
  let isLiked = false;

  // Escuta o clique no botão de curtir
  likeBtn.addEventListener("click", () => {
    const svg = likeBtn.querySelector("svg");

    if (!isLiked) {
      // Se não estava curtido: soma 1 e adiciona a classe 'liked'
      count += 1;
      isLiked = true;
      likeBtn.classList.add("liked");
    } else {
      // Se já estava curtido: subtrai 1 e remove a classe 'liked'
      count -= 1;
      isLiked = false;
      likeBtn.classList.remove("liked");
    }

    // Formata o número (se for 1200, exibe '1.2K')
    if (count >= 1000) {
      likeCountEl.textContent = (count / 1000).toFixed(1) + "K";
    } else {
      likeCountEl.textContent = count;
    }

    // Efeito visual de pulso no ícone
    if (svg) {
      svg.style.transform = "scale(1.3)";
      setTimeout(() => {
        svg.style.transform = "scale(1)";
      }, 150);
    }
  });
});