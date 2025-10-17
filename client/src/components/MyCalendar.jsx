import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "./Modal";

const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    id: 101,
    title: "Project Alpha Kick-off",
    start: new Date("2025-10-20T09:00:00"), // Monday, 9:00 AM
    end: new Date("2025-10-20T10:30:00"), // Monday, 10:30 AM
  },
  {
    id: 102,
    title: "Daily Stand-up",
    start: new Date("2025-10-21T11:00:00"), // Tuesday, 11:00 AM
    end: new Date("2025-10-21T11:15:00"), // Tuesday, 11:15 AM
  },
  {
    id: 103,
    title: "Review Design Mockups with Sarah",
    start: new Date("2025-10-22T14:00:00"), // Wednesday, 2:00 PM
    end: new Date("2025-10-22T15:00:00"), // Wednesday, 3:00 PM
  },
  {
    id: 104,
    title: "Team Lunch 🍕",
    start: new Date("2025-10-23T12:00:00"), // Thursday, 12:00 PM
    end: new Date("2025-10-23T13:00:00"), // Thursday, 1:00 PM
  },
  {
    id: 105,
    title: "Client Presentation Prep",
    start: new Date("2025-10-24T16:00:00"), // Friday, 4:00 PM
    end: new Date("2025-10-24T17:30:00"), // Friday, 5:30 PM
  },
  {
    id: 106,
    title: "All-Day Code Freeze",
    start: new Date("2025-10-27T00:00:00"), // All day Monday
    end: new Date("2025-10-28T00:00:00"),
    isAllDay: true, // Optional field useful for some calendar libraries
  },
];
const MyCalendar = () => {
  const [events, setEvents] = useState(myEventsList);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpenEvent, setIsOpenEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [modalState,setModalState]=useState(false)

  const handleSelectEvent = (event) => {
    setSelectedDate(null);
    setSelectedEvent(event);
    setIsOpenEvent(true);
  };

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setIsOpenEvent(null);
    setIsOpenEvent(true);
  };

  const handleSaveEvent = (e) => {
    console.log("onSAve", e);
    if (e.id) {
      setEvents((prev) => prev.map((ev) => (ev.id === e.id ? e : ev)));
    } else {
      const newEvent = {
        ...e,
        id: events.length + 1,
      };
      setEvents((prev) => [...prev, newEvent]);
    }

    setIsOpenEvent(false);
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  return (
    <>
      <div style={{ margin: "100px" }}>
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "77vh" }}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
        />
      </div>
      {isOpenEvent && (
        <Modal
          setIsOpenEvent={setIsOpenEvent}
          isOpenEvent={isOpenEvent}
          onSave={handleSaveEvent}
          date={selectedDate}
          event={selectedEvent}
        />
      )}
    </>
  );
};

export default MyCalendar;
