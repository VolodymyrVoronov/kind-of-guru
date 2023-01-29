import { useCallback, useEffect, useState } from "react";
import {
  Badge,
  Container,
  Grid,
  Loading,
  Modal,
  Progress,
  Spacer,
  Text,
} from "@nextui-org/react";

import trpc from "../../hooks/trpc";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import UserCard from "../../components/UserCard/UserCard";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import UserForm from "../../components/UserForm/UserForm";
import BadgeWrapper from "../../components/BadgeWrapper/BadgeWrapper";

interface IUserData {
  id?: number;
  firstName: string;
  familyName: string;
  information: string;
  joinedCompany: string;
  home: boolean;
  office: boolean;
  intern: boolean;
  extern: boolean;
  roles: string;
  level: string;
}

const Users = (): JSX.Element => {
  const utils = trpc.useContext();

  const [showBadgeBox, setShowBadgeBox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(0);

  const {
    data: dataUser,
    isLoading: isLoadingFetchUser,
    isError: isErrorFetchUser,
    error: errorFetchUser,
  } = trpc.useQuery(["getUser", { id: userId }]);

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

  const {
    mutate: mutateUpdatedUser,
    isLoading: isLoadingUpdateUser,
    isSuccess: isSuccessUpdateUser,
    isError: isErrorUpdateUser,
    error: errorUpdateUser,
  } = trpc.useMutation(["updateUser"]);

  const onDeleteClick = (id: number): void => {
    mutateDeleteUser({ id });
  };

  const onEditClick = (id: number): void => {
    setShowModal(true);
    setUserId(id);
  };

  const onModalCloseClick = (): void => {
    setShowModal(false);
  };

  const onSaveClick = (data: IUserData): void => {
    mutateUpdatedUser({ id: userId, ...data });
  };

  const refetchUsers = useCallback(() => {
    if (isSuccessMutateDeleteUser || isSuccessUpdateUser) {
      const timeoutId = setTimeout(() => {
        utils.invalidateQueries();

        clearTimeout(timeoutId);
      }, 500);
    }
  }, [isSuccessMutateDeleteUser, isSuccessUpdateUser, utils]);

  useEffect(() => {
    setShowBadgeBox(true);
    setShowModal(false);

    refetchUsers();

    const timeoutId = setTimeout(() => {
      setShowBadgeBox(false);

      clearTimeout(timeoutId);
    }, 5000);
  }, [refetchUsers]);

  return (
    <ContainerHeightWrapper>
      <Modal
        closeButton
        aria-labelledby="Edit user form"
        open={showModal}
        onClose={onModalCloseClick}
        width="1225px"
      >
        <Modal.Header>
          <Text b h3>
            Edit user
          </Text>
        </Modal.Header>
        <Modal.Body
          css={{
            p: 0,
            pb: 24,
          }}
        >
          {!isLoadingFetchUser && dataUser ? (
            <UserForm
              data={dataUser}
              isLoading={isLoadingUpdateUser}
              onSaveClick={onSaveClick}
            />
          ) : (
            <Loading size="xl" />
          )}

          {isErrorFetchUser && (
            <AnimatedWrapper>
              <Container
                justify="center"
                css={{
                  d: "flex",
                  w: "100%",
                }}
              >
                <Badge
                  size="lg"
                  color="error"
                  css={{
                    textAlign: "center",
                    borderRadius: 14,
                  }}
                >
                  Something has gone wrong. <br />
                  {errorFetchUser?.message}
                </Badge>
              </Container>
            </AnimatedWrapper>
          )}
        </Modal.Body>
      </Modal>

      {showBadgeBox && (
        <div style={{ position: "absolute" }}>
          {isErrorFetchUsers && (
            <AnimatedWrapper>
              <BadgeWrapper
                size="md"
                color="error"
                text="Something has gone wrong."
                textMessage={errorFetchUsers?.message}
              />
            </AnimatedWrapper>
          )}

          {isErrorMutateDeleteUser && (
            <AnimatedWrapper>
              <BadgeWrapper
                size="md"
                color="error"
                text="Something has gone wrong."
                textMessage={errorMutateDeleteUser?.message}
              />
            </AnimatedWrapper>
          )}

          {isErrorUpdateUser && (
            <AnimatedWrapper>
              <BadgeWrapper
                size="md"
                color="error"
                text="Something has gone wrong."
                textMessage={errorUpdateUser?.message}
              />
            </AnimatedWrapper>
          )}

          {isSuccessMutateDeleteUser && (
            <AnimatedWrapper>
              <BadgeWrapper size="md" color="success" textMessage="Deleted!" />
            </AnimatedWrapper>
          )}

          {isSuccessUpdateUser && (
            <AnimatedWrapper>
              <BadgeWrapper size="md" color="success" textMessage="Updated!" />
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
