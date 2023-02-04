import React from "react";
import { Grid } from "@nextui-org/react";

import TimetableUser from "../TimetableUser/TimetableUser";
import TimetableGrid from "../TimetableGrid/TimetableGrid";

const TimetableUserBlock = (): JSX.Element => {
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
          <TimetableUser />
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
