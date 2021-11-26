import React, {
  ReactElement,
  useContext,
  useState,
  SyntheticEvent,
  useEffect,
} from "react";
import { useHistory } from "react-router";
import { Menu } from "antd";
import { HomeOutlined, UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Menuapp = (): ReactElement => {
  const [path, setPath] = useState("user");
  const history = useHistory();

  useEffect(() => {
    // Похож на componentDidMount
    if (history.location.pathname.indexOf("/reg") !== -1) {
      setPath("reg");
    } else {
      setPath("user");
    }
    // return () => console.log("Форма размонтирована"); // Будет выполнено, по аналогии с componentWillUnmount
  }, []);

  interface TypeClickEvent {
    item: any;
    key: string;
    keyPath: Array<string>;
    domEvent: SyntheticEvent;
  }

  const handleClick = (e: TypeClickEvent) => {
    setPath(e.key);
  };

  const themeContext = useContext(ThemeContext);
  return (
    <Menu
      theme={themeContext.darkTheme ? "dark" : "light"}
      mode="horizontal"
      selectedKeys={[path]}
      onClick={handleClick}
    >
      <Menu.Item key="user" icon={<HomeOutlined />}>
        <Link to="/user">Пользователи</Link>
      </Menu.Item>
      <Menu.Item key="reg" icon={<UserAddOutlined />}>
        <Link to="/reg">Регистрация</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Menuapp;
