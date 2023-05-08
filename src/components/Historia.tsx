export default function Historia() {
  return (
    <section className="section static-light" id="historia">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="h3">História</h3>
            <p className="fs-6">
              Nascemos em Curitiba-PR, em 31 de Julho de 2015. O nosso MotoClube
              é fruto de uma visão dada em sonho, anos antes, a um dos nossos
              fundadores, onde uma multidão de motociclistas coletados abraçavam
              a praça central de uma cidade. O significado ficou exposto quando
              percebemos a necessidade de agirmos na transformação do
              comportamento urbano dos motociclistas, buscando oferecer um
              estilo de pilotar que viabilizasse a proteção de cada um no
              trânsito e nos demais momentos de nossa caminhada de vida.
            </p>
            <div className="collapse fs-6" id="collapseHistoria">
              <p>
                Nos intitulamos Lord Riders ou "Cavaleiros do Senhor", numa
                alusão ao pastor anglicano John Wesley, que no século XVIII
                percorreu quatrocentos mil quilômetros a cavalo, espalhando o
                Evangelho de Cristo.
              </p>
              <p>
                Começamos como um Moto Grupo, sendo que no decorrer da nossa
                estrada, percebemos que somente conseguiríamos avançar em nosso
                propósito se nos posicionássemos verdadeiramente como um Moto
                Clube. Isso aconteceu no ano de 2017, em especial ao iniciarmos
                o Projeto Pilotando para a Vida, uma das principais ações do
                LRMC, que doa a todos os motociclistas a oportunidade de
                aprender e se reciclar em técnicas de pilotagem que os ajudem a
                sobreviver em nosso trânsito, lugar onde todos nós arriscamos
                diariamente nossas vidas.
              </p>
              <p>
                Tivemos "altos e baixos", mas hoje estamos em plena expansão, já
                sendo reconhecidos pela sociedade paranaense como um Moto Clube
                que faz a diferença, inclusive recebendo Menção Honrosa
                outorgada pela Assembleia Legislativa do Estado do Paraná (em
                2019).
              </p>
              <p>
                Não há como expressarmos tudo o que já vivemos, apesar do pouco
                tempo de fundação, mas uma coisa sabemos e cremos, Jesus tem
                feito maravilhas e temos vivido histórias sobrenaturais.
                <a href="#contato">Venha fazer parte</a> e construir juntos mais
                capítulos de uma história de transformações de vida.
              </p>
              <p>
                Com Jesus, ensinamos pessoas a pilotarem com Segurança, Otimismo
                e Liberdade suas motos e suas vidas!!
              </p>
              <p>Glória a Jesus!</p>
              <p>Glória a Jesus!</p>
              <p>Glória a Jesus!</p>
              <p>Riders!!</p>
            </div>
            <p>
              <a
                className="btn btn-outline-primary"
                data-bs-toggle="collapse"
                href="#collapseHistoria"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Saiba mais...
              </a>
            </p>
          </div>
          <div className="col-lg-6 text-center align-self-center">
            <picture className="figure">
              <source
                srcSet="/media/figs/mencao_honrosa.webp"
                type="image/webp"
              />
              <img
                src="/media/figs/mencao_honrosa.jpeg"
                alt="Menção Honrosa"
                className="flip-card-img figure-img img-fluid rounded"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
