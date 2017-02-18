import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import classNames from 'classnames'

import PasswordService from './service.jsx'

export default class PasswordField extends React.Component {
    
    constructor( props ) {
        super( props );
        this.state = { password: '' }; 
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    
    handlePasswordChange(event) {
        let { onPasswordChange } = this.props;
        onPasswordChange(event.target.value);
    }
    
    getValidationState(  ) {
        let { principles, password } = this.props;
        let satisfiedCount = PasswordService.getNumSatisfiedPrinciples(principles, password);
        return satisfiedCount == principles.length ? "success" : "error";
    }   

    render() {
        let { password } = this.props;
        
        return (
            <form>
                <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                    <ControlLabel>Enter Password:</ControlLabel>
                    <FormControl
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={this.handlePasswordChange}
                        />
                </FormGroup>
            </form>
        );
    }
}