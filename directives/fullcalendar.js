App.directive('fullCalendar', [function () {
    function link(scope, element, attrs) {
        //   angular.element(element).fullCalendar();


        $(element).fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2014-06-12',
            defaultView: 'agendaWeek',
            editable: false, // todo
            handleWindowResize: true,
            weekends: false, // Hide weekends
            defaultView: 'agendaWeek', // Only show week view
            header: false, // Hide buttons/titles
            minTime: '07:30:00', // Start time for the calendar
            maxTime: '22:00:00', // End time for the calendar
            columnFormat: {
                week: 'ddd' // Only show day of the week names
            },
            displayEventTime: true, // Display event time
            events: [
                {
                    title: 'All Day Event',
                    start: '2014-06-01'
                },
                {
                    title: 'Long Event',
                    start: '2014-06-07',
                    end: '2014-06-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2014-06-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2014-06-16T16:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2014-06-12T10:30:00',
                    end: '2014-06-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2014-06-12T12:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2014-06-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2014-06-28'
                }
            ]
        });



    }

    return {
        link: link
    };
}]);