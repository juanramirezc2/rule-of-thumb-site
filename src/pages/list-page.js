import React, {Component} from "react";
import {connect} from "react-redux";
import {Container} from "semantic-ui-react";
import { fetchOrders, vote} from "../actions/celebrities-actions";
import Hero from "../components/hero";
import List from "../components/list";
import Banner from "../components/banner";
import Submit from "../components/submit";

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
    let celebrityUpdated= celebrity;
    if (type === "thumbs-up") {
      celebrityUpdated.votes.positives = celebrity.votes.positives+1;
    } else {
       celebrityUpdated.votes.negatives = celebrity.votes.negatives+1;
    }
    celebrityUpdated.votes.total = celebrityUpdated.votes.positives + celebrityUpdated.votes.negatives;
    return this.props
      .vote(celebrityUpdated)
      .then(response => this.setState({ redirect: true }))
      .catch(err => {
        throw this.props.errors;
      });
  };
  render() {
    const { activePage, boundaryRange, siblingRange, pageSize } = this.state;

    const { orders, total,  vote } = this.props;
    let totalPages = Math.ceil(total / pageSize); // round up the float number
    return (
      <main>
        <Hero vote={this.vote} celebrity={orders.filter(celebrity => celebrity.featured)} />
        <Container>
          <Banner>
          </Banner>
          <h2>Votes</h2>
          <List
            orders={orders.filter(celebrity => !celebrity.featured)}
            vote={this.vote}
          />
          <Submit />
        </Container>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.ordersStore.orders,
    total: state.ordersStore.total,
    openMenu: state.ordersStore.menuOpen
  };
}

export default connect(mapStateToProps, { fetchOrders, vote })(
  OrdersListPage
);
