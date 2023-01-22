import { ChangeEvent, useState } from "react";
import {
  Button,
  Card,
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

interface IFormData {
  firstName: string;
  familyName: string;
  information: string;
  home: boolean;
  office: boolean;
  intern: boolean;
  extern: boolean;
}

interface INewUserFormProps {
  data?: IFormData;
  saveHandle: (data: IFormData) => void;
}

const NewUserForm = ({ data, saveHandle }: INewUserFormProps): JSX.Element => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: data?.firstName || "",
    familyName: data?.familyName || "",
    information: data?.information || "",
    home: data?.home || true,
    office: data?.office || false,
    intern: data?.intern || true,
    extern: data?.extern || false,
  });

  const onSaveButtonClick = (): void => {
    saveHandle(formData);
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

  console.log(formData);

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
                defaultValue={formData.firstName}
                onChange={onInputChange}
                clearable
                color="default"
                helperText="Required"
                label="First name"
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
                defaultValue={formData.familyName}
                onChange={onInputChange}
                clearable
                color="default"
                helperText="Required"
                label="Family name"
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
            <Grid xs>
              <Radio.Group
                onChange={onRadioChange}
                defaultValue="home"
                label="Place of work"
              >
                <Radio value="home" name="home" color="secondary">
                  <IoHomeSharp /> <Spacer x={0.5} /> From home
                </Radio>
                <Radio value="office" name="office" color="secondary">
                  <IoBusinessSharp /> <Spacer x={0.5} /> From office
                </Radio>
              </Radio.Group>

              <Spacer x={3} />

              <Radio.Group
                onChange={onRadioChange}
                defaultValue="intern"
                label="Department type"
              >
                <Radio value="intern" name="intern" color="secondary">
                  <IoEnterSharp /> <Spacer x={0.5} /> Intern
                </Radio>
                <Radio value="extern" name="extern" color="secondary">
                  <IoExitSharp /> <Spacer x={0.5} /> Extern
                </Radio>
              </Radio.Group>
            </Grid>
            <Grid xs>
              <Textarea
                name="information"
                defaultValue={formData.information}
                onChange={onInputChange}
                label="Information"
                placeholder="Enter some additional information"
                fullWidth
                size="xl"
                rows={4}
                shadow
              />
            </Grid>
          </Grid.Container>

          <Spacer x={3} />

          <Grid.Container gap={2}>
            <Grid xs={12} justify="center">
              <Button
                onClick={onSaveButtonClick}
                size="lg"
                type="button"
                color="gradient"
                iconRight={<IoSaveSharp />}
                disabled={!formData.firstName || !formData.familyName}
              >
                Save
                {/* <Loading type="default" color="currentColor" size="sm" /> */}
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewUserForm;
