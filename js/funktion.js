
function gissa() {
    var gissning = document.getElementById('gissning').value;
}

function gissa1() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning1").value;
    // Kolla om gissningen var pikachu
    if (gissning == "Lets pants 1") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Va bra!");
    }
}



function gissa2() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning2").value;
    // Kolla om gissningen var pikachu
    if (gissning == "Ulla kärleks krank klagar på allt") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Va bra!");
    }
}


function gissa3() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning3").value;


    // Kolla om gissningen var pikachu
    if (gissning == "Bonde söker B-rud (Trailer)") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Va bra!");


    }
}

function gissa4() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning4").value;
    // Kolla om gissningen var pikachu
    if (gissning == "Pepparkakshus 2016") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Va bra!");
    }
}


$(document).ready(function(){
	//Ta fram
	$("#ett").hover(function(){
		$("#två").show(500);
	});

	$("#två").hover(function(){
		$("#tre").show(500);
	});

	$("#tre").hover(function(){
		$("#ett").show(500);
	});

	//Ta bort
	$("#ett").click(function(){
		$("#ett").hide(500);
	});

	$("#två").click(function(){
		$("#två").hide(500);
	});

	$("#tre").click(function(){
		$("#tre").hide(500);
	});		
});



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBJLHDWdT_gI2Ti7V2g6LyateZjUxbHiGA",
    authDomain: "j3mxdroids-grjer.firebaseapp.com",
    databaseURL: "https://j3mxdroids-grjer.firebaseio.com",
    projectId: "j3mxdroids-grjer",
    storageBucket: "j3mxdroids-grjer.appspot.com",
    messagingSenderId: "85609271248"
  };
  firebase.initializeApp(config);

  // Tala om att det är en Angular-app med firebase
var app = angular.module("app", ["firebase"]);

// Vi skapar en kommentarer-fabrik som hämtar blogg-inlägg från firebase
app.factory("kommentarer", function($firebaseArray) {
    // skapa en referens till var i databasen kommentarerna finns
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

// Här i "controllern" så kan vi bestämma vad som ska hända med vår HTML
app.controller("KommentarCtrl", function($scope, kommentarer) {
    // Vi gör så att vi kan komma åt inläggen i kommentarer-fabriken med ng-model
    $scope.kommentarer = kommentarer;

    $scope.kommentar = {
        text: "",
        skribent: ""
    };
    // Vi skapar en funktion som vi kan köra i ng-submit för att skicka kommentaren till databasen
    $scope.addComment = function() {
        // Här lägger vi till vårt inlägg ($scope.kommentar) till listan med inlägg.
        // Det sparas automatiskt i Firebase-databasen.
        $scope.kommentarer.$add($scope.kommentar);

        // Tömmer texten i textfälten
        $scope.kommentar = {
            text: "",
            skribent: ""
        };
    };
  }
);