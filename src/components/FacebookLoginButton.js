// FacebookLoginButton.js
import FacebookLogin from "react-facebook-login";
import { FACEBOOK_APP_ID } from "../config";

const FacebookLoginButton = ({ handleLogin }) => {
  return (
    <FacebookLogin
      appId={FACEBOOK_APP_ID}
      autoLoad={false}
      fields="name,email,picture,birthday"
      callback={(response) => {
        if (!response.userID) {
          console.log("Facebook login failed");
          return;
        }

        handleLogin({
          id: response?.userID,
          email: response?.email,
          dob: response?.birthday,
          name: response?.name,
          photo: response?.picture?.data?.url,
          type: "facebook",
        });
      }}
      icon="fa-facebook"
      buttonStyle={{
        backgroundColor: "#3b5998",
        color: "#fff",
        borderRadius: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        // width: "100%",
        marginTop: "10px",
      }}
      //   cssClass="facebook-login-button"
    />
  );
};

export default FacebookLoginButton;
