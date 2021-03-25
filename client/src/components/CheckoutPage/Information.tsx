import React, { useEffect, useState } from 'react';
import { FormData, UserInfo } from '../Utils/Interfaces';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { useCheckout } from '../Utils/useCheckout';
import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';

interface Props {
  onChange: (state: 'Information' | 'InformationCheck' | 'Payment') => void;
}

export const Information: React.FC<Props> = ({ onChange }) => {
  const { register, handleSubmit, setValue } = useForm();

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [noNumber, setNoNumber] = useState<boolean>(true);

  const { SaveUserInfo, userInfo } = useCheckout();

  useEffect(() => {
    if (userInfo) {
      setValue('email', userInfo?.email);
      setValue('firstName', userInfo?.firstName);
      setValue('lastName', userInfo?.lastName);
      setValue('address1', userInfo?.address1);
      setValue('address1', userInfo?.address1);
      setValue('city', userInfo?.city);
      setPhoneNumber(userInfo?.phoneNumber);
    }
  }, [userInfo]);

  const onSubmit = (data: FormData) => {
    if (!phoneNumber || phoneNumber.length < 12) return setNoNumber(true);

    console.log(data.firstName);

    let payload: UserInfo = {
      email: data.email,
      phoneNumber: phoneNumber,
      firstName: data.firstName,
      lastName: data.lastName,
      address1: data.address1,
      address2: data.address2,
      city: data.city,
    };

    const saved = SaveUserInfo(payload);
    if (saved) return onChange('InformationCheck');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section id="Information">
        <div className="contactContainer">
          <p className="formTitle">Contact Information</p>
          <div className="inlineInputContainer">
            <input
              type="email"
              inputMode="email"
              name="email"
              id="email"
              placeholder="Email"
              className="formInput firstInput"
              required
              ref={register}
            />
            <PhoneInput
              country={'na'}
              disableDropdown={true}
              masks={{ na: '(..) ... ....' }}
              onChange={setPhoneNumber}
              inputProps={{ required: true }}
              inputStyle={{ height: '3.2em', width: '100%' }}
            />
          </div>
          {noNumber && <p className="phoneNumberError">Please enter a valid Phone Number</p>}
        </div>
        <div className="shippingContainer">
          <p className="formTitle">Shipping Address</p>
          <div className="shippingAddressContainer">
            <div className="inlineInputContainer">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
                className="formInput firstInput"
                ref={register}
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
                className="formInput "
                ref={register}
              />
            </div>
            <div className="addressContainer">
              <input
                type="text"
                name="address1"
                id="address"
                placeholder="Address"
                required
                className="formInput extended"
                ref={register}
              />
              <input
                type="text"
                name="address2"
                id="address"
                placeholder="Address line 2 (optional)"
                className="formInput extended"
                ref={register}
              />
              <select name="city" id="city" ref={register} required className="formSelector">
                <option value="Walvis Bay">Walvis Bay</option>
                <option value="Swakopmund">Swakopmund</option>
                <option value="Windhoek">Windhoek</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <div className="navigation">
        <div className="returnContainer">
          <DrownDownIcon className="icon" />
          <Link to="/shoppingCart" className="returnText">
            Return to Cart
          </Link>
        </div>
        <button className="continueBtn" type="submit">
          Continue to Shipping
        </button>
      </div>
    </form>
  );
};
