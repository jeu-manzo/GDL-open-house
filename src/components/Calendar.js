import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

const localizer = BigCalendar.momentLocalizer(moment);
let events = [
    {
        title: 'titulo',
        start: Date,
        end: Date
    },
];

export default class Calendar extends React.Component{
    render() {
        return(
            <div style={{ height: 700 }}>
          <BigCalendar
            events={events}
            step={30}
            defaultView='week'
            views={['month','week','day']}
            defaultDate={new Date()}
          />
        </div>
        )
    }
}