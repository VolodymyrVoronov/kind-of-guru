import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import { IProjectTimeTable } from "../../store/app.store";

import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

interface ITimetableGridProps {
  project: IProjectTimeTable;
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const TimetableGrid = ({ project }: ITimetableGridProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const [layout, setLayout] = useState<ReactGridLayout.Layout[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onLayoutChange = (c: ReactGridLayout.Layout[]) => {
    setLayout(c);
  };

  // console.log(layout);

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
        overflow: "auto",
        resize: "vertical",
      }}
    >
      {layout.map((itm, i) => (
        <div key={itm.i} data-grid={itm} className="block">
          {i}
          {itm.i}
        </div>
      ))}
    </ResponsiveReactGridLayout>
  );
};

export default TimetableGrid;
