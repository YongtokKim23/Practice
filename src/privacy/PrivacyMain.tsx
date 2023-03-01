import * as React from 'react';
import { Paper, Grid, Table, Box, Typography, Tab, Tabs, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export interface PrivacyMainProps {
    UserName: string;
}

export class PrivacyMain extends React.Component<PrivacyMainProps, {}> {
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
                        <Tabs onChange={handleChange} value={this.state.selectedTab} aria-label=" simple tabs" style={{ borderRight: '1px solid lightgray' }}>
                            <Tab value={0} className="ReferenceBox" {...a11yProps(0)} label="General Info" />
                            <Tab value={1} className="ReferenceBox" {...a11yProps(1)} label="Destination" />
                            <Tab value={2} className="ReferenceBox" {...a11yProps(2)} label="Conference" />
                        </Tabs>
                    </Grid>

                    <Grid item xs={12}>
                        <TabPanel value={this.state.selectedTab} index={0}>
                            <Grid container>
                                <Grid item xs={12} style={{ backgroundColor: 'darkred', color: "white", textAlign: "center" }}>
                                    <h5 style={{ width: "100%" }}>General Trip Information</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <span><strong>Traveler:</strong> Wen, Tony</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField name="Rank" placeholder="Enter Trip Number (from E2)" helperText="Trip ID # (from E2)" inputProps={{ maxLength: 150, readOnly: true }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <span><strong>Trip Req #:</strong> </span>
                                </Grid>
                                <Grid item xs={3}>
                                    <span><strong>Status:</strong> Full Cost Detail</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField name="Rank" placeholder="Enter Record Locator #" helperText="Record Locator #" inputProps={{ maxLength: 150, readOnly: true }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField name="Rank" placeholder="Enter Benefits To NIST" helperText="* Benefit To NIST" inputProps={{ maxLength: 150, readOnly: true }} />
                                </Grid>
                                <Grid item xs={12} style={{ marginBottom: "20px" }}>
                                    <TextField name="Rank" placeholder="Enter General Comments/Notes #" helperText="* General Trip Comments/Notes" inputProps={{ maxLength: 150, readOnly: true }} />
                                </Grid>
                                {/*Last Name*/}
                                <Grid item xs={12} sm={4}>
                                    <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Who is traveling?</InputLabel>
                                        <Select
                                            name="Location"
                                            label="Who is traveling?"
                                            value={0}
                                        >
                                            <MenuItem value=""><em>Select One</em></MenuItem>
                                            <MenuItem><em>Wen, Tony</em></MenuItem>
                                            <MenuItem><em>NIST Employee/Assoc</em></MenuItem>
                                            <MenuItem><em>Invitational Travel</em></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Staff Member</InputLabel>
                                        <Select
                                            name="Location"
                                            label="Staff Member"
                                            value={0}
                                        >
                                            <MenuItem value=""><em>Select One</em></MenuItem>
                                            <MenuItem><em>boblitt, Megan</em></MenuItem>
                                            <MenuItem><em>Spangler, Megan N.</em></MenuItem>
                                            <MenuItem><em>Kellerher, Megan</em></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Plan/Details</InputLabel>
                                        <Select
                                            name="Location"
                                            label="Plan/Detail"
                                            value={0}
                                        >
                                            <MenuItem value=""><em>Select One</em></MenuItem>
                                            <MenuItem><em>Rough Estimate</em></MenuItem>
                                            <MenuItem><em>Full Cost Detail</em></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "right" }}>
                                    <Button variant="outlined" color="primary">Next</Button>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={this.state.selectedTab} index={1}>
                            <Grid container>
                                <Grid item xs={12} style={{ backgroundColor: 'darkred', color: "white", textAlign: "center" }}>
                                    <h5 style={{ width: "100%" }}>Destination & Lodging Information</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <span><strong>Traveler:</strong> Wen, Tony</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField name="Rank" placeholder="Enter Trip Number (from E2)" helperText="Trip ID # (from E2)" inputProps={{ maxLength: 150, readOnly: true }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <span><strong>Trip Req #:</strong> </span>
                                </Grid>
                                <Grid item xs={3}>
                                    <span><strong>Status:</strong> Full Cost Detail</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField name="Rank" placeholder="Enter Record Locator #" helperText="Record Locator #" inputProps={{ maxLength: 150, readOnly: true }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField name="Rank" placeholder="Enter Benefits To NIST" helperText="* Benefit To NIST" inputProps={{ maxLength: 150, readOnly: true }} />
                                </Grid>
                                <Grid item xs={12} style={{ marginBottom: "20px" }}>
                                    <TextField name="Rank" placeholder="Enter General Comments/Notes #" helperText="* General Trip Comments/Notes" inputProps={{ maxLength: 150, readOnly: true }} />
                                </Grid>
                                {/*Last Name*/}
                                <Grid item xs={12} sm={4}>
                                    <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Who is traveling?</InputLabel>
                                        <Select
                                            name="Location"
                                            label="Who is traveling?"
                                            value={0}
                                        >
                                            <MenuItem value=""><em>Select One</em></MenuItem>
                                            <MenuItem><em>Wen, Tony</em></MenuItem>
                                            <MenuItem><em>NIST Employee/Assoc</em></MenuItem>
                                            <MenuItem><em>Invitational Travel</em></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Staff Member</InputLabel>
                                        <Select
                                            name="Location"
                                            label="Staff Member"
                                            value={0}
                                        >
                                            <MenuItem value=""><em>Select One</em></MenuItem>
                                            <MenuItem><em>boblitt, Megan</em></MenuItem>
                                            <MenuItem><em>Spangler, Megan N.</em></MenuItem>
                                            <MenuItem><em>Kellerher, Megan</em></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Plan/Details</InputLabel>
                                        <Select
                                            name="Location"
                                            label="Plan/Detail"
                                            value={0}
                                        >
                                            <MenuItem value=""><em>Select One</em></MenuItem>
                                            <MenuItem><em>Rough Estimate</em></MenuItem>
                                            <MenuItem><em>Full Cost Detail</em></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: "left" }}>
                                    <Button variant="outlined" color="secondary">Previous</Button>
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "right" }}>
                                    <Button variant="outlined" color="primary">Next</Button>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={this.state.selectedTab} index={2}>
                            <Grid item xs={12} style={{ backgroundColor: 'darkred', color: "white", textAlign: "center" }}>
                                <h5 style={{ width: "100%" }}>Conference Information</h5>
                            </Grid>
                        </TabPanel>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}