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
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
};

export default Courses;
