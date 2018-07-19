import Nav from "./Nav";
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
    1;
}

export default Main;
