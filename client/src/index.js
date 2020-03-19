import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router,} from 'react-router-dom';
import $ from "jquery";
import AOS from 'aos';

$(window).ready(function() {
  AOS.init();
});

/*var arr = [100, 100, 95, 90, 90, 90, 90, 85, 65];
var countArr = [0,0,0,0,0,0,0,0,0];
var countpcArr = [0,0,0,0,0,0,0,0,0];
var elArray1 = $("filled");
var elArray = [$("html"), $("css"), $("jquery"), $("javascript"), $("react"), $("node"), $("python"), $("mongodb"), $("sql")];
*/
/*for(var z=0; z<=100; z++){
  setTimeout(function(arr, countArr,elArray) {
    for(var i=0; i < arr.length; i++) {
      console.log(elArray1.eq(i));
      elArray1.eq(i).css("width", function () {
        var string = countArr[i] + "%";
        console.log(string);
        return string;
      });
      if(countArr[i] < arr[i]) {
        countArr[i]++;
      }
    }
  }, 500, arr, countArr, elArray);
}*/

  ReactDOM.render(
    <Router>
      <App />
    </Router>, document.getElementById('root'));
