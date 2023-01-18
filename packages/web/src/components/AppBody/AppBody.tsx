import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AppBody = (): JSX.Element => {
  const location = useLocation();

  return <div>App Body</div>;
};

export default AppBody;
