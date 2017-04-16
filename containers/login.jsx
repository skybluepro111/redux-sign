import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';
import { Dropdown,Menu,Button,Label,Input} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import ThemeDefault from '../theme-default';
import { connect } from 'react-redux';
import { nextBtn,
     backBtn, 
     changeEmail, 
     changePassword, 
     changeConfirm,
     changeDay,
     changeMonth,
     changeYear,
     changeGender,
     gotoDashboard
    } from '../actions/login';


import s from './login.scss';

class login extends Component {
    
    constructor (props) {
        super(props)

        this._changeEmail = this._changeEmail.bind(this)
        this._changePassword = this._changePassword.bind(this)
        this._changeConfirm = this._changeConfirm.bind(this)
        this._changeDay = this._changeDay.bind(this)
        this._changeMonth = this._changeMonth.bind(this)
        this._changeYear = this._changeYear.bind(this)
    }
   
    render() {
        const { dispatch, progressValue, headerText, data } = this.props;
        if (data.result != ''){
            console.log(JSON.stringify(data.result));
        }
        return(
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <div className="loginContainer">
                        <Paper>
                            <div style={{textAlign:'center', padding:20}}>
                                <Label className="headLabel">{headerText}</Label>
                            </div>
                            <LinearProgress mode="determinate" value={progressValue} color='#0080ff' />
                            {
                                data.step==0 && 
                                    <form  className="form">
                                        <TextField
                                            id='email'
                                            floatingLabelText="EMAIL" 
                                            fullWidth={true}
                                            onChange={this._changeEmail}
                                            value={data.email}
                                            errorText={data.emailError}
                                        />
                                        <TextField
                                            id='password'
                                            floatingLabelText="PASSWORD"
                                            fullWidth={true}
                                            onChange={this._changePassword}
                                            value={data.password}
                                            errorText={data.passwordError}
                                            type="password"
                                        />

                                        <TextField
                                            id='confirm'
                                            floatingLabelText="CONFIRM PASSWORD"
                                            fullWidth={true}
                                            onChange={this._changeConfirm}
                                            value={data.confirm}
                                            errorText={data.confirmError}
                                            type="password"
                                        />
                                    </form>
                            }
                            {
                                data.step==1 && 
                                <div style={{textAlign:'center'}}>
                                    <Label className="title" >DATE OF BIRTH </Label>
                                    <Input type='text' className="inputGroup">
                                        <Input
                                            id="day"
                                            value={data.dd}
                                            placeholder="DD"
                                            onChange={this._changeDay}
                                            style={{color:data.ddtextColor}}
                                        />
                                        <Input
                                            id="month"
                                            value={data.mm}
                                            placeholder="MM"
                                            onChange={this._changeMonth}
                                            style={{color:data.mmtextColor}}
                                        />
                                        <Input
                                            id="year"
                                            value={data.yyyy}
                                            placeholder="YYYY"
                                            onChange={this._changeYear}
                                            style={{color:data.yyyytextColor}}
                                        />
                                    </Input>
                                    <Label className="title" >GENDER </Label>
                                    <Button.Group className="btnGroup">
                                        <Button id="male" content='MALE' onClick={() => dispatch(changeGender("male"))} ></Button>
                                        <Button id="female" content='FEMALE' onClick={() => dispatch(changeGender("female"))}></Button>
                                        <Button id="unspec" content='UNSPECIFIED' onClick={() => dispatch(changeGender("unspecified"))}></Button>
                                    </Button.Group>
                                     <Label className="title" >WHERE DID YOU HEAR ABOUT IS? </Label>
                                     <Dropdown placeholder='State' selection options={data.options} style={{width:'90%'}} className="sel" />
                                </div>
                            }
                            {
                                data.step>1 && 
                                <div style={{display:'grid'}}>
                                    <div style={{margin:'auto'}}>
                                        <img src="../../assets/img/images.jpg" className="image" />
                                    </div>
                                    <Button basic
                                        content='Go to Dashboard'
                                        icon='arrow right'
                                        labelPosition='right'
                                        color='blue'
                                        className="btnGo dashBtn"
                                        onClick={() => dispatch(gotoDashboard())}
                                    />

                                </div>
                            }
                            { 
                                data.step < 2 &&
                                <div style={{height: '50px'}}>
                                <hr className="space" />
                                <FlatButton className="nextBtn"
                                    onClick={() => dispatch(nextBtn(1))}
                                    label="Next"
                                    labelPosition="before"
                                    primary={true}
                                    icon={<Icon name='arrow right' color='blue' size='small'/>}
                                />
                                
                                {
                                    data.step == 1 &&
                                    <FlatButton className="backBtn"
                                        onClick={() => dispatch(backBtn(-1))}
                                        label="back"
                                    />
                                }
                                </div>
                            }
                        </Paper>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

    _changeEmail(event, newValue){
       this.props.dispatch(changeEmail(newValue));
   }
   _changePassword(event, newValue){
       this.props.dispatch(changePassword(newValue));
   }
   _changeConfirm(event, newValue){
       this.props.dispatch(changeConfirm(newValue));
   }
   _changeDay(event){
       this.props.dispatch(changeDay(event.target.value));
   }
   _changeMonth(event){
       this.props.dispatch(changeMonth(event.target.value));
   }
   _changeYear(event){
       this.props.dispatch(changeYear(event.target.value));
   }
}

login.PropTypes = {
    headerText: PropTypes.string.isRequired,
    progressValue: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired
};

function setHeaderText(step){
    switch(step){
        case 0:
            return "SignUp";
        case 1:
            return "SignUp";
        case 2:
            return "Thank you";
    }
}

function select(state){
    return {
        data: state.data,
        headerText: setHeaderText(state.data.step),
        progressValue: 33.33 * (state.data.step + 1)

    };
}
export default connect(select)(login);
