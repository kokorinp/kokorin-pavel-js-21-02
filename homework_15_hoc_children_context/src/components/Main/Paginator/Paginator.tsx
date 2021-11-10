import React, { ReactNode } from 'react';

import './Paginator.css';

interface State {}

interface Props {}

class Paginator extends React.Component<Props, State> {
  render(): ReactNode {
    return <div className="paginator">Paginator</div>;
  }
}

export default Paginator;
