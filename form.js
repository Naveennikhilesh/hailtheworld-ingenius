import React, { Component } from 'react'
import { Dropdown,Checkbox } from 'semantic-ui-react'

const axios = require('axios')
axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0 ,
            sex: " " ,
            tobacco: " " ,
            pneumonia: " " ,
            diabetes: false ,
            hypertension: false ,
            cardiovascular: false ,
            renal_chronic: false ,
            asthma: false ,
            copd: false ,
            other_disease: false 
        }
    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
    }

    mySubmitHandler = (event) => {    
        alert("Submitted!");
        /*let request = {
            'name': "lalitha"
        }
        axios.get("http://localhost:5000/", {name: "lalitha"})
        .then((response) => {
            let data = response.data
            alert(data.name)
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })*/
    }

    onChangeDropDown  = (event, data) => {
        this.setState({ [data.name]: data.value })
      }

    genderOptions = [
        { key: "M", value: "M", text: "Male" },
        { key: "F", value: "F", text: "Female" }
    ]

    ansOptions = [
        {key: "Y", value: "Y", text: "Yes" },
        {key: "N", value: "N", text: "No" }
    ]

    onChangeTemp = (e, data) => {
        let n= data.name;
        this.setState({[n]: !this.state.n})
    }

    render() { 

        return ( 

            <form onSubmit = {this.mySubmitHandler}>
                <p>Enter your age: </p>
                <input
                    type="number"
                    name='age'
                    onChange={this.myChangeHandler}
                />

                <br/><br/>

                <Dropdown
                placeholder="Select Gender"
                name = "sex"
                onChange={this.onChangeDropDown}
                options={this.genderOptions}
                />

                <br/><br/>

                <Dropdown
                placeholder="Are you a smoker?"
                name = "tobacco"
                onChange={this.onChangeDropDown}
                options={this.ansOptions}
                />

                <br/><br/>

                <Checkbox toggle
                label= 'diabetes'
                name = 'diabetes'
                onChange= {this.onChangeTemp}
                />

                <br/><br/>

                <Checkbox toggle
                label= 'hypertension'
                name = "hypertension"
                onChange={this.onChangeTemp}
                />

                <br/><br/>
                <Checkbox toggle
                label= 'cardiovascular disease'
                name = "cardiovascular"
                onChange={this.onChangeTemp}
                />

                <br/><br/>

                <Checkbox toggle
                label= 'chronic kidney disease'
                name = "renal_chronic"
                onChange={this.onChangeTemp}
                />

                <br/><br/>

                <Checkbox toggle
                label= 'asthma'
                name = "asthma"
                onChange={this.onChangeTemp}
                />

                <br/><br/>

                <Checkbox toggle
                label= 'chronic pulmonary desease'
                name = "copd"
                onChange={this.onChangeTemp}
                />

                <br/><br/>

                <Checkbox toggle
                label= 'other'
                name = "other_disease"
                onChange={this.onChangeTemp}
                />

                <br/><br/>

                <Dropdown
                placeholder="Pneumonia?"
                name = "pneumonia"
                onChange={this.onChangeDropDown}
                options={this.ansOptions}
                />

                <br/><br/>

                <input type = 'submit'/>

                <br/><br/>

                <input type= "reset"/>
            </form>
         );
    }
}
 
export default MyForm;