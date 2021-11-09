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

import { gql, useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Link from 'src/components/common/Link';
import Logo from 'src/components/common/Logo';
import Page from 'src/components/common/Page';
import FormInput from 'src/components/controls/FormInput';
import useAuth from 'src/hooks/useAuth';

const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
        email
        role {
          id
          name
        }
      }
    }
  }
`;

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
  email: yup.string().email('Invalid email.').required('Required.'),
  password: yup.string().max(255).required('Required.'),
});

function LoginPage() {
  const classes = useStyles();
  const [login, { loading }] = useMutation(LOGIN);
  const { isAuthenticated, login: loginDispatch } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    // If user already logged in
    if (isAuthenticated) router.push('/projects');
  }, []);

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
      submitError: '',
    },
  });
  const { handleSubmit, errors, setError } = methods;

  return (
    <Page className={classes.root} title="Login">
      <Container className={classes.cardContainer} maxWidth="sm">
        {/* Logo */}
        <Box mb={8} display="flex" justifyContent="center">
          <Link href="/">
            <Logo width={250} height={80} />
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
                  {/* Email */}
                  <FormInput
                    name="email"
                    label="Email"
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
                    {loading ? (
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
                        Log In
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
  async function onSubmit({ email, password }) {
    try {
      const { data } = await login({
        variables: { input: { identifier: email, password } },
      });

      loginDispatch(data.login.jwt, data.login.user, () =>
        router.push('/projects'),
      );
    } catch (err) {
      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Invalid email or password.',
      });
    }
  }
}

export default LoginPage;
