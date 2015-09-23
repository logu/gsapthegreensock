/*eslint-disable */
"use strict"

var el = document.getElementById('js-c-datepicker');
var prefix = 'c-datepicker';

$(function(){
  var now = moment();
  $('.main-js-day').html(now.format('dddd'));
  $('.main-js-date-month').html(now.format('MMM'));
  $('.main-js-date-day').html(now.format('D'));
  $('.main-js-date-year').html(now.format('YYYY'));

  $('.js-day').html(now.format('dddd'));
  $('.js-date-month').html(now.format('MMM'));
  $('.js-date-day').html(now.format('D'));
  $('.js-date-year').html(now.format('YYYY'));
  $('.thermo-detail').trigger('date-changed');

});

var rome = rome(el, {
  appendTo: document.body,
  'styles': {
    'back': prefix + '__back',
    'container': prefix + '__calendar',
    'date': prefix + '__date',
    'dayBody': prefix + '__days-body',
    'dayBodyElem': prefix + '__day-body',
    'dayConcealed': prefix + '__day--concealed',
    'dayDisabled': prefix + '__day--disabled',
    'dayHead': prefix + '__days-head',
    'dayHeadElem': prefix + '__day-head',
    'dayRow': prefix + '__days-row',
    'dayTable': prefix + '__days',
    'month': prefix + '__month',
    'next': prefix + '__next',
    'positioned': prefix + '--fixed',
    'selectedDay': prefix + '__day--selected',
    'selectedTime': prefix + '__time--selected',
    'time': prefix + '__time',
    'timeList': prefix + '__time-list',
    'timeOption': prefix + '__time-option'
  },
  time: false
}).on('data', function (value) {
  var m = moment(value);
  var month = m.format('MMM');
  var day = m.format('D');
  var dayOfWeek = m.format('dddd');
  var year = m.format('YYYY');
  console.log(month, day, dayOfWeek, year);

    $('.thermo-detail').trigger('date-changed');
  document.getElementsByClassName('js-day')[0].innerText = dayOfWeek;
  document.getElementsByClassName('js-date-month')[0].innerText = month;
  document.getElementsByClassName('js-date-day')[0].innerText = day;     
  document.getElementsByClassName('js-date-year')[0].innerText = year;
});
