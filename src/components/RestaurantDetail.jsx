import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import TextField from "material-ui/TextField";

import * as actions from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

const styles = {
  cardTitleText: {
    fontSize: 20
  },
  cardMediaImage: {
    height: 300
  },
  errorText: {
    color: "red"
  }
};

class RestaurantDetail extends Component {
  state = {
    open: false,
    sliderCounter: 0,
    formData: {},
    error: ""
  };
  //Open form dialog
  handleOpen = () => {
    this.setState({ open: true, error: "", formData: {} });
  };

  //Close form dialog
  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    //Fetch restaurant detail
    this.props.fetchRestaurantDetail(this.props.match.params.slug);
  }

  //Handle validation and submitting
  handlerBook() {
    if (
      !this.state.formData.numberOfPerson ||
      !this.state.formData.name ||
      !this.state.formData.phone ||
      !this.state.formData.date ||
      !this.state.formData.time
    ) {
      this.setState({ error: "All field must be filled" });
    } else if (!/^\d+$/.test(this.state.formData.numberOfPerson)) {
      this.setState({ error: "Number of person must be in numeric value" });
    } else {
      this.props.bookRestaurant(
        this.props.restaurantDetail,
        this.state.formData
      );
      this.setState({ open: false });
    }
  }
  //Set state for text input
  handleForm(input, inputValue) {
    var formData = this.state.formData;
    formData[input.target.name] = inputValue;
    this.setState({ formData });
  }
  //Set state for date
  handleDate(date) {
    var formData = this.state.formData;
    formData["date"] = date;
    this.setState({ formData });
  }

  //Set state for time
  handleTime(time) {
    var formData = this.state.formData;
    formData["time"] = time;
    this.setState({ formData });
  }

  renderDetail() {
    const actions = [
      <RaisedButton
        label="Cancel"
        secondary={true}
        keyboardFocused={true}
        onClick={this.handleClose.bind(this)}
      />,
      <RaisedButton
        label="Ok"
        labelColor="#ecf0f1"
        backgroundColor="#00b140"
        keyboardFocused={true}
        onClick={this.handlerBook.bind(this)}
      />
    ];
    if (this.props.restaurantDetail && this.props.restaurantDetail.data) {
      const restaurantData = this.props.restaurantDetail.data;
      return (
        <div>
          <Card>
            <CardMedia
              overlay={
                <CardTitle
                  title={restaurantData.name}
                  subtitle={restaurantData.cuisineType}
                />
              }
            >
              <img
                src={restaurantData.headerImageSrc}
                alt=""
                style={styles.cardMediaImage}
              />
            </CardMedia>
            <CardTitle
              title={"Phone: " + restaurantData.phone}
              subtitle={restaurantData.address}
            />
            <CardText>Rating: {restaurantData.rating}/5</CardText>
            <CardText>{restaurantData.description}</CardText>
            <CardActions>
              <Link to={"/"}>
                <RaisedButton label="< Back To List" secondary={true} />
              </Link>
              <RaisedButton
                label="Make a reservation"
                onClick={this.handleOpen}
                labelColor="#ecf0f1"
                backgroundColor="#00b140"
              />
            </CardActions>
            <CardText>
              {this.props.restaurantDetail && this.props.restaurantDetail.booked
                ? "Your reservation has been made"
                : ""}
            </CardText>
          </Card>
          <Dialog
            title="Reservation form"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            Please input the number of persons and the dates of the reservation:
            <TextField
              hintText="Calvin Klein"
              onChange={this.handleForm.bind(this)}
              name="name"
              floatingLabelText="Your Name"
              value={this.state.formData.name}
            />
            <br />
            <TextField
              hintText="Phone Number"
              onChange={this.handleForm.bind(this)}
              name="phone"
              value={this.state.formData.phone}
              floatingLabelText="Your Phone Number"
            />
            <br />
            <TextField
              hintText="No of person"
              onChange={this.handleForm.bind(this)}
              name="numberOfPerson"
              value={this.state.formData.numberOfPerson}
              floatingLabelText="Number of persons"
            />
            <DatePicker
              hintText="Date"
              onChange={(event, date) => {
                this.handleDate(date);
              }}
              name="date"
              value={this.state.formData.date}
            />
            <TimePicker
              hintText="Time of arrival"
              minutesStep={10}
              onChange={(event, time) => {
                this.handleTime(time);
              }}
              name="time"
              value={this.state.formData.time}
            />
            <p style={styles.errorText}>
              {this.state.error ? this.state.error : ""}
            </p>
          </Dialog>
        </div>
      );
    }
    return <p>Loading</p>;
  }

  render() {
    return <div>{this.renderDetail()}</div>;
  }
}
function mapStateToProps({ restaurantDetail }) {
  return { restaurantDetail };
}

export default connect(mapStateToProps, actions)(RestaurantDetail);
