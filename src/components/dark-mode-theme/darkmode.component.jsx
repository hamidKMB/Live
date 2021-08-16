import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Switch } from "@material-ui/core";

const DarkModeButton = () => {
    const [state, setState] = React.useState("Dark")

    const handleClick = () => {
        state === "Dark" ? setState("Light") : setState("Dark")
    }

    return(
        <FormControlLabel
            value="bottom"
            control={<Switch color="primary" />}
            label={state}
            labelPlacement="bottom"
            onClick={() => handleClick()}
        />
    )
}

export default DarkModeButton