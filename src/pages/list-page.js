import React, {Component} from "react";
import {connect} from "react-redux";
import {Container} from "semantic-ui-react";
import { fetchEntries, vote} from "../actions/celebrities-actions";
import Hero from "../components/hero";
import List from "../components/list";
import Banner from "../components/banner";
import Submit from "../components/submit";

class OrdersListPage extends Component {
  componentDidMount() {
    this.props.fetchEntries();
  }
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
    const { orders } = this.props;
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
    orders: state.siteStore.orders,
    openMenu: state.siteStore.menuOpen
  };
}

export default connect(mapStateToProps, { fetchEntries, vote })(
  OrdersListPage
);
