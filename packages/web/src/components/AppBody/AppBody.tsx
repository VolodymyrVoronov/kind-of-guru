import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import RoutePaths from "../../constants/routePaths";

import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import Main from "../../pages/Main/Main";

const AppBody = (): JSX.Element => {
  const location = useLocation();

  return (
    <AnimatedWrapper>
      <motion.div>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path={RoutePaths.Root} element={<Main />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </AnimatedWrapper>
  );
};

export default AppBody;
