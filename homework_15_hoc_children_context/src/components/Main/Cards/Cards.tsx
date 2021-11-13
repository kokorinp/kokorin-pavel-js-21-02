import React, { ReactNode } from 'react';

import './Cards.css';
import Card from './Card/Card';
import { UserPreview } from '../../../types/types';

interface State {}

interface Props {
  darkTheme: boolean;
  ListUsers: Array<UserPreview>;
}

class Cards extends React.Component<Props, State> {
  render(): ReactNode {
    // console.log(this.props.ListUsers);
    return (
      <div className="cards">
        {this.props.ListUsers.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            img={e.picture}
            img_alt={`${e.title}. ${e.firstName} ${e.lastName}`}
            name={`${e.title}. ${e.firstName} ${e.lastName}`}
            darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
