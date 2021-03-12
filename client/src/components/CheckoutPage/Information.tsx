import React from 'react';

export const Information: React.FC = () => {
  return (
    <section id="Information">
      <form action="">
        <div className="contactContainer">
          <p className="formTitle">Contact Information</p>
          <div className="inputContainer">
            <input type="email" name="email" id="email" placeholder="Email" required className="formInput" />
            <input type="tel" name="mobile" id="mobile" placeholder="Mobile phone" required className="formInput" />
          </div>
        </div>
        <div className="shippingContainer">
          <p className="formTitle">Shipping Address</p>
          <div className="shippingAddressContainer">
            <div className="nameContainer">
              <input type="text" name="firstname" id="firstname" placeholder="First Name" required className="formInput" />
              <input type="text" name="lastname" id="lastname" placeholder="Last Name" required className="formInput" />
            </div>
            <input type="text" name="address1" id="address" placeholder="Address" required className="formInput" />
            <input
              type="text"
              name="address2"
              id="address"
              placeholder="Address line 2 (optional)"
              required
              className="formInput"
            />
            <select name="city" id="city" required>
              <option value="Walvis Bay">Walvis Bay</option>
              <option value="Swakopmund">Swakopmund</option>
              <option value="Windhoek">Windhoek</option>
            </select>
          </div>
        </div>
      </form>
    </section>
  );
};
