import React from 'react';

import './Add.css';
import { GetID } from '../../../../utils/GetID/GetID';
import { Task } from '../../../../types/types';

interface State {
  val: string;
}

interface Props {
  addNewTask: (x: Task) => void;
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
    if (this.state.val && this.state.val !== '') {
      const x = {
        id: 'g'.concat(GetID()),
        text: this.state.val,
        stat: false
      };
      this.props.addNewTask(x);
      this.setState({
        val: ''
      });
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
