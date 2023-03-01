import * as React from 'react';
import { PrivacyMain } from './PrivacyMain';
import { getUserName } from '../utilities/PracticeUtilities';

export class PrivacyApp extends React.Component {
    state = { UserName: '' }
    constructor(props: any) {
        super(props);
    }

    render() {
        return (<PrivacyMain UserName={this.state.UserName} />);
    }

    componentWillMount() {
        this.setState({ UserName: getUserName() });
    }
}