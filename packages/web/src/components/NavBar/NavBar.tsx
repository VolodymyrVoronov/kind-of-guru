import { Key } from "react";
import { To, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import {
  IoPersonAddSharp,
  IoReaderSharp,
  IoPeople,
  IoFileTrayStacked,
  IoHomeSharp,
} from "react-icons/io5";

import RoutePaths from "../../constants/routePaths";

import DropdownMenu from "../DropdownMenu/DropdownMenu";

import guruIcon01 from "../../assets/images/guru-icon-01.png";

import styles from "./NavBar.module.css";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

const dropDownItems = [
  {
    id: 1,
    text: "Users",
    description: "Show all users",
    to: RoutePaths.Users,
    icon: <IoPeople />,
  },
  {
    id: 2,
    text: "Projects",
    description: "Show all projects",
    to: RoutePaths.Projects,
    icon: <IoFileTrayStacked />,
  },
  {
    id: 3,
    text: "New user",
    description: "Create new user",
    to: RoutePaths.NewUser,
    icon: <IoPersonAddSharp />,
  },
  {
    id: 4,
    text: "New project",
    description: "Create new project",
    to: RoutePaths.NewProject,
    icon: <IoReaderSharp />,
  },
  {
    id: 5,
    text: "Home",
    description: "Back to main page",
    to: RoutePaths.Root,
    icon: <IoHomeSharp />,
  },
];

const NavBar = (): JSX.Element => {
  const navigator = useNavigate();
  const location = useLocation();

  const onLogoClick = (): void => {
    navigator(RoutePaths.Root);
  };

  const onMenuItemClick = (to: Key): void => {
    navigator(to as To);
  };

  const variants = {
    initial: {
      y: -20,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.9,
    },
    transition: {
      duration: 0.75,
    },
  };

  return (
    <div>
      <Navbar maxWidth="fluid" isBordered variant="sticky">
        <Navbar.Brand onClick={onLogoClick} className={styles.navbar__logo}>
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

        <Navbar.Content hideIn="xs">
          <AnimatePresence mode="wait">
            {dropDownItems.map((item) => {
              return (
                location.pathname === item.to && (
                  <AnimatedWrapper key={item.id} animation={variants}>
                    <Text
                      key={item.id}
                      h4
                      css={{
                        m: 0,
                        textGradient: "-45deg, $blue600 -20%, $pink600 80%",
                        borderTop: "2px solid $pink600",
                        borderBottom: "2px solid $pink600",
                      }}
                    >
                      {item.text}
                    </Text>
                  </AnimatedWrapper>
                )
              );
            })}
          </AnimatePresence>
        </Navbar.Content>

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
