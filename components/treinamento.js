document.addEventListener("DOMContentLoaded", () => {

  const numeros = document.querySelectorAll('.trin_h3');

  const animarNumero = (el) => {
    const final = parseInt(el.dataset.numero);
    let atual = 0;

    const incremento = Math.max(1, Math.floor(final / 100));

    const intervalo = setInterval(() => {
      atual += incremento;

      if (atual >= final) {
        atual = final;
        clearInterval(intervalo);
      }

      if (el.dataset.numero == 3) {
        el.textContent = atual + "x";
      } else {
        el.textContent = atual + "%";
      }

    }, 30);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animarNumero(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  numeros.forEach(el => observer.observe(el));

});



// carrocel
document.addEventListener("DOMContentLoaded", function () {

  const janela = document.querySelector('.janela');

  window.rolar = function (direcao) {
    const card = document.querySelector('.item');
    if (!card || !janela) return;

    const larguraCard = card.offsetWidth + 25;

    if (direcao === 'dir') {
      janela.scrollBy({ left: larguraCard, behavior: 'smooth' });
    } else {
      janela.scrollBy({ left: -larguraCard, behavior: 'smooth' });
    }
  };

  function autoScroll() {
    if (!janela) return;
    const card = document.querySelector('.item');
    const larguraCard = card.offsetWidth + 25;


    if (janela.scrollLeft + janela.offsetWidth >= janela.scrollWidth - 10) {
      janela.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      janela.scrollBy({ left: larguraCard, behavior: 'smooth' });
    }
  }

  let intervalo = setInterval(autoScroll, 4000);


  janela.addEventListener('mouseenter', () => clearInterval(intervalo));
  janela.addEventListener('mouseleave', () => intervalo = setInterval(autoScroll, 4000));
});



// comentario
function enviar(evento) {
  evento.preventDefault(); 

  const botao = document.getElementById('botaoAcao');
  const diagnostico = document.getElementById('linkDiag');
  const mensagem = document.getElementById('msgSucesso');

  botao.innerHTML = 'Enviando...';
  botao.disabled = true;

  setTimeout(() => {
    botao.style.display = 'none';
    mensagem.style.display = 'block'; 
    diagnostico.style.display = 'block';
  }, 1000);
}