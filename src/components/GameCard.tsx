import React from "react";
import { Games } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CricticScore from "./CricticScore";
import croppedImageUrl from "../services/image-url";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    // <>
    <Card>
      <Image src={croppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CricticScore score={game.metacritic}></CricticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
    // </>
  );
};

export default GameCard;
