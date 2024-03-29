export default function Diretoria() {
  return (
    <section className="section static-light" id="diretoria">
      <div className="container">
        <h2 className="h2">Diretoria Geral</h2>
        <div className="row">
          <div className="col-md-3 text-center">
            <picture className="figure">
              <img
                src="/media/figs/diretoria/Presi2024.webp"
                className="figure-img img-fluid diretor"
                alt="Presidente"
              />
            </picture>
            <h3 className="h3">Presidente</h3>
            <strong>Marcão</strong>
            <p className="text-muted">(Marco Sanson)</p>
          </div>
          <div className="col-md-3 text-center">
            <picture className="figure">
              <img
                src="/media/figs/diretoria/Crei2024.webp"
                className="figure-img img-fluid diretor"
                alt="Vice Presidente"
              />
            </picture>
            <h3 className="h3">Vice Presidente</h3>
            <strong>Crei</strong>
            <p className="text-muted">(Mateus Andre Matitz da Silva)</p>
          </div>
          <div className="col-md-3 text-center">
            <picture className="figure">
              <img
                src="/media/figs/diretoria/Arana.webp"
                className="figure-img img-fluid diretor"
                alt="Segundo Tesoureiro"
              />
            </picture>
            <h3 className="h3">1* Secretário</h3>
            <strong>Arana</strong>
            <p className="text-muted">(Arthur Arana)</p>
          </div>
          <div className="col-md-3 text-center">
            <picture className="figure">
              <img
                src="/media/figs/diretoria/Gabizinha.webp"
                className="figure-img img-fluid diretor"
                alt="Segundo Tesoureiro"
              />
            </picture>
            <h3 className="h3">2* Secretário</h3>
            <strong>Gabizinha</strong>
            <p className="text-muted">(Gabriela Mincewicz)</p>
          </div>
          <div className="col-md-3 text-center">
            <picture className="figure">
              <img
                src="/media/figs/diretoria/Fabiano.webp"
                className="figure-img img-fluid diretor"
                alt="Primeiro Secretário"
              />
            </picture>
            <h3 className="h3">1* Tesoureiro</h3>
            <strong>Fabiano</strong>
            <p className="text-muted">(Fabiano Walczak)</p>
          </div>
          <div className="col-md-3 text-center">
            <picture className="figure">
              <img
                src="/media/figs/diretoria/Rosi.webp"
                className="figure-img img-fluid diretor"
                alt="Segundo Tesoureiro"
              />
            </picture>
            <h3 className="h3">2* Tesoureiro</h3>
            <strong>Rose</strong>
            <p className="text-muted">(Rosilene Miskalo)</p>
          </div>
          <div className="col-md-3 text-center">
            <picture className="figure">
              <img
                src="/media/figs/diretoria/Kazinho.webp"
                className="figure figure-img img-fluid diretor"
                alt="Diretor de Planejamento"
              />
            </picture>
            <h3 className="h3">Diretor de Planejamento</h3>
            <strong>Kazinho</strong>
            <p className="text-muted">(Kanttly Daniel de Jesus)</p>
          </div>     
        </div>
      </div>
      <a href="#top-bar" className="back-top a-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      </a>
    </section>
  );
}
