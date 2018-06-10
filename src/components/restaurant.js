// user.js
import React from "react";  
import { connect } from "react-redux";  
import Poi from "./poi";  
import { fetchPoi } from "./actions";

export default class Restaurant extends Component {  
  componentDidMount() {
    if (!this.props.poi) {
      this.props.fetchPoi();
    }
  }
  render() {
    return (
      <Poi poi={this.props.poi} />
    );
  }
}

const mapStateToProps = (state) => ({  
  poi: state.poi,
});

const mapDispatchToProps = dispatch => bindActionCreators({  
  fetchPoi,
}, dispatch);

const connected = connect(mapStateToProps, mapDispatchToProps)(Restaurant);  
export { connected };  