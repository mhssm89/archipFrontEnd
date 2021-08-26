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

const COLP_WIDTH = 100;

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
    fontWeight: 600,
  },
  body1: {
    fontSize: 10,
    lineHeight: 1.43,
    marginTop: 7,
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

const PrintQutation = (props) => {
  const { boq, enablepartnumber } = props;
  return boq ? (
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
            <Text style={styles.subtitle2}>Qotation #</Text>
            <Text style={styles.h4}>{boq.poq.Name}</Text>
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body2}>20 Tyaran Street - 2nd Floor</Text>
            <Text style={styles.body2}>Naser City , Cairo</Text>
            <Text style={styles.body2}>Egypt</Text>
          </View>
          <View>
            <Text style={styles.body2}>ARCH IP</Text>
            <Text style={styles.body2}>Smart Systems Solutions</Text>
          </View>
          <View>
            <Text style={styles.body2}>info@archip.com</Text>
            <Text style={styles.body2}>(+20) 112 148 20149</Text>
          </View>
        </View>
        {/* customer Info table */}
        <View style={styles.company}>
          <View style={styles.Customertable}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>Customer Info</Text>
                </View>
              </View>
            </View>
            <View style={styles.tableBody}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Name</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {boq.poq.customer['firstName']}{' '}
                    {boq.poq.customer['lastName']}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Email Address</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {boq.poq.customer['emailaddress']}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Phone Number</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {boq.poq.customer['phoneNumber']}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Company</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {boq.poq.customer['companyName']}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Address</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {boq.poq.customer['address']}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ///////////////////// new table /////////////////////////////// */}
        <View style={styles.Summerytable}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.h6}>Quotation Summary</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Issuing Date</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>{boq.poq.startDate}</Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Expire Date</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>{boq.poq.endDate}</Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Shipping Address</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>{boq.poq.address}</Text>
              </View>
            </View>

            {/* //////////////////////////////////////////////////// */}
            <View style={[styles.tableRow, { backgroundColor: '#e3e3e3' }]}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.subtitle2}>Prices</Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Products Cost</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {boq.poq.productTotalcost}
                </Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////// */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Design and Installation</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {boq.poq.otherCost}
                </Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////// */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Shipping Cost</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {boq.poq.shippingCost}
                </Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////// */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Sub total</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {boq.poq.subtotal}
                </Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////// */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Taxes</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {boq.poq.vat}
                  {' %'}
                </Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////// */}
            <View style={[styles.tableRow, { backgroundColor: '#e3e3e3' }]}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Grand Total</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {boq.poq.grandTotal}
                </Text>
              </View>
            </View>
            {/* //////////////////////////////////////////////////// */}
          </View>
        </View>
        {/* Payment terms  */}
        <View style={styles.Summerytable}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.h6}>Payment Terms</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body1}>payment</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Percentage</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>Amount</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body1}>Down Payment</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>
                  {boq.poq.downPayment}
                  {' %'}
                </Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {Math.round(
                    Number(boq.poq.grandTotal) * Number(boq.poq.downPayment) +
                      Number.EPSILON * 100,
                  ) / 100}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body1}>Uppon Supply</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>
                  {boq.poq.upponSupply}
                  {' %'}
                </Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {Math.round(
                    Number(boq.poq.grandTotal) * Number(boq.poq.upponSupply) +
                      Number.EPSILON * 100,
                  ) / 100}
                  {' EGP'}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body1}>Uppon Comission</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>
                  {boq.poq.upponComission}
                  {' %'}
                </Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {Math.round(
                    Number(boq.poq.grandTotal) *
                      Number(boq.poq.upponComission) +
                      Number.EPSILON * 100,
                  ) / 100}
                  {' EGP'}
                </Text>
              </View>
            </View>

            {/* //////////////////////////////////////////////////////// */}
          </View>
        </View>
        {/* ///////////////////////////////////////////////////////////////////// */}
        {/* Fotter */}
        <View style={styles.company}>
          <View>
            <Text style={styles.body2}>
              Please note that all prices in this qotation is valid till
              {' ' + boq.poq.endDate} , then this qotation considered canceled
            </Text>
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body2}>{''}</Text>
          </View>
        </View>
        {/* //////////////////////////////////////////////////// */}
        {/* ///////////////////  product table///////////////////////////////// */}
        <View style={styles.Summerytable}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.h6}>Products Details</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.tableSubheader}>
              {enablepartnumber ? (
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>Part Number</Text>
                </View>
              ) : (
                <View />
              )}

              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Part Name</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Part Brand</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Part Qnty</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Unit price</Text>
              </View>
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Price</Text>
              </View>
            </View>
            {boq.poqDetail.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                {enablepartnumber ? (
                  <View style={styles.tableCellp}>
                    <Text style={styles.body2}>{item.product.partNumber}</Text>
                  </View>
                ) : (
                  <View />
                )}

                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.product.partName}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.product.brand}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.qnty}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.saleprice}</Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.saleprice * item.qnty}</Text>
                </View>
              </View>
            ))}
            {/* //////////////////////////////////////////////////////// */}
            <View style={[styles.tableRow, { backgroundColor: '#e3e3e3' }]}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Total</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {boq.poq.productTotalcost}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* /////////////////////////////////////////////////////////// */}
      </Page>
    </Document>
  ) : (
    <Text style={styles.body2}>waiting </Text>
  );
};

PrintQutation.propTypes = {
  boq: PropTypes.object.isRequired,
};

export default PrintQutation;
