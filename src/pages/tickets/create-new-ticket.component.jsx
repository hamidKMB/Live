import React from "react";

import TextInput from "../../components/text-input/text-input.component";
import {ReactComponent as CreateNewTicketLogo} from "../events/Upload-Live/new-ticket-logo.svg"
import { useHistory } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
    color: "#bdbdbd",
    '&$checked': {
      color: "#EFA00B",
    },
    marginRight: "-15px",
    width: "1rem",
    height: "1rem"
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CreateNewTicket = () => {
    const history = useHistory()
    const [state, setState] = React.useState({
      capacity: false ,
      ticket: false
    })
     const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
    return (
      <ThemeProvider theme={theme}>
      <div className="admin-pages-layout ticket-layout">
        <div className="m-auto d-flex flex-column flex-md-row justify-content-evenly align-items-center new-ticket-discount">
          <div className=" d-flex flex-column justify-content-between input-and-header">
              <h6>ایجاد بلیط</h6>
              <TextInput label="عنوان" input />
              <TextInput label="رویداد" input />
              <TextInput label="مبلغ بلیط" input placeholder="مبلغ به تومان"/>
              <FormControlLabel 
              control={<OrangeCheckbox checked={state.capacity} onChange={handleChange} name="capacity" />}
              label="ظرفیت نامحدود" 
              style={state.capacity? {color: "black" }:{color: "#bdbdbd"}}/>
              <TextInput label="ظرفیت" disable={state.capacity} placeholder="تعداد به نفر" input/>
              <FormControlLabel
              control={<OrangeCheckbox checked={state.ticket} onChange={handleChange} name="ticket" />}
              label="بلیط دائمی"
              style={state.ticket? {color: "black" }:{color: "#bdbdbd"}}
              />
              <div className="d-flex flex-row justify-content-between dating  ">
                <TextInput label="تاریخ انقضا" datePicker disable={state.ticket}/>
                <TextInput label="زمان انقضا" timePicker disable={state.ticket}/>
              </div>
              <div className="d-flex align-items-center justify-content-center">
              <div className="button px-sm-5 px-3 me-4">ثبت</div>
              <div
                className="button-outline px-sm-5 px-3 me-2"
                onClick={() => history.push("/tickets")}
              >
                بازگشت
              </div>
              </div>
            </div>
            <CreateNewTicketLogo className="mx-auto d-none d-md-block " />
          </div>
          </div>
          </ThemeProvider>
    );
}

export default CreateNewTicket