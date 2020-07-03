import React from 'react';
import './App.css';

class PatientDetail extends React.Component {
    render() {
        console.log('state', this.props.state);
        const {birthDate, gender, name, id, careProvider, address, telecom, maritalStatus, communication, extension} = this.props.state;
        console.log('careProvider', careProvider);

        let care;
        if (careProvider) {
            care = <p><b>careProvider</b>: {careProvider[0].display}</p>
        } else {
            care = ""
        }

        return (
            <div className="App-body">
                <p>id = {id}</p>
                <p>{name[0].family} , {name[0].given}</p>
                <p><b>gender</b>: {gender}</p>
                <p><b>birthDate</b>: {birthDate}</p>
                <p><b>maritalStatus</b>: {maritalStatus.text}</p>
                <p><b>telecom</b>: {telecom[0].value}</p>
                <p><b>communication</b>: {communication[0].language.text}</p>
                <p><b>address</b>: {address[0].line} {address[0].city} {address[0].state}</p>
                {care}
            </div>
        );
    }
}

/*


 */
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`http://localhost:8000/api/patients?family=Argonaut&given=Jason`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(result);
                },
                (error) => {
                    console.log(error);
                    this.setState(error);
                }
            )
    };

    render() {
        const patients = Object.values(this.state);
        return (
            <>
                <div className="App">
                    <header className="App-header">
                        <h1>EHR</h1>
                        {console.log(patients)}
                        {console.log(patients[0])}
                        {console.log(patients.length)}
                        {
                            patients.map(function (patient) {
                                {
                                    console.log(patient)
                                }
                                {
                                    console.log(patient.id)
                                }
                                return <PatientDetail state={patient} key={patient.id}/>
                            })
                        }
                    </header>
                </div>
            </>
        );
    }

}

// return  <div><p>{patient.id}</p><p>{patient.gender}</p><p>{patient.name[0].family}</p></div>

//                                 <PatientDetail state={patient} key={patient.id}/>
export default App;
