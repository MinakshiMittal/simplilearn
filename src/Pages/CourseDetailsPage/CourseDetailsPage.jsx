import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json`
        );
        if (status === 200) {
          setCourses(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  const course = courses?.find((course) => course.id === courseId);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "4rem",
          paddingTop: "1rem",
          color: "white",
        }}
      >
        {course?.title}
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {course?.videoLink?.map((video) => {
          const videoId = video.split("https://youtu.be/")[1];
          return (
            <>
              <iframe
                style={{ width: "80%", height: "450px", margin: "2rem" }}
                title="Video"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&enablejsapi=1`}
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </>
          );
        })}
      </div>
    </>
  );
};
