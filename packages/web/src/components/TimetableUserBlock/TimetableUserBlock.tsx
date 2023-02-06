import React from "react";
import { Grid } from "@nextui-org/react";

import { IUserTimetable } from "../../store/app.store";

import TimetableUser from "../TimetableUser/TimetableUser";
import TimetableGrid from "../TimetableGrid/TimetableGrid";

interface ITimetableUserBlockProps {
  timetableUser: IUserTimetable;
}

const TimetableUserBlock = ({
  timetableUser,
}: ITimetableUserBlockProps): JSX.Element => {
  const { projects } = timetableUser;

  return (
    <div>
      <Grid.Container
        css={{
          d: "flex",
          borderBottom: "1px solid white",
        }}
      >
        <Grid
          css={{
            d: "flex",
            w: 144,
          }}
        >
          <TimetableUser user={timetableUser} />
        </Grid>
        <Grid
          css={{
            d: "flex",
            flexGrow: 1,
          }}
        >
          <TimetableGrid />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default TimetableUserBlock;
