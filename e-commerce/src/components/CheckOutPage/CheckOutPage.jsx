import { useEffect, useState, useRef } from "react";
import { PaystackButton } from "react-paystack";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const CheckoutPage = () => {

  const { totalPrice } = useContext(CartContext)
  // const totalPrice = 200
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const publicKey = "pk_test_835f36e333b9d1a8416ecc50e401b7a3aa12c3c6"; // Add your Paystack public key

  // Function to format the amount as Naira
  const formatAsNaira = (totalPrice) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(totalPrice);
  };

  // Function to handle payment success
  const onSuccess = (reference) => {
    // Redirect to a success page
    navigate("/successPage");
    setPaymentSuccess(true);
    sendConfirmationEmail(email);
  };

  // Function to handle payment closure
  const onClose = () => {
    alert("We would love to see you purchase this item, please proceed");
    navigate("/");
  };

  // Function to send a confirmation email
  const sendConfirmationEmail = (toEmail) => {
    console.log(`Sending confirmation email to ${toEmail}`);
    // Implement your email sending logic here
  };

  return (
    <>
      {paymentSuccess ? (
        <div>
          <h2>Payment Successful!</h2>
          <p>An email confirmation has been sent to {email}.</p>
        </div>
      ) : (
        <div>
          <div>
            <div className="w-full">
              <div className="">
                <label>Full Name:</label>
                <input
                  type="text"
                  value={fullName}
                  onInput={(e) => setFullName(e.target.value)}
                  className="input"
                />
              </div>
              <div className="">
                <label>Phone Number:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onInput={(e) => setPhoneNumber(e.target.value)}
                  className="input"
                />
              </div>
              <div className="">
                <label>Email adress:</label>
                <input
                  type="text"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="flex mb-10 gap-6 items-center">
              <h3 className="input text-lg w-min">{formatAsNaira(totalPrice)}</h3>
            </div>
            <div className="btn-container">
              <PaystackButton
                text="Pay with Paystack"
                className="purchase--btn"
                email={email}
                amount={totalPrice * 100} // Convert to kobo
                publicKey={publicKey}
                onSuccess={onSuccess}
                onClose={onClose}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
