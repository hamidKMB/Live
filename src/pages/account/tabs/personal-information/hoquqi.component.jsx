import React from "react";

import TextInput from "../../../../components/text-input/text-input.component";

const Hoquqi = () => {
  return (
    <div className="content">
      <TextInput
      label="نام ثبتی شرکت"
      input
      />
      <TextInput
      label="کد ثبتی"
      input
      />
      <TextInput
      label="شناسه ملی"
      input
      />
      <TextInput
      label="کد اقتصادی"
      input
      />
      <TextInput
      label="استان"
      dropDown 
          dropItems = {
            [
              'تهران' ,
              'کرج' ,
              'شیراز' ,
            ]
          }
      />
      <TextInput
      label="شهر"
      dropDown 
          dropItems = {
            [
              'تهران' ,
              'کرج' ,
              'شیراز' ,
            ]
          }
      />
      <TextInput
      label="کد ملی"
      input
      />
      <TextInput
      label="کد پستی"
      input
      />
      <TextInput
      label="تلفن"
      input
      />
      <TextInput
      label="آدرس"
      input
      />
    </div>
  );
};

export default Hoquqi;
