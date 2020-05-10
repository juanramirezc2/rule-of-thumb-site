import React, { Component } from "react";
import { connect } from "react-redux";
import List from "../components/list";
import Hero from "../components/hero";
import { Container } from "semantic-ui-react";
import {
  fetchOrders,
  deleteOrders,
  vote
} from "../actions/celebrities-actions";
import { Pagination } from "semantic-ui-react";

/**
 *
 * list class component in charge of show orders list
 *
 *
 */
class OrdersListPage extends Component {
  state = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    pageSize: 5
  };
  componentDidMount() {
    this.props.fetchOrders(this.state);
  }
  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
    this.props.fetchOrders({ activePage, pageSize: this.state.pageSize });
  };
  vote = (celebrity, type) => {
    if (type === "up") {
      celebrity.votes.positives++;
    } else {
      celebrity.votes.negatives++;
    }
    celebrity.votes.total =
      celebrity.votes.positives + celebrity.votes.negatives;
    return this.props
      .vote(celebrity)
      .then(response => this.setState({ redirect: true }))
      .catch(err => {
        throw this.props.errors;
      });
  };
  render() {
    const { activePage, boundaryRange, siblingRange, pageSize } = this.state;

    const { orders, total, deleteOrders, vote } = this.props;
    let totalPages = Math.ceil(total / pageSize); // round up the float number
    return (
      <main>
        <Hero vote={vote} celebrity={orders.filter(celebrity => celebrity.featured)} />
        <Container>
          <div>Speak out. Be heard.</div>
          <h2>Votes</h2>
          <List
            orders={orders.filter(celebrity => !celebrity.featured)}
            deleteOrders={deleteOrders}
            vote={vote}
          />
          <Pagination
            activePage={activePage}
            boundaryRange={boundaryRange}
            onPageChange={this.handlePaginationChange}
            size="mini"
            siblingRange={siblingRange}
            totalPages={totalPages}
          />
        </Container>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.ordersStore.orders,
    total: state.ordersStore.total
  };
}

export default connect(mapStateToProps, { fetchOrders, deleteOrders, vote })(
  OrdersListPage
);