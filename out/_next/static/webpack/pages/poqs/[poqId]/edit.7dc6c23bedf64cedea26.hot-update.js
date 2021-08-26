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

                            case 1:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcG9xcy9lZGl0L0Zvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImVkaXRvciIsImhlaWdodCIsImFkZFByb2R1Y3QiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsInBvcW5hbWUiLCJyZXF1aXJlZCIsImN1c3RvbWVyTmFtZSIsImlkIiwibnVsbGFibGUiLCJuYW1lIiwic3RhcnREYXRlIiwidHlwZUVycm9yIiwiZW5kRGF0ZSIsInNoaXBwaW5nQWRkcmVzcyIsIm1heCIsInNoaXBwaW5nQ29zdCIsIm90aGVyQ29zdHMiLCJ0b3RhbGRpc2NvdW50IiwidmF0cGVyY2VudGFnZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdFF0eSIsIkZvcm0iLCJjbGFzc05hbWUiLCJwb3EiLCJzZXRQT1EiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInByb2R1Y3RUb3RhbGNvc3QiLCJwcm9kdWN0c0Nvc3QiLCJzZXRQcm9kdWN0c0Nvc3QiLCJzdWJ0b3RhbCIsInRvdGFsdmF0IiwidmF0IiwiZ3JhbmRUb3RhbCIsImNhbGN1bGF0aW9uIiwic2V0Q2FsY3VsYXRpb24iLCJlbmFibGVjcmVhdGUiLCJzZXRFbmFibGVDcmVhdGUiLCJtZXRob2RzIiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsImN1c3RvbWVyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJEYXRlIiwib3RoZXJDb3N0IiwidG90YWxEaXNjb3VudCIsInN1Ym1pdEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJzZXRWYWx1ZSIsImdldFZhbHVlcyIsInJlc2V0IiwiaXNTdWJtaXR0aW5nIiwiZm9ybVN0YXRlIiwiaGFuZGVsQ2FsY3VsYXRlIiwiaXRlbXByb2R1Y3Rjb3N0IiwicG9xRGV0YWlsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzYWxlcHJpY2UiLCJxbnR5IiwiTnVtYmVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiY2xzeCIsImNhbGNCdXR0b24iLCJNYXRoIiwicm91bmQiLCJFUFNJTE9OIiwiYWRkcHJvZHVjdCIsImZvbnRTaXplIiwibWVzc2FnZSIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0IiwiZW5kdXNlcnByaWNlIiwicHJpY2UiLCJheGlvcyIsInBvc3QiLCJyZXNwIiwiZGF0YSIsInZhbHVlcyIsInBvcUlucHV0IiwiTmFtZSIsInJlc3BvbnNlIiwicHV0IiwidGhlbiIsInJlcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtIiwiZGV0YWlsaW1wdXQiLCJzYWxlcGVyY2VudGFnZSIsInZhcmlhbnQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxVQUFNLEVBQUU7QUFDTixzQkFBZ0I7QUFDZEMsY0FBTSxFQUFFO0FBRE07QUFEVixLQUYrQjtBQU92Q0MsY0FBVSxFQUFFO0FBQ1ZDLGdCQUFVLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQ7QUFERjtBQVAyQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVlBLElBQU1DLGdCQUFnQixHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxT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NkUsdUNBQU8sRUFBRWlCLElBQUksQ0FBQzlGLEVBRkk7QUFHbEI4RCxvQ0FBSSxFQUFFZ0MsSUFBSSxDQUFDaEMsSUFITztBQUlsQmdCLDRDQUFZLEVBQUVnQixJQUFJLENBQUNmLEtBSkQ7QUFLbEJsQix5Q0FBUyxFQUFFaUMsSUFBSSxDQUFDakMsU0FMRTtBQU1sQm1DLDhDQUFjLEVBQUVGLElBQUksQ0FBQ0UsY0FBTCxHQUFzQkYsSUFBSSxDQUFDRSxjQUEzQixHQUE0QztBQU4xQywrQkFESixFQVNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFaZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWxCOztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGO0FBZ0JELGlCQW5CYyxDQWhCZixFQXFDRjs7QUFDQTNFLCtCQUFlLENBQUMsd0JBQUQsRUFBMkI7QUFBRTRFLHlCQUFPLEVBQUU7QUFBWCxpQkFBM0IsQ0FBZjtBQUNBNUMscUJBQUs7QUFDTDZDLGtFQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaO0FBQ0QsZUF6Q0QsQ0F5Q0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1o7QUFDQS9FLCtCQUFlLENBQUMscUJBQUQsRUFBd0I7QUFBRTRFLHlCQUFPLEVBQUU7QUFBWCxpQkFBeEIsQ0FBZixDQUZZLENBSVo7O0FBQ0EvQyx3QkFBUSxDQUFDLGFBQUQsRUFBZ0I7QUFDdEJtRCxzQkFBSSxFQUFFLFFBRGdCO0FBRXRCMUIseUJBQU8sRUFBRTtBQUZhLGlCQUFoQixDQUFSO0FBSUQ7O0FBbkRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMVdpRDtBQUFBO0FBQUE7QUErWmxEOztHQS9aUTdELEk7VUFDUzdCLFMsRUFDWW1DLHNELEVBV1pnQix3RDs7O0tBYlR0QixJO0FBaWFNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3FzL1twb3FJZF0vZWRpdC43ZGM2YzIzYmVkZjY0Y2VkZWEyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIFN2Z0ljb24sXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcclxuaW1wb3J0IHsgUGx1cyBhcyBQbHVzSWNvbiB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5pbXBvcnQgeyBGb3JtUHJvdmlkZXIsIHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IEN1c3RvbWVyQXV0b0NvbXBsZXRlIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0N1c3RvbWVyQXV0b0NvbXBlbGV0ZSc7XHJcbmltcG9ydCBQcm9kdWN0QXV0b0NvbXBsZXRlIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1Byb2R1Y3RBdXRvQ29tcGVsZXRlJztcclxuaW1wb3J0IEZvcm1EYXRlUGlja2VyIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1EYXRlUGlja2VyJztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Gb3JtSW5wdXQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL1Jlc3VsdHMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAL3Jvb3QvaTE4bic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7fSxcclxuICBlZGl0b3I6IHtcclxuICAgICcmIC5xbC1lZGl0b3InOiB7XHJcbiAgICAgIGhlaWdodDogNDAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFkZFByb2R1Y3Q6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgcG9xbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdCT1EgbmFtZSBpcyByZXF1aXJlZCcpLFxyXG4gIGN1c3RvbWVyTmFtZTogeXVwXHJcbiAgICAub2JqZWN0KClcclxuICAgIC5zaGFwZSh7XHJcbiAgICAgIGlkOiB5dXAubnVtYmVyKCkubnVsbGFibGUoKSxcclxuICAgICAgbmFtZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICB9KVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC5yZXF1aXJlZCgnQ3V0b21lciBuYW1lIGlzIHJlcXVpcmVkJyksXHJcbiAgc3RhcnREYXRlOiB5dXBcclxuICAgIC5kYXRlKClcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAudHlwZUVycm9yKCdJbnZhbGlkIGRhdGUuJylcclxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgZW5kRGF0ZTogeXVwXHJcbiAgICAuZGF0ZSgpXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnR5cGVFcnJvcignSW52YWxpZCBkYXRlLicpXHJcbiAgICAucmVxdWlyZWQoJ1JlcXVpcmVkLicpLFxyXG4gIHNoaXBwaW5nQWRkcmVzczogeXVwLnN0cmluZygpLm1heCgyNTUpLFxyXG4gIHNoaXBwaW5nQ29zdDogeXVwLm51bWJlcigpLFxyXG4gIG90aGVyQ29zdHM6IHl1cC5udW1iZXIoKSxcclxuICB0b3RhbGRpc2NvdW50OiB5dXAubnVtYmVyKCksXHJcbiAgdmF0cGVyY2VudGFnZTogeXVwLm51bWJlcigpLFxyXG4gIHByb2R1Y3ROYW1lOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHsgaWQ6IHl1cC5udW1iZXIoKSwgbmFtZTogeXVwLnN0cmluZygpIH0pXHJcbiAgICAubnVsbGFibGUoKSxcclxuICBwcm9kdWN0UXR5OiB5dXAubnVtYmVyKCkubnVsbGFibGUoKSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBGb3JtKHsgY2xhc3NOYW1lLCBwb3EsIHNldFBPUSwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IFtwcm9kdWN0c0Nvc3QsIHNldFByb2R1Y3RzQ29zdF0gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIHBvcS5wb3EucHJvZHVjdFRvdGFsY29zdCxcclxuICApO1xyXG4gIGNvbnN0IFtjYWxjdWxhdGlvbiwgc2V0Q2FsY3VsYXRpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgc3VidG90YWw6IHBvcS5wb3Euc3VidG90YWwsXHJcbiAgICB0b3RhbHZhdDogKHBvcS5wb3EudmF0ICogcG9xLnBvcS5zdWJ0b3RhbCkgLyAxMDAsXHJcbiAgICBncmFuZFRvdGFsOiBwb3EucG9xLnN1YnRvdGFsICsgKHBvcS5wb3EudmF0ICogcG9xLnBvcS5zdWJ0b3RhbCkgLyAxMDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2VuYWJsZWNyZWF0ZSwgc2V0RW5hYmxlQ3JlYXRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oe1xyXG4gICAgbW9kZTogJ2FsbCcsXHJcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIodmFsaWRhdGlvblNjaGVtYSksXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgIHBvcW5hbWU6IGAke3BvcS5wb3EuaWR9LUFyY2hpcGAgfHwgJycsXHJcbiAgICAgIGN1c3RvbWVyTmFtZTpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogcG9xLnBvcS5jdXN0b21lci5pZCxcclxuICAgICAgICAgIG5hbWU6IGAke3BvcS5wb3EuY3VzdG9tZXIuZmlyc3ROYW1lfSAke3BvcS5wb3EuY3VzdG9tZXIubGFzdE5hbWV9YCxcclxuICAgICAgICB9IHx8IG51bGwsXHJcbiAgICAgIHN0YXJ0RGF0ZTogcG9xLnBvcS5zdGFydERhdGUgfHwgbmV3IERhdGUoKSxcclxuICAgICAgZW5kRGF0ZTogcG9xLnBvcS5lbmREYXRlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgIHNoaXBwaW5nQWRkcmVzczogcG9xLnBvcS5zaGlwcGluZ0FkZHJlc3MgfHwgJycsXHJcbiAgICAgIHNoaXBwaW5nQ29zdDogcG9xLnBvcS5zaGlwcGluZ0Nvc3QgfHwgMCxcclxuICAgICAgb3RoZXJDb3N0czogcG9xLnBvcS5vdGhlckNvc3QgfHwgMCxcclxuICAgICAgdG90YWxkaXNjb3VudDogcG9xLnBvcS50b3RhbERpc2NvdW50IHx8IDAsXHJcbiAgICAgIHByb2R1Y3ROYW1lOiBudWxsLFxyXG4gICAgICB2YXRwZXJjZW50YWdlOiBwb3EucG9xLnZhdCB8fCAwLFxyXG4gICAgICBwcm9kdWN0UXR5OiAxLFxyXG4gICAgICBzdWJtaXRFcnJvcjogJycsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHtcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGVycm9ycyxcclxuICAgIHNldEVycm9yLFxyXG4gICAgc2V0VmFsdWUsXHJcbiAgICBnZXRWYWx1ZXMsXHJcbiAgICByZXNldCxcclxuICAgIGZvcm1TdGF0ZTogeyBpc1N1Ym1pdHRpbmcgfSxcclxuICB9ID0gbWV0aG9kcztcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGVsQ2FsY3VsYXRlKCkge1xyXG4gICAgbGV0IGl0ZW1wcm9kdWN0Y29zdCA9IDA7XHJcbiAgICBwb3EucG9xRGV0YWlsLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaXRlbXByb2R1Y3Rjb3N0ICs9IGVsZW1lbnQuc2FsZXByaWNlICogZWxlbWVudC5xbnR5O1xyXG4gICAgfSk7XHJcbiAgICBzZXRQcm9kdWN0c0Nvc3QoaXRlbXByb2R1Y3Rjb3N0KTtcclxuICAgIHZhciBzdWJ0b3RhbCA9XHJcbiAgICAgIGl0ZW1wcm9kdWN0Y29zdCArXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5vdGhlckNvc3RzKSArXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5zaGlwcGluZ0Nvc3QpIC1cclxuICAgICAgTnVtYmVyKGdldFZhbHVlcygpLnRvdGFsZGlzY291bnQpO1xyXG4gICAgdmFyIHRvdGFsdmF0ID0gKHN1YnRvdGFsICogZ2V0VmFsdWVzKCkudmF0cGVyY2VudGFnZSkgLyAxMDA7XHJcbiAgICB2YXIgZ3JhbmRUb3RhbCA9IHN1YnRvdGFsICsgdG90YWx2YXQ7XHJcbiAgICBzZXRDYWxjdWxhdGlvbih7IHN1YnRvdGFsLCB0b3RhbHZhdCwgZ3JhbmRUb3RhbCB9KTtcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHByb2R1Y3RzVG90YWxDb3N0KCkge1xyXG4gIC8vICAgbGV0IHByb2R1Y3RzQ29zdEhIID0gMDtcclxuICAvLyAgIHBvcS5wb3FEZXRhaWwubWFwKChpdGVtKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IGl0ZW1wcmljZSA9IGl0ZW0uc2FsZXByaWNlICogaXRlbS5xbnR5O1xyXG4gIC8vICAgICBwcm9kdWN0c0Nvc3RISCArPSBpdGVtcHJpY2U7XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICByZXR1cm4gcHJvZHVjdHNDb3N0SEg7XHJcbiAgLy8gfVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gcHJvZHVjdHNUb3RhbENvc3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBvcSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVByb3ZpZGVyIHsuLi5tZXRob2RzfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICAgIHsuLi5yZXN0fT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9PlxyXG4gICAgICAgICAgICB7LyogQmFzaWMgKi99XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiQmFzaWNcIiAvPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICB7LyogTnVtYmVyICMgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb3FuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQk9RIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIEN1c3RvbWVyIG5hbWUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21lckF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbWVyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkN1c3RvbWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFN0YXJ0IERhdGUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1EYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhcnREYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBFbmQgRGF0ZSAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybURhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbmREYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kIERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogU2hpcHBpbmcgQWRkcmVzcyAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoaXBwaW5nIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJPdGhlcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdDb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaGlwcGluZyBDb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyQ29zdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2lnbiAtIEluc3RhbGxhdGlvbiAtIERvY3VtZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG90YWxkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgZGlzY291bnQgYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT48L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZhdHBlcmNlbnRhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZBVCAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17Nn0gbWQ9ezZ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVDcmVhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGVsQ2FsY3VsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxjQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FsY3VsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiVG90YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5OZXQgcHJvZHVjdHMgY29zdCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoKHByb2R1Y3RzQ29zdCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlNoaXBwaW5nIGFuZCBJbnN0YWxsYXRpb24gOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRWYWx1ZXMoKS5vdGhlckNvc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IE51bWJlcihnZXRWYWx1ZXMoKS5vdGhlckNvc3RzKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5zaGlwcGluZ0Nvc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvcS5wb3Euc2hpcHBpbmdDb3N0ICsgcG9xLnBvcS5vdGhlckNvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3ViIFRvdGFsIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxjdWxhdGlvbi5zdWJ0b3RhbCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlRheGVzIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBuYW1lPVwidmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FsY3VsYXRpb24udG90YWx2YXQgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5HcmFuZCB0b3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBuYW1lPVwiZ3JhbmR0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbGN1bGF0aW9uLmdyYW5kVG90YWwgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgey8qIFByb2R1Y3RzICovfVxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fT5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJQcm9kdWN0c1wiIC8+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezl9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgTmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBRdWFudGl0eSAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Mn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdFF0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlF1YW50aXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxfSB4cz17MTJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQWRkIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVDcmVhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRwcm9kdWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdmdJY29uIGZvbnRTaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICB7LyogUHJvZHVjdHMgVGFibGUgKi99XHJcbiAgICAgICAgICAgICAgICA8Qm94IG10PXsyfT5cclxuICAgICAgICAgICAgICAgICAgPFJlc3VsdHMgcXVlcnk9e3BvcX0gc2V0UE9RPXtzZXRQT1F9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICB7LyogRXJyb3IgKi99XHJcbiAgICAgICAge2Vycm9ycy5zdWJtaXRFcnJvciAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PXsxfSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dCBzdHlsZT17eyBmb250U2l6ZTogJzI0cHgnIH19IGVycm9yPlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuc3VibWl0RXJyb3IubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxCb3ggbXQ9ezV9PlxyXG4gICAgICAgICAgey8qIFN1Ym1pdCAqL31cclxuICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZW5hYmxlY3JlYXRlfT5cclxuICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Gb3JtUHJvdmlkZXI+XHJcbiAgKTtcclxuICBhc3luYyBmdW5jdGlvbiBhZGRwcm9kdWN0KCkge1xyXG4gICAgaWYgKCFnZXRWYWx1ZXMoKS5wcm9kdWN0TmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgIHBvcTogcG9xLnBvcS5pZCxcclxuICAgICAgcHJvZHVjdDogZ2V0VmFsdWVzKCkucHJvZHVjdE5hbWUuaWQsXHJcbiAgICAgIHFudHk6IE51bWJlcihnZXRWYWx1ZXMoKS5wcm9kdWN0UXR5KSxcclxuICAgICAgZW5kdXNlcnByaWNlOiBnZXRWYWx1ZXMoKS5wcm9kdWN0TmFtZS5wcmljZSxcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3FkZXRhaWxzJyxcclxuICAgICAgbmV3UHJvZHVjdCxcclxuICAgICk7XHJcblxyXG4gICAgc2V0UE9RKHsgLi4ucG9xLCBwb3FEZXRhaWw6IFsuLi5wb3EucG9xRGV0YWlsLCByZXNwLmRhdGFdIH0pO1xyXG5cclxuICAgIHNldFZhbHVlKCdwcm9kdWN0TmFtZScsIHt9KTtcclxuICAgIHNldFZhbHVlKCdwcm9kdWN0UXR5JywgMCk7XHJcbiAgfVxyXG4gIC8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KHZhbHVlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUmVzZXQgc3VibWl0RXJyb3IgbWVzc2FnZVxyXG4gICAgICBzZXRWYWx1ZSgnc3VibWl0RXJyb3InLCAnJyk7XHJcbiAgICAgIGNvbnN0IHBvcUlucHV0ID0ge1xyXG4gICAgICAgIE5hbWU6IHZhbHVlcy5wb3FuYW1lLFxyXG4gICAgICAgIGN1c3RvbWVyOiB2YWx1ZXMuY3VzdG9tZXJOYW1lLmlkLFxyXG4gICAgICAgIHNoaXBwaW5nQWRkcmVzczogdmFsdWVzLnNoaXBwaW5nQWRkcmVzcyxcclxuICAgICAgICBzdGFydERhdGU6IHZhbHVlcy5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogdmFsdWVzLmVuZERhdGUsXHJcbiAgICAgICAgc2hpcHBpbmdDb3N0OiB2YWx1ZXMuc2hpcHBpbmdDb3N0LFxyXG4gICAgICAgIG90aGVyQ29zdDogdmFsdWVzLm90aGVyQ29zdHMsXHJcbiAgICAgICAgc3VidG90YWw6IGNhbGN1bGF0aW9uLnN1YnRvdGFsLFxyXG4gICAgICAgIGdyYW5kVG90YWw6IGNhbGN1bGF0aW9uLmdyYW5kVG90YWwsXHJcbiAgICAgICAgdG90YWxEaXNjb3VudDogdmFsdWVzLnRvdGFsZGlzY291bnQsXHJcbiAgICAgICAgdmF0OiB2YWx1ZXMudmF0cGVyY2VudGFnZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvc1xyXG4gICAgICAgIC5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3FzLyR7cG9xLnBvcS5pZH1gLCBwb3FJbnB1dClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgcG9xLnBvcURldGFpbC5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBkZXRhaWxpbXB1dCA9IHtcclxuICAgICAgICAgICAgICAgIHBvcTogcG9xLnBvcS5pZCxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICBxbnR5OiBpdGVtLnFudHksXHJcbiAgICAgICAgICAgICAgICBlbmR1c2VycHJpY2U6IGl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICBzYWxlcHJpY2U6IGl0ZW0uc2FsZXByaWNlLFxyXG4gICAgICAgICAgICAgICAgc2FsZXBlcmNlbnRhZ2U6IGl0ZW0uc2FsZXBlcmNlbnRhZ2UgPyBpdGVtLnNhbGVwZXJjZW50YWdlIDogMCxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIC8vIGNvbnN0IGRldGFpbHJlc3AgPSBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgICAgICAgLy8gICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3BvcWRldGFpbHMvJHtpdGVtLmlkfWAsXHJcbiAgICAgICAgICAgICAgLy8gICBkZXRhaWxpbXB1dCxcclxuICAgICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTaG93IHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ0VkaXQgc3VjY2Vzc2Z1bGx5IGRvbmUnLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJyB9KTtcclxuICAgICAgcmVzZXQoKTtcclxuICAgICAgUm91dGVyLnB1c2goJy9wb3FzJyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlXHJcbiAgICAgIGVucXVldWVTbmFja2JhcignRXJyb3IgZWRpdCBRdXRhdGlvbicsIHsgdmFyaWFudDogJ2Vycm9yJyB9KTtcclxuXHJcbiAgICAgIC8vIFNob3cgc3VibWl0RXJyb3IgbWVzc2FnZVxyXG4gICAgICBzZXRFcnJvcignc3VibWl0RXJyb3InLCB7XHJcbiAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXHJcbiAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGVkaXQgUXV0YXRpb24nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=