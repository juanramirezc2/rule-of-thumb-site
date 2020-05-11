import React from "react";
import { Card } from "semantic-ui-react";
import OrderCard from "./card";

/**
 *
 * class component for listing a single order
 */
export default function OrdersList({ orders, vote }) {
  const cards = () => {
    return orders.map(order => {
      return (
        <OrderCard key={order._id} order={order}  vote={vote}/>
      );
    });
  };
  return <Card.Group>{cards()}</Card.Group>;
}
