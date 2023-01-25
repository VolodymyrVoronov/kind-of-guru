import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Spacer } from "@nextui-org/react";

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
      <div style={{ position: "absolute" }}>
        {isError && (
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
              {error?.message}
            </Badge>
          </AnimatedWrapper>
        )}

        {isSuccess && (
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
              Saved!
            </Badge>
          </AnimatedWrapper>
        )}
      </div>

      <Spacer y={2} />
      <UserForm isLoading={isLoading} onSaveClick={onSaveClick} />
    </ContainerHeightWrapper>
  );
};

export default NewUser;
