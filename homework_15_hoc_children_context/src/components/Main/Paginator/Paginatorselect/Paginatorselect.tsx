import React, { ReactNode } from 'react';

import './Paginatorselect.css';

interface State {}

interface Props {
  darkTheme: boolean;
}

const arroptions: Array<number> = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

class Paginatorselect extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div className="paginator__select">
        <select className={`select ${this.props.darkTheme ? 'select_dark' : ''}`}>
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
