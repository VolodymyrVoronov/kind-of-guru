import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import RoutePaths from "../../constants/routePaths";

import Main from "../../pages/Main/Main";
import Users from "../../pages/Users/Users";
import Projects from "../../pages/Projects/Projects";
import NewUser from "../../pages/NewUser/NewUser";
import NewProject from "../../pages/NewProject/NewProject";

import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import NavBar from "../NavBar/NavBar";

const AppBody = (): JSX.Element => {
  const location = useLocation();

  const variants = {
    initial: {
      y: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: window.innerHeight,
      opacity: 0,
    },
    transition: {
      duration: 1.5,
    },
  };

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path={RoutePaths.Root}
            element={
              <AnimatedWrapper animation={variants}>
                <Main />
              </AnimatedWrapper>
            }
          />
          <Route
            path={RoutePaths.Users}
            element={
              <AnimatedWrapper animation={variants}>
                <Users />
              </AnimatedWrapper>
            }
          />
          <Route
            path={RoutePaths.Projects}
            element={
              <AnimatedWrapper animation={variants}>
                <Projects />
              </AnimatedWrapper>
            }
          />
          <Route
            path={RoutePaths.NewUser}
            element={
              <AnimatedWrapper animation={variants}>
                <NewUser />
              </AnimatedWrapper>
            }
          />
          <Route
            path={RoutePaths.NewProject}
            element={
              <AnimatedWrapper animation={variants}>
                <NewProject />
              </AnimatedWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppBody;
