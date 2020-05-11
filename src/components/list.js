import React from "react";
import { Card } from "semantic-ui-react";
import OrderCard from "./card";

/**
 *
 * class component for listing a single order
 */
export default function OrdersList({ entries, vote }) {
  const cards = () => {
    return entries.map(entry => {
      return (
        <OrderCard key={entry._id} entry={entry}  vote={vote}/>
      );
    });
  };
  return <Card.Group>{cards()}</Card.Group>;
}
