import { createStyles, Flex } from "@mantine/core";
import { ChapterInfo, ChapterInfoProps } from "./ChapterInfo";

const useStyles = createStyles(() => ({
  cards: {
    alignItems: "stretch",
  },
}));

export default function ChapterDiversos() {
  const { classes } = useStyles();
  const cambira: ChapterInfoProps = {
    image: "/media/figs/chapter_cambira_jandaia.webp",
    title: "Cambira / Jandaia do Sul",
    category: "Lighthouse",
    location: "Av. Dr. Getúlio Vargas, 619, Jandaia do Sul - PR",
    location_url: "https://goo.gl/maps/jCKQPDJLNrhE9fja7",
    time: "Segundas-feira, 20h",
    author: { name: "Lekinho", contact: "+55 41 9243-9403", image: "" }
  };
  const curitiba: ChapterInfoProps = {
    image: "/media/figs/chapter_curitiba.webp",
    title: "Curitiba",
    category: "Lighthouse",
    location: "R. Gago Coutinho, 128 - Bacacheri",
    location_url: "https://goo.gl/maps/Q69rhN3NMJBiVFKy6",
    time: "Quintas-feira, 20h",
    author: { name: null, contact: "+55 41 8415-9755", image: "" }
  };
  const londrina: ChapterInfoProps = {
    image: "/media/figs/chapter_londrina.webp",
    title: "Londrina",
    category: "Lighthouse",
    location: "Londrina - PR",
    location_url: "https://goo.gl/maps/oBSj6m2zr3fjXNkW6",
    time: "Quartas-feira, 20h",
    author: { name: "Rapadura", contact: "+55 41 9917-5424", image: "" }
  };
  const maringa: ChapterInfoProps = {
    image: "/media/figs/chapter_maringa.webp",
    title: "Maringá",
    category: "Lighthouse",
    location: "R. Evaristo da Veiga, 143 - Jardim Alvorada",
    location_url: "https://goo.gl/maps/5tJWqx52X2Xw6m8A7",
    time: "Terças-feira, 20h",
    author: { name: "Robocop", contact: "+55 41 9804-8668", image: "" }
  };
  const medianeira: ChapterInfoProps = {
    image: "/media/figs/chapter_medianeira.webp",
    title: "Medianeira",
    category: "Lighthouse",
    location: "Medianeira - PR",
    location_url: "https://goo.gl/maps/chdAyG8uZeSsuoCX9",
    time: "À definir",
    author: { name: "Erlindo", contact: "+55 45 9965-1117", image: "" }
  };
  return (
    <>
      <section className="section static-dark" id="chapter-diversos">
        <div className="container">
          <h2 className="h2">Chapters</h2>
          <div className="row justify-content-center">
            <Flex gap={25} wrap={"wrap"} justify={"center"} className={classes.cards}>
              <ChapterInfo {...curitiba} />
              <ChapterInfo {...cambira} />
              <ChapterInfo {...londrina} />
              <ChapterInfo {...maringa} />
              <ChapterInfo {...medianeira} />
            </Flex>
          </div>
          <div id="chapter-rancho" className="pt-5">
            <div className="container static-light">
              <div className="row">
                <div className="col-lg-6 fs-5 align-self-center">
                  <h3 className="h3">Chapter Rancho</h3>
                  <p>
                    O RANCHO é o nosso chapter de nômades que foram desafiados a
                    saírem de sua zona de conforto e mudarem para o interior do estado
                    do Paraná, onde construíram uma Base, tendo como missão ajudarem
                    na implantação de novos Chapters em várias partes do Brasil.
                  </p>
                  <p>
                    A sua Base está na zona rural dos municípios de Cambira e
                    Apucarana, sendo que de lá fazem missões em várias partes do
                    Brasil.
                  </p>
                  <p>
                    <a
                      className="btn btn-primary"
                      href="https://rancho.lordriders.com/"
                    >
                      Saiba mais...
                    </a>
                  </p>
                </div>
                <div className="col-lg-6 text-center align-self-center">
                  <picture className="figure">
                    <source srcSet="/media/figs/rancho.webp" type="image/webp" />
                    <img
                      src="/media/figs/rancho.jpeg"
                      alt="Chapter Rancho"
                      className="flip-card-img figure-img img-fluid rounded"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
