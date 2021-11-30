import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';

const COL1_WIDTH = 60;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const COLP_WIDTH = 80;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 24,
  },
  h4: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.235,
  },
  h6: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.57,
  },
  body3: {
    fontSize: 10,
    lineHeight: 1.43,
    fontWeight: 600,
  },
  body2: {
    fontSize: 10,
    lineHeight: 1.43,
    fontWeight: 400,
    marginTop: 7,
  },
  body1: {
    fontSize: 20,
    lineHeight: 1.43,
    fontWeight: 800,
    textDecoration: 'underline',
  },
  gutterBottom: {
    marginBottom: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brand: {
    height: 32,
    width: 32,
  },
  company: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  head: {
    flexDirection: 'row',
    marginTop: 32,
    marginRight: 50,
  },

  references: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  billing: {
    marginTop: 32,
  },
  items: {
    marginTop: 32,
  },
  notes: {
    marginTop: 32,
  },
  Customertable: {
    display: 'flex',
    width: '70%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
  },
  Summerytable: {
    display: 'flex',
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
  },
  tableHeader: {
    backgroundColor: '#e3e3e3',
  },
  tableSubheader: {
    backgroundColor: '#e3e3e3',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',

    borderWidth: 0.2,
    borderColor: '#000000',
    borderStyle: 'solid',
  },
  tableBody: {},
  tableRow: {
    borderWidth: 0.2,
    borderColor: '#000000',
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  tableCell1: {
    padding: 3,
    width: `${COL1_WIDTH}%`,
  },
  tableCellp: {
    padding: 3,
    width: `${COLP_WIDTH}`,
  },
  tableCellN: {
    padding: 3,
    width: `${COLN_WIDTH}%`,
  },
  alignRight: {
    textAlign: 'right',
  },
});

const PrintProjects = (props) => {
  const { projects } = props;
  console.log(projects);
  return projects ? (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Image
              source="/static/rsz_logo.png"
              style={[styles.brand, { width: 140, height: 45 }]}
            />
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body1}></Text>
            <Text style={styles.body1}></Text>
            <Text style={styles.body1}></Text>
          </View>
          <View>
            <Text style={styles.body1}>Projects Report</Text>
          </View>
          <View>
            <Text style={styles.body1}></Text>
            <Text style={styles.body1}></Text>
          </View>
        </View>
        {/* /////// projects table  */}
        <View style={styles.Summerytable}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.h6}>Projects Summery</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.tableSubheader}>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Project Name</Text>
              </View>

              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Customer Name</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Status</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Scope</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Start date</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Expire date</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Grand Total</Text>
              </View>
            </View>
            {projects.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.name}</Text>
                </View>

                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.customer.firstName}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.status}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.type}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.startDate}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.endDate}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.grandTotal}</Text>
                </View>
              </View>
            ))}
            {/* //////////////////////////////////////////////////////// */}
          </View>
        </View>
      </Page>
    </Document>
  ) : (
    <Text style={styles.body2}>waiting </Text>
  );
};

PrintProjects.propTypes = {
  projets: PropTypes.object.isRequired,
};

export default PrintProjects;
