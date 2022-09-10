import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import {
  Route,
  Routes
} from "react-router-dom";

import BarChart from "../column charts/Bar Chart";


class Content extends Component {
  
  render() {    
    return (
		<>					
            <div className="content">
                <Routes>
                    <Route path="/" element={<BarChart/>}/>
                    
                </Routes>
            </div>
        </>
    );
  }
}

export default Content;