import { useCallback, useEffect, useState } from "react";
import { Badge, Container, Grid, Progress, Spacer } from "@nextui-org/react";

import trpc from "../../hooks/trpc";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import UserCard from "../../components/UserCard/UserCard";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

const Users = (): JSX.Element => {
  const utils = trpc.useContext();

  const {
    data: dataUsers,
    isLoading: isLoadingFetchUsers,
    isError: isErrorFetchUsers,
    error: errorFetchUsers,
  } = trpc.useQuery(["getUsers"]);

  const {
    mutate: mutateDeleteUser,
    isSuccess: isSuccessMutateDeleteUser,
    isError: isErrorMutateDeleteUser,
    error: errorMutateDeleteUser,
  } = trpc.useMutation(["deleteUser"]);

  const [showBadgeBox, setShowBadgeBox] = useState(false);

  const onDeleteClick = (id: number): void => {
    mutateDeleteUser({ id });
  };

  const onEditClick = (id: number): void => {};

  const refetchUsers = useCallback(() => {
    if (isSuccessMutateDeleteUser) {
      const timeoutId = setTimeout(() => {
        utils.invalidateQueries();

        clearTimeout(timeoutId);
      }, 500);
    }
  }, [isSuccessMutateDeleteUser, utils]);

  useEffect(() => {
    setShowBadgeBox(true);

    refetchUsers();

    const timeoutId = setTimeout(() => {
      setShowBadgeBox(false);

      clearTimeout(timeoutId);
    }, 5000);
  }, [refetchUsers]);

  return (
    <ContainerHeightWrapper>
      {showBadgeBox && (
        <div style={{ position: "absolute" }}>
          {isErrorFetchUsers && (
            <AnimatedWrapper>
              <Badge
                size="md"
                color="error"
                css={{
                  mt: -2,
                  ml: -2,
                  textAlign: "center",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 14,
                }}
              >
                Something has gone wrong. <br />
                {errorFetchUsers?.message}
              </Badge>
            </AnimatedWrapper>
          )}

          {isErrorMutateDeleteUser && (
            <AnimatedWrapper>
              <Badge
                size="md"
                color="error"
                css={{
                  mt: -2,
                  ml: -2,
                  textAlign: "center",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 14,
                }}
              >
                Something has gone wrong. <br />
                {errorMutateDeleteUser?.message}
              </Badge>
            </AnimatedWrapper>
          )}

          {isSuccessMutateDeleteUser && (
            <AnimatedWrapper>
              <Badge
                size="md"
                color="success"
                css={{
                  mt: -2,
                  ml: -2,
                  textAlign: "center",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 14,
                }}
              >
                Deleted!
              </Badge>
            </AnimatedWrapper>
          )}
        </div>
      )}

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
          <Spacer y={1} />
          <Container md>
            <Grid.Container gap={2}>
              {dataUsers?.map((user) => {
                return (
                  <Grid xs={4} key={user.id}>
                    <UserCard
                      user={user}
                      onDeleteClick={onDeleteClick}
                      onEditClick={onEditClick}
                    />
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
