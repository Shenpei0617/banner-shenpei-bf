import React,{ useState} from 'react';
import './App.css';
import CutOne from './page/cut1'
import CutTwo from './page/cut2'


function App() {
  const [showCut2, setShowCut2] = useState(false);

  const handleVideoEnd = () => {
    setShowCut2(true); // 當影片結束時，切換到 Cut2
  };

  return (
    <div>
      <header>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      </header>
      <div className='flex justify-center items-center h-screen bg-slate-200'>
      {showCut2 ? <CutTwo /> : <CutOne onVideoEnd={handleVideoEnd} />}
      </div>
    </div>
  );
}

export default App;
