import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import RaisedButton from "material-ui/RaisedButton";
import AutoComplete from "material-ui/AutoComplete";
import strings from "../il8n";
import { GridList, GridTile } from "material-ui/GridList";

import * as actions from "../actions";
import { connect } from "react-redux";
const styles = {
  cardTitleText: {
    fontSize: 20
  },
  cardMediaImage: {
    height: 300
  },
  errorText: {
    color: "red"
  },
  cityText: {
    fontSize: 20,
    fontWeight: "bold"
  }
};
class App extends Component {
  state = {
    location: "",
    error: "",
    dataSource: ["Jakarta", "Bogor", "Bandung"]
  };

  handleChangeLocation = () => {
    if (this.state.location != "") {
      this.props.fetchTopRestaurantList(this.state.location);
      this.setState({ error: "" });
    } else {
      this.setState({ error: strings[this.props.lang].locationNotFound });
    }
  };

  handleForm = (input, locationList) => {
    this.setState({ location: "" });
    if (locationList.indexOf(input) > -1) {
      this.setState({ location: input });
    }
  };

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
        <div>
          <p style={{ fontSize: 20 }}>
            {strings[this.props.lang].show10} {" "}
            <span style={styles.cityText}>
              {this.props.restaurant && this.props.restaurant.location
                ? this.props.restaurant.location
                : "Jakarta"}
            </span>
          </p>
          <GridList cols={3} padding={0} style={{ height: 120 }}>
            <GridTile cols={2}>
              <AutoComplete
                hintText={strings[this.props.lang].changeLocation}
                filter={AutoComplete.fuzzyFilter}
                dataSource={this.state.dataSource}
                floatingLabelText={strings[this.props.lang].location}
                fullWidth={true}
                onUpdateInput={this.handleForm}
                errorText={this.state.error ? this.state.error : ""}
                textFieldStyle={{ color: "#00B140" }}
                floatingLabelFocusStyle={{ color: "#00B140" }}
                underlineStyle={{ borderColor: "#00B140" }}
                underlineFocusStyle={{ borderColor: "#00B140" }}
                floatingLabelShrinkStyle={{ color: "#00B140" }}
              />
            </GridTile>

            <GridTile cols={1}>
              <RaisedButton
                label="Go"
                onClick={this.handleChangeLocation}
                style={{ marginTop: 20 }}
                labelColor="#ecf0f1"
                backgroundColor="#00b140"
              />
            </GridTile>
          </GridList>
        </div>

        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps({ restaurant, lang }) {
  return { restaurant, lang };
}

export default connect(mapStateToProps, actions)(App);
