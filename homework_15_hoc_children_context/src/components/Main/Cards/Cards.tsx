import React, { ReactNode } from 'react';

import './Cards.css';
import Card from './Card/Card';

interface State {}

interface Props {}

class Cards extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div className="cards">
        <Card img="https://m.spletnik.ru/img/2016/11/olya/20161711-cuoco-post.jpg" imgalt="a" />
        <Card img="https://i.pinimg.com/474x/b3/cb/20/b3cb2010acd16d553f3a8f18fe44946b.jpg" imgalt="a" />
        <Card img="https://stuki-druki.com/biofoto2/kaley-cuoco-01.jpg" imgalt="a" />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDIDhsGIb05TsAS-sZcLOqCJj1WpzSz-7HA&usqp=CAU"
          imgalt="a"
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzP8YDJSj2azjC6gfy--scMl9N2eDHiqTCWw&usqp=CAU"
          imgalt="a"
        />
      </div>
    );
  }
}

export default Cards;
