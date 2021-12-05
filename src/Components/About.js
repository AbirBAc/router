import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Card } from 'antd';

function card1 (){
    return (
<div>
<b> <p>Description:</p></b>In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V," plots to overthrow it with the help of a young woman.
        <b> <p> <Card href="#https://www.imdb.com/title/tt0434409/"> PosterURL</Card> </p></b>
        <b> <p>Rating: 8.1</p></b>

</div>
    )      
}
       

export default card1;