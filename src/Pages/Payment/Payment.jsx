import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY)


const Payment = () => {
    const {_id} = useParams();
    console.log(_id);
    // const contestId = _id;

    const paymentAmount = 20;
    return (
        <div>
            {/* TODO: HEAD DING */}
            <div className="p-20">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        paymentAmount={paymentAmount}
                        contestId={_id}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;