import React from 'react';
import { Panel, ProgressBar } from 'react-bootstrap';
import classNames from 'classnames';

import PrinciplesList from './PrinciplesList.jsx';
import PrinciplesProgress from './PrinciplesProgress.jsx';

export default class StrengthMeter extends React.Component {
    render() {
        return (

            <Panel>
                <PrinciplesProgress {...this.props} />
                <h5>A good password is:</h5>
                <PrinciplesList {...this.props} />
            </Panel>

        );
    }
}

