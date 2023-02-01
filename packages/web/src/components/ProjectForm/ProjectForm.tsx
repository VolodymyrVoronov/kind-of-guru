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
import { IoSaveSharp } from "react-icons/io5";

import { clients, packages, priorities } from "../../constants/const";
import IProject from "../../types/Project";

import countSymbolsAmount from "../../helpers/countSymbolsAmount";
import checkLimitReached from "../../helpers/checkLimitReached";
import getPriorityIcon from "../../helpers/getPriorityIcon";
import getPackageTypeIcon from "../../helpers/getPackageTypeIcon";

import InputProgress from "../InputProgress/InputProgress";

interface IProjectFormProps {
  data?: IProject | null;
  isLoading: boolean;
  onSaveClick: (projectData: IProject) => void;
}

const ProjectForm = ({
  data,
  isLoading,
  onSaveClick,
}: IProjectFormProps): JSX.Element => {
  const initialState = {
    projectName: data?.projectName ?? "",
    client: data?.client ?? clients.Unknown,
    information: data?.information ?? "",
    priority: data?.priority ?? priorities.medium,
    packageType: data?.packageType ?? packages.basic,
    start: data?.start ?? "",
    end: data?.end ?? "",
  };

  const [formData, setFormData] = useState<IProject>(initialState);

  const onSaveButtonClick = (): void => {
    onSaveClick(formData);
  };

  const onInputChange = (e: ChangeEvent<FormElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClientChange = (value: string): void => {
    setFormData({ ...formData, client: value });
  };

  const onPriorityChange = (value: string): void => {
    setFormData({ ...formData, priority: value });
  };

  const onPackageTypeChange = (value: string): void => {
    setFormData({ ...formData, packageType: value });
  };

  const projectNameSymbolsLimit = countSymbolsAmount(formData.projectName, 50);
  const projectNameLimitReached = checkLimitReached(formData.projectName, 50);
  const projectNameLength = formData.projectName.length;

  const informationSymbolsLimit = countSymbolsAmount(formData.information, 250);
  const informationLimitReached = checkLimitReached(formData.information, 250);
  const informationLength = formData.information.length;

  const anySymbolsLimitsReached =
    projectNameLimitReached || informationLimitReached;

  return (
    <Container md>
      <Card
        css={{
          background: "linear-gradient(-45deg, #0072f53d -20%, #ff4ecd39 80%)",
        }}
      >
        <Card.Body>
          <Grid.Container gap={2}>
            <Grid.Container css={{ w: "52%" }} gap={2} direction="column">
              <Grid xs direction="column">
                <Input
                  name="projectName"
                  value={formData.projectName}
                  onChange={onInputChange}
                  clearable
                  color="default"
                  helperText="Required"
                  label={`Project name (max. ${projectNameLength}/50)`}
                  placeholder="Enter project name"
                  size="xl"
                  fullWidth
                  required
                  shadow
                  status={projectNameLimitReached ? "error" : "default"}
                />
                {formData.projectName.length > 0 ? (
                  <InputProgress
                    value={projectNameSymbolsLimit}
                    limitReached={projectNameLimitReached}
                  />
                ) : (
                  <span style={{ height: "9px" }} />
                )}
              </Grid>

              <Spacer x={1.5} />

              <Grid xs>
                <Input
                  name="start"
                  value={formData.start}
                  onChange={onInputChange}
                  fullWidth
                  size="xl"
                  label="Start"
                  type="date"
                  shadow
                />

                <Spacer y={2} />

                <Input
                  name="end"
                  value={formData.end}
                  onChange={onInputChange}
                  fullWidth
                  size="xl"
                  label="End"
                  type="date"
                  shadow
                />
              </Grid>
            </Grid.Container>

            <Grid xs direction="column">
              <Radio.Group
                orientation="horizontal"
                label={
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "inherit",
                      color: "#000000",
                    }}
                  >
                    Client
                  </p>
                }
                defaultValue={formData.client}
                name="client"
                onChange={onClientChange}
                size="lg"
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {Object.values(clients).map((client) => {
                    return (
                      <Radio
                        key={client}
                        value={client}
                        color="secondary"
                        isSquared
                      >
                        {client}
                      </Radio>
                    );
                  })}
                </div>
              </Radio.Group>
            </Grid>
          </Grid.Container>

          <Spacer x={1.5} />

          <Grid.Container gap={2}>
            <Grid xs direction="column">
              <Textarea
                name="information"
                value={formData.information}
                onChange={onInputChange}
                label={`Information (max. ${informationLength}/250)`}
                placeholder="Enter some additional information"
                fullWidth
                size="xl"
                rows={5}
                shadow
                status={informationLimitReached ? "error" : "default"}
              />
              {formData.information.length > 0 ? (
                <InputProgress
                  value={informationSymbolsLimit}
                  limitReached={informationLimitReached}
                />
              ) : (
                <span style={{ height: "9px" }} />
              )}
            </Grid>

            <Grid xs alignItems="flex-start" direction="column">
              <Radio.Group
                orientation="horizontal"
                label={
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "inherit",
                      color: "#000000",
                    }}
                  >
                    Priority
                  </p>
                }
                defaultValue={formData.priority}
                name="priority"
                onChange={onPriorityChange}
                size="lg"
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {Object.values(priorities).map((priority) => {
                    return (
                      <Radio
                        key={priority}
                        value={priority}
                        color="secondary"
                        isSquared
                      >
                        {priority}
                        <span
                          style={{
                            display: "flex",
                            marginLeft: 5,
                          }}
                        >
                          {getPriorityIcon(priority.toLowerCase())}
                        </span>
                      </Radio>
                    );
                  })}
                </div>
              </Radio.Group>

              <Spacer y={1} />

              <Radio.Group
                orientation="horizontal"
                label={
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "inherit",
                      color: "#000000",
                    }}
                  >
                    Package
                  </p>
                }
                defaultValue={formData.packageType}
                name="package"
                onChange={onPackageTypeChange}
                size="lg"
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {Object.values(packages).map((packageType) => {
                    return (
                      <Radio
                        key={packageType}
                        value={packageType}
                        color="secondary"
                        isSquared
                      >
                        {packageType}
                        <span
                          style={{
                            display: "flex",
                            marginLeft: 5,
                          }}
                        >
                          {getPackageTypeIcon(packageType.toLowerCase())}
                        </span>
                      </Radio>
                    );
                  })}
                </div>
              </Radio.Group>
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
                  isLoading || !formData.projectName || anySymbolsLimitsReached
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

export default ProjectForm;
