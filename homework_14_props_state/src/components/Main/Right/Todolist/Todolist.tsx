import React from 'react';

import './Todolist.css';
import Todolistitem from './Todolistitem/Todolistitem';
import { Task } from '../../../../types/types';

interface Props {
  todolist: Array<Task>;
  plusCountdone: (id: string) => void;
  minusCountdone: (id: string) => void;
  deleteItem: (id: string) => void;
}

interface State {}

export class Todolist extends React.Component<Props, State> {
  render() {
    return (
      <section className="todolist">
        {this.props.todolist.map((e: Task, i: number) => (
          <Todolistitem
            key={e.id.concat(String(i))}
            id={e.id}
            num={i + 1}
            text={e.text}
            stat={e.stat}
            plusCountdone={this.props.plusCountdone}
            minusCountdone={this.props.minusCountdone}
            deleteItem={this.props.deleteItem}
          />
        ))}
      </section>
    );
  }
}

export default Todolist;
