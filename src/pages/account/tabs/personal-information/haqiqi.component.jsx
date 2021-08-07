import React from "react"

import TextInput from "../../../../components/text-input/text-input.component";

const Haqiqi = () => {
    return (
      <div className="content">
        <TextInput
        label="استان"
        />
        <TextInput
        label="شهر"
        />
        <TextInput
        label="کد ملی"
        />
        <TextInput
        label="کد پستی"
        />
        <TextInput
        label="تلفن"
        />
        <TextInput
        label="آدرس"
        />
      </div>
    );
}

export default Haqiqi