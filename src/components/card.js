import React, { useState } from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progress from "./progress.js";
import "./card.css";

const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

/**
 *
 * card class component in charge of show a single order
 *
 *
 */
const VoteUi = ({ order, vote, setVoteflag }) => (
  <>
    <Button basic className="thumbs-up" onClick={() => vote(order, `up`)}>
      <FontAwesomeIcon icon="thumbs-up" />
    </Button>
    <Button basic className="thumbs-down" onClick={() => vote(order, `down`)}>
      <FontAwesomeIcon icon="thumbs-down" />
    </Button>
    <Button
      basic
      color="red"
      onClick={() => {
        setVoteflag(true);
        vote(order, `down`);
      }}
    >
      Vote now
    </Button>
  </>
);
const ThankyouUi = () => (
  <>
    <p> thank you for voting!</p>
    <Button>Vote again</Button>
  </>
);
const linearGradient = `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(23,23,23,1) 12%, rgba(9,9,121,0) 55%)
`;

export default function SingleCard({ order, vote }) {
  // Declaración de una variable de estado que llamaremos "count"
  const [voteflag, setVoteflag] = useState(false);
  return (
    <Card style={{ backgroundImage: `${linearGradient}, url(${order.image})` }}>
      <Card.Content>
        <Card.Header>
          <Icon name="user outline" /> {order.name}
        </Card.Header>
        <Card.Description>
          <div className="card__metadata">
            <span className="card__metadata-created">
              {timeSince(new Date(order.created))}
            </span>
            {"  "}
            in <span>{order.category}</span>
          </div>
          <div className="card__copy">{order.copy}</div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <div className="ui two buttons">
            <Link
              to={`/orders/edit/${order._id}`}
              className="ui basic button green"
            >
              <Icon name="adjust" /> {order.pizza}
            </Link>
            {voteflag ? (
              <ThankyouUi />
            ) : (
              <VoteUi order={order} vote={vote} setVoteflag={setVoteflag} />
            )}
          </div>
        </div>
      </Card.Content>
      <Progress />
    </Card>
  );
}
