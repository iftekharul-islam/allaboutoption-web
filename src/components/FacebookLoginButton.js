// FacebookLoginButton.js
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = () => {
  const handleLogin = (response) => {
    if (!response.userID) {
      console.log("Facebook login failed");
      return;
    }

    console.log("Facebook user:", response);

    const user = {
      id: response.userID,
      email: response.email,
      name: response.name,
      photo: response.picture.data.url,
      type: "facebook",
    };

    // Send to backend or store
  };

  return (
    <FacebookLogin
      appId="9558663540853784"
      autoLoad={false}
      fields="name,email,picture"
      callback={handleLogin}
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
