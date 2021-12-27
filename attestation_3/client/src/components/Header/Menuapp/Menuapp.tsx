import React, { ReactElement, useContext, useState, SyntheticEvent, useEffect } from 'react';
import './Menuapp.scss';
import { useParams } from 'react-router';
import { Menu } from 'antd';
import { IdcardOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';

interface TypeClickEvent {
  item: any;
  key: string;
  keyPath: Array<string>;
  domEvent: SyntheticEvent;
}

interface ParamsType {
  link: string;
}

const Menuapp = (): ReactElement => {
  const [path, setPath] = useState('users');
  const params: ParamsType = useParams();

  useEffect(() => {
    if (params.link.indexOf('posts') !== -1) {
      setPath('posts');
    } else if (params.link.indexOf('user') !== -1) {
      setPath('users');
    } else {
      setPath('');
    }
  }, [params.link]);

  const handleClick = (e: TypeClickEvent) => {
    setPath(e.key);
  };

  const themeContext = useContext(ThemeContext);
  return (
    <Menu
      id="mainmenu"
      className="menu"
      theme={themeContext.darkTheme ? 'dark' : 'light'}
      mode="horizontal"
      selectedKeys={[path]}
      onClick={handleClick}
    >
      <Menu.Item key="users" icon={<TeamOutlined />}>
        <Link id="menuusers" to="/users">
          Пользователи
        </Link>
      </Menu.Item>
      <Menu.Item key="posts" icon={<IdcardOutlined />}>
        <Link to="/posts">Посты</Link>
      </Menu.Item>
    </Menu>
  );
};

// s
export default Menuapp;
// s
