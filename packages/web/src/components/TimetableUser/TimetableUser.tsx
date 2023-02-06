import React from "react";
import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Spacer,
  Text,
} from "@nextui-org/react";
import { IoPersonSharp } from "react-icons/io5";

import IUser from "../../types/User";

import extractFirstLetter from "../../helpers/extractFirstLetter";

interface ITimetableUser {
  user: IUser;
}

const TimetableUser = ({ user }: ITimetableUser): JSX.Element => {
  return (
    <Container
      css={{
        m: 0,
        p: 0,
        w: 144,
        background: "linear-gradient(80deg, #0072f522 -20%, #ff4ecd24 80%)",
        borderRight: "1px solid white",
      }}
    >
      <Card
        css={{
          display: "flex",
          w: "144px",
          p: "$1",
          background: "unset",
          borderRadius: 0,
        }}
      >
        <Card.Header
          css={{
            d: "flex",
            fd: "column",
          }}
        >
          <Avatar
            text={
              extractFirstLetter(user.firstName) +
              extractFirstLetter(user.familyName)
            }
            size="md"
            color="gradient"
            textColor="white"
          />

          <Spacer y={0.5} />

          <Grid.Container css={{ pl: "$1" }}>
            <Grid
              xs={12}
              css={{
                jc: "center",
              }}
            >
              <Text size="$lg" css={{ lineHeight: "$xs" }}>
                {user.firstName}
              </Text>

              <Spacer x={0.25} />

              <Text size="$lg" css={{ lineHeight: "$xs" }}>
                {user.familyName}
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>

        <Card.Body css={{ p: "0 5px 5px 5px" }}>
          <Button
            css={{ fs: 14 }}
            color="error"
            bordered
            auto
            size="xs"
            iconRight={<IoPersonSharp />}
          >
            Delete user
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TimetableUser;
