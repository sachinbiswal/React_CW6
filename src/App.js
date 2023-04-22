import logo from './logo.svg';
// import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';

import Footer from './Component/Footer';

function App() {
  return (
    <div className="App" style={{width : "1000px",height  :"600px",border : "none",marginLeft : '10%',display  : "flex",justifyContent : 'center',flexDirection : 'column',alignItems : "center",boxShadow  : "0 0 20px black"}}>
      <Navbar />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
