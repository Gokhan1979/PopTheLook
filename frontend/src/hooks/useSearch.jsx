import { useState, useEffect } from 'react';

export const useSearch = () => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const words = ["Search Blouses","Search Dresses","Search Handbags","Search Tops"];

  useEffect(() => {
    const cur = words[wordIdx];
    const speed = deleting? 55 : 110;

    const t = setTimeout(() => {
      if(!deleting){
        if(charIdx < cur.length){
          setDisplay(cur.slice(0, charIdx+1));
          setCharIdx(c=>c+1);
        } else {
          setTimeout(()=> setDeleting(true), 1400);
        }
      } else {
        if(charIdx > 0){
          setDisplay(cur.slice(0, charIdx-1));
          setCharIdx(c=>c-1);
        } else {
          setDeleting(false);
          setWordIdx(i=> (i+1)%words.length);
        }
      }
    }, speed);

    return ()=> clearTimeout(t);
  }, [charIdx, deleting, wordIdx]);

  return { display, words };
};
