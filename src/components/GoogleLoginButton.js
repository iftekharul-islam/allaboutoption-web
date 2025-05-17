// GoogleLoginButton.js
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginButton = ({handleLogin}) => {
  return (
    <GoogleLogin
        // shape="rectangular"
        // logo_alignment="center"
        // width={"100%"}
        onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            handleLogin({
                id: decoded.sub,
                email: decoded.email,
                name: decoded.name,
                photo:  decoded.picture,
                type: "google",
            });
        }}
        onError={() => {
            console.log("Google login failed");
        }}
    />
  );
};

export default GoogleLoginButton;
