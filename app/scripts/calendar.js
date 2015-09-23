var el = document.getElementById('js-c-datepicker');
var prefix = 'c-datepicker';
var now = moment();

document.getElementsByClassName('main-js-day')[0].innerText = now.format('dddd');
document.getElementsByClassName('main-js-date-month')[0].innerText = now.format('MMM');
document.getElementsByClassName('main-js-date-day')[0].innerText = now.format('D');     
document.getElementsByClassName('main-js-date-year')[0].innerText = now.format('YYYY');

document.getElementsByClassName('js-day')[0].innerText = now.format('dddd');
document.getElementsByClassName('js-date-month')[0].innerText = now.format('MMM');
document.getElementsByClassName('js-date-day')[0].innerText = now.format('D');     
document.getElementsByClassName('js-date-year')[0].innerText = now.format('YYYY');

var rome = rome(el, {
  appendTo: document.body,
  "styles": {
    "back": prefix + "__back",
    "container": prefix + "__calendar",
    "date": prefix + '__date',
    "dayBody": prefix + "__days-body",
    "dayBodyElem": prefix + "__day-body",
    "dayConcealed": prefix + "__day--concealed",
    "dayDisabled": prefix + "__day--disabled",
    "dayHead": prefix + "__days-head",
    "dayHeadElem": prefix + "__day-head",
    "dayRow": prefix + "__days-row",
    "dayTable": prefix + "__days",
    "month": prefix + "__month",
    "next": prefix + "__next",
    "positioned": prefix + "--fixed",
    "selectedDay": prefix + "__day--selected",
    "selectedTime": prefix + "__time--selected",
    "time": prefix + "__time",
    "timeList": prefix + "__time-list",
    "timeOption": prefix + "__time-option"
  },
  time: false
}).on('data', function (value) {
  var m = moment(value);
  var month = m.format('MMM');
  var day = m.format('D');
  var dayOfWeek = m.format('dddd');
  var year = m.format('YYYY');
  console.log(month, day, dayOfWeek, year);
  document.getElementsByClassName('js-day')[0].innerText = dayOfWeek;
  document.getElementsByClassName('js-date-month')[0].innerText = month;
  document.getElementsByClassName('js-date-day')[0].innerText = day;     
  document.getElementsByClassName('js-date-year')[0].innerText = year;
});
