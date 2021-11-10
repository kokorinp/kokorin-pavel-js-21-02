import React, { ReactNode } from 'react';

import './Card.css';

interface State {}

interface Props {
  img: string;
  imgalt: string;
}

class Card extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div className="card">
        <div className="card__img_wrapper">
          <img className="card__img" src={this.props.img} alt={this.props.imgalt} />
        </div>
      </div>
    );
  }
}

export default Card;
