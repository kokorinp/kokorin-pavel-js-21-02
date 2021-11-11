import React, { ReactNode } from 'react';

import './Card.css';

interface State {}

interface Props {
  darkTheme: boolean;
  img: string;
  img_alt: string;
  name: string;
}

class Card extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div className={`card ${this.props.darkTheme ? 'card_dark' : ''}`}>
        <div className={`card__img_wrapper ${this.props.darkTheme ? 'card__img_wrapper_dark' : ''}`}>
          <img className="card__img" src={this.props.img} alt={this.props.img_alt} />
        </div>
        <div className="card__text">{this.props.name}</div>
      </div>
    );
  }
}

export default Card;
