import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createTheme, ThemeProvider } from "@material-ui/core";
import {
  Link,
  useParams,
} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: "50vw",
        backgroundColor: "inherit",
        border: "none",
        boxShadow: "none",
        fontFamily: "inherit",
},
});

const theme = createTheme({
    overrides: {
    MuiTab: {
        root: {
        fontFamily: "inherit",
        fontSize: "80%",
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        padding: "0 10px 0 10px",
        "@media (min-width: 600px)": {
            minWidth: "fit-content",
        },
    },
},
MuiTabs: {
    root: {
        marginBottom: "2.5rem",
    },
},
},
});
const TabSlider = ( props ) => {
    //component that takes 2 props
    //1. an array of routeParameterNames
    //2. an array of objects with two property : label and link
    let my_tabs = [...props.routeParameters];
    let { tab } = useParams();

    React.useEffect(() => {
      let index = my_tabs.indexOf(tab);
      setValue(index);
    }, [my_tabs, tab]);

    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <ThemeProvider theme={theme}>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { backgroundColor: "#EFA00B", color: "#000" },
            }}
            >
            {
                props.tabDetails.map((item,index) => {
                    return(
                        <Tab
                        key={index}
                        label={item.label}
                        component={Link}
                        to={item.link}
                        />
                    )
            })
            }
          </Tabs>
        </Paper>
      </ThemeProvider>
    );
}

export default TabSlider;