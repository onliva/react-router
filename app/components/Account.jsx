import { connect } from "react-redux";
import Login from "./Login";
class Account extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.username === null) {
            return (
                <fieldset>
                    <legend>Account</legend>
                    <Login />
                </fieldset>
            );
        } else {
            return (
                <fieldset>
                    <legend>Account</legend>
                    <p>your username is : {this.props.username}</p>
                </fieldset>
            );
        }
    }
}

export default connect(function(state) {
    return { username: state.username };
})(Account);
