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

const COLT_WIDTH = 70;

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
  titleStyle: {
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
  projectInfotable: {
    display: 'flex',
    width: '70%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
  },
  transactionTable: {
    display: 'flex',
    width: '45%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
  },
  tranactionTablesContainers: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    textAlign: 'center',
  },
  Summerytable: {
    display: 'flex',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
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
  tableCellT: {
    padding: 1,
    width: `${COLT_WIDTH}`,
  },
  alignRight: {
    textAlign: 'right',
  },
});

const PrintQutation = (props) => {
  const { projectDetail } = props;
  var curTime = new Date();
  return projectDetail ? (
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
            <Text style={styles.subtitle2}>
              {curTime.getDate()}/{curTime.getMonth() + 1}/
              {curTime.getFullYear()} {' , '}
              {curTime.toLocaleTimeString()}
            </Text>
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body1}></Text>
            <Text style={styles.body1}></Text>
            <Text style={styles.body1}></Text>
          </View>
          <View>
            <Text style={styles.titleStyle}>Projects Report</Text>
          </View>
          <View>
            <Text style={styles.body1}></Text>
            <Text style={styles.body1}></Text>
          </View>
        </View>
        {/*/////////////////// Customer Info/////////////////////////////// */}
        <View style={styles.company}>
          <View style={styles.projectInfotable}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>Customer Information </Text>
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
                    {projectDetail[4].projectinfo.customer.firstName}{' '}
                    {projectDetail[4].projectinfo.customer.lastName}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Email</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {projectDetail[4].projectinfo.customer.emailaddress}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Telephone</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {projectDetail[4].projectinfo.customer.phoneNumber}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Address</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {projectDetail[4].projectinfo.customer.address}{' '}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.body2}>Company</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.body2]}>
                    {projectDetail[4].projectinfo.customer.companyName}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/*end of customer info */}

        {/* Project basic info  */}
        <View style={[styles.Summerytable, { marginBottom: 80 }]}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.h6}>Project Basic Information </Text>
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
                  {projectDetail[4].projectinfo.name}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Qutation #</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {projectDetail[4].projectinfo.poq.Name}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Status</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {projectDetail[4].projectinfo.status}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Scope</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {projectDetail[4].projectinfo.type}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Start Date</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {projectDetail[4].projectinfo.startDate}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Expiry Date</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {projectDetail[4].projectinfo.endDate}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Address</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {projectDetail[4].projectinfo.shippingaddress}
                </Text>
              </View>
            </View>
            <View style={[styles.tableRow, { backgroundColor: '#e3e3e3' }]}>
              <View style={styles.tableCellN}>
                <Text style={styles.subtitle2}>Project financials</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Products Cost</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {projectDetail[4].projectinfo.productTotalCost}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Shipping Cost</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {projectDetail[4].projectinfo.shippingcost}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Design and Installation</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {projectDetail[4].projectinfo.othercost}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Software Development</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {projectDetail[4].projectinfo.software}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Discount</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {projectDetail[4].projectinfo.totalDiscount}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Sub total</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {projectDetail[4].projectinfo.subtotal}
                  {' EGP'}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Taxes</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {projectDetail[4].projectinfo.vat}
                  {' %'} {'\n'}
                  {(Number(projectDetail[4].projectinfo.vat) *
                    Number(projectDetail[4].projectinfo.subtotal)) /
                    100}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={[styles.tableRow, { backgroundColor: '#e3e3e3' }]}>
              <View style={styles.tableCell1} />
              <View style={styles.tableCellN}>
                <Text style={styles.body1}>Grand Total</Text>
              </View>
              <View style={styles.tableCellN}>
                <Text style={[styles.body1, styles.alignRight]}>
                  {projectDetail[4].projectinfo.grandTotal}
                  {' EGP'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* ///////////////////////////////////////////// */}
        {/* new page  */}
        <View style={styles.header}>
          <View>
            <Image
              source="/static/rsz_logo.png"
              style={[styles.brand, { width: 140, height: 45 }]}
            />
          </View>
          <View>
            <Text style={styles.subtitle2}>
              {curTime.getDate()}/{curTime.getMonth() + 1}/
              {curTime.getFullYear()} {' , '}
              {curTime.toLocaleTimeString()}
            </Text>
          </View>
        </View>

        {/** payment terms table  */}
        <View style={styles.projectInfotable}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.h6}>Payments Terms </Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Down payment</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {(Number(projectDetail[4].projectinfo.downPayment) *
                    Number(projectDetail[4].projectinfo.grandTotal)) /
                    100}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Uppon supply</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {(Number(projectDetail[4].projectinfo.upponSupply) *
                    Number(projectDetail[4].projectinfo.grandTotal)) /
                    100}
                  {' EGP'}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                <Text style={styles.body2}>Uppoon comission</Text>
              </View>
              <View style={styles.tableCell1}>
                <Text style={[styles.body2]}>
                  {(Number(projectDetail[4].projectinfo.upponComission) *
                    Number(projectDetail[4].projectinfo.grandTotal)) /
                    100}
                  {' EGP'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/** end  payment terms table  */}

        {/* payment transcation  */}
        {/* income transaction */}
        <View style={styles.tranactionTablesContainers}>
          <View style={[styles.transactionTable, { marginRight: 50 }]}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>Income Transactions</Text>
                </View>
              </View>
            </View>
            <View style={styles.tableBody}>
              <View style={styles.tableSubheader}>
                <View style={styles.tableCellT}>
                  <Text style={styles.body2}>Serial</Text>
                </View>

                <View style={styles.tableCellT}>
                  <Text style={styles.body2}>Amount</Text>
                </View>
                <View style={styles.tableCellT}>
                  <Text style={styles.body2}>Date</Text>
                </View>
              </View>
              {projectDetail[5].incometransactions.income.map((item) => (
                <View style={styles.tableRow} key={item.id}>
                  <View style={styles.tableCellT}>
                    <Text style={styles.body2}>{item.id}</Text>
                  </View>
                  <View style={styles.tableCellT}>
                    <Text style={styles.body2}>{item.amount}</Text>
                  </View>
                  <View style={styles.tableCellT}>
                    <Text style={styles.body2}>{item.date}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          {/* end of income transaction */}
          {/* outcome transaction */}
          <View style={styles.transactionTable}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>Outcome Transactions</Text>
                </View>
              </View>
            </View>
            <View style={styles.tableBody}>
              <View style={styles.tableSubheader}>
                <View style={styles.tableCellT}>
                  <Text style={styles.body2}>Serial</Text>
                </View>

                <View style={styles.tableCellT}>
                  <Text style={styles.body2}>Amount</Text>
                </View>
                <View style={styles.tableCellT}>
                  <Text style={styles.body2}>Date</Text>
                </View>
              </View>
              {projectDetail[6].outcometransactions.outcome.map((item) => (
                <View style={styles.tableRow} key={item.id}>
                  <View style={styles.tableCellT}>
                    <Text style={styles.body2}>{item.id}</Text>
                  </View>
                  <View style={styles.tableCellT}>
                    <Text style={styles.body2}>{item.amount}</Text>
                  </View>
                  <View style={styles.tableCellT}>
                    <Text style={styles.body2}>{item.date}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* End of payement tranction */}

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
              <View style={styles.tableCellp}>
                <Text style={styles.body2}>Part Number</Text>
              </View>

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
            {projectDetail[3].products.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>{item.product.partNumber}</Text>
                </View>

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
                  <Text style={styles.body2}>
                    {item.SalePrice}
                    {' EGP'}
                  </Text>
                </View>
                <View style={styles.tableCellp}>
                  <Text style={styles.body2}>
                    {item.SalePrice * item.qnty}
                    {'EGP'}
                  </Text>
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
                  {projectDetail[4].projectinfo.productTotalCost}
                  {' EGP'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* //////*/}
      </Page>
    </Document>
  ) : (
    <Text style={styles.body2}>waiting </Text>
  );
};

PrintQutation.propTypes = {
  projectDetail: PropTypes.object.isRequired,
};

export default PrintQutation;
