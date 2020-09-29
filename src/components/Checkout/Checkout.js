import React from 'react';
import './Checkout.css'
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';

const Checkout = () => {

    const auth = useAuth()
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className="checkOutForm" onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <h2 style={{textAlign: 'center'}}>Place Your Order</h2>
            <br/>
            <input type='text' name="name" defaultValue={auth.user && auth.user.name} ref={register({ required: true })} placeholder="Your Name"/><br/>
            {
                errors.name && <span className="checkoutFormErrorText">Name field is required<br/></span>
            }
            <input type='text' name="email" defaultValue={auth.user && auth.user.email} ref={register({ required: true })} placeholder="Your Email" /><br/>
            {
                errors.email && <span className="checkoutFormErrorText">Email field is required<br/></span>
            }
            <input type='text' name="addressLine1" ref={register({ required: true })} placeholder="Address Line 1" /><br/>
            {
                errors.addressLine1 && <span className="checkoutFormErrorText">Address field is required<br/></span>
            }
            <input type='text' name="addressLine2" ref={register} placeholder=" Address Line 2" /><br/>
            <input type='text' name="city" ref={register({ required: true })} placeholder="Your City" /><br/>
            {
                errors.city && <span className="checkoutFormErrorText">City field is required<br/></span>
            }
            <input type='text' name="country" ref={register({ required: true })} placeholder="Your Country" /><br/>
            {
                errors.country && <span className="checkoutFormErrorText">Country field is required<br/></span>
            }
            <input type='text' name="zipCode" ref={register({ required: true })} placeholder="Your Zip Code" /><br/>
            {
                errors.zipCode && <span className="checkoutFormErrorText">Zip code field is required<br/></span>
            }
            <input type="submit" value='Place Order' />
            <br/>
        </form>
    );
};

export default Checkout;