import React, { SyntheticEvent, useContext } from "react";

import "./Page.css";
import { ThemeContext } from "../../../../contexts/ThemeContext";

interface Props {
  num: number;
  setNewPage: (page: number) => void;
  active: boolean;
}

const Page = ({ num, setNewPage, active }: Props) => {
  const handleSelectPage = (e: SyntheticEvent): void => {
    const page = Number(e.currentTarget.getAttribute("data-page")) - 1;
    setNewPage(page);
  };
  const themeContext = useContext(ThemeContext);
  return num !== -1 ? (
    <div
      className={`page ${active ? "page_active" : ""} ${
        themeContext.darkTheme ? "page_dark" : ""
      } ${themeContext.darkTheme && active ? "page_active_dark" : ""}`}
      data-page={num}
      onClick={handleSelectPage}
    >
      {num}
    </div>
  ) : (
    <div className={`page ${themeContext.darkTheme ? "page_dark" : ""}`}>
      ...
    </div>
  );
};

export default Page;
