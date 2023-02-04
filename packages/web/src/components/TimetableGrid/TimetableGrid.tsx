import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

interface ITimetableGridProps {}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const TimetableGrid = ({}: ITimetableGridProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 50, h: 1, minH: 1, maxH: 1 },
    { i: "b", x: 0, y: 0, w: 50, h: 1, minH: 1, maxH: 1 },
    { i: "c", x: 0, y: 0, w: 50, h: 1, minH: 1, maxH: 1 },
    { i: "d", x: 0, y: 0, w: 50, h: 1, minH: 1, maxH: 1 },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ResponsiveReactGridLayout
      rowHeight={40}
      cols={{ lg: 1000, md: 1000, sm: 1000, xs: 1000, xxs: 1000 }}
      measureBeforeMount={false}
      useCSSTransforms={mounted}
      compactType={null}
      preventCollision
      isDroppable
      onLayoutChange={(c, a) => console.log(c, a)}
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
