import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PrintQutation from './PrintQutation';
import { Box, Button } from '@material-ui/core';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';

function printprieview({ setprintprieview, boq, enablepartnumber }) {
  return (
    <>
      <Box style={{ margin: '0.3%' }}>
        <Button
          md={4}
          xs={12}
          color="primary"
          startIcon={<ArrowLeftIcon fontSize="small" />}
          onClick={() => setprintprieview(false)}
          variant="contained">
          Back
        </Button>
      </Box>
      <PDFViewer height="100%" style={{ border: 'none' }} width="100%">
        <PrintQutation boq={boq} enablepartnumber={enablepartnumber} />
      </PDFViewer>
    </>
  );
}

export default printprieview;
