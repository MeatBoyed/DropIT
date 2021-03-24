import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { Link } from 'react-router-dom';

import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';

interface Props {
  onChange: (state: 'Information' | 'InformationCheck' | 'Payment') => void;
}

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
}

export const Information: React.FC<Props> = ({ onChange }) => {
  const { register, handleSubmit, errors } = useForm();

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [noNumber, setNoNumber] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    if (!phoneNumber) {
      setNoNumber(true);
      return console.log('No Phone number inputted');
    }
    return console.log(data, phoneNumber);
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
            {noNumber && <p>Please enter a number</p>}
            <PhoneInput
              country={'na'}
              disableDropdown={true}
              masks={{ na: '(..) ... ....' }}
              onChange={setPhoneNumber}
              inputProps={{ required: true }}
              inputStyle={{ height: '3.2em', width: '100%' }}
            />
          </div>
        </div>
        <div className="shippingContainer">
          <p className="formTitle">Shipping Address</p>
          <div className="shippingAddressContainer">
            <div className="inlineInputContainer">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                required
                className="formInput firstInput"
                ref={register}
              />
              <input type="text" name="lastname" id="lastname" placeholder="Last Name" required className="formInput" />
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
