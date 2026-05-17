import blog from "../blog";   // adjust path based on where your file actually is
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blog from "../data/blog"
function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;