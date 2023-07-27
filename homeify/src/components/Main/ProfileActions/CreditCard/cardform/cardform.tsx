import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CreditCard } from "../CardManager/CreditCard";
import "./manual.css";

const currentYear = new Date().getFullYear();
const monthsArr = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month <= 9 ? "0" + month : month;
});
const yearsArr = Array.from({ length: 10 }, (_x, i) => currentYear + i);
interface CardFormProps {
  selectedCreditCard: CreditCard;
  onUpdateState: any;
  setIsCardFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmitAction: () => void;
  children: any;
}
export default function CardForm(props: CardFormProps) {
  const [cardData, setcardData] = useState({
    cardNumber: " ",
    cardHolder: " ",
    expiryMonth: " ",
    expiryYear: " ",
    cvv: " ",
  });

  const {
    selectedCreditCard,
    onUpdateState,
    setIsCardFlipped,
    handleSubmitAction,
    children,
  } = props;
  const [errors, setErrors] = useState<CreditCard>({
    id: "",
    cardNumber: "",
    cardHolder: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  function handleFormChange(target) {
    const { name, value } = target;

    onUpdateState(name, value);
  }

  const handleFormChangeNumbers = (event: {
    target: { value: string; name: string };
  }) => {
    const { name, value } = event.target;
    if (isNaN(Number(value))) return; //only accept numbers
    onUpdateState(name, value);
    setcardData((prev) => ({ ...prev, cardNumber: value }));
  };

  const onCvvFocus = () => {
    setIsCardFlipped(true);
  };

  const onCvvBlur = () => {
    setIsCardFlipped(false);
  };

  // const handleConfirmAction = (e: any) => {
  //   // validate errors
  //   if (!isFormHasErrors()) {
  //     handleSubmitAction();
  //   }
  // };
  const isFormHasErrors = () => {
    const newErrors: CreditCard = {
      id: "",
      cardNumber: "",
      cardHolder: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
    };
    //first validate blank fields
    let isErrorFlag = false;
    Object.keys(newErrors).forEach(function (key: any) {
      const keyPair = key as keyof CreditCard;
      const displayableKeyName = key.toLowerCase().replace("card", "Card ");
      if (!selectedCreditCard[keyPair]) {
        newErrors[keyPair] = `${displayableKeyName} value required.`;
        isErrorFlag = true;
      } else {
        newErrors[keyPair] = "";
        isErrorFlag = false;
      }
    });
    if (isErrorFlag) {
      setErrors(newErrors);
      return isErrorFlag;
    }
    //if no blank field then check other validation
    if (selectedCreditCard["cardNumber"].length !== 16) {
      newErrors.cardNumber = "Card number should be 16 digits";
      isErrorFlag = true;
    }
    if (selectedCreditCard["cardCvv"].length !== 4) {
      newErrors.cardCvv = "Card number should be 4 digits";
      isErrorFlag = true;
    }
    setErrors(newErrors);
    return isErrorFlag;
  };

  const handleSubmit = () => {
    if (
      cardData.cardNumber.length === 0 ||
      cardData.cardHolder.length === 0 ||
      cardData.expiryMonth.length === 0 ||
      cardData.expiryYear.length === 0 ||
      cardData.cvv.length === 0
    ) {
      alert("All fields are Mandatory and cannot be left blank !");
      return;
    }
    console.log(cardData);
  };
  return (
    <div className="card-form">
      <div className="card-list">{children}</div>
      <div className="card-form__inner">
        <div className="card-input">
          <label htmlFor="cardNumber" className="card-input__label">
            Card Number
          </label>
          <Form.Control
            type="text"
            name="cardNumber"
            className="card-input__input"
            autoComplete="off"
            onChange={handleFormChangeNumbers}
            maxLength={16}
            value={selectedCreditCard.cardNumber}
            isInvalid={!!errors.cardNumber}
          />
          {/* <Form.Control.Feedback type="invalid">
            {errors.cardNumber}
          </Form.Control.Feedback> */}
        </div>

        <div className="card-input">
          <label htmlFor="cardName" className="card-input__label">
            Card Holder Name
          </label>
          <Form.Control
            type="text"
            className="card-input__input"
            autoComplete="off"
            name="cardHolder"
            onChange={(e) => {
              handleFormChange(e.target);
              setcardData((prev) => ({ ...prev, cardHolder: e.target.value }));
            }}
            value={selectedCreditCard.cardHolder}
            isInvalid={!!errors.cardHolder}
          />
          {/* <Form.Control.Feedback type="invalid">
            {errors.cardHolder}
          </Form.Control.Feedback> */}
        </div>

        <div className="card-form__row">
          <div className="card-form__col">
            <div className="card-form__group">
              <label htmlFor="cardMonth" className="card-input__label">
                Expiration Date
              </label>
              <Form.Control
                as="select"
                className="card-input__input -select"
                value={selectedCreditCard.cardMonth}
                name="cardMonth"
                onChange={(e) => {
                  handleFormChange(e.target);
                  setcardData((prev) => ({
                    ...prev,
                    expiryMonth: e.target.value,
                  }));
                }}
                isInvalid={!!errors.cardMonth}
              >
                <option value="" disabled>
                  Month
                </option>

                {monthsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </Form.Control>
              {/* <Form.Control.Feedback type="invalid">
                {errors.cardMonth}
              </Form.Control.Feedback> */}
              <Form.Control
                as="select"
                name="cardYear"
                className="card-input__input -select"
                value={selectedCreditCard.cardYear}
                onChange={(e) => {
                  handleFormChange(e.target);
                  setcardData((prev) => ({
                    ...prev,
                    expiryYear: e.target.value,
                  }));
                }}
                isInvalid={!!errors.cardYear}
              >
                <option value="" disabled>
                  Year
                </option>

                {yearsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </Form.Control>
              {/* <Form.Control.Feedback type="invalid">
                {errors.cardYear}
              </Form.Control.Feedback> */}
            </div>
          </div>
          <div className="card-form__col -cvv">
            <div className="card-input">
              <label htmlFor="cardCvv" className="card-input__label">
                CVV No.
              </label>
              <Form.Control
                type="text"
                className="card-input__input"
                maxLength={4}
                autoComplete="off"
                name="cardCvv"
                value={selectedCreditCard.cardCvv}
                onChange={(e) => {
                  handleFormChange(e.target);
                  setcardData((prev) => ({
                    ...prev,
                    cvv: e.target.value,
                  }));
                }}
                onFocus={onCvvFocus}
                onBlur={onCvvBlur}
                isInvalid={!!errors.cardCvv}
              />
              {/* <Form.Control.Feedback type="invalid">
                {errors.cardCvv}
              </Form.Control.Feedback> */}
            </div>
          </div>
        </div>
        <div className="card-form__row">
          <div className="card-form__col">
            <div className="d-grid gap-2">
              <Button className="btnSubmit" onClick={handleSubmit}>
                Confirm
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
