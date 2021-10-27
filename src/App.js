import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import MainWrapper from './components/MainWrapper';

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <Header />
        <Footer />
      </MainWrapper>
    </div>
  );
}

export default App;
