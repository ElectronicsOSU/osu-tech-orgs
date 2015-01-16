/**
 * Calendar Configurations for Clubs
 *
 * Name all variables as their club name
 */
var ElectronicsClub = {
  googleCalendarId: 'electronicsosu@gmail.com',
  timezone: 'America/New_York'
};

var AmateurRadioClub = {
  googleCalendarId: '45qblop08sqnk5fcvb7hb4kkq0@group.calendar.google.com',
  timezone: 'America/New_York'
}

/* Calendar */

$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
    	left: 'prev,next today',
    	center: 'title',
    	right: 'month,agendaWeek,agendaDay'
    },
    googleCalendarApiKey: 'AIzaSyBu5kL2kgj9AZXCM8kfSLukPx1Vb7bRSh4'
  });

  // Add all calendars by default
  $('#calendar').fullCalendar('addEventSource', ElectronicsClub);
  $('#calendar').fullCalendar('addEventSource', AmateurRadioClub);

  // Doesn't work for some reason
  $(":checkbox").parent().click(function(evt) {
    if (evt.target.type !== 'checkbox') {
      if($(this).find('checkbox').is(":checked")) {
        $('#calendar').fullCalendar('addEventSource', $(this).attr('id'));
      } else {
        $('#calendar').fullCalendar('removeEventSoruce', $(this).attr('id'))
      }
    }
  });
});
