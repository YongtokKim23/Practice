import * as React from 'react';
import { getUserId, postRequest, baseApiUrl, serializeData } from '../utilities/PracticeUtilities';
import { Button, Modal, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export interface LookupUpdateProps {
    ref: any;
    getLookup: Function;
    NISTLookup: any;
}

export class LookupUpdatePopup extends React.Component<LookupUpdateProps, {}>{
    state = {
        NISTLookup: {
            Id: 0,
            LookupType: '',
            LookupName: '',
            LookupDesc: '',
            CreatedBy: '',
            CreatedDate: '',
            UpdatedBy: '',
            UpdatedDate: ''
        }, show: false, canSave: false
    }

    userId = '';

    constructor(props: any) {
        super(props);
        this.userId = getUserId();
    }

    // Update a Lookup
    handleSubmit = () => {
        if (this.state.NISTLookup.LookupType && this.state.NISTLookup.LookupType.length > 0) {
            if (this.state.NISTLookup.LookupName && this.state.NISTLookup.LookupName.length > 0) {
                const today = new Date().toISOString();
                this.state.NISTLookup.UpdatedDate = today;

                this.editLookup(baseApiUrl() + 'NISTLookup/Update', this.state.NISTLookup, 'update');
            } else
                alert('Please enter Lookup Name');
        } else
            alert('Please enter Lookup Type');
    }

    // Delete a Lookup
    handleDelete = (id: number) => {
        const delDto = {
            Id: id
        };

        this.editLookup(baseApiUrl() + 'NISTLookup/Delete', delDto, 'remove');
        this.props.getLookup();
    }

    // set state
    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const currentState = { ...this.state.NISTLookup, [name]: value };
        this.setState({ NISTLookup: currentState });

        if (this.state.NISTLookup.LookupType && this.state.NISTLookup.LookupType.length > 0 && this.state.NISTLookup.LookupName && this.state.NISTLookup.LookupName.length > 0)
            this.setState({ canSave: true });
    }

    handleShow = () => {
        this.setState({ show: true });
        this.setLookup();
    }

    handleClose = () => {
        this.setState({ show: false });
        this.handleClear();
        this.props.getLookup();
    }

    // set member
    setLookup = () => {
        this.state.NISTLookup.Id = this.props.NISTLookup.Id;
        this.state.NISTLookup.LookupType = this.props.NISTLookup.LookupType;
        this.state.NISTLookup.LookupName = this.props.NISTLookup.LookupName;
        this.state.NISTLookup.LookupDesc = this.props.NISTLookup.LookupDesc;
        this.state.NISTLookup.CreatedBy = this.props.NISTLookup.CreatedBy;
        this.state.NISTLookup.CreatedDate = this.props.NISTLookup.CreatedDate;
        const currentSQState = { ...this.state.NISTLookup, "UpdatedBy": this.userId };
        this.setState({ NISTLookup: currentSQState });
    }

    // update a lookup data or delete
    editLookup = (url: string, postData: any, action: string) => {
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
                this.setState({ NISTLookup: responseData });
                alert(this.state.NISTLookup.LookupType + ' : ' + this.state.NISTLookup.LookupName + " has been " + action + "ed successfully");
                console.log(this.state.NISTLookup);
            }
        }).catch((error) => {
            // do something
            alert(error.message);
        });
    };

    // set default values in state
    handleClear = () => {
        this.setState({
            NISTLookup: {
                Id: 0,
                LookupType: '',
                LookupName: '',
                LookupDesc: '',
                CreatedBy: '',
                CreatedDate: '',
                UpdatedBy: '',
                UpdatedDate: ''
            }, show: false, canSave: false
        });
    }

    render() {
        return (
            <Grid container item xs={12} style={{ textAlign: "left" }}>
                <Grid item xs={12} className="textRight">
                    <Button variant="contained" color="primary" onClick={() => { this.handleShow(); }} className="imgButton btnImgUpdate marginLeft5" data-toggle="tooltip" title="Update Lookup Data"><img src={window.location.origin + '/images/edit_white.png'} className="btnImage" /></Button>
                    <Button variant='contained' color="secondary" onClick={() => { window.confirm('Are you sure you wish to delete this lookup data?') && this.handleDelete(this.props.NISTLookup.Id); }} data-toggle="tooltip" title="Delete Lookup Data" className="imgButton btnImgDelete marginLeft5"><img src={window.location.origin + '/images/delete_white.png'} className="btnImage" /></Button>
                </Grid>
                <Modal className="insertModal" open={this.state.show} onClose={this.handleClose} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        <Grid container spacing={2}>
                            {/*Lookup Type*/}
                            <Grid item xs={12} sm={6}>
                                <TextField name="LookupType"
                                    id={this.state.NISTLookup.LookupType && this.state.NISTLookup.LookupType.length > 0 ? '' : 'requiredFieldLabel'}
                                    placeholder="Lookup Type"
                                    value={this.state.NISTLookup.LookupType}
                                    onChange={this.handleChange} helperText="* Lookup Type"
                                    inputProps={{ maxLength: 150 }} />
                            </Grid>
                            {/*Lookup Name*/}
                            <Grid item xs={12} sm={6}>
                                <TextField name="LookupName"
                                    id={this.state.NISTLookup.LookupName && this.state.NISTLookup.LookupName.length > 0 ? '' : 'requiredFieldLabel'}
                                    placeholder="Lookup Type"
                                    value={this.state.NISTLookup.LookupName}
                                    onChange={this.handleChange} helperText="* Lookup Name"
                                    inputProps={{ maxLength: 150 }} />
                            </Grid>
                            {/*Description*/}
                            <Grid item xs={12} sm={12}>
                                <TextField name="LookupDesc"
                                    placeholder="Lookup Description"
                                    value={this.state.NISTLookup.LookupDesc}
                                    onChange={this.handleChange} helperText="Lookup Description"
                                    inputProps={{ maxLength: 255 }} />
                            </Grid>

                            <Grid className="textRight" item xs={12}>
                                <Button variant='contained' color="primary" onClick={() => { this.handleSubmit(); }} disabled={!this.state.canSave}>Submit</Button>
                                <Button variant='contained' color="default" onClick={() => { this.handleClose(); }}>Close</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Modal>
            </Grid>
        );
    }
}