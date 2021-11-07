import React from 'react';

import './Main.css';
import Left from './Left/Left';
import Right from './Right/Right';
import { Task } from '../../types/types';

interface State {
  todolist: Array<Task>;
  countall: number;
  countdone: number;
}

interface Props {}

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const tmptodolist: Array<Task> = localStorage.getItem('todolist')
      ? JSON.parse(localStorage.getItem('todolist') as string)
      : [];

    this.state = {
      todolist: tmptodolist,
      countall: tmptodolist.length,
      countdone: tmptodolist.reduce((acc: number, e: Task) => (e.stat ? acc + 1 : acc), 0)
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.plusCountdone = this.plusCountdone.bind(this);
    this.minusCountdone = this.minusCountdone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addNewTask(x: Task) {
    const tmptodolist: Array<Task> = localStorage.getItem('todolist')
      ? JSON.parse(localStorage.getItem('todolist') as string)
      : [];
    tmptodolist.push(x);
    this.setState({
      todolist: tmptodolist,
      countall: this.state.countall + 1
    });
    localStorage.setItem('todolist', JSON.stringify(tmptodolist));
  }

  plusCountdone(id: string): void {
    const arr = Array.from(this.state.todolist);
    arr.forEach((e: Task) => {
      if (e.id === id) {
        e.stat = true;
      }
    });
    localStorage.setItem('todolist', JSON.stringify(arr));

    this.setState({
      countdone: this.state.countdone + 1,
      todolist: arr
    });
  }

  minusCountdone(id: string): void {
    const arr = Array.from(this.state.todolist);
    arr.forEach((e: Task) => {
      if (e.id === id) {
        e.stat = false;
      }
    });
    localStorage.setItem('todolist', JSON.stringify(arr));

    this.setState({
      countdone: this.state.countdone - 1,
      todolist: arr
    });
  }

  deleteItem(id: string) {
    const j = this.state.todolist.findIndex((e: Task) => e.id === id);
    const arr = Array.from(this.state.todolist);
    arr.splice(j, 1);

    this.setState({
      todolist: arr,
      countall: arr.length,
      countdone: arr.reduce((acc: number, e: Task) => (e.stat ? acc + 1 : acc), 0)
    });

    localStorage.setItem('todolist', JSON.stringify(arr));
  }

  render() {
    return (
      <main className="main">
        <Left addNewTask={this.addNewTask} />
        <Right
          todolist={this.state.todolist}
          key="Right1"
          countall={this.state.countall}
          countdone={this.state.countdone}
          minusCountdone={this.minusCountdone}
          plusCountdone={this.plusCountdone}
          deleteItem={this.deleteItem}
        />
      </main>
    );
  }
}

export default Main;
