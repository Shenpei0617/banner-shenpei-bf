import React,{ useState, useEffect } from 'react';

const Cut2: React.FC = () => {
  // const images =[cotTwoCaOne, cotTwoCaTwo, cotTwoCaThree]
  const images =[
    'https://shenpei0617.github.io/video/cut2_carousal1.png',
    'https://shenpei0617.github.io/video/cut2_carousal2.png',
    'https://shenpei0617.github.io/video/cut2_carousal3.png',
  ]
  const src = [
    'https://www.performics.com/',
    'https://www.performics.com/about-us/',
    'https://www.performics.com/our-work/'
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      //每2秒自動下一張
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);

      //30秒後停止自動播放
      const timer = setTimeout(() => {
        setIsPlaying(false);
        clearInterval(interval);
      }, 30000);

      //清除計時器和自動播放
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isPlaying, images.length]);

  //上一張
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsPlaying(false); 
  };

  //下一張
  const nextImage = () => {
    setCurrentIndex((nextIndex) => 
      nextIndex === images.length - 1 ? 0 : nextIndex + 1
    );
    setIsPlaying(false); 
  };

  return (
    <div className='w-[320px] h-[480px] relative bg-white'>
      <div className='flex justify-center items-center box-border p-5'>
        <img src='https://shenpei0617.github.io/video/cut1_logo.png' alt="" className='w-6/12 cut-two-logoImg'/>
      </div>
      <div className='relative'>
        <button onClick={prevImage} className='absolute top-1/2 left-0 translate-y-[-50%]'>
          <i className="fa-solid fa-chevron-left text-stone-50"></i>
        </button>
        <a href={src[currentIndex]} target="_blank" onClick={() => setIsPlaying(false)} rel="noreferrer">
          <img src={images[currentIndex]} alt="" className='w-full' />
        </a>
        <button onClick={nextImage} className='absolute top-1/2 right-0 translate-y-[-50%]'>
          <i className="fa-solid fa-chevron-right text-stone-50"></i>
        </button>
      </div>
    </div>
  );
};

export default Cut2;