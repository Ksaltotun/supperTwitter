import React, {Component} from "react";
import "./show-profile-info.css";

export default class ShowProfile extends Component {
  render() {
    const {onRenderProfile} = this.props;

    return (
      <input
        value="ShOw PrOFiLe InFo"
        className="btn btn-primary btn-lg"
        type="button"
        onClick={onRenderProfile}
      ></input>
    );
  }
}
