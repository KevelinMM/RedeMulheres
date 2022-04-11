class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `


              <!-- Navigation-->
              <nav class="navbar bg-secondary fixed-top" id="mainNav">
                  <div class="container">
                      <a class="navbar-brand" href="#page-top">REDE FEMININA DE COMBATE AO CÂNCER</a>
                      <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          Menu
                          <i class="fas fa-bars"></i>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarResponsive">
                          <ul class="navbar-nav ms-auto">
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="apresentacao.html">Apresentação</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="comoajudamos.html">Como Ajudamos</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="depoimentos.html">Depoimentos</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="doacao.html">Contribuições</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="voluntariado.html">Voluntariado</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="cadastro.html">Login</a></li>
                          </ul>
                      </div>
                  </div>
              </nav>

              <!-- Masthead-->
              <header class="masthead bg-primary text-white text-center">
                  <div class="container d-flex align-items-center flex-column">
                      <!-- Masthead Avatar Image-->
                      <img class="masthead-avatar mb-5" src="../assets/img/portfolio/rede.png" alt="Logo Rede Feminina de Combate ao Câncer de Fraiburgo " />
                      <!-- Masthead Heading-->
                      <h1 class="masthead-heading text-uppercase mb-0">Rede Feminina de Combate ao Câncer</h1>
                      <!-- Icon Divider-->
                      <div class="divider-custom divider-light">
                          <div class="divider-custom-line"></div>
                          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                          <div class="divider-custom-line"></div>
                      </div>
                      <!-- Masthead Subheading-->
                      <p class="masthead-subheading font-weight-light mb-0">Fraiburgo</p>
                  </div>
              </header>

      `;
    }
}


    class Footer extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `	 
          
          <!-- Footer-->
          <footer class="footer text-center">
              <div class="container">
                  <div class="row">
                      <!-- Footer Location-->
                      <div class="col-lg-4 mb-5 mb-lg-0">
                          <h4 class="text-uppercase mb-4">Localização</h4>
                          <p class="lead mb-0">
                              Fraiburgo
                              <br />
                              Santa Catarina, Brasil
                          </p>
                      </div>
                      <!-- Footer Social Icons-->
                      <div class="col-lg-4 mb-5 mb-lg-0">
                          <h4 class="text-uppercase mb-4">Redes Sociais</h4>
                          <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/rfccfraiburgo"><i class="fab fa-fw fa-facebook-f"></i></a>
                          <a class="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/redefemininafraiburgo/"><i class="fa-brands fa-instagram"></i></i></a>
                          <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa-brands fa-whatsapp"></i></i></a>
                      </div>
                      <!-- Footer About Text-->
                      <div class="col-lg-4">
                          <h4 class="text-uppercase mb-4">Contato</h4>
                          <p class="lead mb-0">
                              redefemininafraiburgo@gmail.com
                          </p>
                      </div>
                  </div>
              </div>
          </footer>
          <!-- Copyright Section-->
          <div class="copyright py-4 text-center text-white">
              <div class="container"><small>Creditos: Juntos Pelo Objetivo</small></div>
          </div>

          `;
        }
    }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);