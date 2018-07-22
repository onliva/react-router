import Nav from "./Nav";
import { connect } from "react-redux";
const axios = require("axios");

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <fieldset>
                <legend>Main</legend>
                <Nav />
                {this.props.children}
            </fieldset>
        );
    }
    componentDidMount() {
        var { dispatch } = this.props;
        axios
            .get("/getinfo")
            .then(res => {
                if (res.data) {
                    dispatch({
                        type: "LOGIN",
                        username: res.data
                    });
                }
            })
            .catch(err => console.log("error"));
    }
}

export default connect()(Main);
