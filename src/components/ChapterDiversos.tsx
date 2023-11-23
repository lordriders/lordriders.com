import { createStyles, Flex } from "@mantine/core";
import { ChapterInfo, ChapterInfoProps } from "./ChapterInfo";

const useStyles = createStyles(() => ({
  cards: {
    alignItems: "stretch",
  },
}));

export default function ChapterDiversos() {
  const { classes } = useStyles();
  const curitiba: ChapterInfoProps = {
    image: "/media/figs/chapter_curitiba.webp",
    title: "Curitiba",
    category: "Lighthouse",
    location: "R. Gago Coutinho, 128 - Bacacheri",
    location_url: "https://goo.gl/maps/Q69rhN3NMJBiVFKy6",
    time: "Quintas-feira, 20h",
    author: { name: null, contact: "+55 41 9667-9134", image: "" }
  };
  return (
    <>
      <section className="section static-dark" id="chapter-diversos">
        <div className="container">
          <h2 className="h2">Chapters</h2>
          <div className="row justify-content-center">
            <Flex gap={25} wrap={"wrap"} justify={"center"} className={classes.cards}>
              <ChapterInfo {...curitiba} />
            </Flex>
          </div>
        </div>
      </section>
    </>
  );
}
