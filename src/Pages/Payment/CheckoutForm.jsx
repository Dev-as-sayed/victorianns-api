import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useMyBookings from "../../Hooks/useMyBookings/useMyBookings";

const CheckoutForm = ({ paymentAmount }) => {
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState();
    const [transactionId, setTransationId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [ myBookings, refetch ] = useMyBookings();
    
    useEffect( () => {
        axiosSecure.post('/create-paymetn-intent', {price: parseInt(paymentAmount)})
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, paymentAmount])

    const handelPaymentChaeckout = async (e) => {
        e.preventDefault();

        if( !stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement)

        if( card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error: ', error);
            setError(error.message)
        }else{
            console.log('[paymentMethod]: ', paymentMethod);
            setError('')
        }

        const { paymentIntent, confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });
        if(confirmError){
            console.log('confirmError: ', confirmError);
        }else{
            console.log('paymentIntent: ', paymentIntent);
            if( paymentIntent.status === 'succeeded'){
                setTransationId(paymentIntent.id)

                const payment = {
                    email: user.email,
                    price: paymentAmount,
                    transactionId: paymentIntent.id,
                    date: new Date(),  // ust date convert. use moment js to convart date. this comment for my hint to leaar about moment js
                    payedIds: myBookings.map( item => item._id),
                    payedContestIds: myBookings.map( item => item.constestId)
                }

                axiosSecure.post('/post-pay-history', payment)
                    .then( res => console.log(res.data))
                refetch()
            }
        }
    }
    return (
        <div>
            <form onSubmit={handelPaymentChaeckout}>
                <CardElement
                    options={{
                        style: {
                            base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            },
                            invalid: {
                            color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-sm btn-info px-5 my-10 " disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                { transactionId && <p className="text-green-700">your tansection id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;