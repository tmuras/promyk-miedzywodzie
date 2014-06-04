var periods = {
	low: {
        beginDay: 28,
        beginMonth: 4,
        endDay: 30,
        endMonth: 9
    },
    high: {
        beginDay: 1,
        beginMonth: 7,
        endDay: 20,
        endMonth: 8
    }
}


var prices = [
    {
        "ID": 1, 
        "room": "nr 2", 
        "room_link": "pokoj-nr-2.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": 140
            },
            "high": { 
                "3": 150, 
                "2": 150, 
                "1": 150,  
                "5": -1, 
                "4": 180
            },
        }
    }, 
    {
        "ID": 2, 
        "room": "nr 3", 
        "room_link": "pokoj-nr-3.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": -1
            },
            "high": { 
                "3": 150, 
                "2": 120, 
                "1": 120, 
                "5": -1, 
                "4": -1
            },
        },
    }, 
    {
        "ID": 3, 
        "room": "nr 5", 
        "room_link": "pokoj-nr-5.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": 140
            },
            "high": { 
                "3": 180, 
                "2": 160, 
                "1": 160, 
                "5": -1, 
                "4": 200
            },
        },
    }, 

    {
        "ID": 4, 
        "room": "nr 6", 
        "room_link": "pokoj-nr-6.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": 140
            },
            "high": { 
                "3": 150, 
                "2": 130, 
                "1": 130, 
                "5": -1, 
                "4": 170
            },
        },
    }, 
    {
        "ID": 5, 
        "room": "nr 7", 
        "room_link": "pokoj-nr-7.html", 
        "season_ID": { 
            "low": { 
                "3": -1, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": -1
            },
            "high": { 
                "3": -1, 
                "2": 120, 
                "1": 120, 
                "5": -1, 
                "4": -1
            },
        },
    }, 
    {
        "ID": 6, 
        "room": "nr 8", 
        "room_link": "pokoj-nr-8.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": -1
            },
            "high": { 
                "3": 135, 
                "2": 100, 
                "1": 100, 
                "5": -1, 
                "4": -1
            },
        },
    }, 
    {
        "ID": 7, 
        "room": "nr 9", 
        "room_link": "pokoj-nr-9.html", 
        "season_ID": { 
            "low": { 
                "3": -1, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": -1
            },
            "high": { 
                "3": -1, 
                "2": 120, 
                "1": 120,  
                "5": -1, 
                "4": -1
            },
        },
    }, 
    {
        "ID": 8, 
        "room": "nr 10", 
        "room_link": "pokoj-nr-10.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": 140
            },
            "high": { 
                "3": 150, 
                "2": 150, 
                "1": 150,  
                "5": -1, 
                "4": 180
            },
        },
    }, 
    {
        "ID": 9, 
        "room": "nr 11", 
        "room_link": "pokoj-nr-11.html", 
        "season_ID": { 
            "low": { 
                "3": -1, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": -1
            },
            "high": { 
                "3": -1, 
                "2": 120, 
                "1": 120, 
                "5": -1, 
                "4": -1
            },
        },
    }, 
    {
        "ID": 10, 
        "room": "nr 12", 
        "room_link": "pokoj-nr-12.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": -1
            },
            "high": { 
                "3": 135, 
                "2": 100, 
                "1": 100, 
                "5": -1, 
                "4": -1
            },
        },
    }, 
    {
        "ID": 11,
        "room": "nr 13", 
        "room_link": "pokoj-nr-13.html",
        "season_ID": { 
            "low": { 
                "3": -1, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": -1
            },
            "high": { 
                "3": -1, 
                "2": 120, 
                "1": 120,  
                "5": -1, 
                "4": -1
            },
        },
    }, 
    {
        "ID": 12, 
        "room": "nr 14", 
        "room_link": "pokoj-nr-14.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": 140
            },
            "high": { 
                "3": 150, 
                "2": 150, 
                "1": 150,  
                "5": -1, 
                "4": 180
            },
        },
    }, 
    {
        "ID": 13,
        "room": "nr 15", 
        "room_link": "pokoj-nr-15.html",  
        "season_ID": { 
            "low": { 
                "3": -1, 
                "2": 70, 
                "1": 35, 
                "5": -1, 
                "4": -1
            },
            "high": { 
                "3": -1, 
                "2": 120, 
                "1": 120, 
                "5": -1, 
                "4": -1
            },
        },
    }, 
    {
        "ID": 14, 
        "room": "nr 16", 
        "room_link": "pokoj-nr-16.html", 
        "season_ID": { 
            "low": { 
                "3": 105, 
                "2": 70, 
                "1": 35, 
                "5": 175, 
                "4": 140
            },
            "high": { 
                "3": 135, 
                "2": 135, 
                "1": 135, 
                "5": 200, 
                "4": 180
            },
        },
    }, 
    
];

