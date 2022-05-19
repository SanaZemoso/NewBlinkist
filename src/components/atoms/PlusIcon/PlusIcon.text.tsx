import { render, screen } from "@testing-library/react";
import Icon from "./PlusIcon";
import save from "../../../assets/icons/save.svg";
import React from "react";

it("renders mui icons", () => {
  expect(Icon).toBeInTheDocument();
});