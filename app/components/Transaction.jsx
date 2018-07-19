import { connect } from "react-redux";

class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <fieldset>
                <legend>Transaction</legend>
            </fieldset>
        );
    }
}

export default connect(function(state) {
    return { username: state.username };
})(Transaction);
