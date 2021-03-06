/* eslint-disable @typescript-eslint/quotes */
import { FlatpickrOptions } from "ng2-flatpickr";

const DAY = 86400000;
export const optionsFlack: FlatpickrOptions = {
    defaultDate: new Date(Date.now()),
    // positionElement: 1
    altInput: true,
    onChange: (select, dateStr) => console.log(select, dateStr),
    convertModelValue: true,
    enableTime: true,
    // dateFormat: "Y-m-dTH:i",
    altFormat: "j F Y, H:i",
    // altFormat: "F j, Y H:i",
    placeholder: "Not set",
};

// events: CalendarEvent[] = [
//         {
//         start: subDays(startOfDay(new Date()), 1),
//         end: addDays(new Date(), 1),
//         title: 'A 3 day event',
//         // esta es una funcion propia de la libreria
//         color: colors.red,
//         allDay: true,
//         resizable: {
//             beforeStart: true,
//             afterEnd: true,
//         },
//         },
//         {
//         start: startOfDay(new Date()),
//         title: 'An event with no end date',
//         color: colors.yellow,
//         },
//         {
//         start: subDays(endOfMonth(new Date()), 3),
//         end: addDays(endOfMonth(new Date()), 3),
//         title: 'A long event that spans 2 months',
//         // esta es una funcion propia de la libreria
//         color: colors.blue,
//         allDay: true,
//         },
//         {
//         start: addHours(startOfDay(new Date()), 2),
//         end: addHours(new Date(), 2),
//         title: 'A draggable and resizable event',
//       // esta es una funcion propia de la libreria
//         color: colors.yellow,
//         resizable: {
//             beforeStart: true,
//             afterEnd: true,
//         },
//     },
// ];

