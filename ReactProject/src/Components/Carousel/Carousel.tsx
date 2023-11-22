const Carousel = () => {
  return (
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="src/assets/bear1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="src/assets/bear2.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="src/assets/bear3.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel