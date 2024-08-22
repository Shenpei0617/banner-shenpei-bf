import React, {useState, useEffect} from 'react';


interface CutOneProps {
  onAnimationEnd: () => void;
}

const Cut1: React.FC<CutOneProps> = ({onAnimationEnd}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  //畫面載入
  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    <div className={`w-[320px] h-[480px] relative`} onTransitionEnd={onAnimationEnd}>
      <div >
        <img 
        src='https://shenpei0617.github.io/video/cut1_bg.png' 
        alt=''
        className={`w-full transition duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-50'}`}
        />
      </div>
      <div className='absolute left-1/2 top-[3%] translate-x-[-50%] w-24'>
        <img src='https://shenpei0617.github.io/video/cut1_logo.png'
        alt=""
        className={`w-full transform transition ease-in-out duration-1000 ${isLoaded ? 'scale-100' : 'scale-50'}`}
        />
      </div>
    </div>
  );
};

export default Cut1;