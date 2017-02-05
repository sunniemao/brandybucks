import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {addLog} from './helper/auth.js';
import {VictoryBar, VictoryChart, VictoryTheme, VictoryStack} from 'victory';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: [
                {
                    id: 0,
                    month: "Jan",
                    contributions: 1200
                }, {
                    id: 1,
                    month: "Feb",
                    contributions: 3400
                }, {
                    id: 2,
                    month: "Mar",
                    contributions: 1700
                }, {
                    id: 3,
                    month: "Apr",
                    contributions: 4320
                }, {
                    id: 4,
                    month: "May",
                    contributions: 2313
                }, {
                    id: 5,
                    month: "Jun",
                    contributions: 1324
                }, {
                    id: 6,
                    month: "Jul",
                    contributions: 2325
                }, {
                    id: 7,
                    month: "Aug",
                    contributions: 2312
                }
            ]
    }  
  },

  componentWillMount() {
    getAllStudents()
    .then((resp) => {
      this.setState({
        students: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    })
  },

  render: function() {
    return (
      <div id="wrapper">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-8">
      <h1>Statistics</h1>
      <div className="pullup">
      <VictoryChart
        domainPadding={20}
      >
        <VictoryStack colorScale={"qualitative"} >
          <VictoryBar
              name="area-1"
              data={this.state.data}
              x="month"
              y={(datum) => datum.contributions}/>
        </VictoryStack>
      </VictoryChart>
      </div>
      </div>
      <div className="col-md-4"></div>
      </div>
      </div>
      </div>
    );
  }
})