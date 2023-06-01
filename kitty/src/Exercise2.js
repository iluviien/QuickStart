function Exercise2(prop) {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ];
  return (
    <div>
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h1> {planet.name} </h1>;
      })}
    </div>
  );
}
export default Exercise2;
