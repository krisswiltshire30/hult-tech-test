import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import ArticleHeader from './components/ArticleHeader';
import CourseCard from './components/CourseCard'
import ToolBar from './components/ToolBar';
import data from "./data/courses.json"

function App() {
  const [courses, setCourses] = useState(data)

  const CourseCardsHandler = (courses) => {
    let courseCards = []
    for (let i = 0; i < courses.length; i++) {
      courseCards.push(
        <CourseCard id={courses[i].id}
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
      <ToolBar setCourses={setCourses} data={data} />
      <p>Showing <strong>{courses.length}</strong> results</p>
      {CourseCardsHandler(courses)}
    </Layout>
  );
}

export default App;
