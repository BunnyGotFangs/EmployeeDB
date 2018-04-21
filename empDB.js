

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
var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";

$("#submitBtn").on("click", function (event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get inputs
  name = $("#name-input").val().trim();
  role = $("#role-input").val().trim();
  startDate = $("#date-input").val().trim();
  monthlyRate = $("#rate-input").val().trim();

  database.ref().push({

    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
  });
});


