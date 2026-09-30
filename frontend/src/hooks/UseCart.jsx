import { useContext } from 'react';
import { CartContext } from '../Components/../context/CartContext';

export const useCart = () => {
  return useContext(CartContext);
};
