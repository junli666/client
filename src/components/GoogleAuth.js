import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

function GoogleAuth(props) {
  console.log(props);
  //const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "550429818300-dl2df9n37odmamfukthjsakdio75djgn.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "steamy",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (abc) => {
    console.log("change", abc);
    console.log("props in onAuthChange", props);
    if (abc) {
      props.signIn();
    } else {
      props.signOut();
    }
  };

  const signIn = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    console.log("signIn");
    auth.signIn();
  };
  const signOut = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    console.log("signOut");
    auth.signOut();
  };
  const renderAuthButton = () => {
    if (props.isSignedIn)
      return (
        <button className="ui red google button" onClick={signOut}>
          <i className="google icon"></i>
          sign out
        </button>
      );
    return (
      <button className="ui red google button" onClick={signIn}>
        <i className="google icon"></i>
        sign in with google
      </button>
    );
  };
  return <>{renderAuthButton()}</>;
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
