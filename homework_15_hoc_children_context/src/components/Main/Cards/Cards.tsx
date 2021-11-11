import React, { ReactNode } from 'react';

import './Cards.css';
import Card from './Card/Card';

interface State {}

interface Props {
  darkTheme: boolean;
}

class Cards extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div className="cards">
        <Card
          key="1"
          img="https://m.spletnik.ru/img/2016/11/olya/20161711-cuoco-post.jpg"
          img_alt="a"
          name="ms Ке́йли Кристи́н Куо́ко"
          darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
        />
        <Card
          key="2"
          img="https://i.pinimg.com/474x/b3/cb/20/b3cb2010acd16d553f3a8f18fe44946b.jpg"
          img_alt="a"
          name="ms Ке́йли Кристи́н Куо́ко"
          darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
        />
        <Card
          key="3"
          img="https://stuki-druki.com/biofoto2/kaley-cuoco-01.jpg"
          img_alt="a"
          name="ms Ке́йли Кристи́н Куо́ко"
          darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
        />
        <Card
          key="4"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDIDhsGIb05TsAS-sZcLOqCJj1WpzSz-7HA&usqp=CAU"
          img_alt="a"
          name="ms Ке́йли Кристи́н Куо́ко"
          darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
        />
        <Card
          key="5"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzP8YDJSj2azjC6gfy--scMl9N2eDHiqTCWw&usqp=CAU"
          img_alt="a"
          name="ms Ке́йли Кристи́н Куо́ко"
          darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
        />
      </div>
    );
  }
}

export default Cards;
