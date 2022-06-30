import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

function GoogleAuth(props) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  // let auth = null;
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
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSginedIn) => {
    if (isSignedIn) props.signIn();
    else props.signOut();
  };

  const signIn = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn();
  };
  const signOut = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut();
  };
  const renderAuthButton = () => {
    if (isSignedIn)
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

export default connect(null, { signIn, signOut })(GoogleAuth);
