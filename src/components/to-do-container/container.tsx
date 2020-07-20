import React, { memo, FC } from "react";
import Header from "./header/header";
import ListContainer from "./list-container/list-container";
import { observer } from 'mobx-react';
import "./container.scss";

const TodoContainer: FC<any> = (observer(props => {
  return (
    <div className="containerr">
      <Header></Header>
      <ListContainer></ListContainer>
    </div>
  );
}));

export default memo(TodoContainer);
