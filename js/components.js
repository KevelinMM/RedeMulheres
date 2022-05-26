class Header extends HTMLElement { 
    connectedCallback() {
      this.innerHTML = `

                
              <!-- Navigation-->
              <nav class="navbar bg-rede2 fixed-top" id="mainNav">
                  <div class="container">
                      <a class="navbar-brand fs-5" href="../"><img src="../assets/LogoB.png" style="width:55px; height:30px"/></a>
                      <button class="navbar-toggler text-uppercase font-weight-bold bg-rede text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          Menu
                          <i class="fas fa-bars"></i>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarResponsive">
                          <ul class="navbar-nav ms-auto"><br>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/index.html">Home</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/paginas/apresentacao.html">Apresentação</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/paginas/comoajudamos.html">Como Ajudamos</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/paginas/transparencia.html">Transparência</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/paginas/doacao.html">Contribuições</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/paginas/voluntariado.html">Voluntariado</a></li>
                              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/paginas/informese.html">Informe-se</a></li>
                          </ul>
                      </div>
                  </div>
              </nav>

              <!-- Masthead-->
              <header class="masthead bg-rede text-white text-center">
                  <div class="container d-flex align-items-center flex-column">
                      <!-- Masthead Avatar Image-->
                      <img class="masthead-avatar mb-5" src="../assets/LogoNova.png" alt="Logo Rede Feminina de Combate ao Câncer de Fraiburgo " />
                      <!-- Masthead Heading-->
                      <h1 class="masthead-heading fs-3 text-uppercase  mb-0">Rede Feminina de Combate ao Câncer - Fraiburgo</h1>
                      <!-- Icon Divider-->
                      <span class= "frase">"A doação que não espera por uma retribuição é um verdadeiro ato de amor!"</span>
                   
                      
                  </div>
              </header>

      `;
    }
}


    class Footer extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `	 
          
          <!-- Footer-->
          <footer class="footer bg-rede2 text-center">
              <div class="container">
                  <div class="row">
                      <!-- Footer Location-->
                      <div class="col-lg-4 mb-5 mb-lg-0">
                          <h4 class="text-uppercase mb-4">Localização</h4>
                          <p class="lead mb-0">
                          Av. Santa Catarina, n. 131 <br> Bela Vista <br>
                          Fraiburgo (SC), Brasil
                              
                          </p>
                      </div>
                      <!-- Footer Social Icons-->
                      <div class="col-lg-4 mb-5 mb-lg-0">
                          <h4 class="text-uppercase mb-4">Redes Sociais</h4>
                          <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.facebook.com/rfccfraiburgo"><i class="fab fa-fw fa-facebook-f"></i></a>
                          <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.instagram.com/redefemininafraiburgo/"><i class="fa-brands fa-instagram"></i></i></a>
                          <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="#!"><i class="fa-brands fa-whatsapp"></i></i></a>
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
              <div class="container"><small>Créditos: Juntos Pelo Objetivo</small></div>
          </div>

          `;
        }
    }



customElements.define('main-header', Header);
customElements.define('main-footer', Footer);