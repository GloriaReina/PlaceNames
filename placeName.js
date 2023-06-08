const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
]
// Iterate over each "name" in the "names" list
for (let name of names) {
    console.log(`Event location: ${name}.`);
  }

  const locationsList= names.map((name)=>{
    console.log(name)
  })

 const filteredNames= names.filter(name => name.startsWith("The"))
 console.log("filtered names:",filteredNames)

