/* Calendar */

$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
    	left: 'prev,next today',
    	center: 'title',
    	right: 'month,agendaWeek,agendaDay'
    },
    googleCalendarApiKey: 'AIzaSyBu5kL2kgj9AZXCM8kfSLukPx1Vb7bRSh4',
    events: {
      googleCalendarId: 'electronicsosu@gmail.com',
      timezone: 'America/New_York'
    }
  });
});
