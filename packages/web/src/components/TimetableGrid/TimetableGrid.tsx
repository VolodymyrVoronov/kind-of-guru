import React, { useState, useEffect } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";

import { IProjectTimeTable } from "../../store/app.store";

import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

interface ITimetableGridProps {
  projects: IProjectTimeTable[];
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const TimetableGrid = ({ projects }: ITimetableGridProps): JSX.Element => {
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

  const onLayoutChange = (c: Layout[]) => {
    setLayout(c);
  };

  console.log("layout", layout);

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
        minHeight: "130px",
        overflow: "auto",
        resize: "vertical",
      }}
    >
      {layout.map((layoutItem, i) => (
        <div key={layoutItem.i} data-grid={layoutItem} className="block">
          {i}
          {layoutItem.i}
        </div>
      ))}
    </ResponsiveReactGridLayout>
  );
};

export default TimetableGrid;
