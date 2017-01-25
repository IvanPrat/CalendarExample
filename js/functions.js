function renderTemplate(events)
{
  var source      = document.getElementById('templateCalendar').innerHTML;
  var template    = Handlebars.compile(source);
  var html        = template(events);

  var appendDataItem = document.getElementById('hb-calendar');

  appendDataItem.innerHTML = appendDataItem.innerHTML + html;
}

// From: http://stackoverflow.com/a/847216
function tm(unix_tm) {
  var dt = new Date(unix_tm*1000);
  return dt.getHours() + '/' + dt.getMinutes() + '/' + dt.getSeconds() + ' -- ' + dt;
}

function removeEvent(id_day, id_event)
{
  calendar.removeEvent(id_day, id_event);

  document.getElementById(id_day + '' + id_event).outerHTML = '';
}

function showNewEvent(day)
{
  document.getElementById('day').value = day;
  document.getElementById('eventName').value = '';
  document.getElementById('eventTime').value = '';

  document.getElementById('formItems').style.display = 'block';
}

function createNewEvent()
{
  var day         = document.getElementById('day');
  var eventName   = document.getElementById('eventName');
  var eventTime   = document.getElementById('eventTime');

  var eventID     = calendar.addNewEvent(day.value, eventName.value, eventTime.value);

  if(eventID)
  {
    // Append the new event
    var newEvent = document.getElementById("events-" + day.value);
    newEvent.innerHTML += '<li title="' + tm(eventTime.value) + '" id="' + day.value + '' + eventID + '">' + eventName.value + ' <a href="#" class="times" onclick="removeEvent(' + day.value + ', ' + eventID + ')">&times</a></li>'

    // Remove data
    eventName.value     = '';
    eventTime.value     = '';
    day.value           = '';
    document.getElementById('formItemsMessages').innerHTML = '';

    // Hide form
    document.getElementById('formItems').style.display = 'none';
  }
  else
  {
    document.getElementById('formItemsMessages').innerHTML = 'Please, fill both fields.'
  }
}
