import React, {
  ReactElement,
  useContext,
  useState,
  SyntheticEvent,
  useEffect,
} from "react";
import "./Menuapp.scss";
import { useHistory } from "react-router";
import { Menu } from "antd";
import { IdcardOutlined, TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";

interface TypeClickEvent {
  item: any;
  key: string;
  keyPath: Array<string>;
  domEvent: SyntheticEvent;
}

const Menuapp = (): ReactElement => {
  const [path, setPath] = useState("users");
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname.indexOf("/posts") !== -1) {
      setPath("posts");
    } else if (history.location.pathname.indexOf("/user") !== -1) {
      setPath("users");
    } else {
      setPath("");
    }
    console.log(history.location.pathname);
  }, []);

  const handleClick = (e: TypeClickEvent) => {
    setPath(e.key);
  };

  const themeContext = useContext(ThemeContext);
  return (
    <Menu
      className="menu"
      theme={themeContext.darkTheme ? "dark" : "light"}
      mode="horizontal"
      selectedKeys={[path]}
      onClick={handleClick}
    >
      <Menu.Item key="users" icon={<TeamOutlined />}>
        <Link to="/users">Пользователи</Link>
      </Menu.Item>
      <Menu.Item key="posts" icon={<IdcardOutlined />}>
        <Link to="/posts">Посты</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Menuapp;
