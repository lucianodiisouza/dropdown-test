import { ReactNode } from "react";

type DropDownItem = {
  id: number;
  element: ReactNode;
};

export type DropDownMenuProps = {
  items: DropDownItem[];
};
