

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBctsXYC084rpKqaYgoFazLhACkNvlb-gw",
    authDomain: "employeedb-d2911.firebaseapp.com",
    databaseURL: "https://employeedb-d2911.firebaseio.com",
    projectId: "employeedb-d2911",
    storageBucket: "",
    messagingSenderId: "894274672549"
  };


  firebase.initializeApp(config);
  var database=firebase.database();

  var name = "";
  var role ="";
  var startDate ="";
  var monthlyRate ="";

  $("#submitBtn").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    name = $("#name-info").val().trim();
    role = $("#role-info").val().trim();
    startDate = $("#date-info").val().trim();
    monthlyRate = $("#rate-info").val().trim();

  database.ref().push({

  name: name,
  role: role,
  startDate: startDate,
  monthlyRate: monthlyRate
});
})


  database.ref().on("value", function(snapshot) {
  $("#displayed-data").text(snapshot.val().name + " | " + snapshot.val().role + " | " + snapshot.val().startDate)+ " | " + snapshot.val().monthlyRate)}



 //database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){

  // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
  //  $("name-display").text(snapshot.val().name);
  // });
  