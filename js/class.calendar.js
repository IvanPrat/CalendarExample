class Calendar {
  constructor(events)
  {
    this._events = events;
  }

  loadNewMonth(events)
  {
    this._events = events;
  }

  addNewDay(event)
  {
    this._events.push(event);
  }

  addNewEvent(id_day, event_name, event_timestamp)
  {
    if(event_name && event_timestamp)
    {
      // If there are no events Obj for current one...
      if(typeof this._events[id_day]['events'] === "undefined")
      {
        this._events[id_day]['events'] = {};
      }

      var object_length = Object.keys(this._events[id_day]['events']).length + 1;

      // Append new object, based on object(s) length!
      this._events[id_day]['events'][object_length] = {'name': event_name, 'timestamp': event_timestamp};

      return object_length;
    }
  }

  editEventName(event_name, id_day, id_event)
  {
    this._events[id_day]['events'][id_event]['name'] = event_name;
  }

  removeEvent(id_day, id_event)
  {
    delete this._events[id_day]['events'][id_event];
  }

  removeDay(id_day)
  {
    delete this._events[id_day];
  }
}
