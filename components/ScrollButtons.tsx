'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Show Top button after scrolling
      setShowTop(scrollTop > 300);

      // Hide Bottom button near end
      setShowBottom(scrollTop + windowHeight < fullHeight - 200);

      // Stop bounce while scrolling
      document.body.classList.add('scrolling');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      
      {/* ⬆️ Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="bg-black/80 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:scale-110 transition 
          animate-bounce [animation-duration:2s] 
          group-[.scrolling]:animate-none"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* ⬇️ Bottom Button */}
      {showBottom && (
        <button
          onClick={scrollToBottom}
          className="bg-gray-800/80 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:scale-110 transition 
          animate-bounce [animation-duration:2s] 
          group-[.scrolling]:animate-none"
        >
          <ArrowDown size={20} />
        </button>
      )}
    </div>
  );
}