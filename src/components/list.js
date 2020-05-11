import React from "react";
import { Card } from "semantic-ui-react";
import EntryCard from "./card";

export default function EntriesList({ entries, vote }) {
  const cards = () => {
    return entries.map((entry) => {
      return <EntryCard key={entry._id} entry={entry} vote={vote} />;
    });
  };
  return <Card.Group>{cards()}</Card.Group>;
}
