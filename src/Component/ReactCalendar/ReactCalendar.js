import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';


const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = date => {
        setDate(date);
    }

    return (
        <div>
            <Calendar onChange={handleDateChange} value={date} />
            {console.log(date)}
        </div>
    );
};

export default ReactCalendar;