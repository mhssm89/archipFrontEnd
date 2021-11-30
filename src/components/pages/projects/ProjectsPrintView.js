import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Box, Button } from '@material-ui/core';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';
import PrintProjects from 'src/components/pages/projects/PrintProjects';

function ProjectsPrintView({ setPrintView, projects }) {
  return (
    <>
      <Box style={{ margin: '0.3%' }}>
        <Button
          md={4}
          xs={12}
          color="primary"
          startIcon={<ArrowLeftIcon fontSize="small" />}
          onClick={() => {
            setPrintView(false);
          }}
          variant="contained">
          Back
        </Button>
      </Box>
      <PDFViewer height="100%" style={{ border: 'none' }} width="100%">
        <PrintProjects projects={projects} />
      </PDFViewer>
    </>
  );
}

export default ProjectsPrintView;
