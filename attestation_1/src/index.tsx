import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import App from "./App";
import "./index.scss";
// import reportWebVitals from "./reportWebVitals";

import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={ruRU}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
