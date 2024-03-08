import Header from "./component/header/Header.jsx";
import css from "./styles/app.module.scss"
import React from "react";

const App = () => {
  return <div className={'bg-primary ${css.container}'}>
      <Header></Header>
  </div>
};

export default App;
