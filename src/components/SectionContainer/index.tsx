import { Divider, Flex, Heading } from "@chakra-ui/react";
import { Animecard } from "../AnimeCard";

interface Anime {
  id: number;
  title: string;
  category: Array<string>;
  rate?: Array<string>;
  banner_url: string;
  image_url: string;
  original: string;
  status: string;
  launch_date: string;
  studio: string;
  synopsis: string;
}

interface SectionContainerProps {
  title: string;
  animeList: Anime[];
}

export const SectionContainer = ({
  title,
  animeList,
}: SectionContainerProps) => (
  <>
    <Heading
      as="h3"
      bg="white"
      textAlign="center"
      w="100%"
      fontSize="28px"
      paddingY="10px"
    >
      {title}
    </Heading>

    <Divider
      orientation="horizontal"
      bg="secondary"
      marginY="10px"
      height="2px"
      width="50%"
      alignSelf="center"
    />

    <Flex
      justifyContent={["flex-start", "space-around"]}
      alignItems="center"
      gap="30px"
      paddingX="20px"
      width="100%"
      overflowY="auto"
    >
      {animeList.map((anime, i) => (
        <Animecard image={anime.image_url} key={i} />
      ))}
    </Flex>
  </>
);
