export default function CPC() {
  return (
    <section className="section static-dark" id="cpc">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center align-self-center">
            <picture className="figure">
              <source srcSet="/media/figs/baluartes.webp" type="image/webp" />
              <img
                src="/media/figs/baluartes.jpeg"
                alt="CPC"
                className="flip-card-img figure-img img-fluid rounded"
              />
            </picture>
          </div>
          <div className="col-lg-6 fs-5">
            <h3 className="h3">CPC (Fundadores)</h3>
            <p>
              O CPC são as iniciais de um jeito carinhoso que nosso atual
              Presidente, se referia a ele e aos amigos Paulo Quinelato e Cézar
              Eitelwein. Foram esses três homens, juntamente com as suas inseparáveis esposas, que em meio a muitos desafios, se mantiveram unidos e num momento crucial da nossa história, persistiram trabalhando para que o Moto Clube caminhasse firme na visão presenteada por Deus. Inúmeras pessoas
              contribuíram nesse processo, mas o CPC, se mantém até hoje como
              fonte de inspiração e baluartes dos propósitos para os quais
              Cristo chamou o nosso Lord Riders Moto Clube.
            </p>
            <p>O CPC é formado:</p>
            <ul>
              <li>
                <strong>Presi (Compadre)</strong> e sua esposa Márcia (Matika)
              </li>
              <li>
                <strong>Cézar VIP (Pilantra)</strong> e sua esposa Déborah
                (Deby)
              </li>
              <li>
                <strong>Paulo Quinelato (Capitão)</strong> e sua esposa Dorli
                (Sinhá)
              </li>
            </ul>
          </div>
        </div>
        <a href="#top-bar" className="back-top a-light">
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
      </div>
    </section>
  );
}
