import Acoes from "./Acoes";
import Banner from "./Banner";
import Diretoria from "./Diretoria";
import Footer from "./Footer";
import Fotos from "./Fotos";
import CPC from "./CPC";
import Historia from "./Historia";
import Participe from "./Participe";
import Schedule from "./Schedule";
import Sobre from "./Sobre";
import curitiba from '../data/schedule-curitiba-2023.json';
import rancho from '../data/schedule-rancho-2023.json';
import ChapterDiversos from "./ChapterDiversos";

export default function Main() {
  
  return (
    <main className="wrapper">
      <Banner />
      <Sobre />
      <Historia />
      <CPC />
      <Diretoria />
      <Acoes />
      <ChapterDiversos />
      <Participe />
      <Fotos />
      <Schedule curitiba={curitiba.schedule} rancho={rancho.schedule}/>
      <Footer />
    </main>
  );
}
