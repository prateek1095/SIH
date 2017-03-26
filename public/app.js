var app = angular.module('SihApp', []);

app.controller('SihCtrl',  function($scope,$timeout,$location){
      $scope.results = null;
      $scope.airport = {
        id:{
        "DEL":"Indira Gandhi International Airport, New Delhi, Delhi, India",
        "IXA":"Agartala Airport",
        "AMD":"Ahmedabad Airport",
        "ATQ":"Amritsar Airport",
        "BEN":"Bengaluru Airport"
        }
      };

   $scope.nearestAirport = {};
   //var x = document.getElementById('air');
   var opt0 = document.getElementsByTagName('option')[0].innerHTML;
   var opt1 = document.getElementsByTagName('option')[1].innerHTML;
   var opt2 = document.getElementsByTagName('option')[2].innerHTML;
   var opt3 = document.getElementsByTagName('option')[3].innerHTML;
   var opt4 = document.getElementsByTagName('option')[4].innerHTML;

   console.log(opt0 + opt1 + opt2 + opt3 + opt4);
   if(opt0){
            $scope.nearestAirport = angular.copy($scope.airport.id.DEL);
   }
   else if(opt3){
            $scope.nearestAirport = angular.copy($scope.airport.id.ATQ);
   }
   else if(opt4){
            $scope.nearestAirport = angular.copy($scope.airport.id.BEN);
   }
   
   


$scope.showq = function(){

    $scope.results = { 
                airports: $scope.data.airport,
                carriers: $scope.data.carrier
            };
  }

});

app.controller('cqueueCtrl',  function($scope){
  $scope.showq = function(){   
        document.getElementById('i1').style.display='block';
        document.getElementById('i2').style.display='block';
        document.getElementById('i3').style.display='block';
        document.getElementById('i4').style.display='block';
        document.getElementById('i5').style.display='block';
        document.getElementById('i6').style.display='block';
        document.getElementById('i7').style.display='block';
        document.getElementById('i8').style.display='block';
        document.getElementById('i9').style.display='block';
        document.getElementById('i10').style.display='block';
        document.getElementById('i11').style.display='block';


    function update(){
    //counter 1

            $scope.time1 = 6000;
            $scope.time2 = 3000;
            $scope.time3 = 7000;
            $scope.time4 = 4500;

            setTimeout(function() {
              document.getElementById('i1').style.display='none'
            },  6000);
            setTimeout(function() {
              document.getElementById('i2').style.display='none'
            },  12000);
            setTimeout(function() {
              document.getElementById('i3').style.display='none'
            },  18000);

            setTimeout(function() {
              document.getElementById('new_img').style.display='block'
            },  6200);
    //counter 2
            setTimeout(function() {
              document.getElementById('i4').style.display='none'
            },  3000);
            setTimeout(function() {
              document.getElementById('i5').style.display='none'
            },  6000);
            setTimeout(function() {
              document.getElementById('i6').style.display='none'
              document.getElementById('alert1').style.display='block';
            },  9000);
            setTimeout(function(){
                document.getElementById('alert1').style.display='none';
            }, 1000);
    //counter 3
          setTimeout(function() {
              document.getElementById('i7').style.display='none'
            },  7000);
          setTimeout(function() {
              document.getElementById('i8').style.display='none'
              document.getElementById('alert3').style.display='block';
            },  14000);

    //counter 4
          setTimeout(function() {
              document.getElementById('i9').style.display='none'
            },  4500);
          setTimeout(function() {
              document.getElementById('i10').style.display='none'
            },  9000);
          setTimeout(function() {
              document.getElementById('i11').style.display='none'
              document.getElementById('alert2').style.display='block';
            },  13500);

          }

            var count = 3;
            while(count>0){
              count--;
              update();
            }
}

});

function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 7
        });
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('right-panel'));

        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);


        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        var inputA = (document.getElementById('point0'));
        var autocompleteA = new google.maps.places.Autocomplete(inputA);
        autocompleteA.bindTo('bounds', map);

        //var inputB = (document.getElementById('point1'));
        //var autocompleteA = new google.maps.places.Autocomplete(inputB);
        //autocompleteA.bindTo('bounds', map);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        
        inputA.addEventListener('change' , onChangeHandler);
        //inputB.addEventListener('change', onChangeHandler);

        document.getElementById('mode').addEventListener('change', onChangeHandler);


    }

function calculateAndDisplayRoute(directionsService, directionsDisplay ) {
       // var start = document.getElementById('start').value;
       // var end = document.getElementById('end').value;

        var begin = document.getElementById('point0').value;
        var destin = document.getElementById('point1').value;

        directionsService.route({
          //origin: start,
          //destination: end,
          origin : begin,
          destination : destin,
          travelMode: document.getElementById('mode').value
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
              var route = response.routes[0];
              var summaryPanel = document.getElementById('directions-panel');
              summaryPanel.innerHTML = '';
              var summaryPanel2 = document.getElementById('mapalert');

              // For each route, display summary information.
              for (var i = 0; i < route.legs.length; i++) {
                var routeSegment = i + 1;
                summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                    '</b><br>';
                summaryPanel2.innerHTML += route.legs[i].duration.text + '<br>';
                summaryPanel.innerHTML += '<b>Enjoy your trip</b>';

                e = route.legs[i].duration.text;
                //console.log(e);
                setTimeout(function(){
                                document.getElementById('mapalert').style.display='block';
                },3000);
                //setTimeout(function(){
                  //              document.getElementById('mapalert').style.display='none';
                //},6000);
                var g = new Date();
                console.log(g.getHours()  + g.getMinutes() + g.getSeconds());
                var buffer = 120 ;

              }

          } else {
            console.log('Directions request failed due to ' + status);
          }
        });

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }    

