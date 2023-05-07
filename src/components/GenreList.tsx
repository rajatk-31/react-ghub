import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      <List>
        {data &&
          data.map((e) => (
            <ListItem key={e.id} paddingY={"5px"}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={croppedImageUrl(e.image_background)}
                ></Image>
                <Text fontSize={"lg"}>{e.name}</Text>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};
export default GenreList;
