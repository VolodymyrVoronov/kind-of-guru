import { useState, useEffect } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";

import { IProjectTimeTable } from "../../store/app.store";

import TimetableGridItem from "../TimetableGridItem/TimetableGridItem";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import convertStringToColor from "../../helpers/stringToColour";

interface ITimetableGridProps {
  projects: IProjectTimeTable[];
  onGridChange: (changedLayout: Layout[]) => void;
  onProjectRightClick: (projectId: number) => void;
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const TimetableGrid = ({
  projects,
  onGridChange,
  onProjectRightClick,
}: ITimetableGridProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const [layout, setLayout] = useState<Layout[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let newLayout = [] as Layout[];

    projects.forEach((p) => {
      return newLayout.push(p.timetableCoords as unknown as Layout);
    });

    if (newLayout) {
      setLayout(newLayout);
    }
  }, [projects]);

  const onLayoutChange = (l: Layout[]): void => {
    onGridChange(l);
  };

  const onProjectRightMouseClick = (
    e: React.MouseEvent,
    projectId: number
  ): void => {
    e.preventDefault();

    if (e.type === "contextmenu") {
      onProjectRightClick(projectId);
    }
  };

  return (
    <ResponsiveReactGridLayout
      rowHeight={40}
      cols={{ lg: 1000, md: 1000, sm: 1000, xs: 1000, xxs: 1000 }}
      measureBeforeMount={false}
      useCSSTransforms={mounted}
      compactType={null}
      preventCollision
      isDroppable
      onLayoutChange={onLayoutChange}
      isBounded
      containerPadding={[0, 0]}
      margin={[1, 1]}
      style={{
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        overflow: "auto",
        resize: "vertical",
      }}
    >
      {layout.map((layoutItem, index) => (
        <TimetableGridItem
          key={layoutItem.i}
          data-grid={layoutItem}
          onContextMenu={(e) => onProjectRightMouseClick(e, projects[index].id)}
          style={{
            background: convertStringToColor(
              `${
                projects.length &&
                projects[index] &&
                projects[index].projectName + projects[index].client
              }`
            ),
          }}
        >
          {projects[index] && (
            <>
              <span>{projects[index].client}</span>
              <span>{projects[index].projectName}</span>
            </>
          )}
        </TimetableGridItem>
      ))}
    </ResponsiveReactGridLayout>
  );
};

export default TimetableGrid;
