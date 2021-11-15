import React, { ReactNode, SyntheticEvent, useState } from "react";
import "./UserNameWithHelper.css";

interface Props {
  children: ReactNode;
  user_id: string;
  darkTheme: boolean;
}

const UserNameWithHelper = ({ children, user_id, darkTheme }: Props) => {
  const [hovered, setHovered] = useState(false);

  const mouseOver = (e: SyntheticEvent): void => {
    setHovered(true);
    e.stopPropagation();
  };

  const mouseOut = (e: SyntheticEvent): void => {
    setHovered(false);
    e.stopPropagation();
  };

  return (
    <div
      className="user_name_with_helper"
      onMouseOut={mouseOut}
      onBlur={mouseOut}
      onMouseOver={mouseOver}
      onFocus={mouseOver}
    >
      {hovered ? (
        <div
          className={`user_name_with_helper__message ${
            darkTheme ? "user_name_with_helper__message_dark" : ""
          }`}
        >
          user_id: {user_id}
        </div>
      ) : (
        ""
      )}

      {children}
    </div>
  );
};

export default UserNameWithHelper;
