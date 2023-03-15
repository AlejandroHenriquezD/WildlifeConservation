import Header from './Components/Partials/Header'
import Footer from './Components/Partials/Footer'
import AppRouter from './Components/AppRouter/AppRouter';
import './App.scss'



const App = () => {
    return (

      <div className="App">
        <Header />
        <AppRouter />
        <Footer />
      </div>

    );
  }
  
  export default App;
