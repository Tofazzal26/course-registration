const Course = ({ course, handleCart }) => {
  const { credit, description, id, name, photo, price } = course;

  return (
    <div>
      <div className="card bg-base-100  shadow-2xl">
        <figure className="mt-6">
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-[#585858] space-y-2 font-medium">
            {description.slice(0, 86)}
          </p>
          <div className="flex my-2">
            <p>$ price: {price}</p>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              <p>
                Credit: <span>{credit}hr</span>
              </p>
            </div>
          </div>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleCart(course)}
              className="btn btn-primary w-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
