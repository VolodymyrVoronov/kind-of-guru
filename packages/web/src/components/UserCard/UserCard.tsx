import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Collapse,
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
  IoChevronBack,
} from "react-icons/io5";

import IUser from "../../types/User";

import extractFirstLetter from "../../helpers/extractFirstLetter";
import reverseDateString from "../../helpers/reverseDateString";

import CustomModal from "../CustomModal/CustomModal";

import styles from "./UserCard.module.css";

interface IUserData extends IUser {
  id: number;
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
    roles,
    level,
  } = user;

  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const onDeleteCardButtonClick = (): void => {
    setIsPopoverVisible(true);
  };

  const onEditButtonClick = (): void => {
    onEditClick(id);
  };

  const onCancelButtonClick = (): void => {
    setIsPopoverVisible(false);
  };

  const onConfirmDeleteButtonClick = (): void => {
    onDeleteClick(id);
    setIsPopoverVisible(false);
  };

  return (
    <Card
      css={{
        alignSelf: "flex-start",
        mw: "400px",
        p: "$6",
        background: "linear-gradient(-45deg, #0072f522 -20%, #ff4ecd24 80%)",
      }}
    >
      <CustomModal
        title="Confirm"
        text="Are you sure you want to delete this user ? By doing this, you will not be able to recover the data."
        isVisible={isPopoverVisible}
        onClose={onCancelButtonClick}
        cancelButton={
          <Button onPress={onCancelButtonClick} size="sm" light bordered>
            Cancel
          </Button>
        }
        confirmButton={
          <Button
            onPress={onConfirmDeleteButtonClick}
            size="sm"
            shadow
            color="error"
          >
            Delete
          </Button>
        }
      />

      <Card.Header>
        <Avatar
          className={styles.avatar}
          text={extractFirstLetter(firstName) + extractFirstLetter(familyName)}
          size="xl"
          color="gradient"
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

          {level && (
            <Grid xs={12}>
              <Text
                css={{
                  lineHeight: "10px",
                  color: "$blue600",
                }}
              >
                Level:{" "}
                <Text b css={{ color: "$blue600" }}>
                  {level}
                </Text>
              </Text>
            </Grid>
          )}

          {joinedCompany && (
            <Grid xs={12}>
              <Text css={{ color: "$accents8", lineHeight: "35px" }}>
                Since: {reverseDateString(joinedCompany)}
              </Text>
            </Grid>
          )}
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ py: "$3" }}>
        <Container
          css={{
            py: "$3",
            color: "#172025",
            borderTop: "1px solid #17202583",
            borderBottom: "1px solid #17202583",
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
        </Container>

        {roles && (
          <Text
            h4
            css={{
              marginTop: "20px",
              marginBottom: 0,
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
          >
            {roles.split(",").join(", ")}
          </Text>
        )}

        {information && (
          <Collapse
            className={styles.collapse}
            arrowIcon={<IoChevronBack />}
            title={<Text h4>Information</Text>}
            divider={false}
            bordered
            css={{
              marginTop: "15px",
            }}
          >
            <Text
              css={{
                paddingRight: 5,
              }}
            >
              {information}
            </Text>
          </Collapse>
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
            onPress={onDeleteCardButtonClick}
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
