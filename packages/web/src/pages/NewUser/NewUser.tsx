import React from "react";
import { Spacer } from "@nextui-org/react";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import NewUserForm from "../../components/NewUserForm/NewUserForm";

const NewUser = (): JSX.Element => {
  return (
    <ContainerHeightWrapper>
      <Spacer y={2} />
      <NewUserForm saveHandle={() => {}} />
    </ContainerHeightWrapper>
  );
};

export default NewUser;
