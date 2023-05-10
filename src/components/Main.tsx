import Acoes from "./Acoes";
import Diretoria from "./Diretoria";
import Footer from "./Footer";
import Fotos from "./Fotos";
import Historia from "./Historia";
import Participe from "./Participe";
import Schedule from "./Schedule";
import Sobre from "./Sobre";
import curitiba from '../data/schedule-curitiba-2023.json';
import ChapterDiversos from "./ChapterDiversos";

export default function Main() {
  
  return (
    <main className="wrapper">
      <Sobre />
      <Historia />
      <Diretoria />
      <Acoes />
      <ChapterDiversos />
      <Participe />
      <Fotos />
      <Schedule curitiba={curitiba.schedule}/>
      <Footer />
    </main>
  );
}
