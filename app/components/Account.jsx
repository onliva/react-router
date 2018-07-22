import { connect } from "react-redux";
import Login from "./Login";
class Account extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        
    }
    logout(){
        let {dispatch} = this.props;
        dispatch({
            type: "LOGOUT",
        })
    }
    render() {
        if (this.props.user.username === null) {
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
                    <p>your username is : {this.props.user.username}</p>
                    <button onClick={this.logout.bind(this)}>log out</button>
                </fieldset>
            );
        }
    }
}

export default connect(function(state) {
    return { user: state.user };
})(Account);
