import { NavLink } from "react-router-dom";
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <fieldset>
                <legend>Nav</legend>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/account" activeClassName="active">account</NavLink>
                    </li>
                    <li>
                        <NavLink to="/transaction" activeClassName="active">transaction</NavLink>
                    </li>
                </ul>
            </fieldset>
        );
    }
}

export default Nav;
