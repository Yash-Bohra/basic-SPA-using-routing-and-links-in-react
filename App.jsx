import {BrowserRouter,Routes,Route,Link} from "react-router-dom" //HashRouter used to create chrome extensions
function App() {
  return <div>
  <BrowserRouter>
    <Link to="/">HOME</Link>|<Link to="Page-1">PAGE 1</Link>|<Link to="Page-2">PAGE 2</Link>
  <Routes>
    <Route path="page-1" element={<Page1/>}/>
    <Route path="page-2" element={<Page2/>}/>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </div>
}
function Page1(){
  return <div>
    this the first page !
  </div>
}
function Page2(){
  return <div>
    this the second page !
  </div>
}
function Home(){
  return <div>
    this is the home page !
  </div>
}
export default App
