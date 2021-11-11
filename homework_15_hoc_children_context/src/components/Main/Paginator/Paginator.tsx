import React, { ReactNode } from 'react';

import './Paginator.css';
import Page from './Page/Page';
import Paginatorselect from './Paginatorselect/Paginatorselect';

interface State {}

interface Props {
  darkTheme: boolean;
}

class Paginator extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div className="paginator">
        <div className="pages">
          <Page key={1} num={1} active={false} darkTheme={this.props.darkTheme ? this.props.darkTheme : false} />
          <Page key={2} num={2} active={false} darkTheme={this.props.darkTheme ? this.props.darkTheme : false} />
          <Page key={3} num={3} active darkTheme={this.props.darkTheme ? this.props.darkTheme : false} />
          <Page key={4} num={4} active={false} darkTheme={this.props.darkTheme ? this.props.darkTheme : false} />
        </div>
        <Paginatorselect darkTheme={this.props.darkTheme ? this.props.darkTheme : false} />
      </div>
    );
  }
}

export default Paginator;
