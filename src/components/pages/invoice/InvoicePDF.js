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
  body2: {
    fontSize: 10,
    lineHeight: 1.43,
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
  table: {
    display: 'flex',
    width: 'auto',
  },
  tableHeader: {},
  tableBody: {},
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  tableCell1: {
    padding: 6,
    width: `${COL1_WIDTH}%`,
  },
  tableCellN: {
    padding: 6,
    width: `${COLN_WIDTH}%`,
  },
  alignRight: {
    textAlign: 'right',
  },
});

const InvoicePDF = (props) => {
  const { invoice, customer } = props;
  console.log(invoice, customer);
  return invoice ? (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Image
              source="/static/rsz_logo.png"
              style={[styles.brand, { width: 140, height: 45 }]}
            />
          </View>
          <View>
            <Text style={styles.subtitle2}>Invoice #</Text>
            <Text style={styles.h4}>{invoice.id}</Text>
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body2}>20 Tyaran Street - 2nd Floor</Text>
            <Text style={styles.body2}>Naser City , Cairo</Text>
            <Text style={styles.body2}>Egypt</Text>
          </View>
          <View>
            <Text style={styles.body2}>Arch-IP</Text>
            <Text style={styles.body2}>Smart Systems Solutions</Text>
          </View>
          <View>
            <Text style={styles.body2}>info@archip.com</Text>
            <Text style={styles.body2}>(+20) 112 148 20149</Text>
          </View>
        </View>

        <View style={styles.company}>
          <View>
            <Text style={styles.subtitle1}>Project</Text>
            <Text style={styles.body2}>
              Project Name : {invoice.project['name']}
            </Text>
          </View>
          <View>
            {invoice.type == 'in' ? (
              <Text style={styles.subtitle1}>Paied By</Text>
            ) : (
              <Text style={styles.subtitle1}>Paied to</Text>
            )}
            <Text style={styles.body2}>
              {customer.firstName} {customer.lastName}
            </Text>
            <Text style={styles.body2}>Company : {customer.companyName}</Text>
            <Text style={styles.body2}>Address : {customer.address}</Text>
          </View>
          <View>
            <Text style={styles.subtitle1}>Description</Text>
            <Text style={styles.body2}>{invoice.description}</Text>
          </View>
        </View>
        <View style={styles.items}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}></View>
                <View style={styles.tableCellN} />
              </View>
            </View>
            <View style={styles.tableBody}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>Date</Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {invoice.date}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body1}>Total</Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body1, styles.alignRight]}>
                    {invoice.amount}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.notes}>
          <Text style={[styles.h6, styles.gutterBottom]}> </Text>
          <Text style={styles.body2}> </Text>
        </View>
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        <View style={styles.header}>
          <View>
            <Image
              source="/static/rsz_logo.png"
              style={[styles.brand, { width: 140, height: 45 }]}
            />
          </View>
          <View>
            <Text style={styles.subtitle2}>Invoice #</Text>
            <Text style={styles.h4}>{invoice.id}</Text>
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body2}>20 Tyaran Street - 2nd Floor</Text>
            <Text style={styles.body2}>Naser City , Cairo</Text>
            <Text style={styles.body2}>Egypt</Text>
          </View>
          <View>
            <Text style={styles.body2}>Arch-IP</Text>
            <Text style={styles.body2}>Smart Systems Solutions</Text>
          </View>
          <View>
            <Text style={styles.body2}>info@archip.com</Text>
            <Text style={styles.body2}>(+20) 112 148 20149</Text>
          </View>
        </View>

        <View style={styles.company}>
          <View>
            <Text style={styles.subtitle1}>Project</Text>
            <Text style={styles.body2}>
              Project Name : {invoice.project['name']}
            </Text>
          </View>
          <View>
            {invoice.type == 'in' ? (
              <Text style={styles.subtitle1}>Paied By</Text>
            ) : (
              <Text style={styles.subtitle1}>Paied to</Text>
            )}

            <Text style={styles.body2}>
              {customer.firstName} {customer.lastName}
            </Text>
            <Text style={styles.body2}>Company : {customer.companyName}</Text>
            <Text style={styles.body2}>Address : {customer.address}</Text>
          </View>
          <View>
            <Text style={styles.subtitle1}>Description</Text>
            <Text style={styles.body2}>{invoice.description}</Text>
          </View>
        </View>
        <View style={styles.items}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}></View>
                <View style={styles.tableCellN} />
              </View>
            </View>
            <View style={styles.tableBody}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>Date</Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {invoice.date}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body1}>Total</Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body1, styles.alignRight]}>
                    {invoice.amount}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.notes}>
          <Text style={[styles.h6, styles.gutterBottom]}>Notes</Text>
          <Text style={styles.body2}>
            Please make sure you have read all information issued in this
            invoice
          </Text>
        </View>
      </Page>
    </Document>
  ) : (
    <Text style={styles.body2}>waiting </Text>
  );
};

InvoicePDF.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default InvoicePDF;
