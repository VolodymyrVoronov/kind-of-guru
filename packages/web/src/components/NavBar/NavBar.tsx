import { Key } from "react";
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";

import RoutePaths from "../../constants/routePaths";

import DropdownMenu from "../DropdownMenu/DropdownMenu";

import guruIcon01 from "../../assets/images/guru-icon-01.png";

const dropDownItems = [
  {
    id: 1,
    text: "Users",
    actionKey: RoutePaths.Users,
  },
  {
    id: 2,
    text: "Projects",
    actionKey: RoutePaths.Projects,
  },
  {
    id: 3,
    text: "New user",
    actionKey: RoutePaths.NewUser,
  },
  {
    id: 4,
    text: "New project",
    actionKey: RoutePaths.NewProject,
  },
];

const NavBar = (): JSX.Element => {
  const onMenuItemClick = (actionKey: Key): void => {
    console.log(actionKey);
  };

  return (
    <div>
      <Navbar maxWidth="fluid" isBordered variant="sticky">
        <Navbar.Brand>
          <Text
            h1
            size="$4xl"
            color="primary"
            css={{
              m: 0,
              fontFamily: "'Megrim', cursive",
              textGradient: "-45deg, $blue600 -20%, $pink600 80%",
            }}
          >
            Guru
          </Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="gradient"
                  size="lg"
                  src={guruIcon01}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <DropdownMenu
              items={dropDownItems}
              onMenuItemClick={onMenuItemClick}
            />
          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default NavBar;
