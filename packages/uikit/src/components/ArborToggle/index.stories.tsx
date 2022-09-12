import React, { useState } from "react";
import ArborToggle from "./ArborToggle";

export default {
  title: "Components/ArborToggle",
  component: ArborToggle,
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <ArborToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <ArborToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <ArborToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
