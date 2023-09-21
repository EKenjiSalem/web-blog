import Header from "../../components/header/Header.jsx";
// import Post from "../../components/post/Post.jsx";
import BlogCard from "../../components/post/BlogCard.jsx";
import SideBar from "../../components/sidebar/SideBar.jsx";
import "../../App.css";

function Home() {
  return (
    <section>
    <Header />
    <div className="home">
     <BlogCard /> 
     <SideBar />
    </div>
    </section>
  );
}

export default Home;