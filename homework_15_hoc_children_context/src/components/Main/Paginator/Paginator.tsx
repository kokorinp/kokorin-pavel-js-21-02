import React, { ReactNode } from 'react';

import './Paginator.css';
import Page from './Page/Page';
import Paginatorselect from './Paginatorselect/Paginatorselect';

interface State {}

interface Props {
  darkTheme: boolean;
  page: number;
  limit: number;
  total: number;
  setNewPage: (page: number) => void;
  setNewLimit: (limit: number) => void;
}

class Paginator extends React.Component<Props, State> {
  render(): ReactNode {
    const AllPages: Array<number> = [];
    for (let i = 1; i <= (this.props.total + 1) / this.props.limit; i += 1) {
      AllPages.push(i);
    }
    if ((this.props.total + 1) % this.props.limit > 0) {
      AllPages.push(AllPages.length + 1);
    }

    return (
      <div className="paginator">
        <div className="pages">
          {AllPages.map((e) => (
            <Page
              key={e}
              num={e}
              active={e === this.props.page + 1}
              darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
              setNewPage={this.props.setNewPage}
            />
          ))}
        </div>
        <Paginatorselect
          darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
          limit={this.props.limit}
          setNewLimit={this.props.setNewLimit}
        />
      </div>
    );
  }
}

export default Paginator;
