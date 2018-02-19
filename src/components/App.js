import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import * as actions from "../actions";
import { connect } from "react-redux";

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
    return <div>{this.renderList()}</div>;
  }
}

function mapStateToProps({ restaurant }) {
  return { restaurant };
}

export default connect(mapStateToProps, actions)(App);
