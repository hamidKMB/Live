import React from "react";


import TextInput from "../../components/text-input/text-input.component";
import { ReactComponent as CreateNewDiscountLogo } from "../events/Upload-Live/new-discount-logo.svg";
import { useHistory } from "react-router";
const CreateNewDiscount = () => {
  const history = useHistory();

  return (
    <div className="admin-pages-layout ticket-layout">
      <div className="m-auto d-flex flex-column flex-md-row justify-content-evenly align-items-center new-ticket-discount">
        <div className="d-flex flex-column justify-content-between input-and-header">
          <h6>ایجاد تخفیف</h6>
          <TextInput label="عنوان" input />
          <TextInput label="رویداد" input />
          <TextInput label="کد تخفیف" input />
          <TextInput label="مقدار تخفیفی" input />
          <TextInput label="ظرفیت" input />
          <div className="d-flex flex-row justify-content-between dating">
            <TextInput label="تاریخ انقضا" dropDown dropItems={[" "]} />
            <TextInput label="زمان انقضا" dropDown dropItems={[" "]} />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="button  px-sm-5 px-3 me-4">ثبت</div>

            <div
              className="button-outline px-sm-5 px-3 me-2"
              onClick={() => history.push("/discounts")}
            >
              بازگشت
            </div>
          </div>
        </div>
        <CreateNewDiscountLogo className="mx-auto d-none d-md-block " />
      </div>
    </div>
  );
};

export default CreateNewDiscount;
