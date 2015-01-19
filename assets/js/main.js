/**
 * Calendar Configurations for Clubs
 *
 * Name all variables as their club name
 */
var orgs = {};
orgs['ElectronicsClub'] = {
  googleCalendarId: 'electronicsosu@gmail.com',
  timezone: 'America/New_York'
};

orgs['AmateurRadioClub'] = {
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
  for (var org in orgs) {
    $('#calendar').fullCalendar('addEventSource', orgs[org]);
  };

  $("input[type='checkbox']").on('change', function(){
    var org_name = $(this).attr('name');
    if (this.checked) {
      $('#calendar').fullCalendar('addEventSource', orgs[org_name]);
    } else {
      $('#calendar').fullCalendar('removeEventSource', orgs[org_name]);
    }
  });
});
