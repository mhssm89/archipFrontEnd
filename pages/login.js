import React from 'react';

import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Divider,
  FormHelperText,
  makeStyles,
  Typography,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Link from 'src/components/common/Link';
import Logo from 'src/components/common/Logo';
import Page from 'src/components/common/Page';
import FormInput from 'src/components/controls/FormInput';
import useAuth from 'src/hooks/useAuth';

import { withTranslation } from '@/root/i18n';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
  },
}));

const validationSchema = yup.object().shape({
  username: yup.string().max(255).required('Username is required'),
  password: yup.string().max(255).required('Password is required'),
});

function LoginPage({ t }) {
  const classes = useStyles();
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    // If user already logged in
    if (isAuthenticated) router.push('/dashboard');
  }, []);

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: '',
      password: '',
      submitError: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    formState: { isSubmitting },
  } = methods;

  return (
    <Page className={classes.root} title="Login">
      <Container className={classes.cardContainer} maxWidth="sm">
        {/* Logo */}
        <Box mb={8} display="flex" justifyContent="center">
          <Link href="/">
            <Logo />
          </Link>
        </Box>

        <Card>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="center"
              mb={3}>
              <div>
                <Typography color="textPrimary" gutterBottom variant="h2">
                  Sign in
                </Typography>
              </div>
            </Box>
            <Box>
              <Divider />
            </Box>

            <Box flexGrow={1} mt={3}>
              {/* Login form here */}
              <FormProvider {...methods}>
                <form>
                  {/* username */}
                  <FormInput
                    name="username"
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    errorObj={errors}
                  />
                  {/* password */}
                  <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    errorObj={errors}
                  />

                  {/* Error */}
                  {errors.submitError && (
                    <Box mt={1} display="flex" justifyContent="center">
                      <FormHelperText style={{ fontSize: '18px' }} error>
                        {errors.submitError.message}
                      </FormHelperText>
                    </Box>
                  )}

                  <Box mt={4}>
                    {/* Submit */}
                    {isSubmitting ? (
                      <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress />
                      </Box>
                    ) : (
                      <Button
                        color="secondary"
                        fullWidth
                        size="large"
                        type="button"
                        variant="contained"
                        onClick={handleSubmit(onSubmit)}>
                        {/* Log In */}
                        {t('common:login')}
                      </Button>
                    )}
                  </Box>
                </form>
              </FormProvider>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );

  // ##################################################
  async function onSubmit({ username, password }) {
    try {
      await login(username, password, () => router.push('/dashboard'));
    } catch (err) {
      console.error(err);

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: `${err.message}`,
      });
    }
  }
}

LoginPage.getInitialProps = async () => ({ namespacesRequired: ['common'] });

export default withTranslation('common')(LoginPage);
