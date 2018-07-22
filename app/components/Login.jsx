import { connect } from "react-redux";
import { Redirect } from "react-router";
import axios from "axios";
class Login extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.history);
    }
    login() {
        const { dispatch } = this.props;
        const { user: username, pass: password } = this.refs;
        axios
            .post("/sign", { username: username.value, password: password.value })
            .then(res => {
                if (res.data === "SIGN_SUCCESS") {
                    dispatch({
                        type: "LOGIN",
                        username,
                    });
                } else {
                    console.log("login status: ", res);
                }
            })
            .catch(err => console.log("err"));
    }

    render() {
        if (this.props.user.username === null) {
            return (
                <fieldset>
                    <legend>Login</legend>
                    <input type="text" ref="user" />
                    <br />
                    <input type="password" ref="pass" />
                    <br />
                    <button onClick={this.login.bind(this)}>Login</button>
                </fieldset>
            );
        } else {
            return <Redirect to="/transaction" />;
        }
    }
}

export default connect(function(state) {
    return { user: state.user };
})(Login);
