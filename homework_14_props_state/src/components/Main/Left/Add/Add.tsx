import React from 'react';

import './Add.css';
import { GetID } from '../../../../utils/GetID/GetID';
import { Task } from '../../Right/Todolist/Todolist';

interface State {
  val: string;
}

interface Props {
  getNewTask: (x: Task) => void;
}

class Add extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      val: ''
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd() {
    // console.log(this.state.val);
    // console.log(GetID());
    if (this.state.val && this.state.val !== '') {
      const todolist: Array<Task> = localStorage.getItem('todolist')
        ? JSON.parse(localStorage.getItem('todolist') as string)
        : [];

      const x = {
        id: 'g'.concat(GetID()),
        // num: todolist.length + 1,
        text: this.state.val,
        stat: false
      };
      todolist.push(x);
      localStorage.setItem('todolist', JSON.stringify(todolist));

      this.props.getNewTask(x);
    }
  }

  handleChange(event: any) {
    this.setState({ val: event.target.value });
  }

  render() {
    return (
      <div className="add">
        <h4>Добавить задачу</h4>
        <textarea id="add" className="add__text" value={this.state.val} onChange={this.handleChange} />
        <button type="button" className="add__button" onClick={this.handleAdd}>
          Добавить
        </button>
      </div>
    );
  }
}

export default Add;
