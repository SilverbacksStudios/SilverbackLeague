let farger = ["Yellow"];

// Om du tittar på projektet i browsern ser du en ensam grå
// och lite sorglig konfettipartikel. Din uppgift blir att
// fylla konfettianimationen med färger och liv!

// Funktionen chooseParticleColor styr färgen på varje enskild
// partikel. Den ska returnera en text-sträng som innehåller en
// CSS-färg. Returnerar den samma färg varje gång så kommer alla
// partiklar ha samma färg men om den returnerar olika färger
// t.ex. baserat på slump eller baserat på inparametern groupName
// så kan det istället bli en blandning av färger.
const chooseParticleColor = (groupName) => {
  const randomColor = farger[Math.floor(Math.random() * farger.length)];
  return randomColor;
};

// Denna funktion anropas för att skjuta ut konfetti. Funktionen
// som kommer in som parameter addConfettiParticles kan anropas en
// eller flera gånger för att skjuta konfetti åt olika håll och
// från olika platser på skärmen

const bang = (addConfettiParticles) => {
  // Funktionen addConfettiParticles tar in ett antal parametrar
  // för att styra hur en konfettiexplosion ser ut. Antalet partiklar,
  // var på skärmen som partiklarna kommer ifrån, vilken riktning
  // (och med vilken hastighet) de flyger, hur mycket partiklarna
  // sprider ut sig från varandra samt ett gruppnamn som skickas in i
  // chooseParticleColor. Ändra på dessa värden och se vad som händer!

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti", // Valfritt namn på gruppen
      particleAmount: 1200, // Antal konfettipartiklar
      xPosition: 10, // Position i procent av skärmens bredd, 0 är längst till vänster och 100 längst till höger
      yPosition: 100, // Position i procent av skärmens höjd, 0 är längst ner och 100 högst upp
      xVelocity: 0, // Hastighet i sidled, positiva värden åker åt höger och negativa åt vänster
      yVelocity: 2, // Hastighet i höjdled, positiva värden åker uppåt och negativa värden nedåt
      xSpread: 80, // Slumpmässig spridning på partikelns hastighet i sidled
      ySpread: 20, // Slumpmässig spridning på partikelns hastighet i höjdled
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 20,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 30,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 40,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 50,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 60,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 70,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 80,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 90,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);

  setTimeout(function () {
    addConfettiParticles({
      groupName: "lonely sad confetti",
      particleAmount: 1200,
      xPosition: 100,
      yPosition: 120,
      xVelocity: 0,
      yVelocity: 2,
      xSpread: 220,
      ySpread: 80,
    });
  }, 0);
};

// Här exporterar vi funktionerna så att de kan användas i
// confetti-creator-filen som du inte behöver bry dig om
export { chooseParticleColor, bang };
