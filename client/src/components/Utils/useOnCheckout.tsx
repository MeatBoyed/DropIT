import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useOnCheckout = () => {
  const [onCheckout, setOnCheckout] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/checkout') {
      setOnCheckout(true);
    } else {
      setOnCheckout(false);
    }
  }, [location]);

  return { onCheckout };
};
