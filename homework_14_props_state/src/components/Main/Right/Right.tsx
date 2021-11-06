import React from 'react';

import './Right.css';
import { Todolist } from './Todolist/Todolist';

interface Props {}

interface State {
  countall: number;
  countdone: number;
}

class Right extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      countall: 0,
      countdone: 0
    };
    this.getToRightCountall = this.getToRightCountall.bind(this);
    this.getToRightCountdone = this.getToRightCountdone.bind(this);
  }

  getToRightCountall(x: number) {
    this.setState({
      countall: x
    });
  }

  getToRightCountdone(x: number) {
    this.setState({
      countdone: x
    });
  }

  render() {
    return (
      <div className="main__right">
        <Todolist getToRightCountdone={this.getToRightCountdone} getToRightCountall={this.getToRightCountall} />
        <section className="results">
          Всего тасок: {this.state.countall} / Выполнено: {this.state.countdone}
        </section>
      </div>
    );
  }
}

export default Right;
