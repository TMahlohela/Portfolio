import './App.css';
// import './index.css';
// import './mystyle.css';

import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks} from './components';

const App = () => {
  
  return (
    <>
      <div className='relative z-20 top-40'>
        <h1>Developer Portfolio</h1>
        <p>I love the work I do, the job is the reason why we automate...</p>
      </div>
      <BrowserRouter>
        <div className='relative top-16 z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          {/* <Experience/> */}
          {/* <Feedbacks/> */}
          {/* <Tech/> */}
          <Works />
          <div className='relative z-0'>
            <Contact/>
            {/* <StarsCanvas/> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
