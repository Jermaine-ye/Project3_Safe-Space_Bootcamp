import React from 'react';
import { Button, Card, Text, Title } from '@mantine/core';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

export default function CalendarDashboard() {
  const localizer = momentLocalizer(moment);

  const MyCalendar = (props) => (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );

  return <div>CalendarDashboard</div>;
}
