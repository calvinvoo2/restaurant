import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import FlatButton from "material-ui/FlatButton";

const styles = {
  cardTitleText: {
    fontSize: 20
  },
  cardMediaImage: {
    height: 300
  }
};

const RestaurantCard = ({ restaurant, index }) => {
  var restaurantData = restaurant;
  return (
    <Card initiallyExpanded={index == 0 ? true : false}>
      <CardHeader
        title={index + 1 + ". " + restaurantData.name}
        subtitle={restaurantData.cuisineType}
        actAsExpander={true}
        showExpandableButton={true}
        titleStyle={styles.cardTitleText}
      />
      <CardMedia expandable={true} mediaStyle={styles.cardMediaImage}>
        <img
          src={restaurantData.headerImageSrc}
          alt=""
          style={styles.cardMediaImage}
        />
      </CardMedia>
      <CardTitle
        title={restaurantData.name}
        subtitle={restaurantData.location}
        expandable={true}
      />
      <CardText expandable={true}>{restaurantData.description}</CardText>
      <CardActions expandable={true}>
        <Link to={"/restaurant/" + restaurantData.slug}>
          <FlatButton label="View Detail" primary={true} />
        </Link>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
