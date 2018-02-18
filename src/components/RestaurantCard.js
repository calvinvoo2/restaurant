import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import { GridList, GridTile } from "material-ui/GridList";
import FontIcon from "material-ui/FontIcon";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import RaisedButton from "material-ui/RaisedButton";

const styles = {
  cardTitleText: {
    fontSize: 20
  },
  gridList: {
    height: 250
  },
  cardMediaImage: {
    height: 250
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
        <div>
          <GridList
            cols={4}
            cellHeight={200}
            padding={1}
            style={styles.gridList}
          >
            <GridTile cols={1} rows={1} style={{ padding: 0 }}>
              <img
                src={restaurantData.headerImageSrc}
                alt=""
                style={styles.cardMediaImage}
              />
            </GridTile>
            <GridTile cols={2} rows={1}>
              <CardTitle
                title={restaurantData.name}
                subtitle={restaurantData.location}
                expandable={true}
              />
              <CardText expandable={true} style={{ maxHeight: 100 }}>
                {restaurantData.description}
              </CardText>
            </GridTile>
            <GridTile cols={1} rows={1}>
              <CardActions expandable={true}>
                <Link to={"/restaurant/" + restaurantData.slug}>
                  <RaisedButton label="View Detail" primary={true} />
                </Link>
              </CardActions>
            </GridTile>
          </GridList>
        </div>
      </CardMedia>
    </Card>
  );
};

export default RestaurantCard;
