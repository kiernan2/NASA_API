import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpaceService from './api';

function getImg(response) {
  $('#theImg').attr('src', response.url);
}

$(document).ready(function() {
  $('#showImg').click(function() {
    (async function(){
      const response = await SpaceService.getSpace();
      getImg(response);
    })();
  });
});