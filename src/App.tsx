import React,{useState, useEffect} from 'react';
import './App.css';
import CutOne from './page/cut1'
import CutTwo from './page/cut2'


function App() {
  const [showCut2, setShowCut2] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  //cut1動畫結束後淡出
  const handleAnimationEnd = () => {
    setTimeout(()=>{
      setFadeOut(true)
    },900) 
  };

  useEffect(() => {
    if (fadeOut) {
      const timeoutId = setTimeout(() => {
        setShowCut2(true);
      }, 600); // 等待動畫後再切換
      return () => clearTimeout(timeoutId);
    }
  }, [fadeOut]);

  return (
    <div>
      <header>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      </header>
      <div className='flex justify-center items-center h-screen bg-slate-200'>
      {showCut2 ? 
      <CutTwo />:<CutOne onAnimationEnd={handleAnimationEnd} className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-70' : 'opacity-100'}`}/>}
      </div>

    </div>
  );
}

export default App;
