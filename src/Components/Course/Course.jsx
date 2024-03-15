const Course = ({ course }) => {
  const { credit, description, id, name, photo, price } = course;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div>
            <p>$ price: {price}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
