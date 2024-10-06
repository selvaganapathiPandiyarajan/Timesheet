import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { CalendarOptions, } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { window } from 'rxjs';



@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  public userDetails:any;
  public userDetailsvalue:any;
  public eventValue:any;
  public eventDataValue:any;
 public date:any;
 public Eventdata:any=[];
 public formattedEventsArray:any;
 public Hoursdata:any;
 public calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  plugins: [dayGridPlugin, interactionPlugin],
  dateClick: (arg) => this.handleDateClick(arg),
  events: [
    { title: '8 hour', date: '2024-05-06', color: 'red' }
  ],
  headerToolbar: {
    left: 'prev',
    center: 'title',
    right: 'next'
  }
};
images:any[] = [
  {img: "assets/Candidates_1.png",
  text:"Your Timesheet is due every Monday ! if not yet submitted please take a moment"
},
{img: "assets/Candidates_2.png",
  text:"Make a team as Family"
},
{img: "assets/Candidates_3.png",
text:"To improve company growth as well as carrier growth"
},
{img: "assets/Candidates_4.png",
text:"Make a good commuincation with client "
},
];
currentIndex: number = 0;
constructor(private cdr: ChangeDetectorRef,private router: Router,private api:ApiService) {}

// Method to handle edit button click
onEditClick() {
  // Calculate the current week based on today's date
  const currentWeek:any = this.getWeekdays(new Date());
  console.log('Corresponding Weekdays:', currentWeek);
   sessionStorage.setItem('timesheet',JSON.stringify(currentWeek))
   this.router.navigate(['/Timesheetapply'])
   // Update the calendar events to highlight the current week
}

// Method to get weekdays based on a start date
getWeekdays(startDate: Date): string[] {
  const start = new Date(startDate);
  const weekdays = [];

  // Calculate the start of the week (Monday)
  start.setDate(start.getDate() - start.getDay() + 1);

  for (let i = 0; i < 7; i++) {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    weekdays.push(day.toISOString().split('T')[0]); // ISO string format 'YYYY-MM-DD'
  }

  return weekdays;
}
updateCalendarEvents(weekdays: any) {
  // Create new events for each weekday
  const newEvents = weekdays.flatMap((e: any) => {
    return Object.keys(e)
      .filter(dayKey => dayKey.startsWith('Day')) // Filter to only process Day1, Day2, etc.
      .map((dayKey) => {
        const dayData = JSON.parse(e[dayKey]); // Parse JSON string for each day

        // Check if the current date matches the leave date
        const isLeave = e.Leave && e.leavedate === dayData.Date;

        return {
          title:isLeave ? 0 + '\nHours' : dayData.Hours  + '\nHours' || + '8 Hours' , // Access Hours from parsed JSON
          date: dayData.Date,   // Access Date from parsed JSON
          color: isLeave ? '#ffcc00	' : '#99cc33',
          textColor:'black',
          fontSize:'bold' // Red if it's a leave day, otherwise green
        };
      });
  });

  // Update the events array in calendar options
  this.calendarOptions.events = [...newEvents];

  // Trigger change detection to update the calendar
  this.cdr.detectChanges();
}


handleDateClick(arg: any) {
  alert('Date clicked: ' + arg.dateStr);
  this.date = arg.dateStr; // Store the clicked date
  this.getevent(this.date); // Fetch or add events for this date
  console.log(arg, 'allDay');
}

getevent(date: string) {
  // Example: Add a new event on the clicked date
  const newEvent = { title: 'New Event', date: date, color: 'blue' };

  // Update the events array dynamically
  this.calendarOptions.events = [
    ...this.calendarOptions.events as any[], // Cast to any[] for concatenation
    newEvent
  ];

  // Force Angular to detect changes if necessary
  this.cdr.detectChanges();

  // Log updated events for debugging
  console.log('Updated events:', this.calendarOptions.events);
}
ngOnInit(): void {
  setInterval(() => this.showNextImage(), 3000); 
  this.userDetails = localStorage.getItem('Employeepage');
  this.userDetailsvalue = JSON.parse(this.userDetails);
  console.log(this.userDetailsvalue,"dddd");
  this.getmycalenderevent();
  this.getAllhoursDetails();
  };

showNextImage() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}

showPreviousImage() {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
}
getTimeSheet()

  {
    console.log(this.handleDateClick,"this.date");
  }

  getmycalenderevent()
  {
    this.api.getAllevent().subscribe((res:any)=>
      {
        this.Eventdata=res;
  
      
      })
    }
    getAllhoursDetails()
    {
      this.api.getAllhours(this.userDetailsvalue.firstname).subscribe((res:any)=>
        {
          this.Hoursdata=res;
          this.updateCalendarEvents(this.Hoursdata)
         console.log(this.Hoursdata,"hiooo");
        })
      }
 
    getMonthCalender(mon:any)
    {
    switch(mon)
    {
      case '08':
        {
      return 'Aug'
      break;
    }
    case '09':
        {
      return 'Sept'
      break;
    }
    default:
      return 'Jan'
    }
    }
 
  }

  
  
