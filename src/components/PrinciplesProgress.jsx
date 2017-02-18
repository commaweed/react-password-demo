import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import classNames from 'classnames'
import PasswordService from './service.jsx'

export default class PrinciplesProgress extends React.Component {

    satisfiedPercent() {
        let { principles, password } = this.props;
        let satisfiedCount = PasswordService.getNumSatisfiedPrinciples(principles, password);
        let principlesCount = principles.length;
        return ( satisfiedCount / principlesCount ) * 100.0;
    }
    
    progressColor() {
        let percentage = this.satisfiedPercent();
        return classNames( {
            danger: ( percentage < 33.4 ),
            success: ( percentage >= 66.7 ),
            warning: ( percentage >= 33.4 && percentage < 66.7 )
        });
    }

    render() {
        return (
            <ProgressBar bsStyle={this.progressColor()} now={this.satisfiedPercent()} />
        );
    }
}

