import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
function StreamList(props) {
  useEffect(() => {
    console.log("useEffect start");
    props.fetchStreams();
    console.log("useEffect");
  });
  return <div>StreamList</div>;
}

export default connect(null, { fetchStreams })(StreamList);
