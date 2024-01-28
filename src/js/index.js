// pegar a classe do html
const botao = document.querySelector(".btn-plataforma");
//pegar a classe das plataformas que é a subclasse
const elementoPlataformas = document.querySelector(
  ".btn-plataforma .plataformas"
);

// pegar o clique do usuário
botao.addEventListener("click", () => {
  // "toggle" dar a função de abrir e fechar o botão sem precisar usar o if e o else. Neste caso a classe "ativo" foi feita no css para ativar e desativar as plataformas que estão dentro do .btn-plataforma.
  elementoPlataformas.classList.toggle("ativo");
});
