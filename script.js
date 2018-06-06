$(document).ready(function() {
  var friend_name = ["Andrew", "Brad", "Paul", "Sean", "Marybeth"];
  var location_name = [
    "kitchen",
    "study",
    "bathroom",
    "closet",
    "bedroom",
    "garden",
    "dining room",
    "foyer",
    "living room",
    "garage"
  ];
  var weapon_name = [
    "spoon",
    "Sponge",
    "pillow",
    "crowbar",
    "funnel",
    "nagging",
    "enchanted sword",
    "book",
    "gun",
    "lightsaber",
    "pen",
    "knife",
    "rolling pin",
    "rabid hamster",
    "candle stick",
    "death stare",
    "shovel",
    "umbrella",
    "roll of toilet paper",
    "coat hanger"
  ];

  for (var i = 1; i <= 100; i++) {
    if (i === 100) {
        var h3text = document.createTextNode ('Accusation' + [i]); 

    }   else {
        h3text = document.createTextNode ('Accusation' + [i] + ',');
    }

    var h3 = document.createElement('h3');
    h3.appendChild(h3text);
    document.body.appendChild(h3);
    h3.addEventListener("click", alertMe(i,friend_name, location_name, weapon_name));
    }

    function alertMe(i, friend_name, location_name, weapon_name) {
    
        return function(){
        alert(`Accusation ${i}: "I accuse "${friend_name[i%5]}," with the "${weapon_name[i%20]}" in the "${location_name[i%10]}!!`)
    }
}