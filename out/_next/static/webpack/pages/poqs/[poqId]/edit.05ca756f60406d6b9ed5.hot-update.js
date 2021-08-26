webpackHotUpdate_N_E("pages/poqs/[poqId]/edit",{

/***/ "./src/components/pages/poqs/edit/Form.js":
/*!************************************************!*\
  !*** ./src/components/pages/poqs/edit/Form.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var src_components_controls_CustomerAutoCompelete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/controls/CustomerAutoCompelete */ "./src/components/controls/CustomerAutoCompelete.js");
/* harmony import */ var src_components_controls_ProductAutoCompelete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/controls/ProductAutoCompelete */ "./src/components/controls/ProductAutoCompelete.js");
/* harmony import */ var src_components_controls_FormDatePicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components/controls/FormDatePicker */ "./src/components/controls/FormDatePicker.js");
/* harmony import */ var src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/controls/FormInput */ "./src/components/controls/FormInput.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Results */ "./src/components/pages/poqs/edit/Results.js");
/* harmony import */ var _root_i18n__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/root/i18n */ "./i18n.js");
/* harmony import */ var _root_i18n__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_root_i18n__WEBPACK_IMPORTED_MODULE_21__);








var _jsxFileName = "F:\\archip-frontend\\src\\components\\pages\\poqs\\edit\\Form.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {},
    editor: {
      '& .ql-editor': {
        height: 400
      }
    },
    addProduct: {
      marginLeft: theme.spacing(2)
    }
  };
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
  poqname: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().required('BOQ name is required'),
  customerName: yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
    id: yup__WEBPACK_IMPORTED_MODULE_14__["number"]().nullable(),
    name: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().nullable()
  }).nullable().required('Cutomer name is required'),
  startDate: yup__WEBPACK_IMPORTED_MODULE_14__["date"]().nullable().typeError('Invalid date.').required('Required.'),
  endDate: yup__WEBPACK_IMPORTED_MODULE_14__["date"]().nullable().typeError('Invalid date.').required('Required.'),
  shippingAddress: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().max(255),
  shippingCost: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
  otherCosts: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
  totaldiscount: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
  vatpercentage: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
  productName: yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
    id: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
    name: yup__WEBPACK_IMPORTED_MODULE_14__["string"]()
  }).nullable(),
  productQty: yup__WEBPACK_IMPORTED_MODULE_14__["number"]().nullable()
});

