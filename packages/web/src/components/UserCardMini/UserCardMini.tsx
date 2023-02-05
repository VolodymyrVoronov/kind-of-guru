import React from "react";
import { Avatar, Card, Grid, Spacer, Text } from "@nextui-org/react";

import IUser from "../../types/User";

import extractFirstLetter from "../../helpers/extractFirstLetter";
import reverseDateString from "../../helpers/reverseDateString";

import styles from "./UserCardMini.module.css";

interface IUserData extends IUser {
  id: number;
}

interface IUserCardMiniProps {
  user: IUserData;
  onUserCardMiniClick: (id: number) => void;
}

const UserCardMini = ({
  user,
  onUserCardMiniClick,
}: IUserCardMiniProps): JSX.Element => {
  const { id, firstName, familyName, joinedCompany, level } = user;

  const onCardClick = (): void => {
    onUserCardMiniClick(id);
  };

  return (
    <Card
      onPress={onCardClick}
      isHoverable
      isPressable
      css={{
        display: "flex",
        w: "336px",
        m: "$6",
        p: "$6",
        background: "linear-gradient(-45deg, #0072f522 -20%, #ff4ecd24 80%)",
      }}
    >
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
    </Card>
  );
};

export default UserCardMini;
