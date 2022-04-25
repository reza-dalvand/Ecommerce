import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      "https://images.unsplash.com/photo-1554941068-d6fc6f388f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1611348586840-ea9872d33411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNsaWRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1598387180437-80388ae0df12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNsaWRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1608009597797-13bc9b52cfb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNsaWRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const styles = (theme) => ({
  root: {
    direction: "ltr",
    maxWidth: "100%",
    flexGrow: 1,
  },
  // header: {
  //   display: "flex",
  //   alignItems: "center",
  //   height: 30,
  //   paddingLeft: theme.spacing.unit * 4,
  //   backgroundColor: theme.palette.background.default
  // },
  img: {
    height: 500,
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              بعدی{" "}
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeftIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowLeftIcon />
              )}
              قبلی{" "}
            </Button>
          }
        />
      </div>
    );
  }
}
SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
