import { connect } from "react-redux";
import { Redirect } from "react-router";
import Transaction from "./Transaction";
class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.history);
        
    }
    login() {
        const { dispatch } = this.props;
        dispatch({
            type: "LOGIN",
            username: this.refs.user.value
        });
    }

    render() {
        if (this.props.username === null) {
            return (
                <fieldset>
                    <legend>Login</legend>
                    <input type="text" ref="user" />
                    <button onClick={this.login.bind(this)}>Login</button>
                </fieldset>
            );
        } else {
            return <Redirect to="/transaction" />;
        }
    }
}

export default connect(function(state) {
    return { username: state.username };
})(Login);
