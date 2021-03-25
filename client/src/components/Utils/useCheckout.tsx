import { useEffect, useState } from 'react';
import { UserData, UserInfo, PaymentMethod } from './Interfaces';

export const useCheckout = () => {
  const [userData, setUserData] = useState<UserData>({
    userInfo: { email: '', phoneNumber: '', firstName: '', lastName: '', address1: '', address2: '', city: '' },
    paymentMethod: 'none',
  });

  useEffect(() => {
    let existing = localStorage.getItem('DROPTI');

    if (existing != null) return setUserData(JSON.parse(existing));
  }, []);

  const SaveUserInfo = (payload: UserInfo) => {
    try {
      let newUserData: UserData = { userInfo: payload, paymentMethod: userData.paymentMethod };
      setUserData(newUserData);
      localStorage.setItem('DROPTI', JSON.stringify(newUserData));
      return true;
    } catch (error) {
      return false;
    }
  };

  const SavePaymentMethod = (payload: PaymentMethod) => {
    try {
      let newUserData: UserData = { userInfo: userData.userInfo, paymentMethod: payload };
      setUserData(newUserData);
      localStorage.setItem('DROPTI', JSON.stringify(newUserData));
      return true;
    } catch (error) {
      return false;
    }
  };

  return { SaveUserInfo, SavePaymentMethod, userData };
};
