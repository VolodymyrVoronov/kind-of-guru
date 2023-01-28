import { ChangeEvent, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Container,
  FormElement,
  Grid,
  Input,
  Loading,
  Radio,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import {
  IoHomeSharp,
  IoBusinessSharp,
  IoExitSharp,
  IoEnterSharp,
  IoSaveSharp,
} from "react-icons/io5";

import roles from "../../constants/roles";

interface IFormData {
  firstName: string;
  familyName: string;
  information: string;
  joinedCompany: string;
  home: boolean;
  office: boolean;
  intern: boolean;
  extern: boolean;
  roles: string;
}

interface IUserFormProps {
  data?: IFormData | null;
  isLoading: boolean;
  onSaveClick: (userData: IFormData) => void;
}

const Label = ({ text }: { text: string }): JSX.Element => {
  return (
    <p
      style={{
        fontSize: "18px",
        fontFamily: "inherit",
        color: "#000000",
      }}
    >
      {text}
    </p>
  );
};

const UserForm = ({
  data,
  isLoading,
  onSaveClick,
}: IUserFormProps): JSX.Element => {
  const initialState = {
    firstName: data?.firstName ?? "",
    familyName: data?.familyName ?? "",
    information: data?.information ?? "",
    joinedCompany: data?.joinedCompany ?? "",
    home: data?.home ?? true,
    office: data?.office ?? false,
    intern: data?.intern ?? true,
    extern: data?.extern ?? false,
    roles: data?.roles ?? "",
  };

  const [formData, setFormData] = useState<IFormData>(initialState);

  const onSaveButtonClick = (): void => {
    onSaveClick(formData);
  };

  const onInputChange = (e: ChangeEvent<FormElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onRadioChange = (e: string): void => {
    if (e === "home") {
      setFormData({
        ...formData,
        home: true,
        office: false,
      });
    }

    if (e === "office") {
      setFormData({
        ...formData,
        home: false,
        office: true,
      });
    }

    if (e === "intern") {
      setFormData({
        ...formData,
        intern: true,
        extern: false,
      });
    }

    if (e === "extern") {
      setFormData({
        ...formData,
        intern: false,
        extern: true,
      });
    }
  };

  const onUserRolesChange = (userRoles: string[]): void => {
    const rolesString = userRoles.join(",").toString();

    setFormData({ ...formData, roles: rolesString });
  };

  return (
    <Container md>
      <Card
        css={{
          background: "linear-gradient(-45deg, #0072f53d -20%, #ff4ecd39 80%)",
        }}
      >
        <Card.Body>
          <Grid.Container gap={2}>
            <Grid xs>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={onInputChange}
                clearable
                color="default"
                helperText="Required"
                label="First name (max. 25)"
                placeholder="Enter first name"
                size="xl"
                fullWidth
                required
                shadow
              />
            </Grid>
            <Grid xs>
              <Input
                name="familyName"
                value={formData.familyName}
                onChange={onInputChange}
                clearable
                color="default"
                helperText="Required"
                label="Family name (max. 25)"
                placeholder="Enter family name"
                size="xl"
                fullWidth
                required
                shadow
              />
            </Grid>
          </Grid.Container>

          <Spacer y={1.5} />

          <Grid.Container gap={2}>
            <Grid xs alignItems="flex-start">
              <Radio.Group
                onChange={onRadioChange}
                value={formData.home ? "home" : "office"}
                label={<Label text="Place of work" />}
                css={{
                  width: "100%",
                }}
              >
                <Radio value="home" name="home" color="secondary">
                  <IoHomeSharp /> <Spacer x={0.5} /> From home
                </Radio>
                <Radio value="office" name="office" color="secondary">
                  <IoBusinessSharp /> <Spacer x={0.5} /> From office
                </Radio>
              </Radio.Group>

              <Spacer x={1.5} />

              <Radio.Group
                onChange={onRadioChange}
                value={formData.intern ? "intern" : "extern"}
                label={<Label text="Department type" />}
                css={{
                  width: "100%",
                }}
              >
                <Radio value="intern" name="intern" color="secondary">
                  <IoEnterSharp /> <Spacer x={0.5} /> Intern
                </Radio>
                <Radio value="extern" name="extern" color="secondary">
                  <IoExitSharp /> <Spacer x={0.5} /> Extern
                </Radio>
              </Radio.Group>

              <Input
                name="joinedCompany"
                value={formData.joinedCompany}
                onChange={onInputChange}
                fullWidth
                size="xl"
                label="Joined company"
                type="date"
                shadow
              />
            </Grid>

            <Grid xs>
              <Textarea
                name="information"
                value={formData.information}
                onChange={onInputChange}
                label="Information (max. 250)"
                placeholder="Enter some additional information"
                fullWidth
                size="xl"
                rows={4}
                shadow
              />
            </Grid>
          </Grid.Container>

          <Grid.Container gap={2}>
            <Grid>
              <Checkbox.Group
                onChange={onUserRolesChange}
                value={formData.roles === "" ? [] : formData.roles.split(",")}
                label={
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "inherit",
                      color: "#000000",
                    }}
                  >
                    Role/s
                  </p>
                }
                size="lg"
                orientation="horizontal"
                color="secondary"
              >
                <div>
                  {Object.values(roles).map((role) => {
                    return (
                      <Checkbox key={role} value={role}>
                        {role}
                      </Checkbox>
                    );
                  })}
                </div>
              </Checkbox.Group>
            </Grid>
          </Grid.Container>

          <Spacer x={3} />

          <Grid.Container gap={2}>
            <Grid xs={12} justify="center">
              <Button
                onPress={onSaveButtonClick}
                size="lg"
                type="button"
                color="gradient"
                iconRight={!isLoading && <IoSaveSharp />}
                disabled={
                  isLoading || !formData.firstName || !formData.familyName
                }
              >
                {isLoading ? (
                  <Loading type="default" color="currentColor" size="sm" />
                ) : (
                  "Save"
                )}
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserForm;
