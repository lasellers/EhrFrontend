import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import '../css/App.css';
import { Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PatientList from '../components/PatientList';
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
                <div className="App">
                    <h2>Patient List</h2>
                    <NavBar />
                    <div id="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/patients" component={PatientList}/>
                            <Route path="/patient/:id" component={Patient} />
                            <Route path="/procedure/:id" component={Procedure} />
                            <Route path="/condition/:id" component={Condition} />
                            <Route path="/device/:id" component={Device} />
                            <Route path="/condition/:id" component={Condition} />
                            <Route path="/practitioner/:id" component={Practitioner} />
                            <Route path="/comments" component={Comments} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

class App2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchForm: {},
            patient: {}
        };

        this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        this.handleSearchFormChangeValue = this.handleSearchFormChangeValue.bind(this);
    }

    update(props) {
        const {family, given} = this.state.searchForm;
        const url = `${apiUrl}patients?family=${family}&given=${given}`;
        console.log('update fetch:', family, given, url);
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({['patient']: result});
                },
                (error) => {
                    console.log(error);
                    this.setState({['error']: error});
                }
            )
    }

    componentDidMount() {
        this.update({});
    };

    handleSearchFormChangeValue = (name, value) => {
        console.log(' handleSearchFormChangeValue', name, value, this.state.searchForm);

        this.setState({
            searchForm: {...this.state.searchForm, [name]: value}
        });

        console.log(' handleSearchFormChangeValue end', name, value, this.state.searchForm);
    }

    handleSearchFormSubmit(event) {
        console.log(' handleSearchFormSubmit');
        console.log('state', this.state);
        console.log('event', event);
        this.update(this.state);
        event.preventDefault();
    }

    render() {
        const patients = Object.values(this.state.patient);
        return (
            <>
                <div className="App">
                    <SearchForm value={this.state.searchForm}
                                onChangeValue={this.handleSearchFormChangeValue}
                                onSubmitValues={this.handleSearchFormSubmit}/>

                    <header className="App-header">
                        <div>
                            Name: {this.state.searchForm.family} , {this.state.searchForm.given}
                        </div>
                        {
                            patients.map(function (patient) {
                                return <Patient state={patient} key={patient.id}/>
                            })
                        }
                    </header>

                </div>
            </>
        );
    }
}

export default App;
