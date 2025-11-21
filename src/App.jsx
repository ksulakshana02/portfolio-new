import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import {Route, Routes} from "react-router-dom";
import Blog from "./components/Blog.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Home from "./components/Home.jsx";
import ChatBot from "./components/ChatBot.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/*<Hero />*/}
      {/*<About />*/}
      {/*<Portfolio />*/}
      {/*<Contact />*/}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <ChatBot/>
      <Footer />
    </>
  );
}

export default App
