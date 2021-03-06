/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  addMonths,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { CalendarioService } from 'src/app/services/calendario.service';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { optionsFlack } from 'src/app/utils/calendarioOptions';

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
  selector: 'app-segundo-calendario',
  templateUrl: './segundo-calendario.component.html',
  styleUrls: ['./segundo-calendario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SegundoCalendarioComponent implements OnInit {
  formulario: FormGroup;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  color = { red: '#ad2121' };
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  start: FormControl = new FormControl(new Date().setMonth(3));
  startOptions: FlatpickrOptions = optionsFlack;
  constructor(private eventosServices: CalendarioService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.agregarEventosForms();
    this.eventosServices.getEventos().subscribe(data => {
      data.map(e => console.log(e.title, new Date(e.start)));
      this.events = [ ...this.events, ...data.map(e => ({
        title: e.title,
        start: startOfDay(new Date()),
        // start: startOfDay(new Date(e.start)),
        end: endOfDay(new Date()),
        color: colors.red,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      }))];
      this.refresh.next();
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
        title: 'Nuevo Evento',
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

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  agregarEventosForms(): void {
    this.formulario = this.fb.group({
      fecha: this.fb.array([])
    });
  }

  get fechas(): FormArray {
    return this.formulario.get('fecha') as FormArray;
  }

  newIngresarFecha(): FormGroup {
    return this.fb.group({
      fecha: [new Date()]
    });
  }

  addFecha(){
    this.fechas.push(this.newIngresarFecha());
  }

  removeSkill(i: number){
    this.fechas.removeAt(i);
  }

}
