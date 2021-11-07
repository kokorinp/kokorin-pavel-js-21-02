import React from 'react';

import './Right.css';
import { Todolist } from './Todolist/Todolist';
import { Task } from '../../../types/types';

interface Props {
  todolist: Array<Task>;
  countall: number;
  countdone: number;
  plusCountdone: (id: string) => void;
  minusCountdone: (id: string) => void;
  deleteItem: (id: string) => void;
}

interface State {}

class Right extends React.Component<Props, State> {
  render() {
    return (
      <div className="main__right">
        <Todolist
          key="Todolist1"
          todolist={this.props.todolist}
          plusCountdone={this.props.plusCountdone}
          minusCountdone={this.props.minusCountdone}
          deleteItem={this.props.deleteItem}
        />
        <section className="results">
          Всего тасок: {this.props.countall} / Выполнено: {this.props.countdone}
        </section>
      </div>
    );
  }
}

export default Right;
