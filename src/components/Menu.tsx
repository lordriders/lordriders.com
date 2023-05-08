export default function Menu() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark fixed-top justify-content-center"
      id="top-bar"
    >
      <div className="container">
        <div className="d-flex flex-column align-items-center w-100">
          <div>
            <button
              id="nav-toggler-btn"
              className="navbar-toggler align-self-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>{" "}
            &nbsp;&nbsp;&nbsp;
            <a className="navbar-brand" href="#banner">
              LORD RIDERS MOTO CLUBE
            </a>
          </div>
          <div>
            <div
              className="navbar-collapse collapse w-100 order-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="sobreDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sobre
                  </span>
                  <ul className="dropdown-menu" aria-labelledby="sobreDropdown">
                    <li>
                      <a className="dropdown-item" href="#sobre">
                        Quem somos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#historia">
                        História
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#cpc">
                        CPC
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#diretoria">
                        Diretoria
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="atuacaoDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Atuação
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="atuacaoDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#atuacao">
                        Nossas Ações
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#ppv">
                        Pilotando Para Vida
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="chaptersDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Chapters
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="chaptersDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#chapter-diversos">
                        Curitiba
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#participe">
                    Participe
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#fotos">
                    Fotos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contato">
                    Contato
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#calendario">
                    Calendário
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#ppv" className="btn btn-primary">
                    Pilotando Para Vida
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
