import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatedWrapper>
      <motion.div>
        <div>
          <NavBar />
        </div>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path={RoutePaths.Root} element={<Main />} />
            <Route path={RoutePaths.Users} element={<Users />} />
            <Route path={RoutePaths.Projects} element={<Projects />} />
            <Route path={RoutePaths.NewUser} element={<NewUser />} />
            <Route path={RoutePaths.NewProject} element={<NewProject />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </AnimatedWrapper>
  );
};

export default AppBody;
