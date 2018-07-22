import { connect } from "react-redux";

class Transaction extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.user);
        
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
    return { user: state.user };
})(Transaction);
