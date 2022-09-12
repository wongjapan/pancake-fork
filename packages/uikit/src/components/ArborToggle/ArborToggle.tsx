import React from "react";
import { ArborStack, ArborInput, ArborLabel } from "./StyledArborToggle";
import { ArborToggleProps, scales } from "./types";

const ArborToggle: React.FC<React.PropsWithChildren<ArborToggleProps>> = ({ checked, scale = scales.LG, ...props }) => (
  <ArborStack scale={scale}>
    <ArborInput id={props.id || "pancake-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <ArborLabel scale={scale} checked={checked} htmlFor={props.id || "pancake-toggle"}>
      <div className="pancakes">
        <div className="pancake" />
        <div className="pancake" />
        <div className="pancake" />
        <div className="butter" />
      </div>
    </ArborLabel>
  </ArborStack>
);

export default ArborToggle;
