import React, { useEffect, useState } from "react";

export default function GoogleAuth() {
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
          auth.isSignedIn.listen(onAuthChange(auth.isSignedIn.get()));
        });
    });
  });

  const onAuthChange = (signedIn) => {
    console.log("I am in");
    setIsSignedIn(signedIn);
  };
  return (
    <>
      {isSignedIn && <div>signed in</div>}
      {!isSignedIn && <div>no signed in</div>}
    </>
  );
}
