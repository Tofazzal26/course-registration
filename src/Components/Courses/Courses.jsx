import { useEffect } from "react";
import { useState } from "react";
import Course from "./../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("Course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
