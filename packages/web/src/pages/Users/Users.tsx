import React from "react";
import { Container, Grid, Progress, Spacer } from "@nextui-org/react";

import trpc from "../../hooks/trpc";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import UserCard from "../../components/UserCard/UserCard";

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
          <Container md>
            <Grid.Container gap={2}>
              {dataUsers?.map((user) => {
                return (
                  <Grid xs={4} key={user.id}>
                    <UserCard user={user} />
                  </Grid>
                );
              })}
            </Grid.Container>
          </Container>
        </>
      )}
    </ContainerHeightWrapper>
  );
};

export default Users;
