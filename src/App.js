import React, {Component} from 'react';
import PostToApi from './controler/postToApi';
import './App.css';
import RingDiagramComponent from './components/app/ringDiagram/ringDiagramComponent';
import ChartComponent from './components/app/chart/chartComponent';
import GetDayOfWeek from './components/times/dateToTimeStamp';
import LoadingComponent from './components/common/loading/loadingComponent';
 

class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            solarId: 0,
            windId: 0,
            balance: 0,
            solar: [],
            wind: [],
            category: [],
            data: [],
            isLoading : true,
        }
    }

    componentWillMount = async () => {
        // fetching data from api ---->
        let balance = await PostToApi({"name": "Borusan"}, 'getBalance');
        let solar = await PostToApi({"name": "Borusan", "siteID": "1"}, 'getDayChart');
        let wind = await PostToApi({"name": "Borusan", "siteID": "2"}, 'getDayChart');
       
        // date convertor to name of days -- get Date and return naem of day --
        let convertDate = [];
        solar.data["energy production"][0]["time"].map((data) => {
         return convertDate.push(GetDayOfWeek(data));

        });
        
        // set in satet and data is ready for render, 
        await this.setState({
            solar: solar.data["energy production"][0]["production"],
            wind: wind.data["energy production"][0]["production"],
            // category: solar.data["energy production"][0]["time"],
            category: convertDate,
            balance: balance.data.balance,
            isLoading : false
        });
 
    }


    // get id of click point in chart and send like as props in component to show solar value and wind value.
    _getSolarAndWind = (key) => {
        this.setState({
            solarId: this.state.solar[key], // search by id from array of state and return value
            windId: this.state.wind[key]     // search by id from array of state and return value
        })
    }

    render() {
        return (
            <div className="container-fluid">
              {this.state.isLoading ? <LoadingComponent /> : ''}
                <div className="container"> 
                    <div className="row">
                        <div className="col-30">
                            <RingDiagramComponent
                                data={this.state.solarId}
                                maxData="1000"
                                extension="Kwh"
                                name="solar"
                                color="93, 173, 226"
                            />
                            <RingDiagramComponent
                                data={this.state.windId}
                                maxData="1000"
                                extension="Kwh"
                                name="wind"
                                color="46, 204, 113" 
                            />
                          
                        </div>
                        <div className="col-70">
                            <ChartComponent
                                solar={this.state.solar}
                                wind={this.state.wind}
                                category={this.state.category} 
                                action={(val) => this._getSolarAndWind(val)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <RingDiagramComponent
                                data={this.state.balance}
                                maxData={10000000}
                                extension="Enz"
                                name="balance"
                                color="241, 196, 15"
                          />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppComponent;

 
