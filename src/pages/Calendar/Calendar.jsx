import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import './Calendar.css'
import useCalendar from '../../store/Calendar'
import { createEventId } from '../../data'

const Calendar = () => {
    
    const {currentEvents, setCurrentEvents} = useCalendar()

    const handleEvents = async (events)=>{
        await Promise.resolve(setCurrentEvents(events))
    }

    const handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            })
        }
    }


  return (
    <div className='calendar-container'>
        <div>
            <FullCalendar 
              plugins = {[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              headerToolbar = {{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}

              allDaySlot = {false}
                initialView = 'timeGridWeek'
                editable = {true}
                slotDuration = '01:00:00'
                selectable = {true}
                selectMirror = {true}
                dayMaxEvents = {true}
                weekends = {true}   
                nowIndicator = {true}
                initialEvents = {[currentEvents]}
                eventsSet={handleEvents}
                select={handleDateSelect}
                eventClick={handleEventClick}


                
            />
        </div>
      
    </div>
  )
}

export default Calendar
