import React from "react";

import Transaction from "../../../components/transaction/transaction.component";
import TextInput from "../../../components/text-input/text-input.component";
import Modal from "../../../components/modal/modal.component";
import {ReactComponent as PaymentLogo} from "./payment-logo.svg";
import {ReactComponent as ModalPaymentLogo} from "./modal-wallet-logo.svg";
import { ReactComponent as ModalDesign1 } from "./Modal-design1.svg";
import { ReactComponent as ModalDesign2 } from "./Modal-design2.svg";
import "./wallet.styles.scss";

const Wallet = () => {
    const [isModalShow, setIsModalShow] = React.useState(false);
    
    const openModal = () => setIsModalShow( true )
    const closeModal = () => setIsModalShow( false )

    return (
        <div className="wallet d-flex flex-column flex-md-row align-items-center">
            <div className="wallet-detail d-flex flex-column mx-auto">
                <h6>کیف پول</h6>
                <div className="stock d-flex flex-row justify-content-between align-items-center">
                    <span>موجودی:</span>
                    <span>132,000 تومان</span>
                </div>
                <div className="five-last-transaction">
                    <p>پنج تراکنش اخیر:</p>
                    <Transaction price="22000 تومان" typeOfTransaction="واریز" />
                    <Transaction price="22000 تومان" typeOfTransaction="برداشت"/>
                    <Transaction price="22000 تومان" typeOfTransaction="واریز" />
                    <Transaction price="22000 تومان" typeOfTransaction="برداشت"/>
                    <Transaction price="22000 تومان" typeOfTransaction="واریز" />
                </div>
                <div className="button button-finance" onClick = {openModal}>
                    افزایش موجودی
                </div>
            </div>
            <PaymentLogo className="payment-logo m-md-auto ms-md-0 ms-0 mt-5 px-md-5 w-75"/>
            {
                isModalShow && (
                    <Modal isShow = {isModalShow} closeModal = {closeModal}>
                        <div className="increase-stock d-flex justify-content-center py-5 align-items-center">
                            <div className="d-md-flex flex-column justify-content-between d-none">
                                <ModalDesign1 className="design-1 mb-5"/>
                                <ModalDesign2 className="design-2"/>
                            </div>
                            <div className="card my-auto ms-md-auto position-relative ">
                                <h5>
                                    افزایش موجودی
                                </h5>
                                <p>
                                    لطفا مبلغ مورد نظر خود را وارد کنید
                                </p>
                                <TextInput label = "افزایش موجودی" input/>
                                <div className="button button-increase-stock mx-auto my-2">
                                    افزایش موجودی
                                </div>
                            </div>
                            <ModalPaymentLogo className="d-md-block d-none mx-auto w-50"/>
                        </div>
                    </Modal>
                )
            }
        </div>
    );
}

export default Wallet