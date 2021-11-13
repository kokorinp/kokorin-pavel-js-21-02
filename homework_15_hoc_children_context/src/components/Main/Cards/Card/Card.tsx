import React, { ReactNode } from 'react';

import './Card.css';
import UserNameWithHelper from '../../../../wrappers/UserNameWithHelper/UserNameWithHelper';

interface State {}

interface Props {
  darkTheme: boolean;
  img: string;
  img_alt: string;
  name: string;
  id: string;
}

class Card extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div className={`card ${this.props.darkTheme ? 'card_dark' : ''}`}>
        <div className={`card__img_wrapper ${this.props.darkTheme ? 'card__img_wrapper_dark' : ''}`}>
          <img className="card__img" src={this.props.img} alt={this.props.img_alt} />
        </div>
        <div className="card__user_name">
          <UserNameWithHelper user_id={this.props.id} darkTheme={this.props.darkTheme}>
            {this.props.name}
          </UserNameWithHelper>
        </div>
      </div>
    );
  }
}

export default Card;
