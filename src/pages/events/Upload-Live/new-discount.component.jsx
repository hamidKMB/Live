import React from "react";

import "./Upload-Live.styles.scss"
import TextInput from "../../../components/text-input/text-input.component";
import { ReactComponent as CreateNewDiscountLogo } from "./new-discount-logo.svg";

const NewDiscount = (props) => {
    return(
        <div className="m-auto d-flex flex-column flex-md-row justify-content-evenly align-items-center">
            <div className="w-50 d-flex flex-column justify-content-between input-and-header">
                <h6>ایجاد تخفیف</h6>
                <TextInput label="عنوان" input/>
                <TextInput label="رویداد" input/>
                <TextInput label="کد تخفیف" input/>
                <TextInput label="مقدار تخفیفی" input/>
                <TextInput label="ظرفیت" input/>
                <div className="d-flex flex-row justify-content-between">
                    <TextInput label="تاریخ انقضا" dropDown dropItems={[' ']} />
                    <TextInput label="زمان انقضا" dropDown dropItems={[' ']} />
                </div>
                <div className="d-flex align-items-center">
                    <div className="w-50 d-flex justify-content-end">
                        <div className="button px-5">
                            ثبت
                        </div>
                    </div>
                    <div className="w-50 d-flex">
                        <div className="button-outline px-5" onClick={props.closeModal}>
                            بازگشت
                        </div>
                    </div>
                </div>
            </div>
            <CreateNewDiscountLogo className="m-auto"/>
        </div>
    )
}

export default NewDiscount;
