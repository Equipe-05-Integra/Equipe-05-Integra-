class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <footer>
             <div class="footer_container">
                 <div class="footer_info coluna">
                 <a href "/index/html"> 
                     <img src="/img/Logo_Integra_footer.svg" alt="Logo Integra+" class="logo_footer">
                </a>
                     <p class="footer_description"> 
                         A plataforma que ajuda empresas a
                         medir, planejar e executar a
                         transformação para a acessibilidade
                         real e inclusão genuína.
                     </p>

                     <div class="container_rede_sociais">
                         <a href="#"><img src="../img/Linkedin.svg" alt="Linkedin"></a>
                         <a href="#"><img src="../img/Instagram.svg" alt="Instagram"></a>
                         <a href="#"><img src="../img/Facebook.svg" alt="Facebook"></a>
                         <a href="#"><img src="../img/Linkee.svg" alt="Linkee"></a>
                     </div>
                 </div>

                 <div class="footer_links plataforma">
                    <div class="footer_plataforma coluna">
                         <h4>Plataforma</h4>
                         <nav class="footer-nav">
                             <a href="/index.html">Início</a>
                             <a href="/pages/12_Sobre_Nos.html">Quem Somos</a>
                             <a href="/pages/03_servicos.html">Serviços</a>
                             <a href="/pages/05_suporte.html">Suporte</a>
                             <a href="/pages/04_treinamentos.html">Treinamentos</a>
                             <a href="/pages/07_diagnostico.html">Diagnóstico Básico</a>
                         </nav>
                     </div>
                 </div>

                 <div class="footer_links recursos">
                    <div class="footer_recursos coluna">
                         <h4>Recursos</h4>
                         <nav class="footer-nav">
                             <a href="/pages/noticias.html">Acessibilidade no Brasil</a>
                             <a href="https://drive.prefeitura.sp.gov.br/cidade/secretarias/upload/NBR9050_20.pdf">Guia NBR 9050</a>
                             <a href="https://guia-wcag.com/">WCAG para empresas</a>
                             <a href="/pages/03_servicos.html#servicos">Diagnóstico Detalhado</a>
                         </nav>
                     </div>
                 </div>

                 <div class="footer_links contato">
                     <div class="footer_contato coluna">
                         <h4>Contato</h4>
                         <nav class="footer-nav">
                             <a>integra_mais@gmail.com</a>
                             <a>(11) 3123-4567</a>
                             <a class="info_contato">Av. Paulista, 1234 — São Paulo (Local)</a>
                             <a class="info_contato">Seg–Sex, 9h–18h (Suporte)</a>
                         </nav>
                     </div>
                 </div>
             </div> 
          </footer>
        `;
    }
}

customElements.define('footer-componente', Footer);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('footer-visivel');
        }
    });
}, { threshold: 0.1 });

const footerElement = document.querySelector('footer-componente');
if (footerElement) {
    observer.observe(footerElement);
}  

window.addEventListener('load', () => {
    const footer = document.querySelector('footer-componente');
    if (footer) {
        setTimeout(() => {
            footer.classList.add('footer-visivel');
        }, 300);
    }
});

window.addEventListener("load", () => {
    const coluna = document.querySelectorAll(".coluna");
    coluna.forEach((coluna, index) => {
        setTimeout(() => {
            coluna.style.opacity = "1";
            coluna.style.transform = "translateY(0)";
        }, 300 * index);
    });
});