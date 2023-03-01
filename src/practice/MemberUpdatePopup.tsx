import * as React from 'react';
import { getUserId, postRequest, baseApiUrl, serializeData } from '../utilities/PracticeUtilities';
import { Button, Modal, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export interface MemberUpdateProps {
    ref: any;
    getMember: Function;
    NISTMember: any;
    Location: any;
}

export class MemberUpdatePopup extends React.Component<MemberUpdateProps, {}>{
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

    // Update a Member
    handleSubmit = () => {
        if (this.state.NISTMember.LastName && this.state.NISTMember.LastName.length > 0) {
            if (this.state.NISTMember.FirstName && this.state.NISTMember.FirstName.length > 0) {
                const today = new Date().toISOString();
                this.state.NISTMember.UpdatedDate = today;

                this.editMember(baseApiUrl() + 'NISTMember/Update', this.state.NISTMember, "update");
            } else
                alert('Please enter Last Name');
        } else
            alert('Please enter First Name');
    }

    handleDelete = (id: number) => {
        const delDto = {
            Id: id
        };

        this.editMember(baseApiUrl() + 'NISTMember/Delete', delDto, "remove");
        this.handleClear();
        this.props.getMember();
    }

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

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
        this.props.getMember();
    }

    // set location
    setLocation = () => {
        this.setState({ Location: this.props.Location });
    }

    // set member
    setMember = () => {
        this.state.NISTMember.Id = this.props.NISTMember.Id;
        this.state.NISTMember.LastName = this.props.NISTMember.LastName;
        this.state.NISTMember.FirstName = this.props.NISTMember.FirstName;
        this.state.NISTMember.MiddleName = this.props.NISTMember.MiddleName;
        this.state.NISTMember.Location = this.props.NISTMember.Location;
        this.state.NISTMember.Gender = this.props.NISTMember.Gender;
        this.state.NISTMember.Email = this.props.NISTMember.Email;
        this.state.NISTMember.PhoneNo = this.props.NISTMember.PhoneNo;
        this.state.NISTMember.Remarks = this.props.NISTMember.Remarks;
        this.state.NISTMember.CreatedBy = this.props.NISTMember.CreatedBy;
        this.state.NISTMember.CreatedDate = this.props.NISTMember.CreatedDate;
        const currentSQState = { ...this.state.NISTMember, "UpdatedBy": this.userId };
        this.setState({ NISTMember: currentSQState });
    }

    // update a member information or delete
    editMember = (url: string, postData: any, action: string) => {
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
                alert(this.state.NISTMember.FirstName + ' ' + this.state.NISTMember.LastName + "'s has been " + action + "ed successfully");
                console.log(this.state.NISTMember);
            }
        }).catch((error) => {
            // do something
            alert(error.message);
        });
    };

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
    }

    render() {
        return (
            <Grid container item xs={12} style={{ textAlign: "left" }}>
                <Grid item xs={12} className="textRight">
                    <Button variant="contained" color="primary" onClick={() => { this.handleShow(); }} className="imgButton btnImgUpdate marginLeft5" data-toggle="tooltip" title="Update Member Information"><img src={window.location.origin + '/images/edit_white.png'} className="btnImage" /></Button>
                    <Button variant='contained' color="secondary" onClick={() => { window.confirm('Are you sure you wish to delete this Member?') && this.handleDelete(this.props.NISTMember.Id); }} data-toggle="tooltip" title="Delete Member Information" className="imgButton btnImgDelete marginLeft5"><img src={window.location.origin + '/images/delete_white.png'} className="btnImage" /></Button>
                </Grid>
                <Modal className="insertModal" open={this.state.show} onClose={this.handleClose} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        <Grid container spacing={2}>
                            {/*Last Name*/}
                            <Grid item xs={12} sm={4}>
                                <TextField name="LastName"
                                    id={this.state.NISTMember.LastName && this.state.NISTMember.LastName.length > 0 ? '' : 'requireFieldLabel'}
                                    placeholder="Last Name"
                                    value={this.state.NISTMember.LastName}
                                    onChange={this.handleChange} helperText="* Last Name"
                                    inputProps={{ maxLength: 50 }} />
                            </Grid>
                            {/*First Name*/}
                            <Grid item xs={12} sm={4}>
                                <TextField name="FirstName"
                                    id={this.state.NISTMember.FirstName && this.state.NISTMember.FirstName.length > 0 ? '' : 'requireFieldLabel'}
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
                                <Button variant='contained' color="default" onClick={() => { this.handleClear(); this.handleClose(); }}>Close</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Modal>
            </Grid>
        );
    }
}