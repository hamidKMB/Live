import React from "react";

import Transaction from "../../../components/transaction/transaction.component";
import TextInput from "../../../components/text-input/text-input.component";
import Modal from "../../../components/modal/modal.component";

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
            {
                isModalShow && (
                    <Modal isShow = {isModalShow} closeModal = {closeModal}>
                        <div className="increase-stock d-flex">
                            <div className="card my-2 mx-auto">
                                <h5>
                                    افزایش موجودی
                                </h5>
                                <p>
                                    لطفا مبلغ مورد نظر خود را وارد کنید
                                </p>
                                <TextInput label = "افزایش موجودی" input/>
                                <div className="button button-increase-stock">
                                    افزایش موجودی
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            }
        </div>
    );
}

export default Wallet