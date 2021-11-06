import React from 'react';

import './Todolist.css';
import Todolistitem from './Todolistitem/Todolistitem';

export interface Task {
  id: string;
  // num: number;
  text: string;
  stat: boolean;
}

interface Props {
  getToRightCountall: (x: number) => void;
  getToRightCountdone: (x: number) => void;
}

interface State {
  todolist: Array<Task>;
  countall: number;
  countdone: number;
}

export class Todolist extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const tmptodolist: Array<Task> = localStorage.getItem('todolist')
      ? JSON.parse(localStorage.getItem('todolist') as string)
      : [];

    const call = tmptodolist.length;
    const cdone = tmptodolist.reduce((acc: number, e: Task) => (e.stat ? acc + 1 : acc), 0);
    this.state = {
      todolist: tmptodolist,
      countall: call,
      countdone: cdone
    };

    this.props.getToRightCountdone(cdone);
    this.props.getToRightCountall(call);

    this.plusCountdone = this.plusCountdone.bind(this);
    this.minusCountdone = this.minusCountdone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  plusCountdone(id: string): void {
    const arr = Array.from(this.state.todolist);
    arr.forEach((e: Task) => {
      if (e.id === id) {
        e.stat = true;
      }
    });
    localStorage.setItem('todolist', JSON.stringify(arr));

    this.props.getToRightCountdone(this.state.countdone + 1);
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

    this.props.getToRightCountdone(this.state.countdone - 1);
    this.setState({
      countdone: this.state.countdone - 1,
      todolist: arr
    });
  }

  deleteItem(id: string) {
    const j = this.state.todolist.findIndex((e: Task) => e.id === id);
    const arr = Array.from(this.state.todolist);
    arr.splice(j, 1);

    const call = arr.length;
    const cdone = arr.reduce((acc: number, e: Task) => (e.stat ? acc + 1 : acc), 0);

    // вообще не имеет смысла нумеровать это... при выводе можно было бы использовать просто index массива
    // но данные не обновляются если не поменять ключ key
    // arr.forEach((e: Task, i: number) => {
    //   e.num = i + 1;
    // });

    this.setState({
      todolist: arr,
      countall: call,
      countdone: cdone
    });

    this.props.getToRightCountdone(cdone);
    this.props.getToRightCountall(call);

    localStorage.setItem('todolist', JSON.stringify(arr));
  }

  render() {
    return (
      <section className="todolist">
        {this.state.todolist.map((e: Task, i: number) => (
          <Todolistitem
            key={e.id.concat(String(i))}
            id={e.id}
            num={i + 1}
            text={e.text}
            stat={e.stat}
            minusCountdone={this.minusCountdone}
            plusCountdone={this.plusCountdone}
            deleteItem={this.deleteItem}
          />
        ))}
      </section>
    );
  }
}

export default Todolist;
