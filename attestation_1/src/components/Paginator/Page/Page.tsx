import React, { SyntheticEvent, useContext } from "react";

import "./Page.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

interface Props {
  num: number;
  setNewPage: (page: number) => void;
  active: boolean;
  dotted: boolean;
}

const Page = ({ num, setNewPage, active, dotted }: Props) => {
  const handleSelectPage = (e: SyntheticEvent): void => {
    const page = Number(e.currentTarget.getAttribute("data-page")) - 1;
    setNewPage(page);
  };
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`page ${active ? "page_active" : ""} ${
        themeContext.darkTheme ? "page_dark" : ""
      } ${themeContext.darkTheme && active ? "page_active_dark" : ""}`}
      data-page={num}
      onClick={handleSelectPage}
    >
      {dotted ? "..." : num}
    </div>
  );
};

export default Page;
