import React from "react"

import TextInput from "../../../../components/text-input/text-input.component";
const Haqiqi = () => {
    return (
      <div className="content">
        <TextInput
          label="استان"
          dropDown
          dropItems={["تهران", "کرج", "شیراز"]}
        />
        <TextInput label="شهر" dropDown dropItems={["تهران", "کرج", "شیراز"]} />
        <TextInput label="کد ملی" input />
        <TextInput label="کد پستی" input />
        <TextInput label="تلفن" input />
        <TextInput label="آدرس" textArea rows="1" cols="1" resize />
      </div>
    );
}

export default Haqiqi