import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="src/assets/bear1.jpg" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/bear2.jpg" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/bear3.webp"
            className="d-block w-100"
          />
        </div>
        <div className="carousel-caption d-none d-md-block">
          <h1>WELCOME TO DON'S BEAR EMPORIUM!</h1>
          <h2><i>Home of Dope Bears</i></h2>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
