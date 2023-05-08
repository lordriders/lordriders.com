export default function Sobre() {
  return (
    <section className="section static-dark" id="sobre">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center">
            <picture className="figure">
              <img
                id="brasao"
                src="https://ik.imagekit.io/hzsyirayf3r/brasao_XXiF3EOw3z.jpeg?tr=w-400,h-400"
                height="400"
                width="400"
                className="figure-img img-fluid"
                alt="Brasão Lord riders Moto Clube"
              />
            </picture>
          </div>
          <div className="col-lg-6">
            <h3 className="h3">QUEM SOMOS</h3>
            <p>
              O Lord Riders Moto Clube é um clube de motociclistas cristãos,
              fundado em Curitiba, Paraná, no ano de 2015. O L.R.M.C. surgiu com
              um sonho, um propósito bem claro: Com Jesus, a cada missão,
              ensinar as pessoas a pilotarem com segurança, otimismo e liberdade
              suas motos e suas vidas, alcançando e sendo instrumento de
              transformação de muitas pessoas. Não por acaso o nosso lema se
              expressa sendo: "UMA MISSÃO, MUITAS VIDAS!"
            </p>
            <p>
              Como Cristãos, acreditamos num estilo de vida em discipulado, num
              caminhar de Vida na Vida, onde buscamos conhecer e nos fazer
              conhecer de uma forma que sejamos mais do que uma família,
              parceiros em todos os momentos. Choramos juntos, mas
              principalmente, aprendemos a sorrir juntos, comemorando sucessos e
              fracassos, estando satisfeitos com tudo o que já nos foi dado,
              pois acreditamos que tudo podemos Naquele que nos fortalece.
            </p>
            <p>
              Nosso principal Chapter está na cidade de Curitiba-PR. Possuímos
              ainda um Chapter nômade que denominamos RANCHO, o qual tem a
              missão de apoiar a todos os Riders mas em especial, na missão de
              expandir as cidades de atuação do nosso MC. No Paraná, estamos com
              representantes nas cidades de Maringá, Cambira, Londrina e
              Faxinal. Estaremos brevemente no interior Paulista, além de
              possuirmos representantes em: Mie Ken (Japão) e Manchester
              (Inglaterra).
            </p>
            <p>
              Somos um Moto Clube focado na missão, servos de um Reino que está
              por vir e estamos prontos para servir e sermos usados no que for
              preciso. Nós somos Cavaleiros do Senhor.
            </p>
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