function Form(_ref) {
  _s();

  var className = _ref.className,
      poq = _ref.poq,
      setPOQ = _ref.setPOQ,
      rest = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["className", "poq", "setPOQ"]);

  var classes = useStyles();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_11__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(poq.poq.productTotalcost),
      _React$useState2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
      productsCost = _React$useState2[0],
      setProductsCost = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState({
    subtotal: poq.poq.subtotal,
    totalvat: poq.poq.vat * poq.poq.subtotal / 100,
    grandTotal: poq.poq.subtotal + poq.poq.vat * poq.poq.subtotal / 100
  }),
      _React$useState4 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState3, 2),
      calculation = _React$useState4[0],
      setCalculation = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState6 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState5, 2),
      enablecreate = _React$useState6[0],
      setEnableCreate = _React$useState6[1];

  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_13__["useForm"])({
    mode: 'all',
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__["yupResolver"])(validationSchema),
    defaultValues: {
      poqname: "".concat(poq.poq.id, "-Archip") || false,
      customerName: {
        id: poq.poq.customer.id,
        name: "".concat(poq.poq.customer.firstName, " ").concat(poq.poq.customer.lastName)
      } || null,
      startDate: poq.poq.startDate || new Date(),
      endDate: poq.poq.endDate || new Date(),
      shippingAddress: poq.poq.shippingAddress || '',
      shippingCost: poq.poq.shippingCost || 0,
      otherCosts: poq.poq.otherCost || 0,
      totaldiscount: poq.poq.totalDiscount || 0,
      productName: null,
      vatpercentage: poq.poq.vat || 0,
      productQty: 1,
      submitError: ''
    }
  });
  var handleSubmit = methods.handleSubmit,
      errors = methods.errors,
      setError = methods.setError,
      setValue = methods.setValue,
      getValues = methods.getValues,
      reset = methods.reset,
      isSubmitting = methods.formState.isSubmitting;

  function handelCalculate() {
    var itemproductcost = 0;
    poq.poqDetail.forEach(function (element) {
      itemproductcost += element.saleprice * element.qnty;
    });
    setProductsCost(itemproductcost);
    var subtotal = itemproductcost + Number(getValues().otherCosts) + Number(getValues().shippingCost) - Number(getValues().totaldiscount);
    var totalvat = subtotal * getValues().vatpercentage / 100;
    var grandTotal = subtotal + totalvat;
    setCalculation({
      subtotal: subtotal,
      totalvat: totalvat,
      grandTotal: grandTotal
    });
  } // function productsTotalCost() {
  //   let productsCostHH = 0;
  //   poq.poqDetail.map((item) => {
  //     const itemprice = item.saleprice * item.qnty;
  //     productsCostHH += itemprice;
  //   });
  //   return productsCostHH;
  // }


  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {// productsTotalCost();
  }, []);
  console.log(poq);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_13__["FormProvider"], _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", _objectSpread(_objectSpread({
      onSubmit: handleSubmit(onSubmit),
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(classes.root, className)
    }, rest), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
          item: true,
          xs: 12,
          lg: 4,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
              title: "Basic"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                container: true,
                spacing: 3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  xs: 12,
                  md: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
                    name: "poqname",
                    label: "BOQ Number",
                    variant: "outlined",
                    disabled: true,
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 12,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_CustomerAutoCompelete__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    name: "customerName",
                    label: "Customer",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormDatePicker__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    name: "startDate",
                    label: "Start Date",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormDatePicker__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    name: "endDate",
                    label: "End Date",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 12,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
                    name: "shippingAddress",
                    label: "Shipping Address",
                    variant: "outlined",
                    multiline: true,
                    rows: 2,
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
            mt: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
                title: "Others"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  container: true,
                  spacing: 3,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 12,
                    md: 12,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
                      name: "shippingCost",
                      label: "Shipping Cost",
                      type: "number",
                      variant: "outlined",
                      errorObj: errors
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 12,
                    md: 12,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
                      name: "otherCosts",
                      label: "Design - Installation - Documentation",
                      type: "number",
                      variant: "outlined",
                      errorObj: errors
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 12,
                    md: 12,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
                      name: "totaldiscount",
                      label: "Total discount amount",
                      type: "number",
                      variant: "outlined",
                      errorObj: errors
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 12,
                    md: 12
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
                      name: "vatpercentage",
                      label: "VAT %",
                      type: "number",
                      variant: "outlined",
                      errorObj: errors
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 256,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    container: true,
                    xs: 6,
                    md: 6,
                    alignItems: "center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                      variant: "contained",
                      color: "secondary",
                      type: "button",
                      onClick: function onClick() {
                        setEnableCreate(true);
                        handelCalculate();
                      },
                      className: classes.calcButton,
                      children: "Calculate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
              mt: 3,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
                  title: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    container: true,
                    spacing: 2,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Net products cost : "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 287,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 286,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: Math.round((productsCost + Number.EPSILON) * 100) / 100
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 290,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 289,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Shipping and Installation : "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 296,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: getValues().otherCosts ? Number(getValues().otherCosts) + Number(getValues().shippingCost) : poq.poq.shippingCost + poq.poq.otherCost
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 298,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Sub Total : "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 307,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 306,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: Math.round((calculation.subtotal + Number.EPSILON) * 100) / 100
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 310,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 309,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Taxes : "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 317,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 316,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        name: "vat",
                        children: Math.round((calculation.totalvat + Number.EPSILON) * 100) / 100
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 320,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      md: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        children: "Grand total : "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 327,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                      item: true,
                      xs: 6,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                        name: "grandtotal",
                        children: Math.round((calculation.grandTotal + Number.EPSILON) * 100) / 100
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 330,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 329,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
          item: true,
          xs: 12,
          lg: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
              title: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                container: true,
                spacing: 2,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 9,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_ProductAutoCompelete__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    name: "productName",
                    label: "Product",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 352,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 2,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
                    name: "productQty",
                    label: "Quantity",
                    type: "number",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 361,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 1,
                  xs: 12,
                  alignItems: "center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
                    color: "secondary",
                    onClick: function onClick() {
                      setEnableCreate(false);
                      addproduct();
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["SvgIcon"], {
                      fontSize: "large",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_12__["Plus"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 378,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 377,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 371,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                mt: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Results__WEBPACK_IMPORTED_MODULE_20__["default"], {
                  query: poq,
                  setPOQ: setPOQ
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 385,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this), errors.submitError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mt: 1,
        display: "flex",
        justifyContent: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormHelperText"], {
          style: {
            fontSize: '24px'
          },
          error: true,
          children: errors.submitError.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mt: 5,
        children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "contained",
          color: "secondary",
          type: "submit",
          disabled: !enablecreate,
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 5
  }, this);

  function addproduct() {
    return _addproduct.apply(this, arguments);
  } // ##################################################


  function _addproduct() {
    _addproduct = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var newProduct, resp;
      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (getValues().productName) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              newProduct = {
                poq: poq.poq.id,
                product: getValues().productName.id,
                qnty: Number(getValues().productQty),
                enduserprice: getValues().productName.price
              };
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_19___default.a.post('http://localhost:1337/poqdetails', newProduct);

            case 5:
              resp = _context.sent;
              setPOQ(_objectSpread(_objectSpread({}, poq), {}, {
                poqDetail: [].concat(Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(poq.poqDetail), [resp.data])
              }));
              setValue('productName', {});
              setValue('productQty', 0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _addproduct.apply(this, arguments);
  }

  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values) {
      var poqInput, response;
      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              try {
                // Reset submitError message
                setValue('submitError', '');
                poqInput = {
                  Name: values.poqname,
                  customer: values.customerName.id,
                  shippingAddress: values.shippingAddress,
                  startDate: values.startDate,
                  endDate: values.endDate,
                  shippingCost: values.shippingCost,
                  otherCost: values.otherCosts,
                  subtotal: calculation.subtotal,
                  grandTotal: calculation.grandTotal,
                  totalDiscount: values.totaldiscount,
                  vat: values.vatpercentage
                };
                response = axios__WEBPACK_IMPORTED_MODULE_19___default.a.put("http://localhost:1337/poqs/".concat(poq.poq.id), poqInput).then(function (res) {
                  Promise.all(poq.poqDetail.map( /*#__PURE__*/function () {
                    var _ref2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item) {
                      var detailimput;
                      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              detailimput = {
                                poq: poq.poq.id,
                                product: item.id,
                                qnty: item.qnty,
                                enduserprice: item.price,
                                saleprice: item.saleprice,
                                salepercentage: item.salepercentage ? item.salepercentage : 0
                              }; // const detailresp = await axios.put(
                              //   `http://localhost:1337/poqdetails/${item.id}`,
                              //   detailimput,
                              // );

                              console.log(detailimput, '*******************');

                            case 2:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));
                }); // Show success message

                enqueueSnackbar('Edit successfully done', {
                  variant: 'success'
                });
                reset();
                _root_i18n__WEBPACK_IMPORTED_MODULE_21__["Router"].push('/poqs');
              } catch (err) {
                // Show error message
                enqueueSnackbar('Error edit Qutation', {
                  variant: 'error'
                }); // Show submitError message

                setError('submitError', {
                  type: 'submit',
                  message: 'Error edit Qutation'
                });
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onSubmit.apply(this, arguments);
  }
}

_s(Form, "lzsgA+TjNnbf57lLtuJUMn9AOZs=", false, function () {
  return [useStyles, notistack__WEBPACK_IMPORTED_MODULE_11__["useSnackbar"], react_hook_form__WEBPACK_IMPORTED_MODULE_13__["useForm"]];
});

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcG9xcy9lZGl0L0Zvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImVkaXRvciIsImhlaWdodCIsImFkZFByb2R1Y3QiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsInBvcW5hbWUiLCJyZXF1aXJlZCIsImN1c3RvbWVyTmFtZSIsImlkIiwibnVsbGFibGUiLCJuYW1lIiwic3RhcnREYXRlIiwidHlwZUVycm9yIiwiZW5kRGF0ZSIsInNoaXBwaW5nQWRkcmVzcyIsIm1heCIsInNoaXBwaW5nQ29zdCIsIm90aGVyQ29zdHMiLCJ0b3RhbGRpc2NvdW50IiwidmF0cGVyY2VudGFnZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdFF0eSIsIkZvcm0iLCJjbGFzc05hbWUiLCJwb3EiLCJzZXRQT1EiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInByb2R1Y3RUb3RhbGNvc3QiLCJwcm9kdWN0c0Nvc3QiLCJzZXRQcm9kdWN0c0Nvc3QiLCJzdWJ0b3RhbCIsInRvdGFsdmF0IiwidmF0IiwiZ3JhbmRUb3RhbCIsImNhbGN1bGF0aW9uIiwic2V0Q2FsY3VsYXRpb24iLCJlbmFibGVjcmVhdGUiLCJzZXRFbmFibGVDcmVhdGUiLCJtZXRob2RzIiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsImN1c3RvbWVyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJEYXRlIiwib3RoZXJDb3N0IiwidG90YWxEaXNjb3VudCIsInN1Ym1pdEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJzZXRWYWx1ZSIsImdldFZhbHVlcyIsInJlc2V0IiwiaXNTdWJtaXR0aW5nIiwiZm9ybVN0YXRlIiwiaGFuZGVsQ2FsY3VsYXRlIiwiaXRlbXByb2R1Y3Rjb3N0IiwicG9xRGV0YWlsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzYWxlcHJpY2UiLCJxbnR5IiwiTnVtYmVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiY2xzeCIsImNhbGNCdXR0b24iLCJNYXRoIiwicm91bmQiLCJFUFNJTE9OIiwiYWRkcHJvZHVjdCIsImZvbnRTaXplIiwibWVzc2FnZSIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0IiwiZW5kdXNlcnByaWNlIiwicHJpY2UiLCJheGlvcyIsInBvc3QiLCJyZXNwIiwiZGF0YSIsInZhbHVlcyIsInBvcUlucHV0IiwiTmFtZSIsInJlc3BvbnNlIiwicHV0IiwidGhlbiIsInJlcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtIiwiZGV0YWlsaW1wdXQiLCJzYWxlcGVyY2VudGFnZSIsInZhcmlhbnQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxVQUFNLEVBQUU7QUFDTixzQkFBZ0I7QUFDZEMsY0FBTSxFQUFFO0FBRE07QUFEVixLQUYrQjtBQU92Q0MsY0FBVSxFQUFFO0FBQ1ZDLGdCQUFVLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQ7QUFERjtBQVAyQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVlBLElBQU1DLGdCQUFnQixHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxT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NmI5ZWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJY29uQnV0dG9uLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgU3ZnSWNvbixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyBQbHVzIGFzIFBsdXNJY29uIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgQ3VzdG9tZXJBdXRvQ29tcGxldGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQ3VzdG9tZXJBdXRvQ29tcGVsZXRlJztcclxuaW1wb3J0IFByb2R1Y3RBdXRvQ29tcGxldGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvUHJvZHVjdEF1dG9Db21wZWxldGUnO1xyXG5pbXBvcnQgRm9ybURhdGVQaWNrZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRm9ybURhdGVQaWNrZXInO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Avcm9vdC9pMThuJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG4gIGVkaXRvcjoge1xyXG4gICAgJyYgLnFsLWVkaXRvcic6IHtcclxuICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWRkUHJvZHVjdDoge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBwb3FuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ0JPUSBuYW1lIGlzIHJlcXVpcmVkJyksXHJcbiAgY3VzdG9tZXJOYW1lOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgaWQ6IHl1cC5udW1iZXIoKS5udWxsYWJsZSgpLFxyXG4gICAgICBuYW1lOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgIH0pXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnJlcXVpcmVkKCdDdXRvbWVyIG5hbWUgaXMgcmVxdWlyZWQnKSxcclxuICBzdGFydERhdGU6IHl1cFxyXG4gICAgLmRhdGUoKVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC50eXBlRXJyb3IoJ0ludmFsaWQgZGF0ZS4nKVxyXG4gICAgLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBlbmREYXRlOiB5dXBcclxuICAgIC5kYXRlKClcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAudHlwZUVycm9yKCdJbnZhbGlkIGRhdGUuJylcclxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgc2hpcHBpbmdBZGRyZXNzOiB5dXAuc3RyaW5nKCkubWF4KDI1NSksXHJcbiAgc2hpcHBpbmdDb3N0OiB5dXAubnVtYmVyKCksXHJcbiAgb3RoZXJDb3N0czogeXVwLm51bWJlcigpLFxyXG4gIHRvdGFsZGlzY291bnQ6IHl1cC5udW1iZXIoKSxcclxuICB2YXRwZXJjZW50YWdlOiB5dXAubnVtYmVyKCksXHJcbiAgcHJvZHVjdE5hbWU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoeyBpZDogeXVwLm51bWJlcigpLCBuYW1lOiB5dXAuc3RyaW5nKCkgfSlcclxuICAgIC5udWxsYWJsZSgpLFxyXG4gIHByb2R1Y3RRdHk6IHl1cC5udW1iZXIoKS5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEZvcm0oeyBjbGFzc05hbWUsIHBvcSwgc2V0UE9RLCAuLi5yZXN0IH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgY29uc3QgW3Byb2R1Y3RzQ29zdCwgc2V0UHJvZHVjdHNDb3N0XSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgcG9xLnBvcS5wcm9kdWN0VG90YWxjb3N0LFxyXG4gICk7XHJcbiAgY29uc3QgW2NhbGN1bGF0aW9uLCBzZXRDYWxjdWxhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBzdWJ0b3RhbDogcG9xLnBvcS5zdWJ0b3RhbCxcclxuICAgIHRvdGFsdmF0OiAocG9xLnBvcS52YXQgKiBwb3EucG9xLnN1YnRvdGFsKSAvIDEwMCxcclxuICAgIGdyYW5kVG90YWw6IHBvcS5wb3Euc3VidG90YWwgKyAocG9xLnBvcS52YXQgKiBwb3EucG9xLnN1YnRvdGFsKSAvIDEwMCxcclxuICB9KTtcclxuICBjb25zdCBbZW5hYmxlY3JlYXRlLCBzZXRFbmFibGVDcmVhdGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBtZXRob2RzID0gdXNlRm9ybSh7XHJcbiAgICBtb2RlOiAnYWxsJyxcclxuICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcih2YWxpZGF0aW9uU2NoZW1hKSxcclxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgcG9xbmFtZTogYCR7cG9xLnBvcS5pZH0tQXJjaGlwYCB8fCAnJyxcclxuICAgICAgY3VzdG9tZXJOYW1lOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBwb3EucG9xLmN1c3RvbWVyLmlkLFxyXG4gICAgICAgICAgbmFtZTogYCR7cG9xLnBvcS5jdXN0b21lci5maXJzdE5hbWV9ICR7cG9xLnBvcS5jdXN0b21lci5sYXN0TmFtZX1gLFxyXG4gICAgICAgIH0gfHwgbnVsbCxcclxuICAgICAgc3RhcnREYXRlOiBwb3EucG9xLnN0YXJ0RGF0ZSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICBlbmREYXRlOiBwb3EucG9xLmVuZERhdGUgfHwgbmV3IERhdGUoKSxcclxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiBwb3EucG9xLnNoaXBwaW5nQWRkcmVzcyB8fCAnJyxcclxuICAgICAgc2hpcHBpbmdDb3N0OiBwb3EucG9xLnNoaXBwaW5nQ29zdCB8fCAwLFxyXG4gICAgICBvdGhlckNvc3RzOiBwb3EucG9xLm90aGVyQ29zdCB8fCAwLFxyXG4gICAgICB0b3RhbGRpc2NvdW50OiBwb3EucG9xLnRvdGFsRGlzY291bnQgfHwgMCxcclxuICAgICAgcHJvZHVjdE5hbWU6IG51bGwsXHJcbiAgICAgIHZhdHBlcmNlbnRhZ2U6IHBvcS5wb3EudmF0IHx8IDAsXHJcbiAgICAgIHByb2R1Y3RRdHk6IDEsXHJcbiAgICAgIHN1Ym1pdEVycm9yOiAnJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZXJyb3JzLFxyXG4gICAgc2V0RXJyb3IsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIGdldFZhbHVlcyxcclxuICAgIHJlc2V0LFxyXG4gICAgZm9ybVN0YXRlOiB7IGlzU3VibWl0dGluZyB9LFxyXG4gIH0gPSBtZXRob2RzO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kZWxDYWxjdWxhdGUoKSB7XHJcbiAgICBsZXQgaXRlbXByb2R1Y3Rjb3N0ID0gMDtcclxuICAgIHBvcS5wb3FEZXRhaWwuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBpdGVtcHJvZHVjdGNvc3QgKz0gZWxlbWVudC5zYWxlcHJpY2UgKiBlbGVtZW50LnFudHk7XHJcbiAgICB9KTtcclxuICAgIHNldFByb2R1Y3RzQ29zdChpdGVtcHJvZHVjdGNvc3QpO1xyXG4gICAgdmFyIHN1YnRvdGFsID1cclxuICAgICAgaXRlbXByb2R1Y3Rjb3N0ICtcclxuICAgICAgTnVtYmVyKGdldFZhbHVlcygpLm90aGVyQ29zdHMpICtcclxuICAgICAgTnVtYmVyKGdldFZhbHVlcygpLnNoaXBwaW5nQ29zdCkgLVxyXG4gICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkudG90YWxkaXNjb3VudCk7XHJcbiAgICB2YXIgdG90YWx2YXQgPSAoc3VidG90YWwgKiBnZXRWYWx1ZXMoKS52YXRwZXJjZW50YWdlKSAvIDEwMDtcclxuICAgIHZhciBncmFuZFRvdGFsID0gc3VidG90YWwgKyB0b3RhbHZhdDtcclxuICAgIHNldENhbGN1bGF0aW9uKHsgc3VidG90YWwsIHRvdGFsdmF0LCBncmFuZFRvdGFsIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gcHJvZHVjdHNUb3RhbENvc3QoKSB7XHJcbiAgLy8gICBsZXQgcHJvZHVjdHNDb3N0SEggPSAwO1xyXG4gIC8vICAgcG9xLnBvcURldGFpbC5tYXAoKGl0ZW0pID0+IHtcclxuICAvLyAgICAgY29uc3QgaXRlbXByaWNlID0gaXRlbS5zYWxlcHJpY2UgKiBpdGVtLnFudHk7XHJcbiAgLy8gICAgIHByb2R1Y3RzQ29zdEhIICs9IGl0ZW1wcmljZTtcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIHJldHVybiBwcm9kdWN0c0Nvc3RISDtcclxuICAvLyB9XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0c1RvdGFsQ29zdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2cocG9xKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtUHJvdmlkZXIgey4uLm1ldGhvZHN9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgey4uLnJlc3R9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NH0+XHJcbiAgICAgICAgICAgIHsvKiBCYXNpYyAqL31cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJCYXNpY1wiIC8+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBOdW1iZXIgIyAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvcW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCT1EgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogQ3VzdG9tZXIgbmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyQXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogU3RhcnQgRGF0ZSAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybURhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIEVuZCBEYXRlICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVuZERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbmQgRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBTaGlwcGluZyBBZGRyZXNzICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hpcHBpbmcgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPEJveCBtdD17M30+XHJcbiAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIk90aGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ0Nvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoaXBwaW5nIENvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJDb3N0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzaWduIC0gSW5zdGFsbGF0aW9uIC0gRG9jdW1lbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbGRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBkaXNjb3VudCBhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmF0cGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVkFUICVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXs2fSBtZD17Nn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZUNyZWF0ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kZWxDYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGNCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYWxjdWxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPEJveCBtdD17M30+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJUb3RhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk5ldCBwcm9kdWN0cyBjb3N0IDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZCgocHJvZHVjdHNDb3N0ICsgTnVtYmVyLkVQU0lMT04pICogMTAwKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U2hpcHBpbmcgYW5kIEluc3RhbGxhdGlvbiA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFZhbHVlcygpLm90aGVyQ29zdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKGdldFZhbHVlcygpLm90aGVyQ29zdHMpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGdldFZhbHVlcygpLnNoaXBwaW5nQ29zdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9xLnBvcS5zaGlwcGluZ0Nvc3QgKyBwb3EucG9xLm90aGVyQ29zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5TdWIgVG90YWwgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbGN1bGF0aW9uLnN1YnRvdGFsICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgLyAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VGF4ZXMgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJ2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxjdWxhdGlvbi50b3RhbHZhdCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkdyYW5kIHRvdGFsIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJncmFuZHRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FsY3VsYXRpb24uZ3JhbmRUb3RhbCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICB7LyogUHJvZHVjdHMgKi99XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIlByb2R1Y3RzXCIgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OX0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBOYW1lICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFF1YW50aXR5ICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0UXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezF9IHhzPXsxMn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgQnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZUNyZWF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHByb2R1Y3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0cyBUYWJsZSAqL31cclxuICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8UmVzdWx0cyBxdWVyeT17cG9xfSBzZXRQT1E9e3NldFBPUX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIHsvKiBFcnJvciAqL31cclxuICAgICAgICB7ZXJyb3JzLnN1Ym1pdEVycm9yICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9ezF9IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAnMjRweCcgfX0gZXJyb3I+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5zdWJtaXRFcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJveCBtdD17NX0+XHJcbiAgICAgICAgICB7LyogU3VibWl0ICovfVxyXG4gICAgICAgICAge2lzU3VibWl0dGluZyA/IChcclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbmFibGVjcmVhdGV9PlxyXG4gICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0Zvcm1Qcm92aWRlcj5cclxuICApO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZHByb2R1Y3QoKSB7XHJcbiAgICBpZiAoIWdldFZhbHVlcygpLnByb2R1Y3ROYW1lKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgcG9xOiBwb3EucG9xLmlkLFxyXG4gICAgICBwcm9kdWN0OiBnZXRWYWx1ZXMoKS5wcm9kdWN0TmFtZS5pZCxcclxuICAgICAgcW50eTogTnVtYmVyKGdldFZhbHVlcygpLnByb2R1Y3RRdHkpLFxyXG4gICAgICBlbmR1c2VycHJpY2U6IGdldFZhbHVlcygpLnByb2R1Y3ROYW1lLnByaWNlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3BvcWRldGFpbHMnLFxyXG4gICAgICBuZXdQcm9kdWN0LFxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQT1EoeyAuLi5wb3EsIHBvcURldGFpbDogWy4uLnBvcS5wb3FEZXRhaWwsIHJlc3AuZGF0YV0gfSk7XHJcblxyXG4gICAgc2V0VmFsdWUoJ3Byb2R1Y3ROYW1lJywge30pO1xyXG4gICAgc2V0VmFsdWUoJ3Byb2R1Y3RRdHknLCAwKTtcclxuICB9XHJcbiAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQodmFsdWVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBSZXNldCBzdWJtaXRFcnJvciBtZXNzYWdlXHJcbiAgICAgIHNldFZhbHVlKCdzdWJtaXRFcnJvcicsICcnKTtcclxuICAgICAgY29uc3QgcG9xSW5wdXQgPSB7XHJcbiAgICAgICAgTmFtZTogdmFsdWVzLnBvcW5hbWUsXHJcbiAgICAgICAgY3VzdG9tZXI6IHZhbHVlcy5jdXN0b21lck5hbWUuaWQsXHJcbiAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB2YWx1ZXMuc2hpcHBpbmdBZGRyZXNzLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogdmFsdWVzLnN0YXJ0RGF0ZSxcclxuICAgICAgICBlbmREYXRlOiB2YWx1ZXMuZW5kRGF0ZSxcclxuICAgICAgICBzaGlwcGluZ0Nvc3Q6IHZhbHVlcy5zaGlwcGluZ0Nvc3QsXHJcbiAgICAgICAgb3RoZXJDb3N0OiB2YWx1ZXMub3RoZXJDb3N0cyxcclxuICAgICAgICBzdWJ0b3RhbDogY2FsY3VsYXRpb24uc3VidG90YWwsXHJcbiAgICAgICAgZ3JhbmRUb3RhbDogY2FsY3VsYXRpb24uZ3JhbmRUb3RhbCxcclxuICAgICAgICB0b3RhbERpc2NvdW50OiB2YWx1ZXMudG90YWxkaXNjb3VudCxcclxuICAgICAgICB2YXQ6IHZhbHVlcy52YXRwZXJjZW50YWdlLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zXHJcbiAgICAgICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3BvcXMvJHtwb3EucG9xLmlkfWAsIHBvcUlucHV0KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICBwb3EucG9xRGV0YWlsLm1hcChhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRldGFpbGltcHV0ID0ge1xyXG4gICAgICAgICAgICAgICAgcG9xOiBwb3EucG9xLmlkLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgIHFudHk6IGl0ZW0ucW50eSxcclxuICAgICAgICAgICAgICAgIGVuZHVzZXJwcmljZTogaXRlbS5wcmljZSxcclxuICAgICAgICAgICAgICAgIHNhbGVwcmljZTogaXRlbS5zYWxlcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBzYWxlcGVyY2VudGFnZTogaXRlbS5zYWxlcGVyY2VudGFnZSA/IGl0ZW0uc2FsZXBlcmNlbnRhZ2UgOiAwLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgLy8gY29uc3QgZGV0YWlscmVzcCA9IGF3YWl0IGF4aW9zLnB1dChcclxuICAgICAgICAgICAgICAvLyAgIGBodHRwOi8vbG9jYWxob3N0OjEzMzcvcG9xZGV0YWlscy8ke2l0ZW0uaWR9YCxcclxuICAgICAgICAgICAgICAvLyAgIGRldGFpbGltcHV0LFxyXG4gICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGV0YWlsaW1wdXQsICcqKioqKioqKioqKioqKioqKioqJyk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFNob3cgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgIGVucXVldWVTbmFja2JhcignRWRpdCBzdWNjZXNzZnVsbHkgZG9uZScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgICByZXNldCgpO1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL3BvcXMnKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvLyBTaG93IGVycm9yIG1lc3NhZ2VcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdFcnJvciBlZGl0IFF1dGF0aW9uJywgeyB2YXJpYW50OiAnZXJyb3InIH0pO1xyXG5cclxuICAgICAgLy8gU2hvdyBzdWJtaXRFcnJvciBtZXNzYWdlXHJcbiAgICAgIHNldEVycm9yKCdzdWJtaXRFcnJvcicsIHtcclxuICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICBtZXNzYWdlOiAnRXJyb3IgZWRpdCBRdXRhdGlvbicsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==