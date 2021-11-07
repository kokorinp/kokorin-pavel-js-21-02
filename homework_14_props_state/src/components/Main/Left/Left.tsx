import React from 'react';

import './Left.css';
import Add from './Add/Add';
import { Task } from '../../../types/types';

interface Props {
  addNewTask: (x: Task) => void;
}

class Left extends React.Component<Props, any> {
  render() {
    return (
      <div className="main__left">
        <Add addNewTask={this.props.addNewTask} />
      </div>
    );
  }
}

export default Left;
