import React from "react"
import Modal from "../../../components/modal/modal.component"
import TextInput from "../../../components/text-input/text-input.component"

import "./sheba-page.styles.scss"

const Sheba = () => {
    const [addNewSheba, setAddNewSheba] = React.useState(false)
    const [enterSheba, setEnterSheba] = React.useState(false)
    return (
        <div className="sheba">
            <div className="header-sheba d-flex flex-row align-items-center px-3 mb-5">
                <h5>شبا های تسویه حساب</h5>
                <div className="button me-auto fw-light rounded-3" onClick={() => setAddNewSheba(true)}>
                    + افزودن شبای جدید
                </div>
            </div>
            <table className="table">
                <tr className="text-center card th-holder-sheba mx-3">
                    <th className="border-0 text-center" scope="col">کد</th>
                    <th className="border-0" scope="col">شبا</th>
                    <th className="border-0" scope="col">وضعیت</th>
                    <th className="border-0" scope="col"></th>
                </tr>
            </table>
            {
                addNewSheba && 
                <Modal isShow={addNewSheba} closeModal={() => {
                    setAddNewSheba(false)
                    setEnterSheba(false)
                    }}>
                    <div className="sheba-modal d-flex flex-row justify-content-md-center">
                        <div className="right px-4">
                            <div className="card justify-content-center py-5 px-4 w-100">
                                {
                                    !enterSheba ?
                                    <>
                                        <h6 className="mb-4 ms-auto fw-bold fs-6">لطفا شماره شبا را وارد کنید:</h6>
                                        <TextInput label="شماره شبا" input/>
                                        <div className="button mx-auto mt-5 fw-light rounded-3 py-2 px-3" onClick={() => setEnterSheba(true)}>
                                            ثبت درخواست
                                        </div>
                                    </>
                                    :
                                    <div className="text-center">
                                    <p>شماره شبا شما ثبت شد</p>
                                    <p>پس از تایید در لیست شما قرار میگیرد.</p>
                                    <div className="button px-1 py-2 rounded-3 fw-light mx-4" onClick={() => {
                                        setAddNewSheba(false)
                                        setEnterSheba(false)
                                        }}>
                                        بازگشت به سایت
                                    </div>
                                    </div>
                                }
                                
                            </div>
                        </div>
                        <div className="left">

                        </div>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default Sheba