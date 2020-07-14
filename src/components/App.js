import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
// import PatientList from '../components/PatientList';
import ListPatients from '../components/ListPatients';
import Patients from '../components/Patients';
import Patient from '../components/Patient';
import Condition from '../components/Condition';
import Device from '../components/Device';
import Procedure from '../components/Procedure';
import Practitioner from '../components/Practitioner';
import SearchForm from "../components/SearchForm";
import NavBar from '../components/NavBar';
import AboutPage from '../components/AboutPage';
import Comments from '../components/Comments';
import NotFoundPage from '../components/NotFoundPage';
import { without } from 'lodash';
import '../css/App.css';

const apiUrl = '/api/';
// const apiUrl = 'http://localhost:8000/api/';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchForm: {},
            patient: {},
            patients: [],
        };

        //this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        //this.handleSearchFormChangeValue = this.handleSearchFormChangeValue.bind(this);
       // this.deleteAppointment = this.deleteAppointment.bind(this);
    }

    render() {
        return (
            <Router>
                <div id="App">
                    <NavBar />
                    <div id="App-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/patients" component={Patients}/>
                            <Route path="/comments" component={Comments} />
                            <Route path="/patient" component={Patient} />
                            <Route path="/condition" component={Condition} />
                            <Route path="/device" component={Device} />
                            <Route path="/practitioner" component={Practitioner} />
                            <Route path="/procedure" component={Procedure} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
