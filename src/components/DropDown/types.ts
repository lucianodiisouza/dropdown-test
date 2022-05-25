import { ReactNode } from "react";

export type AlignmentProps = {
  alignContentX?: "left" | "right";
  alignContentY?: "top" | "bottom";
};

type DropDownItem = {
  id: number;
  element: ReactNode;
};

export interface DropDownMenuProps extends AlignmentProps {
  items: DropDownItem[];
}
