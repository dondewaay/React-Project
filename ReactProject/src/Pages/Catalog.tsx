import Card from "../Components/Card/Card";

const Catalog = () => {
  return (
    <>
      <div className="card-container">
        <Card
          name="Leonard"
          image="src/assets/bear.png"
          desc=":3"
          butt="Bear Info"
        />
        <Card
          name="Joshua"
          image="src/assets/josh.gif"
          desc="orb"
          butt="Rotate"
        />
      </div>
    </>
  )
}

export default Catalog