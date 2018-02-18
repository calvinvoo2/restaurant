import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import RestaurantCard from "./RestaurantCard";
import * as actions from "../actions";
import { connect } from "react-redux";
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: "auto"
  },
  textTitle: {
    fontSize: 30
  }
};

class App extends Component {
  componentDidMount() {
    this.props.fetchTopRestaurantList();
  }

  renderList() {
    if (this.props.restaurant && this.props.restaurant.restaurantList) {
      return this.props.restaurant.restaurantList.map((restaurant, index) => (
        <RestaurantCard
          restaurant={restaurant}
          index={index}
          key={restaurant._id}
        />
      ));
    }
    return <p>Loading</p>;
  }

  render() {
    return (
      <div>
        <p style={styles.textTitle}>Top 10 Restaurants Around you</p>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps({ restaurant }) {
  return { restaurant };
}

export default connect(mapStateToProps, actions)(App);
