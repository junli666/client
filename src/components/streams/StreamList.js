import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

function StreamList(props) {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    console.log(stream.userId);
    if (stream.userId !== null && stream.userId === props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };
  const renderList = () => {
    return props.streams.map((s) => {
      return (
        <div className="item" key={s.id}>
          {renderAdmin(s)}
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
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
