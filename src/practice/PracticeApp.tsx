import * as React from "react";
import { getUserName } from '../utilities/PracticeUtilities';
import { PracticeMain } from './PracticeMain'

export class PracticeApp extends React.Component {
    state = { userName : '' }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <PracticeMain UserName={this.state.userName} />
        );
    }

    componentWillMount() {
        this.setState({ userName: getUserName() });
    }
}