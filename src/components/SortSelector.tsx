import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  //   if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Average Rating</MenuItem>
        {/* {data &&
          data.map((e) => (
            <MenuItem onClick={() => onSelectPlatform(e)} key={e.id}>
              {e.name}
            </MenuItem>
          ))} */}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
