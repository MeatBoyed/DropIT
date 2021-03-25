import { useEffect, useState } from 'react';
import { UserInfo } from './Interfaces';

export const useCheckout = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    let existing = localStorage.getItem('DROPTI');

    if (existing != null) return setUserInfo(JSON.parse(existing));
  }, []);

  const SaveUserInfo = (payload: UserInfo) => {
    try {
      localStorage.setItem('DROPTI', JSON.stringify(payload));
      return true;
    } catch (error) {
      return false;
    }
  };

  return { SaveUserInfo, userInfo };
};
