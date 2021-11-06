import React from 'react';

import './Main.css';
import Left from './Left/Left';
import Right from './Right/Right';
import { Task } from './Right/Todolist/Todolist';

interface Props {}

class Main extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.getNewTask = this.getNewTask.bind(this);
  }

  getNewTask(x: Task) {
    console.log(x);
  }

  render() {
    return (
      <main className="main">
        <Left getNewTask={this.getNewTask} />
        <Right />
      </main>
    );
  }
}

export default Main;
