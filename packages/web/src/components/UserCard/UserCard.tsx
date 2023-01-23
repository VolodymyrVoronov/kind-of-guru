import React from "react";
import { Button, Card, Container, Grid, Spacer, Text } from "@nextui-org/react";
import { IoTrashSharp, IoPencilSharp } from "react-icons/io5";

interface IUserData {
  id: number;
  firstName: string;
  familyName: string;
  information: string;
  joinedCompany: string;
  home: boolean;
  office: boolean;
  intern: boolean;
  extern: boolean;
}

interface IUserCardProps {
  user: IUserData;
}

const UserCard = ({ user }: IUserCardProps): JSX.Element => {
  const {
    id,
    firstName,
    familyName,
    information,
    joinedCompany,
    home,
    office,
    intern,
    extern,
  } = user;

  return (
    <Card
      isHoverable
      css={{
        p: "$6",
        mw: "400px",
        background: "linear-gradient(-45deg, #0072f522 -20%, #ff4ecd24 80%)",
      }}
    >
      <Card.Header>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="58px"
          height="58px"
        />
        <Grid.Container css={{ alignSelf: "flex-start", pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {firstName}
            </Text>
            <Spacer x={0.25} />
            <Text h4 css={{ lineHeight: "$xs" }}>
              {familyName}
            </Text>
          </Grid>
          {joinedCompany && (
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>Since: {joinedCompany}</Text>
            </Grid>
          )}
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        {information && <Text>{information}</Text>}
      </Card.Body>
      <Card.Footer>
        <Container
          display="flex"
          direction="row"
          justify="space-between"
          css={{
            width: "100%",
            padding: "0",
          }}
        >
          <Button
            size="md"
            auto
            ghost
            rounded
            color="error"
            iconRight={<IoTrashSharp />}
          >
            Delete
          </Button>
          <Button
            size="md"
            rounded
            color="gradient"
            iconRight={<IoPencilSharp />}
          >
            Edit
          </Button>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default UserCard;
