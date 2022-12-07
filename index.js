var dag = new Date();
var time = dag.getHours();

console.log("Klokken er " + time);

let i = 1;
for (i; i < 100; i++) {
    console.log("Test nr. " + i);
    if (i % 2 == 0) {
        console.log("   " + i + " er et partall!");
    }
}

let hotel = {
name: "Radisson Blu",
rooms: 40,
pool: true,
booked: 25,
checkAvailability:
    function() {
       return (this.rooms - this.booked)
    }
}

console.log("Det er " + hotel.checkAvailability() + " ledige plasser!");
