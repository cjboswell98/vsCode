class planet{
  name; 
  inner; 
  diameter; 
  color;   

  //Instead of the class name JS uses the constructor keyword, otherwise same idea as Java
  constructor(name, inner, diameter, color){
      this.name = name; 
      this.inner = inner; 
      this.diameter = diameter; 
      this.color = color; 
  }
}

//constructor calls are the same, with one caveat 
//There's no typing on anything so you have to remember what type each property is 
let planets = [ new planet("Mercury", true, 3031.9, "#696969"),new planet("Venus", true, 7520.8, "#b89165"),
new planet("Earth", true, 7917.5, "#5a5b86"),new planet("Mars", true, 4212.3, "#df8c4e"),new planet("Jupiter", false, 86881, "#f6a049"),
new planet("Saturn", false, 72367, "#dcd3a1"),new planet("Uranus", false, 31518, "#b4d9df"),new planet("Neptune", false, 30599, "#456eff"),
]; 

  // Log the name of each planet
  for (p of planets) {
    console.log(p.name);
  }
  
  // Calculate and log the average diameter of planets
  function getAverageDiameter(planets) {
    let totalDiameter = 0;
    for (let i = 0; i < planets.length; i++) {
      totalDiameter += planets[i].diameter;
    }
    return totalDiameter / planets.length;
  }
  console.log(getAverageDiameter(planets));
  
  // Set up index variable and element references
  let index = 0;
  const planetName = document.querySelector('#planet-name');
  const planetType = document.querySelector('#planet-type');
  const planetCircle = document.querySelector('#planet');
  const previousButton = document.querySelector('#prev');
  const nextButton = document.querySelector('#next');
  const indexDisplay = document.querySelector('#index-display');
  
  // Update the planet display
  function updatePlanetDisplay() {
    const planet = planets[index];
    planetName.textContent = planet.name;
    planetType.textContent = planet.inner ? 'Inner planet' : 'Outer planet';
    planetCircle.style.backgroundColor = planet.color;
    planetCircle.style.width = planet.diameter / 100 + 'px';
    planetCircle.style.height = planet.diameter / 100 + 'px';
    previousButton.disabled = index === 0;
    nextButton.disabled = index === planets.length - 1;
    indexDisplay.textContent = index + 1;
  }
  
  // Set up event listeners for previous and next buttons
  previousButton.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updatePlanetDisplay();
    }
  });
  
  nextButton.addEventListener('click', () => {
    if (index < planets.length - 1) {
      index++;
      updatePlanetDisplay();
    }
  });
  
  // Call updatePlanetDisplay() to show the first planet on page load
  updatePlanetDisplay();
  