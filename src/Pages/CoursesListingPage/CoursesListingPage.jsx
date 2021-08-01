import { useEffect, useState } from "react";
import axios from "axios";
import { CourseCard, MainNav } from "../../Components";
import "./CoursesListingPage.css";

export const CoursesListingPage = () => {
  const [courses, setCourses] = useState(null);

  useEffect(
    () =>
      (async () => {
        try {
          const { data, status } = await axios.get(
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json"
          );

          if (status === 200) {
            setCourses(data);
          }
        } catch (error) {
          console.error(error);
        }
      })(),
    []
  );
  console.log(courses);

  return (
    <>
      <MainNav />
      <div className="available-projects-container">
        {courses?.map((course) => {
          return <CourseCard course={course} />;
        })}
      </div>
    </>
  );
};
