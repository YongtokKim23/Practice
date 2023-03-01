import * as React from 'react';
import { getUserId, baseApiUrl, serializeData } from '../utilities/PracticeUtilities';
import { Button, Modal, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export interface LookupInsertProps {
    ref: any;
    getLookup: Function;
}

export class LookupInsertPopup extends React.Component<LookupInsertProps, {}> {
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

    // insert a lookup
    handleSubmit = () => {
        if (this.state.NISTLookup.LookupType && this.state.NISTLookup.LookupType.length > 0) {
            if (this.state.NISTLookup.LookupName && this.state.NISTLookup.LookupName.length > 0) {
                const today = new Date().toISOString();
                this.state.NISTLookup.CreatedBy = this.userId;
                this.state.NISTLookup.CreatedDate = today;
                this.state.NISTLookup.UpdatedBy = this.userId;
                this.state.NISTLookup.UpdatedDate = today;

                const insertLookupUrl = baseApiUrl() + 'NISTLookup/Insert';
                this.insertLookup(insertLookupUrl, this.state.NISTLookup);
            } else
                alert('Please enter Lookup Name');
        } else
            alert('Please enter Lookup Type');
    }

    insertLookup = (url: string, postData: any) => {
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
                alert(this.state.NISTLookup.LookupType + ' : ' + this.state.NISTLookup.LookupName + " has been added successfully");
                console.log(this.state.NISTLookup);
            }
        }).catch((error) => {
            // do something
            alert(error.message);
        });
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

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.handleClear();
        this.props.getLookup();
    }

    render() {
        return (
            <Grid item xs={12} style={{ textAlign: "left" }}>
                <Grid item xs={12} className="textRight">
                    <Button variant="contained" onClick={() => { this.handleShow(); }} className="imgButton btnImgInsert marginRight10" data-toggle="tooltip" title="Add New Lookup Data"><img src={window.location.origin + '/images/add_white.png'} className="btnImage" /></Button>
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
                                    onChange={this.handleChange} helperText="* Lookup Description"
                                    inputProps={{ maxLength: 255 }} />
                            </Grid>

                            <Grid className="textRight" item xs={12}>
                                <Button variant='contained' color="primary" onClick={() => { this.handleSubmit(); }} disabled={!this.state.canSave}>Submit</Button>
                                <Button variant='contained' color="secondary" onClick={() => { this.handleClear(); }}>Clear</Button>
                                <Button variant='contained' color="default" onClick={() => { this.handleClose(); }}>Close</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Modal>
            </Grid>
        );
    }
}