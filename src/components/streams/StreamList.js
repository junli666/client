import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

function StreamList(props) {
  useEffect(() => {
    props.fetchStreams();
  }, []);
  const renderList = () => {
    return props.streams.map((s) => {
      return (
        <div className="item" key={s.id}>
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {s.title}
            <div className="description">{s.description}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
