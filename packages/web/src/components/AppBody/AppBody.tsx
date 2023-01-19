import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import RoutePaths from "../../constants/paths";

import Calendar from "../Calendar/Calendar";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

const AppBody = (): JSX.Element => {
  const location = useLocation();

  return (
    <AnimatedWrapper>
      <motion.div>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path={RoutePaths.Root} element={<Calendar />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </AnimatedWrapper>
  );
};

export default AppBody;
