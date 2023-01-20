import { Key } from "react";
import { Dropdown } from "@nextui-org/react";

interface IDropdownMenuItem {
  id: number;
  text: string;
  actionKey: Key;
}

interface IDropdownMenuProps {
  items: IDropdownMenuItem[];
  onMenuItemClick: (actionKey: Key) => void;
}

const DropdownMenu = ({
  items,
  onMenuItemClick,
}: IDropdownMenuProps): JSX.Element => {
  return (
    <Dropdown.Menu
      onAction={onMenuItemClick}
      aria-label="Menu actions"
      color="secondary"
      css={{
        background: "linear-gradient(-45deg, #0072f56a -20%, #ff4ecd63 80%)",
      }}
    >
      {items.map(({ text, actionKey }) => {
        return (
          <Dropdown.Item
            key={actionKey}
            css={{
              fontWeight: 600,
            }}
          >
            {text}
          </Dropdown.Item>
        );
      })}
    </Dropdown.Menu>
  );
};

export default DropdownMenu;
