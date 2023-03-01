import * as React from 'react';
import { getUserId, postRequest, baseApiUrl, checkEmail, serializeData } from '../utilities/PracticeUtilities';
import { Button, Modal, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export interface MemberInsertProps {
    ref: any;
    getMember: Function;
    Location: any;
}

export class MemberInsertPopup extends React.Component<MemberInsertProps, {}>{
    state = {
        NISTMember: {
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
        },
        Location: [{
            Id: 0,
            LookupName: ''
        }],
        Email: {
            From: 'DoNotReply@Nist.gov',
            To: [''],
            CC: [''],
            BCC: ['Nist@Nist.gov'],
            Subject: '',
            Body: ''
        }, Gender: ['Male', 'Female', 'Unknown'], show: false, canSave: false
    }

    userId = '';

    constructor(props: any) {
        super(props);
        this.userId = getUserId();
    }

    // Insert a Member
    handleSubmit = () => {
        if (this.state.NISTMember.LastName && this.state.NISTMember.LastName.length > 0) {
            if (this.state.NISTMember.FirstName && this.state.NISTMember.FirstName.length > 0) {
                const today = new Date().toISOString();
                this.state.NISTMember.CreatedBy = this.userId;
                this.state.NISTMember.CreatedDate = today;
                this.state.NISTMember.UpdatedBy = this.userId;
                this.state.NISTMember.UpdatedDate = today;

                const insertMemberUrl = baseApiUrl() + 'NISTMember/Insert';
                this.insertMember(insertMemberUrl, this.state.NISTMember);
            } else
                alert('Please enter Last Name');
        } else
            alert('Please enter First Name');
    }


    insertMember = (url: string, postData: any) => {
        console.log(url);
        const postRequestOptions: any = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serializeData(postData)
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
            if (responseData.Id && responseData.Id > 0) {
                this.setState({ NISTMember: responseData });
                alert(this.state.NISTMember.FirstName + ' ' + this.state.NISTMember.LastName + "'s has been added successfully");
                console.log(this.state.NISTMember);
            }
        }).catch((error) => {
            // do something
            alert(error.message);
        });
    };

    // set state
    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const currentState = { ...this.state.NISTMember, [name]: value };
        this.setState({ NISTMember: currentState });

        if (this.state.NISTMember.LastName && this.state.NISTMember.LastName.length > 0 && this.state.NISTMember.FirstName && this.state.NISTMember.FirstName.length > 0)
            this.setState({ canSave: true });
    }

    // set default values in state
    handleClear = () => {
        this.setState({
            NISTMember: {
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
            },
            Location: [{
                Id: 0,
                LookupName: ''
            }],
            Email: {
                From: 'DoNotReply@Nist.gov',
                To: [''],
                CC: [''],
                BCC: ['Nist@Nist.gov'],
                Subject: '',
                Body: ''
            }, Gender: ['Male', 'Female', 'Unknown'], show: false, canSave: false
        });

        this.setLocation();
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.handleClear();
        this.props.getMember();
    }

    // set location
    setLocation = () => {
        this.setState({ Location: this.props.Location });
    }

    render() {
        return (
            <Grid item xs={12} style={{ textAlign: "left" }}>
                <Grid item xs={12} className="textRight">
                    <Button variant="contained" onClick={() => { this.handleShow(); }} className="imgButton btnImgInsert marginRight10" data-toggle="tooltip" title="Add New Member"><img src={window.location.origin + '/images/add_white.png'} className="btnImage" /></Button>
                </Grid>
                <Modal className="insertModal" open={this.state.show} onClose={this.handleClose} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        <Grid container spacing={2}>
                            {/*Last Name*/}
                            <Grid item xs={12} sm={4}>
                                <TextField name="LastName"
                                    id={this.state.NISTMember.LastName && this.state.NISTMember.LastName.length > 0 ? '' : 'requiredFieldLabel'}
                                    placeholder="Last Name"
                                    value={this.state.NISTMember.LastName}
                                    onChange={this.handleChange} helperText="* Last Name"
                                    inputProps={{ maxLength: 50 }} />
                            </Grid>
                            {/*First Name*/}
                            <Grid item xs={12} sm={4}>
                                <TextField name="FirstName"
                                    id={this.state.NISTMember.FirstName && this.state.NISTMember.FirstName.length > 0 ? '' : 'requiredFieldLabel'}
                                    placeholder="First Name"
                                    value={this.state.NISTMember.FirstName}
                                    onChange={this.handleChange} helperText="* First Name"
                                    inputProps={{ maxLength: 50 }} />
                            </Grid>
                            {/*Middle Name*/}
                            <Grid item xs={12} sm={4}>
                                <TextField name="MiddleName"
                                    placeholder="Middle Name"
                                    value={this.state.NISTMember.MiddleName}
                                    onChange={this.handleChange} helperText="* Middle Name"
                                    inputProps={{ maxLength: 50 }} />
                            </Grid>

                            {/*Location*/}
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <InputLabel style={{ fontSize: 13 }}>Location</InputLabel>
                                    <Select
                                        name="Location"
                                        label="Location"
                                        value={this.state.NISTMember.Location}
                                        onChange={this.handleChange}>
                                        <MenuItem value=""><em>Select One</em></MenuItem>
                                        {this.state.Location.map((item) => (
                                            <MenuItem key={item.Id} value={item.LookupName}><em>{item.LookupName}</em></MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/*Gender*/}
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <InputLabel style={{ fontSize: 13 }}>Gender</InputLabel>
                                    <Select
                                        name="Gender"
                                        label="Gender"
                                        value={this.state.NISTMember.Gender}
                                        onChange={this.handleChange}>
                                        <MenuItem value=""><em>Select One</em></MenuItem>
                                        {this.state.Gender.map((item) => (
                                            <MenuItem value={item}><em>{item}</em></MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/*Phone Number*/}
                            <Grid item xs={12} sm={4}>
                                <TextField name="PhoneNo"
                                    placeholder="Phone Number"
                                    value={this.state.NISTMember.PhoneNo}
                                    onChange={this.handleChange} helperText="Phone Number"
                                    inputProps={{ maxLength: 10 }} />
                            </Grid>
                            {/*Email*/}
                            <Grid item xs={12}>
                                <TextField name="Email"
                                    id={this.state.NISTMember.Email && this.state.NISTMember.Email.length > 0 && !checkEmail(this.state.NISTMember.Email) ? 'requiredFieldLabel' : ''}
                                    placeholder="Email"
                                    value={this.state.NISTMember.Email}
                                    onChange={this.handleChange} helperText="Email"
                                    inputProps={{ maxLength: 150 }} />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <TextField
                                        name="Remarks"
                                        id="filled-multiline-static"
                                        label="Remarks"
                                        multiline
                                        rows={5}
                                        placeholder="Remarks"
                                        style={{ width: '100%' }}
                                        value={this.state.NISTMember.Remarks}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid className="textRight" item xs={12}>
                                <Button variant='contained' color="primary" onClick={() => { this.handleSubmit(); }} disabled={!this.state.canSave}>Submit</Button>
                                <Button variant='contained' color="secondary" onClick={() => { this.handleClear(); }}>Clear</Button>
                                <Button variant='contained' color="default" onClick={() => { this.handleClear(); this.handleClose(); }}>Close</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Modal>
            </Grid>
        );
    }
}