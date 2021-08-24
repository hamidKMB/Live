import React from "react";

import "./Upload-Live.styles.scss"
import TextInput from "../../../components/text-input/text-input.component";
import { ReactComponent as CreateNewDiscountLogo } from "./new-discount-logo.svg";
import "./new-ticket.styles.scss";
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ReactComponent as CreateNewTicketLogo } from "./new-ticket-logo.svg";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
const theme = createTheme({
  typography:{
    fontFamily: "inherit",
    htmlFontSize: 20
  }
})
const OrangeCheckbox = withStyles({
  root: {
    color: "#bdbdbd" ,
    '&$checked': {
      color: "#EFA00B",
    },
    marginRight: "-15px",
    width: "1rem",
    height: "1rem"
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const OrangeCheckboxCircle = withStyles({
  root: {
    color: "#bdbdbd",
    '&$checked': {
      color: "#EFA00B",
    },
    marginRight: "-15px",
    width: "1rem",
    height: "1rem",
    borderRadius: "100%"
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const NewDiscount = (props) => {
  const [state, setState] = React.useState({
      capacity: false ,
      ticket: false ,
      typeDiscount: "تومان"
    })
     const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
    return (
      <ThemeProvider theme={theme}>
      <div className="m-auto d-flex flex-column flex-md-row justify-content-evenly align-items-center new-ticket-discount">
        <div className="d-flex flex-column justify-content-between input-and-header">
          <h6>ایجاد تخفیف</h6>
          <TextInput label="عنوان" input />
          <TextInput label="رویداد" input />
          <TextInput label="کد تخفیف" input />
          <div className="d-flex flex-row">
            <FormControlLabel 
              control={<OrangeCheckboxCircle checked={state.typeDiscount === "درصد" && true } onChange={() => setState({
                ...state,
                typeDiscount: "درصد"
              })} name="typeDiscount" />}
              label="تخفیف به درصد"
              style={state.typeDiscount === "درصد" ? {color: "black", marginLeft: "24px"}:{color: "#bdbdbd", marginLeft: "24px"}}
              />
            <FormControlLabel 
              control={<OrangeCheckboxCircle checked={state.typeDiscount === "تومان" && true}  onChange={() => setState({
                ...state,
                typeDiscount: "تومان"
              })} name="typeDiscount" />}
              label="تخفیف به تومان"
              style={state.typeDiscount === "تومان"? {color: "black" }:{color: "#bdbdbd"}}
              />
          </div>
          <TextInput label="مقدار تخفیف" input placeholder={`تخفیف به ${state.typeDiscount}`}/>
          <FormControlLabel 
            control={<OrangeCheckbox checked={state.capacity} onChange={handleChange} name="capacity" />}
            label="ظرفیت نامحدود"
            style={state.capacity? {color: "black" }:{color: "#bdbdbd"}}
            />
          <TextInput label="ظرفیت" input disable={state.capacity}/>
          <FormControlLabel
            control={<OrangeCheckbox checked={state.ticket} onChange={handleChange} name="ticket" />}
            label="تخفیف دائمی"
            style={state.ticket? {color: "black" }:{color: "#bdbdbd"}}
            />
          <div className="d-flex flex-row justify-content-between dating">
            <TextInput label="تاریخ انقضا" datePicker disable={state.ticket}/>
            <TextInput label="زمان انقضا" timePicker disable={state.ticket}/>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="button  px-sm-5 px-3 me-4">ثبت</div>

            <div
              className="button-outline px-sm-5 px-3 me-2"
              onClick={props.closeModal}
            >
              بازگشت
            </div>
          </div>
        </div>
        <CreateNewDiscountLogo className="mx-auto d-none d-md-block " />
      </div>
      </ThemeProvider>
    );
}

export default NewDiscount;
