import React from 'react';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import DashboardLayout from 'src/layouts/DashboardLayout';
import Header from 'src/components/common/Header';
import Poqdetail from 'src/components/pages/projects/create/Poqdetail';
import Projectdetail from 'src/components/pages/projects/create/Projectdetail';
import ProjectReview from 'src/components/pages/projects/create/ProjectReview';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  colors,
  Container,
  Grid,
  makeStyles,
  Paper,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  withStyles,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import {
  Briefcase as BriefcaseIcon,
  File as FileIcon,
  Star as StarIcon,
  User as UserIcon,
  Clipboard as clipboardIcon,
} from 'react-feather';

import Link from 'src/components/common/Link';

const steps = [
  {
    label: 'P.O.Q Details',
    icon: clipboardIcon,
  },
  {
    label: 'Project Details',
    icon: BriefcaseIcon,
  },
  {
    label: 'Project review',
    icon: FileIcon,
  },
];

const CustomStepConnector = withStyles((theme) => ({
  vertical: {
    marginLeft: 19,
    padding: 0,
  },
  line: {
    borderColor: theme.palette.divider,
  },
}))(StepConnector);
const useCustomStepIconStyles = makeStyles((theme) => ({
  root: {},
  active: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[10],
    color: theme.palette.secondary.contrastText,
  },
  completed: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const CustomStepIcon = ({ active, completed, icon }) => {
  const classes = useCustomStepIconStyles();
  const Icon = steps[icon - 1].icon;

  return (
    <Avatar
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}>
      <Icon size="20" />
    </Avatar>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  avatar: {
    backgroundColor: colors.red[600],
  },
  stepper: {
    backgroundColor: 'transparent',
  },
  paper: {
    marginTop: theme.spacing(3),
  },
}));

const headerLinks = [
  { title: 'Company', href: '/' },
  { title: 'Projects', href: '/projectsnew' },
  { title: 'Create Project' },
];

function CreatePage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, ssetCompleted] = React.useState(false);
  const [poq, setPoq] = React.useState(null);
  const [project, setProject] = React.useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleComplete = () => {
    ssetCompleted(true);
  };
  return (
    <Page className={classes.root} title="Create New Project">
      <Container maxWidth={false}>
        <Header links={headerLinks} mainText="Create Project Wizard" />
        {!completed ? (
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12} md={3}>
                <Stepper
                  activeStep={activeStep}
                  className={classes.stepper}
                  connector={<CustomStepConnector />}
                  orientation="vertical">
                  {steps.map((step) => (
                    <Step key={step.label}>
                      <StepLabel StepIconComponent={CustomStepIcon}>
                        {step.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
              <Grid item xs={12} md={9}>
                <Box p={3}>
                  {activeStep === 0 && (
                    <Poqdetail onNext={handleNext} handlePoq={setPoq} />
                  )}
                  {activeStep === 1 && (
                    <Projectdetail
                      onBack={handleBack}
                      onNext={handleNext}
                      handleProject={setProject}
                    />
                  )}
                  {activeStep === 2 && (
                    <ProjectReview
                      onBack={handleBack}
                      onComplete={handleComplete}
                      projectData={{ poq, project }}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <h1>after complete</h1>
        )}
      </Container>
    </Page>
  );
}

CreatePage.Guard = Protected;
CreatePage.Layout = DashboardLayout;

export default CreatePage;
