import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import './app.css'
import { useContext } from "react";
import { ThemeContext } from "./context";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"





const App = () => {

  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
 
  
  return(
     <div style={{backgroundColor:darkMode ? "#222" : "white",color: darkMode &&"white"}}>
     
     <BrowserRouter>
    
     {/* <Header/> */}
     
      
      
    <Toggle/>
    <Intro/>
  <About/>
  <ProductList/>



  <Switch>
       <Route path="/"exact>
         <Homepage/>
       </Route>
       <Route path="/blog/:slug" children={<SinglePost/>}>
       
       </Route> 
       <Route path="/blog">
         <Blog />
       </Route>
       
       <Route path="*">
          <Error/>
       </Route>
       </Switch>
      




  </BrowserRouter>
  
  
 
  
  
  <Contact/>
  
  
  
  </div>
  );
};

export default App;