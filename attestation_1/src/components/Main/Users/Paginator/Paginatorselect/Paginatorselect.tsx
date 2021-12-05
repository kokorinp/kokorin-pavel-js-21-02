import React, { SyntheticEvent, useContext } from "react";

import "./Paginatorselect.css";
import { ThemeContext } from "../../../../../contexts/ThemeContext";

interface Props {
  limit: number;
  setNewLimit: (limit: number) => void;
}

const arroptions: Array<number> = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const Paginatorselect = ({ limit, setNewLimit }: Props) => {
  const handleSelectLimit = (e: SyntheticEvent) => {
    const l: number = Number.isNaN((e.target as HTMLSelectElement).value)
      ? 20
      : Number((e.target as HTMLSelectElement).value);
    setNewLimit(l);
  };
  const themeContext = useContext(ThemeContext);
  return (
    <div className="paginator__select">
      <select
        className={`select ${themeContext.darkTheme ? "select_dark" : ""}`}
        defaultValue={limit}
        onChange={handleSelectLimit}
      >
        {arroptions.map((e) => (
          <option
            className={`select__option ${
              themeContext.darkTheme ? "select__option_dark" : ""
            }`}
            value={e}
            key={e}
          >
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Paginatorselect;
