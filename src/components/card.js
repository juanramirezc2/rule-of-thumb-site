import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React, { useState } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import "./card.css";
import Progress from "./progress.js";

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

const ThumbsUp = ({ click, selected }) => (
  <Button
    style={{ marginRight: "1rem", width: "3.5rem", height: "3.5rem" }}
    className={classnames({
      "thumbs-up": true,
      selectedButton: selected === `thumbs-up`,
    })}
    onClick={click}
    basic
  >
    <FontAwesomeIcon icon="thumbs-up" />
  </Button>
);
const ThumbsDown = ({ click, selected }) => (
  <Button
    style={{ marginRight: "1rem", width: "3.5rem", height: "3.5rem" }}
    className={classnames({
      "thumbs-down": true,
      selectedButton: selected === `thumbs-down`,
    })}
    onClick={click}
    basic
  >
    <FontAwesomeIcon icon="thumbs-down" />
  </Button>
);

const VoteUi = ({
  order,
  vote,
  setVoteflag,
  selectedButton,
  setSelectedButton,
}) => (
  <>
    <ThumbsUp
      selected={selectedButton}
      click={() => {
        setSelectedButton("thumbs-up");
      }}
    />
    <ThumbsDown
      selected={selectedButton}
      click={() => {
        setSelectedButton("thumbs-down");
      }}
    />
    <Button
      basic
      color="red"
      onClick={() => {
        if (selectedButton) {
          setVoteflag(true);
          vote(order, selectedButton);
          setSelectedButton(false);
        } else {
          alert("please select eather thumbs up or thumbs down buttons");
        }
      }}
    >
      Vote now
    </Button>
  </>
);
const ThankyouUi = ({ setVoteflag }) => (
  <>
    <p> thank you for voting!</p>
    <Button onClick={() => setVoteflag(false)}>Vote again</Button>
  </>
);
const linearGradient = `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(23,23,23,1) 12%, rgba(9,9,121,0) 55%)
`;

export default function SingleCard({ order, vote }) {
  const [voteflag, setVoteflag] = useState(false);
  const [selectedButton, setSelectedButton] = useState(false);
  return (
    <Card style={{ backgroundImage: `${linearGradient}, url(${order.image})` }}>
      <Card.Content>
        <Card.Header>
          <div className="card_overall-votes">
            {order.votes.positives > order.votes.negatives ? (
              <ThumbsUp />
            ) : (
              <ThumbsDown />
            )}
          </div>
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
            {voteflag ? (
              <ThankyouUi setVoteflag={setVoteflag} />
            ) : (
              <VoteUi
                order={order}
                vote={vote}
                setVoteflag={setVoteflag}
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
              />
            )}
          </div>
        </div>
      </Card.Content>
      <Progress progress={(100 * order.votes.positives) / order.votes.total} />
    </Card>
  );
}
