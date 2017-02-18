import React from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import PasswordField from './PasswordField.jsx';
import StrengthMeter from './StrengthMeter.jsx';

export default class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: '' };
        this.changePassword = this.changePassword.bind(this);
    }
    
    changePassword(password) {
        this.setState({password});
    };
    
    render() {
        let { goodPasswordPrinciples } = this.props;
        let { password } = this.state;
        
        let style = { padding: 10 + 'px' };
        
        return (
            <div style={style}>
                <Panel bsClass={style}>
                    <Grid>
                        <Row>
                            <Col md={8}>
                                <PasswordField principles={goodPasswordPrinciples} password={password} onPasswordChange={this.changePassword}/>
                            </Col>
                            <Col md={4}>
                                <StrengthMeter principles={goodPasswordPrinciples} password={password} />
                            </Col>
                        </Row>
                    </Grid>
                </Panel>
            </div>
        );
    }
}

const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9 ]/;
const DIGIT_REGEX = /[0-9]/;

PasswordInput.defaultProps = {
    goodPasswordPrinciples: [
        {
            label: "6+ characters",
            predicate: password => password.length >= 6
        },
        {
            label: "with at least one digit",
            predicate: password => password.match( DIGIT_REGEX ) !== null
        },
        {
            label: "with at least one special character",
            predicate: password => password.match( SPECIAL_CHARS_REGEX ) !== null
        }
    ]
};