import React from 'react';

import './Left.css';
import Add from './Add/Add';
import { Task } from '../Right/Todolist/Todolist';

interface Props {
  getNewTask: (x: Task) => void;
}

class Left extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="main__left">
        <Add getNewTask={this.props.getNewTask} />
      </div>
    );
  }
}

export default Left;
