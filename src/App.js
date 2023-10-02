import './App.css';
import Home from "./pages/home/Home.jsx";
import Post from "./components/post/Post.jsx"
import NavBar from './components/navbar/NavBar';
import SinglePost from './components/singlepost/SinglePost.jsx';
import Html from './components/html/Html.jsx';
import HtmlPost from './components/htmlpost/HtmlPost.jsx';
import Attributes from './components/htmlpost/Attributes';
import Multimedia from './components/htmlpost/Mulitmedia.jsx';
import Text from './components/htmlpost/Text.jsx';
import Semantics from './components/htmlpost/Semantics.jsx';
import List from './components/htmlpost/List.jsx';
import Buttons from './components/htmlpost/Buttons.jsx';
import Div from './components/htmlpost/Div.jsx';
import Forms from './components/htmlpost/Forms.jsx';
import Css from './components/csspost/Css.jsx';
import ReactBlog from './components/react/ReactBlog.jsx';
import Blog from './components/blog/Blog.jsx';
import CssPost from './components/csspost/CssPost.jsx';
import Selectors from './components/csspost/Selectors.jsx';
import FlexBox from './components/csspost/FlexBox.jsx';
import BoxModel from './components/csspost/BoxModel.jsx';
import Colors from './components/csspost/Colors.jsx';
import Animations from './components/csspost/Animations.jsx';
import Media from './components/csspost/Media.jsx';
import Specificity from './components/csspost/Specificity.jsx';
import Mobile from './components/csspost/Mobile.jsx';
import JavaScript from './components/javascript/JavaScript.jsx';
import JsIntro from './components/javascript/JsIntro.jsx';
import JsVarPost from './components/javascript/JsVarPost.jsx';
import Dom from './components/javascript/Dom.jsx';
import Functions from './components/javascript/Functions.jsx';
import ControlStructures from './components/javascript/ControlStructures.jsx';
import ObjectProgram from './components/javascript/ObjectProgram.jsx';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <section className="App">
     <NavBar />
     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/SinglePost" element={<SinglePost />} />
            <Route path="/Html" element={<Html />} /> 
            <Route path="/HtmlPost" element={<HtmlPost />} />
            <Route path="/Multimedia" element={<Multimedia />} />
            <Route path="/Buttons" element={<Buttons />} />
            <Route path="/Attributes" element={<Attributes />} />
            <Route path="/Forms" element={<Forms />} />
            <Route path="/Text" element={<Text />} />
            <Route path="/Semantics" element={<Semantics />} />
            <Route path="/List" element={<List />} />
            <Route path="/Div" element={<Div />} />
            <Route path="/Css" element={<Css />} />
            <Route path="/JavaScript" element={<JavaScript />} />
            <Route path="/ReactBlog" element={<ReactBlog />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/CssPost" element={<CssPost />} />
            <Route path="/FlexBox" element={<FlexBox />} />
            <Route path="/BoxModel" element={<BoxModel />} />
            <Route path="/Colors" element={<Colors />} />
            <Route path="/Animations" element={<Animations />} />
            <Route path="/Selectors" element={<Selectors />} />
            <Route path="/Mobile" element={<Mobile />} />
            <Route path="/Specificity" element={<Specificity />} />
            <Route path="/Media" element={<Media />} />
            <Route path="/JsIntro" element={<JsIntro />} />
            <Route path="/JsVarPost" element={<JsVarPost />} />
            <Route path="/Dom" element={<Dom />} />
            <Route path="/Functions" element={<Functions />} />
            <Route path="/ControlStructures" element={<ControlStructures />} />
            <Route path="/ObjectProgram" element={<ObjectProgram />} />
         </Routes>
    </section>
  );
}

export default App;
