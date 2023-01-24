import React from "react";
import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";
import {
  IoTrashSharp,
  IoPencilSharp,
  IoHomeSharp,
  IoBusinessSharp,
  IoExitSharp,
  IoEnterSharp,
} from "react-icons/io5";

import extractFirstLetter from "../../helpers/extractFirstLetter";

import styles from "./UserCard.module.css";

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
  onDeleteClick: (id: number) => void;
  onEditClick: (id: number) => void;
}

const UserCard = ({
  user,
  onDeleteClick,
  onEditClick,
}: IUserCardProps): JSX.Element => {
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

  const onDeleteButtonClick = (): void => {
    onDeleteClick(id);
  };

  const onEditButtonClick = (): void => {
    onEditClick(id);
  };

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
        <Avatar
          className={styles.avatar}
          text={extractFirstLetter(firstName) + extractFirstLetter(familyName)}
          size="xl"
          color="primary"
          textColor="white"
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

      <Card.Body css={{ py: "$3" }}>
        <Card
          css={{
            py: "$3",
            borderRadius: 50,
            color: "#172025",
            background: "linear-gradient(45deg, #0072f547 -20%, #ff4ecd49 80%)",
          }}
        >
          <Grid.Container justify="center">
            {home && (
              <Grid
                xs={1.5}
                css={{
                  fontSize: 26,
                }}
              >
                <Tooltip content="Place of work: home">
                  <IoHomeSharp />
                </Tooltip>
              </Grid>
            )}

            {office && (
              <Grid
                xs={1.5}
                css={{
                  fontSize: 26,
                }}
              >
                <Tooltip content="Place of work: office">
                  <IoBusinessSharp />
                </Tooltip>
              </Grid>
            )}

            {intern && (
              <Grid
                xs={1.5}
                css={{
                  fontSize: 29,
                }}
              >
                <Tooltip content="Intern department">
                  <IoEnterSharp />
                </Tooltip>
              </Grid>
            )}

            {extern && (
              <Grid
                xs={1.5}
                css={{
                  fontSize: 29,
                }}
              >
                <Tooltip content="Extern department">
                  <IoExitSharp />
                </Tooltip>
              </Grid>
            )}
          </Grid.Container>
        </Card>

        {information && (
          <Text
            css={{
              marginTop: "15px",
            }}
          >
            {information}
          </Text>
        )}
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
            onPress={onDeleteButtonClick}
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
            onPress={onEditButtonClick}
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
