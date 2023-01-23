import React from "react";
import { Container, Grid, Progress, Spacer } from "@nextui-org/react";

import trpc from "../../hooks/trpc";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";

const Users = (): JSX.Element => {
  const {
    data: dataUsers,
    isLoading: isLoadingFetchUsers,
    isError: isErrorFetchUsers,
    error: errorFetchUsers,
  } = trpc.useQuery(["getUsers"]);

  console.log(dataUsers);

  return (
    <ContainerHeightWrapper>
      {isLoadingFetchUsers ? (
        <Progress
          indeterminated
          value={50}
          color="gradient"
          status="secondary"
          css={{
            borderRadius: 0,
          }}
        />
      ) : (
        <>
          <Spacer y={2} />
          <Container md display="flex" justify="center">
            <Grid.Container gap={2} justify="center">
              <Grid xs={3}>1 of 4</Grid>
              <Grid xs={3}>2 of 4</Grid>
              <Grid xs={3}>3 of 4</Grid>
              <Grid xs={3}>4 of 4</Grid>
            </Grid.Container>
          </Container>
        </>
      )}
    </ContainerHeightWrapper>
  );
};

export default Users;
