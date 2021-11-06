import React, { SyntheticEvent } from 'react';

import './Todolistitem.css';

interface Props {
  id: string;
  num: number;
  text: string;
  stat: boolean;
  plusCountdone: (id: string) => void;
  minusCountdone: (id: string) => void;
  deleteItem: (id: string) => void;
}

interface State {
  stat: boolean;
  num: number;
}

class Todolistitem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stat: this.props.stat,
      num: this.props.num
    };
    this.handleStat = this.handleStat.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleStat(e: SyntheticEvent) {
    const id = e.currentTarget.getAttribute('id') as string;

    !this.state.stat ? this.props.plusCountdone(id) : this.props.minusCountdone(id);

    this.setState({
      stat: !this.state.stat
    });
  }

  handleDel(e: SyntheticEvent) {
    const id = e.currentTarget.getAttribute('data-id') as string;
    this.props.deleteItem(id);
  }

  render() {
    return (
      <div className={'todolist__item'.concat(this.state.stat ? ' todolist__item_done' : '')}>
        <div className="todolist__item_num">
          <span>{this.state.num}</span>
        </div>
        <div className="todolist__item_text">
          <span>{this.props.text}</span>
        </div>
        <div className="todolist__item_controls">
          <div className="todolist__item_status">
            <label htmlFor={this.props.id}>
              <input
                type="checkbox"
                id={this.props.id}
                className="todolist__item_status__input"
                defaultChecked={this.props.stat}
                onChange={this.handleStat}
              />
              готово
            </label>
          </div>
          <div className="todolist__item_del" onClick={this.handleDel} data-id={this.props.id}>
            <span>&#9249;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Todolistitem;
