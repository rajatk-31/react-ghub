import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (value: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const sortOrderVal = sortOrders.find((e) => e.value == sortOrder);
  console.log("Baba--", sortOrder, sortOrderVal);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {sortOrderVal?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((e) => (
          <MenuItem
            onClick={() => onSelectSortOrder(e.value)}
            key={e.value}
            value={e.value}
          >
            {e.label}
          </MenuItem>
        ))}
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
