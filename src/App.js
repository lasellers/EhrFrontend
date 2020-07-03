import React from 'react';
import './App.css';
import Patient from './components/Patient';
import SearchForm from "./components/SearchForm";

const apiUrl = 'http://localhost:8000/api/';

class App extends React.Component {

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
                        <h1>EHR</h1>
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
