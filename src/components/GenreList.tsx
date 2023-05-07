import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  let lists = [1, 2, 3, 4, 5];
  if (isLoading) return <Spinner></Spinner>;
  // if (isLoading)
  //   return (
  //     <>
  //       <List paddingY={5}>
  //         {lists.map((e) => (
  //           <ListItem paddingY={"5px"}>
  //             <HStack justifyContent={"space-between"}>
  //               <SkeletonCircle></SkeletonCircle>
  //               <SkeletonText></SkeletonText>
  //             </HStack>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </>
  //   );
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
                <Button
                  fontWeight={e.id === selectedGenre?.id ? "bold" : "normal"}
                  onClick={() => onSelectGenre(e)}
                  fontSize={"lg"}
                  variant={"link"}
                >
                  {e.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};
export default GenreList;
