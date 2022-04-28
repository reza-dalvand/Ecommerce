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
import slider1 from "../../assets/images/imagesSlider/slider1.jpg";
import slider2 from "../../assets/images/imagesSlider/slider2.jpg";
import slider3 from "../../assets/images/imagesSlider/slider3.jpg";
import slider4 from "../../assets/images/imagesSlider/slider4.jpg";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: slider1,
  },
  {
    imgPath: slider2,
  },
  {
    imgPath: slider3,
  },
  {
    imgPath: slider4,
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

class MainSlider extends React.Component {
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
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  key={index}
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
MainSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainSlider);
