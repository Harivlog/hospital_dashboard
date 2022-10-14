import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ViewState ,EditingState } from '@devexpress/dx-react-scheduler';


import {
  Scheduler,
  WeekView,
  DayView,
  MonthView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  EditRecurrenceMenu,
  Resources,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { appointments } from '../seed/Appointment';

const PREFIX = 'Demo';
const classes = {
  container: `${PREFIX}-container`,
  text: `${PREFIX}-text`,
};
const StyledDiv = styled('div')(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  [`& .${classes.text}`]: {
    ...theme.typography.h6,
    marginRight: theme.spacing(2),
  },
}));

const Appointment = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      
      borderRadius: '40px',
      // padding :  '8px 5px',
      margin : 0,
      
      // height : '55%'
    }}
  >
    {children}
  </Appointments.Appointment>
);


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentViewName: 'Month',
      resources: [
        {
          fieldName: 'location',
          title: 'Location',
          
          instances: [
            { id: 'Room 1', text: 'Room 1' },
            { id: 'Room 2', text: 'Room 2' },
            { id: 'Room 3', text: 'Room 3' },
            { id: 'Room 4', text: 'Room 4' },
            { id: 'Room 5', text: 'Room 5' },
          ],
        },
        {
          fieldName: 'members',
          title: 'Members',
          allowMultiple: true,
          instances: [
            { id: 1, text: 'Andrew Glover' },
            { id: 2, text: 'Arnie Schwartz' },
            { id: 3, text: 'John Heart' },
            { id: 4, text: 'Taylor Riley' },
            { id: 5, text: 'Brad Farkus' },
          ],
        },
      ],
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };
    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    }
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
    
    

  }
  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  changeMainResource(mainResourceName) {
    this.setState({ mainResourceName });
  }
  render() {
    const { data, currentViewName ,currentDate, addedAppointment, appointmentChanges, editingAppointment, resources, mainResourceName  } = this.state;

    return (
     <>
      <div className="my-3 flex justify-between items-center">
        <h3 className='text-text-red-1 text-xl font-bold'>Appointments </h3>
      </div>
    <div className="font-Montserrat rounded-3xl">
    <Paper>
        <Scheduler
          data={data}
          height={670}
          startDayHour={9}
          endDayHour={16}
        >
          <ViewState
            defaultCurrentDate="2022-10-01"
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
          />
     <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <WeekView
            startDayHour={8.5}
            endDayHour={16.5}
          />
       
          <MonthView />
          <DayView 
          startDayHour={8.5}
          endDayHour={16.5}
          />

          <Toolbar />
          <DateNavigator />
         
          <ViewSwitcher />
         
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments
        appointmentComponent={Appointment}
        
      />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
           <Resources
              data={resources}
              mainResourceName={mainResourceName}
            />
          <AppointmentForm />
        </Scheduler>
      </Paper>
      <div className="flex p-4 gap-9 flex-wrap bg-gray-1 rounded-b-3xl  border border-gray-3">
        <div className="flex  items-center">
          <div className="h-2 w-2 rounded-full bg-text-primary"></div>
          <p className='ml-2 text-xs font-medium'>EMERGENCY</p>
        </div>
        <div className="flex  items-center">
          <div className="h-2 w-2 rounded-full bg-yellow-4"></div>
          <p className='ml-2 text-xs font-medium'>EXAMINATION</p>
        </div>
        <div className="flex  items-center">
          <div className="h-2 w-2 rounded-full bg-black-6"></div>
          <p className='ml-2 text-xs font-medium'>CONSULTATION</p>
        </div>
        <div className="flex  items-center">
          <div className="h-2 w-2 rounded-full bg-text-red-1"></div>
          <p className='ml-2 text-xs font-medium'>ROUTINE CHECKUP</p>
        </div>
        <div className="flex  items-center">
          <div className="h-2 w-2 rounded-full bg-text-primary"></div>
          <p className='ml-2 text-xs font-medium'>SICK VISIT</p>
        </div>
      </div>
    </div>

      </>
    );
  }
}
