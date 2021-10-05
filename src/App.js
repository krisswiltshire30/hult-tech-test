import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import ArticleHeader from './components/ArticleHeader';
import CourseCard from './components/CourseCard'
import LoadMoreButton from "./components/LoadMoreButton"
import ToolBar from './components/ToolBar';
import CourseCount from './components/CourseCount';
import data from "./data/courses.json"

function App() {
  const [courses, setCourses] = useState(data)
  const [loadCount, setLoadCount] = useState(3)


  const CourseCardsHandler = (courses) => {
    let courseCards = []
    for (let i = 0; i < loadCount; i++) {
      courseCards.push(
        <CourseCard key={courses[i].id}
          title={courses[i].title}
          courseType={courses[i]['course-type']}
          topicsArr={courses[i].topics}
          description={courses[i].description}
        />)
    }
    return courseCards
  }

  return (
    <Layout>
      <ArticleHeader />
      <ToolBar
        setCourses={setCourses}
        data={data}
        setLoadCount={setLoadCount}
        loadCount={loadCount}
        courses={courses}
      />
      <CourseCount courses={courses} />
      {CourseCardsHandler(courses)}
      <LoadMoreButton
        loadCount={loadCount}
        setLoadCount={setLoadCount}
        courses={courses}
      />
    </Layout>
  );
}

export default App;
