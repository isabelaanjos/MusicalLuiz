document.addEventListener('DOMContentLoaded', function() {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
  
botaoDeAcessibilidade.addEventListener('click', function (){
 botaoDeAcessibilidade.classList.toggle('rotacao-botao');
 opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

 const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

})

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');

  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1;

  if (aumentaFonteBotao && diminuiFonteBotao) {
    aumentaFonteBotao.addEventListener('click', function() {
      tamanhoAtualFonte = parseFloat((tamanhoAtualFonte + 0.1).toFixed(2));
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function() {
      tamanhoAtualFonte = parseFloat((tamanhoAtualFonte - 0.1).toFixed(2));
      if (tamanhoAtualFonte < 0.5) {
        tamanhoAtualFonte = 0.5;
      }
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
  }
});

  
  document.getElementById("alterna-contraste").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });