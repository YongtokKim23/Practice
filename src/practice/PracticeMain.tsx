import * as React from 'react';
import { baseApiUrl, serializeData } from '../utilities/PracticeUtilities';
import { Button, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableRow, TableHead, TableBody, TableCell } from '@material-ui/core';
import { MemberInsertPopup } from './MemberInsertPopup';
import { MemberUpdatePopup } from './MemberUpdatePopup';

export interface PracticeMainProps {
    UserName: string;
}

export class PracticeMain extends React.Component<PracticeMainProps, {}> {
    state = {
        NISTMember: [{
            Id: 0,
            LastName: '',
            FirstName: '',
            MiddleName: '',
            Gender: '',
            Location: '',
            PhoneNo: '',
            Email: '',
            Remarks: '',
            CreatedBy: '',
            CreatedDate: '',
            UpdatedBy: '',
            UpdatedDate: ''
        }],
        SearchMember: {
            SearchString: '',
            Location: '',
            StartDate: '',
            EndDate: new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24).toISOString()
        },
        Location: [{
            Id: 0,
            LookupName: ''
        }],
        message: 'Welcom to Practice Page'
    }

    memberInsertPopup = React.createRef<MemberInsertPopup>();
    memberUpdatePopup = React.createRef<MemberUpdatePopup>();

    constructor(props: any) {
        super(props);
    }

    // get the list of locations and set Location state
    getLocation = () => {
        this.getData(baseApiUrl() + 'NISTLookup?lookupType=Location', 'Location');       
    }

    // Search Member
    handleSubmit = () => {
        this.getMembers(baseApiUrl() + 'NISTMember/Search');
    }

    // set SearchMember state
    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.cheked : target.value;
        const name = target.name;

        const currentState = { ...this.state.SearchMember, [name]: value };
        this.setState({ SearchMember: currentState });
    }

    // set defalut values in state
    handleClear = () => {
        this.setState({
            NISTMember: [{
                Id: 0,
                LastName: '',
                FirstName: '',
                MiddleName: '',
                Gender: '',
                Location: '',
                PhoneNo: '',
                Email: '',
                Remarks: '',
                CreatedBy: '',
                CreatedDate: '',
                UpdatedBy: '',
                UpdatedDate: ''
            }],
            SearchMember: {
                SearchString: '',
                Location: '',
            },
            Email: {
                From: 'DoNotReply@Nist.gov',
                To: [''],
                CC: [''],
                BCC: ['Nist@Nist.gov'],
                Subject: '',
                Body: ''
            },
            Location: [{
                Id: 0,
                Location: ''
            }],
            message: 'Welcom to Practice Page'
        });

        this.getLocation();
    }

    // get data by url and set state
    getData = (url: string, stateType: string) => {
        const getRequestOptions: any = {
            method: 'GET',
            credentials: 'include'
        };

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            else if (res.status === 400)
                return 'This is a Bad Request.';
            else if (res.status === 401)
                return 'You are not authorized.';
            else if (res.status === 403)
                return 'You don\'t have the access rights.';
            else if (res.status === 404)
                return 'There is no data.';
            else if (res.status === 409)
                return 'There is a conflict.';
            else if (res.status === 500)
                return 'There is an internal server error.';
            else
                return 'Unknown Error';
        }).then(responseData => {
            if (Array.isArray(responseData)) {
                if (stateType === 'Location')
                    this.setState({ Location: responseData });
            }
            else
                alert(responseData);
        }).catch((error) => {
            // do something
            alert(error.message);
        });
    }

    getMembers = (url: string) => {
        console.log(url);
        const postRequestOptions: any = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serializeData(this.state.SearchMember)
        };

        fetch(url, postRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            else if (res.status === 400)
                return 'This is a Bad Request.';
            else if (res.status === 401)
                return 'You are not authorized.';
            else if (res.status === 403)
                return 'You don\'t have the access rights.';
            else if (res.status === 404)
                return 'There is no data.';
            else if (res.status === 409)
                return 'There is a conflict.';
            else if (res.status === 500)
                return 'There is an internal server error.';
            else
                return 'Unknown Error';
        }).then(responseData => {
            if (Array.isArray(responseData)) {
                this.setState({ NISTMember: responseData });
            }
        }).catch((error) => {
            // do something
            alert(error.message);
        });
    };


    // Practice Main Page
    render() {
        return (
            <Paper>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ backgroundColor: 'darkred', color: "white", textAlign: "center" }}>
                        <h5 style={{width: "100%"}}>Create a New Trip</h5>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField name="Rank" onChange={this.handleChange} placeholder="Enter Traveler Name" helperText="* Traveler Name" inputProps={{ maxLength: 150, readOnly: true }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField name="Rank" onChange={this.handleChange} placeholder="Enter Traveler Organization" helperText="* Traveler Organization" inputProps={{ maxLength: 150, readOnly: true }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField name="Rank" onChange={this.handleChange} placeholder="Enter Traveler Email" helperText="* Traveler Email" inputProps={{ maxLength: 150, readOnly: true }} />
                    </Grid>
                    {/*Last Name*/}
                    <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Who is traveling?</InputLabel>
                            <Select
                                name="Location"
                                label="Who is traveling?"
                                value={this.state.SearchMember.Location}
                                onChange={this.handleChange}>
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
                                value={this.state.SearchMember.Location}
                                onChange={this.handleChange}>
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
                                value={this.state.SearchMember.Location}
                                onChange={this.handleChange}>
                                <MenuItem value=""><em>Select One</em></MenuItem>
                                <MenuItem><em>Rough Estimate</em></MenuItem>
                                <MenuItem><em>Full Cost Detail</em></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: 'darkred', color: "white", textAlign: "center" }}>
                        <h5 style={{ width: "100%" }}>Second Header</h5>
                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: 'lightblue', minHeight: "100px" }}>
                        <h5 style={{ width: "100%", color: "darkblue" }}>Create a New Trip</h5>
                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: 'darkred', color: "white", textAlign: "center", marginTop: "20px" }}>
                        <h5 style={{ width: "100%" }}>Third Header</h5>
                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: 'lightblue', minHeight: "100px" }}>
                        <h5 style={{ width: "100%", color: "darkblue" }}>Create a New Trip</h5>
                    </Grid>
                    <Grid item xs={12} style={{ borderTop: "solid 5px black", minHeight: "400px", marginTop: "20px"}}>
                        <h5>About the site</h5>
                    </Grid>
                </Grid>
            </Paper>
        );
    }

    componentDidMount() {
        this.getLocation();
        this.getMembers(baseApiUrl() + 'NISTMember/Search');
    }
}