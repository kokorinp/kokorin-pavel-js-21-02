import React, { ReactNode } from 'react';

import './Page.css';

interface State {}

interface Props {
  darkTheme: boolean;
  num: number;
  active?: boolean;
}

class Page extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div
        className={`page ${this.props.active ? 'page_active' : ''} ${this.props.darkTheme ? 'page_dark' : ''} ${
          this.props.darkTheme && this.props.active ? 'page_active_dark' : ''
        }`}
      >
        {this.props.num}
      </div>
    );
  }
}

export default Page;
