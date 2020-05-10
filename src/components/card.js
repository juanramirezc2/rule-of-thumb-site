import React, { useState } from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progress from "./progress.js";
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

export default function SingleCard({ order,  vote }) {
  // Declaración de una variable de estado que llamaremos "count"
  const [voteflag, setVoteflag] = useState(false);
  return (
    <Card style={{ backgroundImage: `${linearGradient}, url(${order.image})` }}>
      <Card.Content>
        <Card.Header>
          <Icon name="user outline" /> {order.name}
        </Card.Header>
        <Card.Description></Card.Description>
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
