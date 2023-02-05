import React from "react";
import { Container, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

import { ImArrowUp2 } from "react-icons/im";

const AddUserInfoBlock = (): JSX.Element => {
  return (
    <Container
      css={{
        d: "flex",
        fd: "column",
        ai: "center",
        w: 144,
        m: 0,
        mt: 25,
        p: 0,
      }}
    >
      <motion.span
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          repeatDelay: 0.75,
        }}
      >
        <ImArrowUp2 fontSize={26} color="#3263eb" />
      </motion.span>
      <Text
        h4
        css={{
          ta: "center",
          textGradient: "-45deg, $blue600 -20%, $pink600 80%",
        }}
      >
        Add user
        <br />
        to start
      </Text>
    </Container>
  );
};

export default AddUserInfoBlock;
