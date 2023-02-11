import React, { useState } from "react";
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
import { IoTrashOutline, IoAddCircleOutline } from "react-icons/io5";

import IUser from "../../types/User";

import extractFirstLetter from "../../helpers/extractFirstLetter";
import CustomModal from "../CustomModal/CustomModal";

interface IUserData extends IUser {
  id: number;
}

interface ITimetableUser {
  user: IUserData;
  onDeleteClick: (id: number) => void;
  onAddProjectClick: () => void;
}

const TimetableUser = ({
  user,
  onDeleteClick,
  onAddProjectClick,
}: ITimetableUser): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const onCardMouseEnter = (): void => setIsHover(true);
  const onCardMouseLeave = (): void => setIsHover(false);

  const onDeleteButtonClick = (): void => {
    setIsPopoverVisible(true);
  };

  const onCancelButtonClick = (): void => {
    setIsPopoverVisible(false);
  };

  const onConfirmDeleteButtonClick = (): void => {
    onDeleteClick(user.id);
    setIsPopoverVisible(false);
  };

  return (
    <Container
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
      css={{
        m: 0,
        p: 0,
        w: 144,
        background: "linear-gradient(80deg, #0072f522 -20%, #ff4ecd24 80%)",
        borderRight: "1px solid white",
      }}
    >
      <CustomModal
        title="Confirm"
        text="Are you sure you want to delete this user? By doing this, you will not be able to recover the data."
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
          <Container
            css={{
              d: "flex",
              fd: "column",
              fw: "nowrap",
              m: 0,
              p: 0,
            }}
          >
            <Button.Group
              size="md"
              bordered
              css={{
                opacity: isHover ? 1 : 0.5,
              }}
            >
              <Button
                onPress={onDeleteButtonClick}
                css={{
                  w: "100%",
                  p: 0,
                }}
              >
                <Tooltip content="Delete this user from timetable">
                  <IoTrashOutline fontSize="20px" />
                </Tooltip>
              </Button>

              <Button
                onPress={onAddProjectClick}
                css={{
                  w: "100%",
                  p: 0,
                }}
              >
                <Tooltip content="Add project to timetable">
                  <IoAddCircleOutline fontSize="20px" />
                </Tooltip>
              </Button>
            </Button.Group>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TimetableUser;
