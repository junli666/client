import React, { useEffect } from "react";

export default function GoogleAuth() {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "550429818300-dl2df9n37odmamfukthjsakdio75djgn.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "steamy",
      });
    });
  });
  return <div>GoogleAuth</div>;
}
