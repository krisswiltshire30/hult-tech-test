import Layout from './components/layout/Layout'; 
import ArticleHeader from './components/ArticleHeader';
import ToolBar from './components/ToolBar';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <Layout>
      <ArticleHeader/>
      <ToolBar/>
      <CourseCard/>
    </Layout>
  );
}

export default App;
