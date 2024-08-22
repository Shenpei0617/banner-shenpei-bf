import React,{useRef} from 'react';


interface CutOneProps {
  onVideoEnd: () => void;
}

const Cut1: React.FC<CutOneProps> = ({ onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLinkClick = (): void => {
    if (videoRef.current) {
      videoRef.current.pause(); // 暫停影片
    }
  };

  return (
    <div className='w-[320px] h-[480px] relative'>
      <div className='w-[320px] h-[480px] bg-slate-600 absolute opacity-30'></div>
      <div>
        <img src='https://shenpei0617.github.io/video/cut1_bg.png' alt='' className='w-full'/>
      </div>
      <div className='absolute left-1/2 top-[3%] translate-x-[-50%] w-24'>
        <img src='https://shenpei0617.github.io/video/cut1_logo.png' alt="" className='w-full'/>
      </div>
      <div className='absolute left-1/2 bottom-[5%] translate-x-[-50%] w-[300px]'>
        <video controls autoPlay muted onEnded={onVideoEnd} ref={videoRef}>
          <source src='https://shenpei0617.github.io/video/video.mp4' type='video/mp4' />
        </video>
        <a href='https://www.performics.com/category/performics-news/' target="_blank" rel="noreferrer" className='text-slate-50 font-semibold' onClick={handleLinkClick}>點擊連結</a>
      </div>
    </div>
  );
};

export default Cut1;