var maxPersons = 5;

$(document).ready(function() {

	var date_start = $("#date_start").datepicker();
	var date_end = $("#date_end").datepicker();

    genereatePersonsSelect();

	$("#calculate").on("click", function() {
		if (date_start.val() && date_end.val()) {

            if (date_start.val() > date_end.val())
            {
                console.log("Beginnig date cant be higher than endign date")
            }

            var persons = parseInt($("#persons input:checked").val());
			var day_start = $("#date_start").datepicker('getDate').getDate();                 
        	var month_start = $("#date_start").datepicker('getDate').getMonth() + 1; 
        	var year_start = $("#date_start").datepicker('getDate').getYear();
        	var day_end = $("#date_end").datepicker('getDate').getDate();                 
        	var month_end = $("#date_end").datepicker('getDate').getMonth() + 1;
            var year_end = $("#date_end").datepicker('getDate').getYear();
        	
        	var time_begin = new Date(date_start.val());
  	       	var time_end = new Date(date_end.val());

  	       	var days = (Math.abs((time_end-time_begin)/86400000));

            
            var rooms_selected = ""; 

            for (var i = 0; i < prices.length; i++) {

                if (prices[i].season_ID.low[persons] > 0) {
                    var sum = 0;

                    for (var j=time_begin.getTime(); j <= time_end.getTime() - 86400000; j+= 86400000) {
                        var d = new Date(j);

                        if (d.getMonth()+1 >= periods.high.beginMonth && 
                            d.getMonth()+1 <= periods.high.endMonth &&
                            d.getDate() >= periods.high.beginDay &&
                            d.getDate() <= periods.high.endDay) {
                            sum += prices[i].season_ID.high[persons];
                        }
                        else {
                            sum += prices[i].season_ID.low[persons];
                        };
                    };

                    var room_selected = {
                        "name": prices[i].room,
                        "price": sum
                    };
                    rooms_selected += "<li class='list-group-item'>Pokój " + room_selected.name +
                                      " cena: <b>" + room_selected.price + "</b> PLN"
                                      "</li>";
                };

            };
            console.log(rooms_selected);
            
            $("#days").html(days);
            $("#price").html(rooms_selected)
		}

	});

    // roomsSelected.on("change", function () {

    //     var pricesForPersons = prices[roomsSelected.val()].season_ID.low
    //     $("#persons").empty();
    //     for (var p in pricesForPersons) {

    //         if (pricesForPersons[p] > 0 ) {
    //             $("#persons").append("<button type='button' class='btn btn-primary person'>" + p + "</button>")
    //         }
    //     };
    //     $("#person-value").val($(".person:first").text());
    //     $(".person:first").data('toggle','button');
        
    // }).change();

    $('.person').click(function(){
        //Removing `data-toggle` from all elements
        $('.person').removeData('toggle');
        //Adding `data-toggle` on clicked element
        $(this).data('toggle','button');        
    });
});

function genarateRoomSelect() {

    var select = $("#rooms");

    for (var i=0; i<prices.length; i++) {
        $("<option/>").attr("value", i).html("Pokój " + prices[i].room).appendTo(select);
    }
    
}

function genereatePersonsSelect() {

    var container = $("#persons");
    for (var i=1; i<=maxPersons; i++) { 
        
           container.append('<label id="persons" class="btn btn-primary">' +
            '<input type="radio" name="options" value="' + i + '">' + i +
            '</label>')
    }

}


