import React, {Component, Fragment} from 'react';
import axios from "axios";
import Loading from "../src/Images/loading.svg";
import Summary from "./Summary";
import Countries from "./Countries";

class Details extends Component {

    constructor() {
        super();
        this.state ={
            countries:[],
            global:[],
            currentDate:null ,
            loading:true
        }
    }

    async componentDidMount() {
        const res =await axios.get("https://api.covid19api.com/summary");
        console.log(res);
        this.setState({countries:res.data.Countries});
        this.setState({global:res.data.Global});
        this.setState({currentDate:res.data.Date});
        this.setState({loading:false});
    }

    render() {
        if (this.state.loading){
            return (
                <img src={Loading} height="200" className="marginTop" width="200" />
            )

        }

        return (
            <Fragment >

                <Summary summary={this.state.global} currentDate={this.state.currentDate} />

                <table>
                    <thead>
                          <tr>
                              <th>Country</th>
                              <th>New Confirmed</th>
                              <th>Total Recovered</th>
                              <th>Total Deaths</th>
                          </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.countries.map(country=>(

                            <tr key={country.Country}>
                                <td>{country.Country}</td>
                                <td>{country.NewConfirmed}</td>
                                <td>{country.TotalRecovered}</td>
                                <td>{country.TotalDeaths}</td>

                            </tr>



                        ))
                    }
                    </tbody>
                </table>


            </Fragment>
        );
    }
}

export default Details;