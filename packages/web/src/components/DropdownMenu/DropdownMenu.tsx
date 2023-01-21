import { Key } from "react";
import { useLocation } from "react-router-dom";
import { Dropdown } from "@nextui-org/react";
import { IoFlagSharp } from "react-icons/io5";

interface IDropdownMenuItem {
  id: number;
  text: string;
  description: string;
  to: Key;
  icon: JSX.Element;
}

interface IDropdownMenuProps {
  items: IDropdownMenuItem[];
  onMenuItemClick: (to: Key) => void;
}

const DropdownMenu = ({
  items,
  onMenuItemClick,
}: IDropdownMenuProps): JSX.Element => {
  const location = useLocation();

  return (
    <Dropdown.Menu
      onAction={onMenuItemClick}
      aria-label="Menu actions"
      color="secondary"
      css={{
        background: "linear-gradient(-45deg, #0072f56a -20%, #ff4ecd63 80%)",
      }}
    >
      {items.map(({ id, text, description, to, icon }) => {
        return (
          <Dropdown.Item
            key={to}
            description={description}
            css={{
              fontWeight: 600,
              color: `${id === 5 && "#F31260"}`,
            }}
            withDivider={id === 5}
            icon={icon}
            command={location.pathname === to ? ((<IoFlagSharp />) as any) : ""}
          >
            {text}
          </Dropdown.Item>
        );
      })}
    </Dropdown.Menu>
  );
};

export default DropdownMenu;
