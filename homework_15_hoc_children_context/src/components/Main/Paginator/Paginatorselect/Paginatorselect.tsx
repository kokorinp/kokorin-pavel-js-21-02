import React, { ReactNode, SyntheticEvent } from 'react';

import './Paginatorselect.css';

interface State {}

interface Props {
  darkTheme: boolean;
  limit: number;
  setNewLimit: (limit: number) => void;
}

const arroptions: Array<number> = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

class Paginatorselect extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleSelectLimit = this.handleSelectLimit.bind(this);
  }

  handleSelectLimit(e: SyntheticEvent) {
    const limit: number = Number.isNaN((e.target as HTMLSelectElement).value)
      ? 20
      : Number((e.target as HTMLSelectElement).value);
    this.props.setNewLimit(limit);
  }

  render(): ReactNode {
    return (
      <div className="paginator__select">
        <select
          className={`select ${this.props.darkTheme ? 'select_dark' : ''}`}
          defaultValue={this.props.limit}
          onChange={this.handleSelectLimit}
        >
          {arroptions.map((e) => (
            <option className={`select__option ${this.props.darkTheme ? 'select__option_dark' : ''}`} value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Paginatorselect;
