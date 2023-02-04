import React from "react";
import { Container } from "@nextui-org/react";

import IUser from "../../types/User";

interface ITimetableUser {
  users?: IUser[];
}

const TimetableUser = ({ users }: ITimetableUser): JSX.Element => {
  return (
    <Container
      css={{
        w: 144,
        m: 0,
        p: 0,
        background: "linear-gradient(80deg, #0072f522 -20%, #ff4ecd24 80%)",
        borderRight: "1px solid white",
      }}
    >
      TimetableUser
    </Container>
  );
};

export default TimetableUser;
