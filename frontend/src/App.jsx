import Header from './Components/Partials/Header'
import Footer from './Components/Partials/Footer'
import AppRouter from './Components/AppRouter/AppRouter';
import './App.scss'


const App = () => {
    return (
      <div className="App">
        <Header />
        <div className='Lelele'>
        <AppRouter />
        <Footer />
        </div>
      </div>
    );
  }
  
  export default App;
