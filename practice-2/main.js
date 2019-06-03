let bandNumber = 1;

function takeNumber(bandName) {
    return bandNumber++ + "." + " " + bandName;
}

const scum = takeNumber("Galactic Scum");
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under)  // This should print "2. Underdogs" in the console

const mad = takeNumber("MadDawgs")
console.log(mad)