import React, { SyntheticEvent, useContext } from "react";

import "./Paginatorselect.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

interface Props {
  limit: number;
  setNewLimit: (limit: number) => void;
  arroptions: Array<number>;
}

const Paginatorselect = ({ limit, setNewLimit, arroptions }: Props) => {
  const handleSelectLimit = (e: SyntheticEvent) => {
    const l: number = Number.isNaN((e.target as HTMLSelectElement).value)
      ? 6
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
        {arroptions.map((e: number) => (
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
