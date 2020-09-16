import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import Age from './age.js';


$(document).ready(function() {
  $('#calculator-input').submit(function(event) {
    event.preventDefault();

  });
});