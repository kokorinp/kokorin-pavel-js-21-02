import React, { ReactNode } from 'react';

import './Main.css';
import Paginator from './Paginator/Paginator';
import Cards from './Cards/Cards';
import Themeswitcher from './Themeswitcher/Themeswitcher';
import { getListUsers } from '../../api/api';
import { ListResponseTypeUserPreview, UserPreview } from '../../types/types';

interface State {
  page: number;
  limit: number;
  total: number;
  ListUsers: Array<UserPreview>;
}

interface Props {
  darkTheme: boolean;
}

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const page: number = localStorage.getItem('page')
      ? Number.isNaN(localStorage.getItem('page'))
        ? 0
        : Number(localStorage.getItem('page'))
      : 0;
    const limit: number = localStorage.getItem('limit')
      ? Number.isNaN(localStorage.getItem('limit'))
        ? 20
        : Number(localStorage.getItem('limit'))
      : 20;
    const total: number = localStorage.getItem('total')
      ? Number.isNaN(localStorage.getItem('total'))
        ? 99
        : Number(localStorage.getItem('total'))
      : 99;

    this.state = { page, limit, total, ListUsers: [] }; // Expected property shorthand object-shorthand

    this.setNewPage = this.setNewPage.bind(this);
    this.setNewLimit = this.setNewLimit.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount(): void {
    this.getData();
  }

  // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
  //   if (this.state.page !== nextState.page || this.state.limit !== nextState.limit) {
  //     // this.getData();
  //   }
  //
  //   console.log(this.state.page);
  //   console.log(nextState.page);
  //   console.log('-----------------------');
  //   return true;
  // }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    if (this.state.page !== prevState.page || this.state.limit !== prevState.limit) {
      this.getData();
    }
  }

  getData(): void {
    getListUsers(
      this.state.page,
      this.state.limit,
      (resp: ListResponseTypeUserPreview) => {
        this.setState({
          page: resp.page,
          limit: resp.limit,
          total: resp.total,
          ListUsers: resp.data
        });
        localStorage.setItem('page', resp.page.toString());
        localStorage.setItem('limit', resp.limit.toString());
        localStorage.setItem('total', resp.total.toString());
      },
      console.error
    );
  }

  setNewPage(page: number): void {
    this.setState({ page });
  }

  setNewLimit(limit: number): void {
    this.setState({ page: 0, limit });
  }

  render(): ReactNode {
    return (
      <main className="main">
        <h1 className="main__title">Пользователи</h1>
        <Cards darkTheme={this.props.darkTheme ? this.props.darkTheme : false} ListUsers={this.state.ListUsers} />
        <Paginator
          darkTheme={this.props.darkTheme ? this.props.darkTheme : false}
          page={this.state.page}
          limit={this.state.limit}
          total={this.state.total}
          setNewPage={this.setNewPage}
          setNewLimit={this.setNewLimit}
        />
        <Themeswitcher />
      </main>
    );
  }
}

export default Main;
