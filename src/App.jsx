import Header from './components/Header';
import MainContent from './components/MainContent';
import gsap from 'gsap';

function App() {
  let timeline = gsap.timeline();

  return (
    <div className='container'>
      <Header timeline={timeline} />
      <MainContent timeline={timeline} />
    </div>
  );
}

export default App;
