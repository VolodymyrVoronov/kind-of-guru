import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Container, Spacer } from "@nextui-org/react";

import trpc from "../../hooks/trpc";

import RoutePaths from "../../constants/routePaths";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import UserForm from "../../components/UserForm/UserForm";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

interface IUserData {
  firstName: string;
  familyName: string;
  information: string;
  joinedCompany: string;
  home: boolean;
  office: boolean;
  intern: boolean;
  extern: boolean;
}

const NewUser = (): JSX.Element => {
  const navigator = useNavigate();

  const { mutate, isLoading, isSuccess, isError, error } = trpc.useMutation([
    "createUser",
  ]);

  const onSaveClick = (userData: IUserData): void => {
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
      <Spacer y={1} />
      <Container md display="flex" justify="center">
        {isError && (
          <AnimatedWrapper>
            <Badge
              size="xl"
              color="error"
              css={{
                textAlign: "center",
                borderRadius: "14px",
              }}
            >
              Something has gone wrong. <br />
              {error?.message}
            </Badge>
          </AnimatedWrapper>
        )}

        {isSuccess && (
          <AnimatedWrapper>
            <Badge
              size="xl"
              color="success"
              css={{
                textAlign: "center",
                borderRadius: "14px",
              }}
            >
              Saved!
            </Badge>
          </AnimatedWrapper>
        )}
      </Container>

      <Spacer y={1} />
      <UserForm isLoading={isLoading} onSaveClick={onSaveClick} />
    </ContainerHeightWrapper>
  );
};

export default NewUser;
