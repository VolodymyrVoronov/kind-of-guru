import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spacer } from "@nextui-org/react";

import trpc from "../../hooks/trpc";

import RoutePaths from "../../constants/routePaths";
import IUser from "../../types/User";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import UserForm from "../../components/UserForm/UserForm";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import BadgeWrapper from "../../components/BadgeWrapper/BadgeWrapper";

const NewUser = (): JSX.Element => {
  const navigator = useNavigate();

  const { mutate, isLoading, isSuccess, isError, error } = trpc.useMutation([
    "createUser",
  ]);

  const onSaveClick = (userData: IUser): void => {
    mutate(userData);
  };

  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        navigator(RoutePaths.Users);

        clearTimeout(timeoutId);
      }, 1500);
    }
  }, [isSuccess, navigator]);

  return (
    <ContainerHeightWrapper>
      <div style={{ position: "absolute" }}>
        {isError && (
          <AnimatedWrapper>
            <BadgeWrapper
              size="md"
              color="error"
              text="Something has gone wrong."
              textMessage={error?.message}
            />
          </AnimatedWrapper>
        )}

        {isSuccess && (
          <AnimatedWrapper>
            <BadgeWrapper size="md" color="success" textMessage="Saved!" />
          </AnimatedWrapper>
        )}
      </div>

      <Spacer y={2} />
      <UserForm isLoading={isLoading} onSaveClick={onSaveClick} />
    </ContainerHeightWrapper>
  );
};

export default NewUser;
