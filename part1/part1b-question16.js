let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};
  
for (let curr in statistics) {
    if (curr.charAt(0) === 'r' || statistics[curr] % 2 === 1) {
      console.log(statistics[curr]);
    }
}
