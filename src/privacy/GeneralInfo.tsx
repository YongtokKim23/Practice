import * as React from 'react';
import { Paper, Grid, Table, Box, Typography, Tab, Tabs } from '@material-ui/core';

export class GeneralInfo extends React.Component {
    state = {
        Lookup: [{
            Id: 0,
            LookupType: '',
            LookupName: '',
            LookupDesc: ''
        }],
        message: 'Welcom on this page',
        selectedTab: 0
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
            this.setState({ selectedTab: newValue });
        };

        return (
            <Paper>
                <Grid container>
                    <Grid item xs={12}>
                        <h5 style={{ width: "100%" }}>General Trip Information</h5>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}