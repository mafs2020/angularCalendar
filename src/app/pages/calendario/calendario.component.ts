/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { CalendarioService } from 'src/app/services/calendario.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarioComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  formulario: FormGroup;
  events: CalendarEvent[] = [];
  configsStart: FlatpickrOptions[] = [];
  configsEnd: FlatpickrOptions[] = [];
  i: number;
  constructor(private fb: FormBuilder, private calendarioService: CalendarioService) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.calendarioService.getEventos().subscribe(data => {
      data.map(e => this.agregarFecha(e));
      data.map(e => this.addFecha(e));
      this.events = [...this.events, ...data.map(e => {
        return {
          title: e.title,
          color: colors.red,
          // colors: colors.red,
          start: startOfDay(new Date(e.start)),
          end: endOfDay(new Date(e.end)),
          altInput: true,
          convertModelValue: true,
          enableTime: true,
          dateFormat: "Y-m-dTH:i",
          altFormat: "F j Y H:i",
          placeholder: "Not set",
        };
      })];
    });
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(i: number) {
    this.events.splice(i,1);
    this.refresh.next();
  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      fecha: this.fb.array([])
    });
  }

  get fechas(): FormArray {
    return this.formulario.get('fecha') as FormArray;
  }

  newFecha(e: CalendarEvent): FormGroup {
    return this.fb.group({
      fecha: [new Date(e.start)],
      title: [e.title],
      primary: ['#ad2121'],
      color: ['#ad2121']
      // color: { updateOn: '' }
    });
  }

  addFecha(e: CalendarEvent): void {
    this.fechas.push(this.newFecha(e));
  }

  agregarFecha(e: CalendarEvent) {
    this.configsStart.push({
      altInput: true,
      title: e.title,
      color: colors.red,
      onChange: (date, datestring) => this.cambiarStart(date, datestring),
      defaultDate: startOfDay(new Date(e.start)),
      convertModelValue: true,
      enableTime: true,
      dateFormat: "Y-m-dTH:i",
      altFormat: "F j Y H:i",
      placeholder: "Not set",
    });

    this.configsEnd.push({
      altInput: true,
      title: e.title,
      color: colors.red,
      onChange: (date, datestring) => this.cambiarEnd(date, datestring),
      defaultDate: endOfDay(new Date(e.end)),
      convertModelValue: true,
      enableTime: true,
      dateFormat: "Y-m-dTH:i",
      altFormat: "F j Y H:i",
      placeholder: "Not set",
    });
    this.refresh.next();
  }

  index(i: number) {
    this.i = i;
    console.log(this.i);
  }

  cambiarStart(date, dateString){
    this.events[this.i].start = date[0];
    this.refresh.next();
  }

  cambiarEnd(date, dateString){
    this.events[this.i].end = date[0];
    this.refresh.next();
  }

  removeSkill(i: number) {
    this.fechas.removeAt(i);
    this.deleteEvent(i);
  }

  x(i: number) {
    console.log(i);
    console.log(this.fechas.controls[i].get('title').value);
  }

}





// {
//   start: subDays(startOfDay(new Date()), 1),
//   end: addDays(new Date(), 1),
//   title: 'A 3 day event',
//   color: colors.red,
//   allDay: true,
//   resizable: {
//     beforeStart: true,
//     afterEnd: true,
//   },
// },
// {
//   start: startOfDay(new Date()),
//   title: 'An event with no end date',
//   color: colors.yellow,
//   // actions: this.actions,
// },
// {
//   start: subDays(endOfMonth(new Date()), 3),
//   end: addDays(endOfMonth(new Date()), 3),
//   title: 'A long event that spans 2 months',
//   color: colors.blue,
//   allDay: true,
// },
// {
//   start: addHours(startOfDay(new Date()), 2),
//   end: addHours(new Date(), 2),
//   title: 'A draggable and resizable event',
//   color: colors.yellow,
//   resizable: {
//     beforeStart: true,
//     afterEnd: true,
//   },
// },
