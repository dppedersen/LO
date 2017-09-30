import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ChallengesListView from "../Components/ChallengesListView.js";

class ChallengesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  viewChallenge() {}

  addChallenge() {}

  render() {
    return <ChallengesListView />;
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer);
