import React, {Component} from 'react';

class Summary extends Component {
    render() {

        const {summary,currentDate}=this.props ;

        return (
            <div className="row ">
                <div className="NewConfirmed">
                    <h3 className="H3Option">New Confirmed</h3>
                    <h2>{summary.NewConfirmed}</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>

                <div className="TotalConfirmed">
                    <h3>Total Confirmed</h3>
                    <h2>{summary.TotalConfirmed}</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>

                <div className="NewDeaths">
                    <h3 >New Deaths</h3>
                    <h2>{summary.NewDeaths}</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>

                <div className="TotalDeaths">
                    <h3>Total Deaths</h3>
                    <h2>{summary.TotalDeaths}</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>

                <div className="TotalRecovered">
                    <h3>Total Recovered</h3>
                    <h2>{summary.TotalRecovered}</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>



            </div>
        );
    }
}

export default Summary;