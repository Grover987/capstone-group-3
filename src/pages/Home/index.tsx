import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { CardLinks } from "../../components/CardLinks";
import { Header } from "../../components/Header";
import { useAnime } from "../../Providers/AnimesProvider";
import { SliderContainer } from "../../components/SliderContainer";
import { SectionContainer } from "../../components/SectionContainer";
import { Footer } from "../../components/Footer";
import { Animes, Animes2, Animes3 } from "../../Utils";
import { useEffect } from "react";

export const Home = () => {
  const { setSearchList, setSearched, getAnimes } = useAnime();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  useEffect(() => {
    getAnimes();
    setSearchList([]);
    setSearched("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box minH="100vh" w="100%" backgroundColor="grey.80">
      <Header />

      <SliderContainer />

      <Flex
        flexDirection={isWideVersion ? "row" : "column"}
        gap="20px"
        padding={["20px", "20px", "20px", "30px"]}
      >
        <Flex
          flexDirection="column"
          w={isWideVersion ? "70%" : "100%"}
          overflow="hidden"
          minW="50vw"
        >
          <SectionContainer title="5 Melhores" animeList={Animes} />

          <SectionContainer title="Mais Populares" animeList={Animes2} />
        </Flex>

        <CardLinks title="Recomendados" animes={Animes3} />
      </Flex>
      <Footer />
    </Box>
  );
};
