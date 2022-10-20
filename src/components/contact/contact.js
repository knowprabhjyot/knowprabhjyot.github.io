import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../../config';
import { Box, Button, CircularProgress, Grid, makeStyles, Snackbar, TextField, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import QuickInfo from './quickInfo';

const Contact = (props) => {
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [query, setQuery] = useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [disabled, setDisable] = React.useState(false);

    const useStyles = makeStyles((theme) => ({
        submitContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        submit: {
            margin: '8px 0px'
        },
        input: {
            borderColor: '#fff',
        }
    }));
    const classes = useStyles();
    const Alert = ((props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    });

    const submitContactForm = (event) => {
        event.preventDefault();
        setDisable(true);
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            query: query
        }

        axios.post(`${url}/contact`, data).then((response) => {
            if (props.changeDialogConfig) {
                props.changeDialogConfig(false);
            }
            setOpen(true);
            setName('');
            setLastName('');
            setEmail('');
            setContact('');
            setQuery('');
            setMessage(response.data);
            setDisable(false);
        }).catch((error) => {
            setOpen(true);
            if (props.changeDialogConfig) {
                props.changeDialogConfig(false);
            }
        })
    }



    return (
        <Box display="grid" gridGap="32px">
            <QuickInfo />
            <form className={classes.form} onSubmit={submitContactForm}>

                <Typography style={{ margin: '16px 0px' }} variant="h5">Get in Touch</Typography>
                <Snackbar open={open} autoHideDuration={3000} >
                    <Alert severity="success">
                        {message}
                    </Alert>
                </Snackbar>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.input,
                                },
                            }}
                            name="firstName"
                            variant="outlined"
                            color="secondary"
                            disabled={disabled}
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={firstName}
                            onChange={e => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.input,
                                },
                            }}
                            variant="outlined"
                            color="secondary"
                            required
                            fullWidth
                            disabled={disabled}
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.input,
                                },
                            }}
                            variant="outlined"
                            color="secondary"
                            required
                            fullWidth
                            disabled={disabled}
                            id="email"
                            type="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.input,
                                },
                            }}
                            variant="outlined"
                            color="secondary"
                            required
                            fullWidth
                            disabled={disabled}
                            type="number"
                            id="contact"
                            label="Contact number"
                            name="contact"
                            autoComplete="number"
                            value={contact}
                            onChange={e => setContact(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.input,
                                },
                            }}
                            id="outlined-multiline-static"
                            label="Message"
                            required
                            disabled={disabled}
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            color="secondary"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid className={classes.submitContainer}>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        className={classes.submit}
                        disabled={disabled}
                    >
                        <span style={{ marginRight: '8px' }}>
                            {(disabled) ? <CircularProgress size={20} /> : null}
                        </span>
        Submit
</Button>
                </Grid>
            </form>
        </Box>
    )
}

export default Contact;