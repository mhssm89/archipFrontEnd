import { makeStyles } from '@material-ui/core';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import DashboardLayout from 'src/layouts/DashboardLayout';

import { withTranslation } from '@/root/i18n';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100% ',
    padding: theme.spacing(3),
  },
}));

function ProfilePage({ t }) {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Profile">
      <h1>{t('common:hello-world')}</h1>
    </Page>
  );
}

ProfilePage.Guard = Protected;
ProfilePage.Layout = DashboardLayout;
ProfilePage.getInitialProps = async () => ({ namespacesRequired: ['common'] });

export default withTranslation('common')(ProfilePage);
