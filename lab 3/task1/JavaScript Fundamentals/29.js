let age = 19

let welcome;

if (age < 18) {

  welcome = function() {
    console.log("Hello!");
  };

} else {

  welcome = function() {
    console.log("Greetings!");
  };

}

welcome(); // ok now