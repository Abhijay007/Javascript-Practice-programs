// print change for US denominations
function print_change(cents) {
    let original_cents = cents;

    if (cents < 0) {
        console.log("Cannot have negative cents!")
        return
    }

    let dollars = Math.floor(cents / 100);
    cents %= 100;

    let quarters = Math.floor(cents / 25);
    cents %= 25;

    let dimes = Math.floor(cents / 10);
    cents %= 10;

    let nickels = Math.floor(cents / 5);
    cents %= 5;

    let pennies = cents;

    console.log(
        original_cents + "cents is " +
        dollars + " dollars, " +
        quarters + " quarters, " +
        dimes + " dimes, " +
        nickels + " nickels, and " +
        pennies + " pennies."
    )
}

print_change(284);