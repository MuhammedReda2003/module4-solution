let arrayNames = [];

arrayNames[0] = "mohamed";
arrayNames[1] = "reda";
arrayNames[2] = "object";
arrayNames[3] = "nova";
arrayNames[4] = "jamal";
arrayNames[5] = "jad";
arrayNames[6] = "Jawary";
arrayNames[7] = "Jadva";

for (let i = 0; i < arrayNames.length; i++) {
  if (arrayNames[i][0] === "j" || arrayNames[i][0] === "J") {
    console.log(`Goodbye ${arrayNames[i]}`);
  } else {
    console.log(`Hello ${arrayNames[i]}`);
  }
}
