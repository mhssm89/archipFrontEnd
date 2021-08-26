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
                      var detailimput, detailresp;
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
                              };
                              _context2.next = 3;
                              return axios__WEBPACK_IMPORTED_MODULE_19___default.a.put("http://localhost:1337/poqdetails/".concat(item.id), detailimput);

                            case 3:
                              detailresp = _context2.sent;

                            case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcG9xcy9lZGl0L0Zvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImVkaXRvciIsImhlaWdodCIsImFkZFByb2R1Y3QiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsInBvcW5hbWUiLCJyZXF1aXJlZCIsImN1c3RvbWVyTmFtZSIsImlkIiwibnVsbGFibGUiLCJuYW1lIiwic3RhcnREYXRlIiwidHlwZUVycm9yIiwiZW5kRGF0ZSIsInNoaXBwaW5nQWRkcmVzcyIsIm1heCIsInNoaXBwaW5nQ29zdCIsIm90aGVyQ29zdHMiLCJ0b3RhbGRpc2NvdW50IiwidmF0cGVyY2VudGFnZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdFF0eSIsIkZvcm0iLCJjbGFzc05hbWUiLCJwb3EiLCJzZXRQT1EiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInByb2R1Y3RUb3RhbGNvc3QiLCJwcm9kdWN0c0Nvc3QiLCJzZXRQcm9kdWN0c0Nvc3QiLCJzdWJ0b3RhbCIsInRvdGFsdmF0IiwidmF0IiwiZ3JhbmRUb3RhbCIsImNhbGN1bGF0aW9uIiwic2V0Q2FsY3VsYXRpb24iLCJlbmFibGVjcmVhdGUiLCJzZXRFbmFibGVDcmVhdGUiLCJtZXRob2RzIiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsImN1c3RvbWVyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJEYXRlIiwib3RoZXJDb3N0IiwidG90YWxEaXNjb3VudCIsInN1Ym1pdEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJzZXRWYWx1ZSIsImdldFZhbHVlcyIsInJlc2V0IiwiaXNTdWJtaXR0aW5nIiwiZm9ybVN0YXRlIiwiaGFuZGVsQ2FsY3VsYXRlIiwiaXRlbXByb2R1Y3Rjb3N0IiwicG9xRGV0YWlsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzYWxlcHJpY2UiLCJxbnR5IiwiTnVtYmVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiY2xzeCIsImNhbGNCdXR0b24iLCJNYXRoIiwicm91bmQiLCJFUFNJTE9OIiwiYWRkcHJvZHVjdCIsImZvbnRTaXplIiwibWVzc2FnZSIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0IiwiZW5kdXNlcnByaWNlIiwicHJpY2UiLCJheGlvcyIsInBvc3QiLCJyZXNwIiwiZGF0YSIsInZhbHVlcyIsInBvcUlucHV0IiwiTmFtZSIsInJlc3BvbnNlIiwicHV0IiwidGhlbiIsInJlcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtIiwiZGV0YWlsaW1wdXQiLCJzYWxlcGVyY2VudGFnZSIsImRldGFpbHJlc3AiLCJ2YXJpYW50IiwiUm91dGVyIiwicHVzaCIsImVyciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsVUFBTSxFQUFFO0FBQ04sc0JBQWdCO0FBQ2RDLGNBQU0sRUFBRTtBQURNO0FBRFYsS0FGK0I7QUFPdkNDLGNBQVUsRUFBRTtBQUNWQyxnQkFBVSxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFQMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFZQSxJQUFNQyxnQkFBZ0IsR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUMxQ0MsU0FBTyxFQUFFRiwyQ0FBQSxHQUFhRyxRQUFiLENBQXNCLHNCQUF0QixDQURpQztBQUUxQ0MsY0FBWSxFQUFFSiwyQ0FBQSxHQUVYQyxLQUZXLENBRUw7QUFDTEksTUFBRSxFQUFFTCwyQ0FBQSxHQUFhTSxRQUFiLEVBREM7QUFFTEMsUUFBSSxFQUFFUCwyQ0FBQSxHQUFhTSxRQUFiO0FBRkQsR0FGSyxFQU1YQSxRQU5XLEdBT1hILFFBUFcsQ0FPRiwwQkFQRSxDQUY0QjtBQVUxQ0ssV0FBUyxFQUFFUix5Q0FBQSxHQUVSTSxRQUZRLEdBR1JHLFNBSFEsQ0FHRSxlQUhGLEVBSVJOLFFBSlEsQ0FJQyxXQUpELENBVitCO0FBZTFDTyxTQUFPLEVBQUVWLHlDQUFBLEdBRU5NLFFBRk0sR0FHTkcsU0FITSxDQUdJLGVBSEosRUFJTk4sUUFKTSxDQUlHLFdBSkgsQ0FmaUM7QUFvQjFDUSxpQkFBZSxFQUFFWCwyQ0FBQSxHQUFhWSxHQUFiLENBQWlCLEdBQWpCLENBcEJ5QjtBQXFCMUNDLGNBQVksRUFBRWIsMkNBQUEsRUFyQjRCO0FBc0IxQ2MsWUFBVSxFQUFFZCwyQ0FBQSxFQXRCOEI7QUF1QjFDZSxlQUFhLEVBQUVmLDJDQUFBLEVBdkIyQjtBQXdCMUNnQixlQUFhLEVBQUVoQiwyQ0FBQSxFQXhCMkI7QUF5QjFDaUIsYUFBVyxFQUFFakIsMkNBQUEsR0FFVkMsS0FGVSxDQUVKO0FBQUVJLE1BQUUsRUFBRUwsMkNBQUEsRUFBTjtBQUFvQk8sUUFBSSxFQUFFUCwyQ0FBQTtBQUExQixHQUZJLEVBR1ZNLFFBSFUsRUF6QjZCO0FBNkIxQ1ksWUFBVSxFQUFFbEIsMkNBQUEsR0FBYU0sUUFBYjtBQTdCOEIsQ0FBbkIsQ0FBekI7O0FBZ0NBLFNBQVNhLElBQVQsT0FBbUQ7QUFBQTs7QUFBQSxNQUFuQ0MsU0FBbUMsUUFBbkNBLFNBQW1DO0FBQUEsTUFBeEJDLEdBQXdCLFFBQXhCQSxHQUF3QjtBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFSQyxJQUFROztBQUNqRCxNQUFNQyxPQUFPLEdBQUdsQyxTQUFTLEVBQXpCOztBQURpRCxxQkFFckJtQyw4REFBVyxFQUZVO0FBQUEsTUFFekNDLGVBRnlDLGdCQUV6Q0EsZUFGeUM7O0FBQUEsd0JBR1RDLDRDQUFLLENBQUNDLFFBQU4sQ0FDdENQLEdBQUcsQ0FBQ0EsR0FBSixDQUFRUSxnQkFEOEIsQ0FIUztBQUFBO0FBQUEsTUFHMUNDLFlBSDBDO0FBQUEsTUFHNUJDLGVBSDRCOztBQUFBLHlCQU1YSiw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDbkRJLFlBQVEsRUFBRVgsR0FBRyxDQUFDQSxHQUFKLENBQVFXLFFBRGlDO0FBRW5EQyxZQUFRLEVBQUdaLEdBQUcsQ0FBQ0EsR0FBSixDQUFRYSxHQUFSLEdBQWNiLEdBQUcsQ0FBQ0EsR0FBSixDQUFRVyxRQUF2QixHQUFtQyxHQUZNO0FBR25ERyxjQUFVLEVBQUVkLEdBQUcsQ0FBQ0EsR0FBSixDQUFRVyxRQUFSLEdBQW9CWCxHQUFHLENBQUNBLEdBQUosQ0FBUWEsR0FBUixHQUFjYixHQUFHLENBQUNBLEdBQUosQ0FBUVcsUUFBdkIsR0FBbUM7QUFIZixHQUFmLENBTlc7QUFBQTtBQUFBLE1BTTFDSSxXQU4wQztBQUFBLE1BTTdCQyxjQU42Qjs7QUFBQSx5QkFXVFYsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FYUztBQUFBO0FBQUEsTUFXMUNVLFlBWDBDO0FBQUEsTUFXNUJDLGVBWDRCOztBQWFqRCxNQUFNQyxPQUFPLEdBQUdDLGdFQUFPLENBQUM7QUFDdEJDLFFBQUksRUFBRSxLQURnQjtBQUV0QkMsWUFBUSxFQUFFQywyRUFBVyxDQUFDN0MsZ0JBQUQsQ0FGQztBQUd0QjhDLGlCQUFhLEVBQUU7QUFDYjNDLGFBQU8sRUFBRSxVQUFHbUIsR0FBRyxDQUFDQSxHQUFKLENBQVFoQixFQUFYLGdCQUEwQixLQUR0QjtBQUViRCxrQkFBWSxFQUNWO0FBQ0VDLFVBQUUsRUFBRWdCLEdBQUcsQ0FBQ0EsR0FBSixDQUFReUIsUUFBUixDQUFpQnpDLEVBRHZCO0FBRUVFLFlBQUksWUFBS2MsR0FBRyxDQUFDQSxHQUFKLENBQVF5QixRQUFSLENBQWlCQyxTQUF0QixjQUFtQzFCLEdBQUcsQ0FBQ0EsR0FBSixDQUFReUIsUUFBUixDQUFpQkUsUUFBcEQ7QUFGTixXQUdLLElBTk07QUFPYnhDLGVBQVMsRUFBRWEsR0FBRyxDQUFDQSxHQUFKLENBQVFiLFNBQVIsSUFBcUIsSUFBSXlDLElBQUosRUFQbkI7QUFRYnZDLGFBQU8sRUFBRVcsR0FBRyxDQUFDQSxHQUFKLENBQVFYLE9BQVIsSUFBbUIsSUFBSXVDLElBQUosRUFSZjtBQVNidEMscUJBQWUsRUFBRVUsR0FBRyxDQUFDQSxHQUFKLENBQVFWLGVBQVIsSUFBMkIsRUFUL0I7QUFVYkUsa0JBQVksRUFBRVEsR0FBRyxDQUFDQSxHQUFKLENBQVFSLFlBQVIsSUFBd0IsQ0FWekI7QUFXYkMsZ0JBQVUsRUFBRU8sR0FBRyxDQUFDQSxHQUFKLENBQVE2QixTQUFSLElBQXFCLENBWHBCO0FBWWJuQyxtQkFBYSxFQUFFTSxHQUFHLENBQUNBLEdBQUosQ0FBUThCLGFBQVIsSUFBeUIsQ0FaM0I7QUFhYmxDLGlCQUFXLEVBQUUsSUFiQTtBQWNiRCxtQkFBYSxFQUFFSyxHQUFHLENBQUNBLEdBQUosQ0FBUWEsR0FBUixJQUFlLENBZGpCO0FBZWJoQixnQkFBVSxFQUFFLENBZkM7QUFnQmJrQyxpQkFBVyxFQUFFO0FBaEJBO0FBSE8sR0FBRCxDQUF2QjtBQWJpRCxNQW9DL0NDLFlBcEMrQyxHQTJDN0NiLE9BM0M2QyxDQW9DL0NhLFlBcEMrQztBQUFBLE1BcUMvQ0MsTUFyQytDLEdBMkM3Q2QsT0EzQzZDLENBcUMvQ2MsTUFyQytDO0FBQUEsTUFzQy9DQyxRQXRDK0MsR0EyQzdDZixPQTNDNkMsQ0FzQy9DZSxRQXRDK0M7QUFBQSxNQXVDL0NDLFFBdkMrQyxHQTJDN0NoQixPQTNDNkMsQ0F1Qy9DZ0IsUUF2QytDO0FBQUEsTUF3Qy9DQyxTQXhDK0MsR0EyQzdDakIsT0EzQzZDLENBd0MvQ2lCLFNBeEMrQztBQUFBLE1BeUMvQ0MsS0F6QytDLEdBMkM3Q2xCLE9BM0M2QyxDQXlDL0NrQixLQXpDK0M7QUFBQSxNQTBDbENDLFlBMUNrQyxHQTJDN0NuQixPQTNDNkMsQ0EwQy9Db0IsU0ExQytDLENBMENsQ0QsWUExQ2tDOztBQTZDakQsV0FBU0UsZUFBVCxHQUEyQjtBQUN6QixRQUFJQyxlQUFlLEdBQUcsQ0FBdEI7QUFDQXpDLE9BQUcsQ0FBQzBDLFNBQUosQ0FBY0MsT0FBZCxDQUFzQixVQUFDQyxPQUFELEVBQWE7QUFDakNILHFCQUFlLElBQUlHLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQkQsT0FBTyxDQUFDRSxJQUEvQztBQUNELEtBRkQ7QUFHQXBDLG1CQUFlLENBQUMrQixlQUFELENBQWY7QUFDQSxRQUFJOUIsUUFBUSxHQUNWOEIsZUFBZSxHQUNmTSxNQUFNLENBQUNYLFNBQVMsR0FBRzNDLFVBQWIsQ0FETixHQUVBc0QsTUFBTSxDQUFDWCxTQUFTLEdBQUc1QyxZQUFiLENBRk4sR0FHQXVELE1BQU0sQ0FBQ1gsU0FBUyxHQUFHMUMsYUFBYixDQUpSO0FBS0EsUUFBSWtCLFFBQVEsR0FBSUQsUUFBUSxHQUFHeUIsU0FBUyxHQUFHekMsYUFBeEIsR0FBeUMsR0FBeEQ7QUFDQSxRQUFJbUIsVUFBVSxHQUFHSCxRQUFRLEdBQUdDLFFBQTVCO0FBQ0FJLGtCQUFjLENBQUM7QUFBRUwsY0FBUSxFQUFSQSxRQUFGO0FBQVlDLGNBQVEsRUFBUkEsUUFBWjtBQUFzQkUsZ0JBQVUsRUFBVkE7QUFBdEIsS0FBRCxDQUFkO0FBQ0QsR0EzRGdELENBNkRqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQVIsOENBQUssQ0FBQzBDLFNBQU4sQ0FBZ0IsWUFBTSxDQUNwQjtBQUNELEdBRkQsRUFFRyxFQUZIO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbEQsR0FBWjtBQUVBLHNCQUNFLHFFQUFDLDZEQUFELGtDQUFrQm1CLE9BQWxCO0FBQUEsMkJBQ0U7QUFDRSxjQUFRLEVBQUVhLFlBQVksQ0FBQ21CLFFBQUQsQ0FEeEI7QUFFRSxlQUFTLEVBQUVDLHFEQUFJLENBQUNqRCxPQUFPLENBQUMvQixJQUFULEVBQWUyQixTQUFmO0FBRmpCLE9BR01HLElBSE47QUFBQSw4QkFJRSxxRUFBQyxzREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENBQXpCO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFtQixZQUFFLEVBQUUsQ0FBdkI7QUFBQSxrQ0FFRSxxRUFBQyxzREFBRDtBQUFBLG9DQUNFLHFFQUFDLDREQUFEO0FBQVksbUJBQUssRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFLHFFQUFDLDZEQUFEO0FBQUEscUNBQ0UscUVBQUMsc0RBQUQ7QUFBTSx5QkFBUyxNQUFmO0FBQWdCLHVCQUFPLEVBQUUsQ0FBekI7QUFBQSx3Q0FFRSxxRUFBQyxzREFBRDtBQUFNLHNCQUFJLE1BQVY7QUFBVyxvQkFBRSxFQUFFLEVBQWY7QUFBbUIsb0JBQUUsRUFBRSxFQUF2QjtBQUFBLHlDQUNFLHFFQUFDLDBFQUFEO0FBQ0Usd0JBQUksRUFBQyxTQURQO0FBRUUseUJBQUssRUFBQyxZQUZSO0FBR0UsMkJBQU8sRUFBQyxVQUhWO0FBSUUsNEJBQVEsRUFBRSxJQUpaO0FBS0UsNEJBQVEsRUFBRStCO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsZUFZRSxxRUFBQyxzREFBRDtBQUFNLHNCQUFJLE1BQVY7QUFBVyxvQkFBRSxFQUFFLEVBQWY7QUFBbUIsb0JBQUUsRUFBRSxFQUF2QjtBQUFBLHlDQUNFLHFFQUFDLHNGQUFEO0FBQ0Usd0JBQUksRUFBQyxjQURQO0FBRUUseUJBQUssRUFBQyxVQUZSO0FBR0UsMkJBQU8sRUFBQyxVQUhWO0FBSUUsNEJBQVEsRUFBRUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFaRixlQXFCRSxxRUFBQyxzREFBRDtBQUFNLHNCQUFJLE1BQVY7QUFBVyxvQkFBRSxFQUFFLENBQWY7QUFBa0Isb0JBQUUsRUFBRSxFQUF0QjtBQUFBLHlDQUNFLHFFQUFDLCtFQUFEO0FBQ0Usd0JBQUksRUFBQyxXQURQO0FBRUUseUJBQUssRUFBQyxZQUZSO0FBR0UsMkJBQU8sRUFBQyxVQUhWO0FBSUUsNEJBQVEsRUFBRUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyQkYsZUE4QkUscUVBQUMsc0RBQUQ7QUFBTSxzQkFBSSxNQUFWO0FBQVcsb0JBQUUsRUFBRSxDQUFmO0FBQWtCLG9CQUFFLEVBQUUsRUFBdEI7QUFBQSx5Q0FDRSxxRUFBQywrRUFBRDtBQUNFLHdCQUFJLEVBQUMsU0FEUDtBQUVFLHlCQUFLLEVBQUMsVUFGUjtBQUdFLDJCQUFPLEVBQUMsVUFIVjtBQUlFLDRCQUFRLEVBQUVBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBOUJGLGVBdUNFLHFFQUFDLHNEQUFEO0FBQU0sc0JBQUksTUFBVjtBQUFXLG9CQUFFLEVBQUUsRUFBZjtBQUFtQixvQkFBRSxFQUFFLEVBQXZCO0FBQUEseUNBQ0UscUVBQUMsMEVBQUQ7QUFDRSx3QkFBSSxFQUFDLGlCQURQO0FBRUUseUJBQUssRUFBQyxrQkFGUjtBQUdFLDJCQUFPLEVBQUMsVUFIVjtBQUlFLDZCQUFTLE1BSlg7QUFLRSx3QkFBSSxFQUFFLENBTFI7QUFNRSw0QkFBUSxFQUFFQTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQTJERSxxRUFBQyxxREFBRDtBQUFLLGNBQUUsRUFBRSxDQUFUO0FBQUEsb0NBQ0UscUVBQUMsc0RBQUQ7QUFBQSxzQ0FDRSxxRUFBQyw0REFBRDtBQUFZLHFCQUFLLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRSxxRUFBQyw2REFBRDtBQUFBLHVDQUNFLHFFQUFDLHNEQUFEO0FBQU0sMkJBQVMsTUFBZjtBQUFnQix5QkFBTyxFQUFFLENBQXpCO0FBQUEsMENBQ0UscUVBQUMsc0RBQUQ7QUFBTSx3QkFBSSxNQUFWO0FBQVcsc0JBQUUsRUFBRSxFQUFmO0FBQW1CLHNCQUFFLEVBQUUsRUFBdkI7QUFBQSwyQ0FDRSxxRUFBQywwRUFBRDtBQUNFLDBCQUFJLEVBQUMsY0FEUDtBQUVFLDJCQUFLLEVBQUMsZUFGUjtBQUdFLDBCQUFJLEVBQUMsUUFIUDtBQUlFLDZCQUFPLEVBQUMsVUFKVjtBQUtFLDhCQUFRLEVBQUVBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFVRSxxRUFBQyxzREFBRDtBQUFNLHdCQUFJLE1BQVY7QUFBVyxzQkFBRSxFQUFFLEVBQWY7QUFBbUIsc0JBQUUsRUFBRSxFQUF2QjtBQUFBLDJDQUNFLHFFQUFDLDBFQUFEO0FBQ0UsMEJBQUksRUFBQyxZQURQO0FBRUUsMkJBQUssRUFBQyx1Q0FGUjtBQUdFLDBCQUFJLEVBQUMsUUFIUDtBQUlFLDZCQUFPLEVBQUMsVUFKVjtBQUtFLDhCQUFRLEVBQUVBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBVkYsZUFtQkUscUVBQUMsc0RBQUQ7QUFBTSx3QkFBSSxNQUFWO0FBQVcsc0JBQUUsRUFBRSxFQUFmO0FBQW1CLHNCQUFFLEVBQUUsRUFBdkI7QUFBQSwyQ0FDRSxxRUFBQywwRUFBRDtBQUNFLDBCQUFJLEVBQUMsZUFEUDtBQUVFLDJCQUFLLEVBQUMsdUJBRlI7QUFHRSwwQkFBSSxFQUFDLFFBSFA7QUFJRSw2QkFBTyxFQUFDLFVBSlY7QUFLRSw4QkFBUSxFQUFFQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQW5CRixlQTRCRSxxRUFBQyxzREFBRDtBQUFNLHdCQUFJLE1BQVY7QUFBVyxzQkFBRSxFQUFFLEVBQWY7QUFBbUIsc0JBQUUsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQTVCRixlQThCRSxxRUFBQyxzREFBRDtBQUFNLHdCQUFJLE1BQVY7QUFBVyxzQkFBRSxFQUFFLENBQWY7QUFBa0Isc0JBQUUsRUFBRSxDQUF0QjtBQUFBLDJDQUNFLHFFQUFDLDBFQUFEO0FBQ0UsMEJBQUksRUFBQyxlQURQO0FBRUUsMkJBQUssRUFBQyxPQUZSO0FBR0UsMEJBQUksRUFBQyxRQUhQO0FBSUUsNkJBQU8sRUFBQyxVQUpWO0FBS0UsOEJBQVEsRUFBRUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkE5QkYsZUF1Q0UscUVBQUMsc0RBQUQ7QUFBTSx3QkFBSSxNQUFWO0FBQVcsNkJBQVMsTUFBcEI7QUFBcUIsc0JBQUUsRUFBRSxDQUF6QjtBQUE0QixzQkFBRSxFQUFFLENBQWhDO0FBQW1DLDhCQUFVLEVBQUMsUUFBOUM7QUFBQSwyQ0FDRSxxRUFBQyx3REFBRDtBQUNFLDZCQUFPLEVBQUMsV0FEVjtBQUVFLDJCQUFLLEVBQUMsV0FGUjtBQUdFLDBCQUFJLEVBQUMsUUFIUDtBQUlFLDZCQUFPLEVBQUUsbUJBQU07QUFDYmYsdUNBQWUsQ0FBQyxJQUFELENBQWY7QUFDQXNCLHVDQUFlO0FBQ2hCLHVCQVBIO0FBUUUsK0JBQVMsRUFBRXJDLE9BQU8sQ0FBQ2tELFVBUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUE0REUscUVBQUMscURBQUQ7QUFBSyxnQkFBRSxFQUFFLENBQVQ7QUFBQSxxQ0FDRSxxRUFBQyxzREFBRDtBQUFBLHdDQUNFLHFFQUFDLDREQUFEO0FBQVksdUJBQUssRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixlQUdFLHFFQUFDLDZEQUFEO0FBQUEseUNBQ0UscUVBQUMsc0RBQUQ7QUFBTSw2QkFBUyxNQUFmO0FBQWdCLDJCQUFPLEVBQUUsQ0FBekI7QUFBQSw0Q0FDRSxxRUFBQyxzREFBRDtBQUFNLDBCQUFJLE1BQVY7QUFBVyx3QkFBRSxFQUFFLENBQWY7QUFBa0Isd0JBQUUsRUFBRSxDQUF0QjtBQUFBLDZDQUNFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUlFLHFFQUFDLHNEQUFEO0FBQU0sMEJBQUksTUFBVjtBQUFXLHdCQUFFLEVBQUUsQ0FBZjtBQUFrQix3QkFBRSxFQUFFLENBQXRCO0FBQUEsNkNBQ0UscUVBQUMsNERBQUQ7QUFBQSxrQ0FDR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQzlDLFlBQVksR0FBR3NDLE1BQU0sQ0FBQ1MsT0FBdkIsSUFBa0MsR0FBN0MsSUFDQztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGLGVBVUUscUVBQUMsc0RBQUQ7QUFBTSwwQkFBSSxNQUFWO0FBQVcsd0JBQUUsRUFBRSxDQUFmO0FBQWtCLHdCQUFFLEVBQUUsQ0FBdEI7QUFBQSw2Q0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBVkYsZUFhRSxxRUFBQyxzREFBRDtBQUFNLDBCQUFJLE1BQVY7QUFBVyx3QkFBRSxFQUFFLENBQWY7QUFBa0Isd0JBQUUsRUFBRSxDQUF0QjtBQUFBLDZDQUNFLHFFQUFDLDREQUFEO0FBQUEsa0NBQ0dwQixTQUFTLEdBQUczQyxVQUFaLEdBQ0dzRCxNQUFNLENBQUNYLFNBQVMsR0FBRzNDLFVBQWIsQ0FBTixHQUNBc0QsTUFBTSxDQUFDWCxTQUFTLEdBQUc1QyxZQUFiLENBRlQsR0FHR1EsR0FBRyxDQUFDQSxHQUFKLENBQVFSLFlBQVIsR0FBdUJRLEdBQUcsQ0FBQ0EsR0FBSixDQUFRNkI7QUFKckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBYkYsZUFxQkUscUVBQUMsc0RBQUQ7QUFBTSwwQkFBSSxNQUFWO0FBQVcsd0JBQUUsRUFBRSxDQUFmO0FBQWtCLHdCQUFFLEVBQUUsQ0FBdEI7QUFBQSw2Q0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBckJGLGVBd0JFLHFFQUFDLHNEQUFEO0FBQU0sMEJBQUksTUFBVjtBQUFXLHdCQUFFLEVBQUUsQ0FBZjtBQUFrQix3QkFBRSxFQUFFLENBQXRCO0FBQUEsNkNBQ0UscUVBQUMsNERBQUQ7QUFBQSxrQ0FDR3lCLElBQUksQ0FBQ0MsS0FBTCxDQUNDLENBQUN4QyxXQUFXLENBQUNKLFFBQVosR0FBdUJvQyxNQUFNLENBQUNTLE9BQS9CLElBQTBDLEdBRDNDLElBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkF4QkYsZUErQkUscUVBQUMsc0RBQUQ7QUFBTSwwQkFBSSxNQUFWO0FBQVcsd0JBQUUsRUFBRSxDQUFmO0FBQWtCLHdCQUFFLEVBQUUsQ0FBdEI7QUFBQSw2Q0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBL0JGLGVBa0NFLHFFQUFDLHNEQUFEO0FBQU0sMEJBQUksTUFBVjtBQUFXLHdCQUFFLEVBQUUsQ0FBZjtBQUFrQix3QkFBRSxFQUFFLENBQXRCO0FBQUEsNkNBQ0UscUVBQUMsNERBQUQ7QUFBWSw0QkFBSSxFQUFDLEtBQWpCO0FBQUEsa0NBQ0dGLElBQUksQ0FBQ0MsS0FBTCxDQUNDLENBQUN4QyxXQUFXLENBQUNILFFBQVosR0FBdUJtQyxNQUFNLENBQUNTLE9BQS9CLElBQTBDLEdBRDNDLElBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFsQ0YsZUF5Q0UscUVBQUMsc0RBQUQ7QUFBTSwwQkFBSSxNQUFWO0FBQVcsd0JBQUUsRUFBRSxDQUFmO0FBQWtCLHdCQUFFLEVBQUUsQ0FBdEI7QUFBQSw2Q0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBekNGLGVBNENFLHFFQUFDLHNEQUFEO0FBQU0sMEJBQUksTUFBVjtBQUFXLHdCQUFFLEVBQUUsQ0FBZjtBQUFBLDZDQUNFLHFFQUFDLDREQUFEO0FBQVksNEJBQUksRUFBQyxZQUFqQjtBQUFBLGtDQUNHRixJQUFJLENBQUNDLEtBQUwsQ0FDQyxDQUFDeEMsV0FBVyxDQUFDRCxVQUFaLEdBQXlCaUMsTUFBTSxDQUFDUyxPQUFqQyxJQUE0QyxHQUQ3QyxJQUVHO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE1REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUF3TEUscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFtQixZQUFFLEVBQUUsQ0FBdkI7QUFBQSxpQ0FDRSxxRUFBQyxzREFBRDtBQUFBLG9DQUNFLHFFQUFDLDREQUFEO0FBQVksbUJBQUssRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFLHFFQUFDLDZEQUFEO0FBQUEsc0NBQ0UscUVBQUMsc0RBQUQ7QUFBTSx5QkFBUyxNQUFmO0FBQWdCLHVCQUFPLEVBQUUsQ0FBekI7QUFBQSx3Q0FDRSxxRUFBQyxzREFBRDtBQUFNLHNCQUFJLE1BQVY7QUFBVyxvQkFBRSxFQUFFLENBQWY7QUFBa0Isb0JBQUUsRUFBRSxFQUF0QjtBQUFBLHlDQUVFLHFFQUFDLHFGQUFEO0FBQ0Usd0JBQUksRUFBQyxhQURQO0FBRUUseUJBQUssRUFBQyxTQUZSO0FBR0UsMkJBQU8sRUFBQyxVQUhWO0FBSUUsNEJBQVEsRUFBRXZCO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFXRSxxRUFBQyxzREFBRDtBQUFNLHNCQUFJLE1BQVY7QUFBVyxvQkFBRSxFQUFFLENBQWY7QUFBa0Isb0JBQUUsRUFBRSxFQUF0QjtBQUFBLHlDQUNFLHFFQUFDLDBFQUFEO0FBQ0Usd0JBQUksRUFBQyxZQURQO0FBRUUseUJBQUssRUFBQyxVQUZSO0FBR0Usd0JBQUksRUFBQyxRQUhQO0FBSUUsMkJBQU8sRUFBQyxVQUpWO0FBS0UsNEJBQVEsRUFBRUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFYRixlQW9CRSxxRUFBQyxzREFBRDtBQUFNLHNCQUFJLE1BQVY7QUFBVyxvQkFBRSxFQUFFLENBQWY7QUFBa0Isb0JBQUUsRUFBRSxFQUF0QjtBQUEwQiw0QkFBVSxFQUFDLFFBQXJDO0FBQUEseUNBRUUscUVBQUMsNERBQUQ7QUFDRSx5QkFBSyxFQUFDLFdBRFI7QUFFRSwyQkFBTyxFQUFFLG1CQUFNO0FBQ2JmLHFDQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0F1QyxnQ0FBVTtBQUNYLHFCQUxIO0FBQUEsMkNBTUUscUVBQUMseURBQUQ7QUFBUyw4QkFBUSxFQUFDLE9BQWxCO0FBQUEsNkNBQ0UscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBb0NFLHFFQUFDLHFEQUFEO0FBQUssa0JBQUUsRUFBRSxDQUFUO0FBQUEsdUNBQ0UscUVBQUMsaURBQUQ7QUFBUyx1QkFBSyxFQUFFekQsR0FBaEI7QUFBcUIsd0JBQU0sRUFBRUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixFQTZPR2dDLE1BQU0sQ0FBQ0YsV0FBUCxpQkFDQyxxRUFBQyxxREFBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQVksZUFBTyxFQUFDLE1BQXBCO0FBQTJCLHNCQUFjLEVBQUMsUUFBMUM7QUFBQSwrQkFDRSxxRUFBQyxnRUFBRDtBQUFnQixlQUFLLEVBQUU7QUFBRTJCLG9CQUFRLEVBQUU7QUFBWixXQUF2QjtBQUE2QyxlQUFLLE1BQWxEO0FBQUEsb0JBQ0d6QixNQUFNLENBQUNGLFdBQVAsQ0FBbUI0QjtBQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlPSixlQXFQRSxxRUFBQyxxREFBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQUEsa0JBRUdyQixZQUFZLGdCQUNYLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFcsZ0JBR1gscUVBQUMsd0RBQUQ7QUFDRSxpQkFBTyxFQUFDLFdBRFY7QUFFRSxlQUFLLEVBQUMsV0FGUjtBQUdFLGNBQUksRUFBQyxRQUhQO0FBSUUsa0JBQVEsRUFBRSxDQUFDckIsWUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQTdFaUQsV0FxVmxDd0MsVUFyVmtDO0FBQUE7QUFBQSxJQXdXakQ7OztBQXhXaUQ7QUFBQSxtU0FxVmpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNPckIsU0FBUyxHQUFHeEMsV0FEbkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFHUWdFLHdCQUhSLEdBR3FCO0FBQ2pCNUQsbUJBQUcsRUFBRUEsR0FBRyxDQUFDQSxHQUFKLENBQVFoQixFQURJO0FBRWpCNkUsdUJBQU8sRUFBRXpCLFNBQVMsR0FBR3hDLFdBQVosQ0FBd0JaLEVBRmhCO0FBR2pCOEQsb0JBQUksRUFBRUMsTUFBTSxDQUFDWCxTQUFTLEdBQUd2QyxVQUFiLENBSEs7QUFJakJpRSw0QkFBWSxFQUFFMUIsU0FBUyxHQUFHeEMsV0FBWixDQUF3Qm1FO0FBSnJCLGVBSHJCO0FBQUE7QUFBQSxxQkFTcUJDLDZDQUFLLENBQUNDLElBQU4sQ0FDakIsa0NBRGlCLEVBRWpCTCxVQUZpQixDQVRyQjs7QUFBQTtBQVNRTSxrQkFUUjtBQWNFakUsb0JBQU0saUNBQU1ELEdBQU47QUFBVzBDLHlCQUFTLHlKQUFNMUMsR0FBRyxDQUFDMEMsU0FBVixJQUFxQndCLElBQUksQ0FBQ0MsSUFBMUI7QUFBcEIsaUJBQU47QUFFQWhDLHNCQUFRLENBQUMsYUFBRCxFQUFnQixFQUFoQixDQUFSO0FBQ0FBLHNCQUFRLENBQUMsWUFBRCxFQUFlLENBQWYsQ0FBUjs7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FyVmlEO0FBQUE7QUFBQTs7QUFBQSxXQTBXbENnQixRQTFXa0M7QUFBQTtBQUFBOztBQUFBO0FBQUEsaVNBMFdqRCxrQkFBd0JpQixNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxrQkFBSTtBQUNGO0FBQ0FqQyx3QkFBUSxDQUFDLGFBQUQsRUFBZ0IsRUFBaEIsQ0FBUjtBQUNNa0Msd0JBSEosR0FHZTtBQUNmQyxzQkFBSSxFQUFFRixNQUFNLENBQUN2RixPQURFO0FBRWY0QywwQkFBUSxFQUFFMkMsTUFBTSxDQUFDckYsWUFBUCxDQUFvQkMsRUFGZjtBQUdmTSxpQ0FBZSxFQUFFOEUsTUFBTSxDQUFDOUUsZUFIVDtBQUlmSCwyQkFBUyxFQUFFaUYsTUFBTSxDQUFDakYsU0FKSDtBQUtmRSx5QkFBTyxFQUFFK0UsTUFBTSxDQUFDL0UsT0FMRDtBQU1mRyw4QkFBWSxFQUFFNEUsTUFBTSxDQUFDNUUsWUFOTjtBQU9mcUMsMkJBQVMsRUFBRXVDLE1BQU0sQ0FBQzNFLFVBUEg7QUFRZmtCLDBCQUFRLEVBQUVJLFdBQVcsQ0FBQ0osUUFSUDtBQVNmRyw0QkFBVSxFQUFFQyxXQUFXLENBQUNELFVBVFQ7QUFVZmdCLCtCQUFhLEVBQUVzQyxNQUFNLENBQUMxRSxhQVZQO0FBV2ZtQixxQkFBRyxFQUFFdUQsTUFBTSxDQUFDekU7QUFYRyxpQkFIZjtBQWdCSTRFLHdCQWhCSixHQWdCZVAsNkNBQUssQ0FDbkJRLEdBRGMsc0NBQ29CeEUsR0FBRyxDQUFDQSxHQUFKLENBQVFoQixFQUQ1QixHQUNrQ3FGLFFBRGxDLEVBRWRJLElBRmMsQ0FFVCxVQUFDQyxHQUFELEVBQVM7QUFDYkMseUJBQU8sQ0FBQ0MsR0FBUixDQUNFNUUsR0FBRyxDQUFDMEMsU0FBSixDQUFjbUMsR0FBZDtBQUFBLGlUQUFrQixrQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVkMseUNBRFUsR0FDSTtBQUNsQi9FLG1DQUFHLEVBQUVBLEdBQUcsQ0FBQ0EsR0FBSixDQUFRaEIsRUFESztBQUVsQjZFLHVDQUFPLEVBQUVpQixJQUFJLENBQUM5RixFQUZJO0FBR2xCOEQsb0NBQUksRUFBRWdDLElBQUksQ0FBQ2hDLElBSE87QUFJbEJnQiw0Q0FBWSxFQUFFZ0IsSUFBSSxDQUFDZixLQUpEO0FBS2xCbEIseUNBQVMsRUFBRWlDLElBQUksQ0FBQ2pDLFNBTEU7QUFNbEJtQyw4Q0FBYyxFQUFFRixJQUFJLENBQUNFLGNBQUwsR0FBc0JGLElBQUksQ0FBQ0UsY0FBM0IsR0FBNEM7QUFOMUMsK0JBREo7QUFBQTtBQUFBLHFDQVNTaEIsNkNBQUssQ0FBQ1EsR0FBTiw0Q0FDYU0sSUFBSSxDQUFDOUYsRUFEbEIsR0FFdkIrRixXQUZ1QixDQVRUOztBQUFBO0FBU1ZFLHdDQVRVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERjtBQWdCRCxpQkFuQmMsQ0FoQmYsRUFxQ0Y7O0FBQ0E1RSwrQkFBZSxDQUFDLHdCQUFELEVBQTJCO0FBQUU2RSx5QkFBTyxFQUFFO0FBQVgsaUJBQTNCLENBQWY7QUFDQTdDLHFCQUFLO0FBQ0w4QyxrRUFBTSxDQUFDQyxJQUFQLENBQVksT0FBWjtBQUNELGVBekNELENBeUNFLE9BQU9DLEdBQVAsRUFBWTtBQUNaO0FBQ0FoRiwrQkFBZSxDQUFDLHFCQUFELEVBQXdCO0FBQUU2RSx5QkFBTyxFQUFFO0FBQVgsaUJBQXhCLENBQWYsQ0FGWSxDQUlaOztBQUNBaEQsd0JBQVEsQ0FBQyxhQUFELEVBQWdCO0FBQ3RCb0Qsc0JBQUksRUFBRSxRQURnQjtBQUV0QjNCLHlCQUFPLEVBQUU7QUFGYSxpQkFBaEIsQ0FBUjtBQUlEOztBQW5ESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTFXaUQ7QUFBQTtBQUFBO0FBK1psRDs7R0EvWlE3RCxJO1VBQ1M3QixTLEVBQ1ltQyxzRCxFQVdaZ0Isd0Q7OztLQWJUdEIsSTtBQWlhTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9xcy9bcG9xSWRdL2VkaXQuZDI1Y2Q5NTU3MTM1NjMxMmE0YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXHJcbiAgRGl2aWRlcixcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIEljb25CdXR0b24sXHJcbiAgbWFrZVN0eWxlcyxcclxuICBTdmdJY29uLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XHJcbmltcG9ydCB7IFBsdXMgYXMgUGx1c0ljb24gfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBDdXN0b21lckF1dG9Db21wbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9DdXN0b21lckF1dG9Db21wZWxldGUnO1xyXG5pbXBvcnQgUHJvZHVjdEF1dG9Db21wbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Qcm9kdWN0QXV0b0NvbXBlbGV0ZSc7XHJcbmltcG9ydCBGb3JtRGF0ZVBpY2tlciBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Gb3JtRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRm9ybUlucHV0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9SZXN1bHRzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQC9yb290L2kxOG4nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbiAgZWRpdG9yOiB7XHJcbiAgICAnJiAucWwtZWRpdG9yJzoge1xyXG4gICAgICBoZWlnaHQ6IDQwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGRQcm9kdWN0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIHBvcW5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnQk9RIG5hbWUgaXMgcmVxdWlyZWQnKSxcclxuICBjdXN0b21lck5hbWU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoe1xyXG4gICAgICBpZDogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgICAgIG5hbWU6IHl1cC5zdHJpbmcoKS5udWxsYWJsZSgpLFxyXG4gICAgfSlcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAucmVxdWlyZWQoJ0N1dG9tZXIgbmFtZSBpcyByZXF1aXJlZCcpLFxyXG4gIHN0YXJ0RGF0ZTogeXVwXHJcbiAgICAuZGF0ZSgpXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnR5cGVFcnJvcignSW52YWxpZCBkYXRlLicpXHJcbiAgICAucmVxdWlyZWQoJ1JlcXVpcmVkLicpLFxyXG4gIGVuZERhdGU6IHl1cFxyXG4gICAgLmRhdGUoKVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC50eXBlRXJyb3IoJ0ludmFsaWQgZGF0ZS4nKVxyXG4gICAgLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBzaGlwcGluZ0FkZHJlc3M6IHl1cC5zdHJpbmcoKS5tYXgoMjU1KSxcclxuICBzaGlwcGluZ0Nvc3Q6IHl1cC5udW1iZXIoKSxcclxuICBvdGhlckNvc3RzOiB5dXAubnVtYmVyKCksXHJcbiAgdG90YWxkaXNjb3VudDogeXVwLm51bWJlcigpLFxyXG4gIHZhdHBlcmNlbnRhZ2U6IHl1cC5udW1iZXIoKSxcclxuICBwcm9kdWN0TmFtZTogeXVwXHJcbiAgICAub2JqZWN0KClcclxuICAgIC5zaGFwZSh7IGlkOiB5dXAubnVtYmVyKCksIG5hbWU6IHl1cC5zdHJpbmcoKSB9KVxyXG4gICAgLm51bGxhYmxlKCksXHJcbiAgcHJvZHVjdFF0eTogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gRm9ybSh7IGNsYXNzTmFtZSwgcG9xLCBzZXRQT1EsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCBbcHJvZHVjdHNDb3N0LCBzZXRQcm9kdWN0c0Nvc3RdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBwb3EucG9xLnByb2R1Y3RUb3RhbGNvc3QsXHJcbiAgKTtcclxuICBjb25zdCBbY2FsY3VsYXRpb24sIHNldENhbGN1bGF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHN1YnRvdGFsOiBwb3EucG9xLnN1YnRvdGFsLFxyXG4gICAgdG90YWx2YXQ6IChwb3EucG9xLnZhdCAqIHBvcS5wb3Euc3VidG90YWwpIC8gMTAwLFxyXG4gICAgZ3JhbmRUb3RhbDogcG9xLnBvcS5zdWJ0b3RhbCArIChwb3EucG9xLnZhdCAqIHBvcS5wb3Euc3VidG90YWwpIC8gMTAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlbmFibGVjcmVhdGUsIHNldEVuYWJsZUNyZWF0ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKHtcclxuICAgIG1vZGU6ICdhbGwnLFxyXG4gICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpLFxyXG4gICAgZGVmYXVsdFZhbHVlczoge1xyXG4gICAgICBwb3FuYW1lOiBgJHtwb3EucG9xLmlkfS1BcmNoaXBgIHx8ICcnLFxyXG4gICAgICBjdXN0b21lck5hbWU6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHBvcS5wb3EuY3VzdG9tZXIuaWQsXHJcbiAgICAgICAgICBuYW1lOiBgJHtwb3EucG9xLmN1c3RvbWVyLmZpcnN0TmFtZX0gJHtwb3EucG9xLmN1c3RvbWVyLmxhc3ROYW1lfWAsXHJcbiAgICAgICAgfSB8fCBudWxsLFxyXG4gICAgICBzdGFydERhdGU6IHBvcS5wb3Euc3RhcnREYXRlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgIGVuZERhdGU6IHBvcS5wb3EuZW5kRGF0ZSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHBvcS5wb3Euc2hpcHBpbmdBZGRyZXNzIHx8ICcnLFxyXG4gICAgICBzaGlwcGluZ0Nvc3Q6IHBvcS5wb3Euc2hpcHBpbmdDb3N0IHx8IDAsXHJcbiAgICAgIG90aGVyQ29zdHM6IHBvcS5wb3Eub3RoZXJDb3N0IHx8IDAsXHJcbiAgICAgIHRvdGFsZGlzY291bnQ6IHBvcS5wb3EudG90YWxEaXNjb3VudCB8fCAwLFxyXG4gICAgICBwcm9kdWN0TmFtZTogbnVsbCxcclxuICAgICAgdmF0cGVyY2VudGFnZTogcG9xLnBvcS52YXQgfHwgMCxcclxuICAgICAgcHJvZHVjdFF0eTogMSxcclxuICAgICAgc3VibWl0RXJyb3I6ICcnLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBzZXRFcnJvcixcclxuICAgIHNldFZhbHVlLFxyXG4gICAgZ2V0VmFsdWVzLFxyXG4gICAgcmVzZXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgaXNTdWJtaXR0aW5nIH0sXHJcbiAgfSA9IG1ldGhvZHM7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRlbENhbGN1bGF0ZSgpIHtcclxuICAgIGxldCBpdGVtcHJvZHVjdGNvc3QgPSAwO1xyXG4gICAgcG9xLnBvcURldGFpbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGl0ZW1wcm9kdWN0Y29zdCArPSBlbGVtZW50LnNhbGVwcmljZSAqIGVsZW1lbnQucW50eTtcclxuICAgIH0pO1xyXG4gICAgc2V0UHJvZHVjdHNDb3N0KGl0ZW1wcm9kdWN0Y29zdCk7XHJcbiAgICB2YXIgc3VidG90YWwgPVxyXG4gICAgICBpdGVtcHJvZHVjdGNvc3QgK1xyXG4gICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkub3RoZXJDb3N0cykgK1xyXG4gICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkuc2hpcHBpbmdDb3N0KSAtXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS50b3RhbGRpc2NvdW50KTtcclxuICAgIHZhciB0b3RhbHZhdCA9IChzdWJ0b3RhbCAqIGdldFZhbHVlcygpLnZhdHBlcmNlbnRhZ2UpIC8gMTAwO1xyXG4gICAgdmFyIGdyYW5kVG90YWwgPSBzdWJ0b3RhbCArIHRvdGFsdmF0O1xyXG4gICAgc2V0Q2FsY3VsYXRpb24oeyBzdWJ0b3RhbCwgdG90YWx2YXQsIGdyYW5kVG90YWwgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBwcm9kdWN0c1RvdGFsQ29zdCgpIHtcclxuICAvLyAgIGxldCBwcm9kdWN0c0Nvc3RISCA9IDA7XHJcbiAgLy8gICBwb3EucG9xRGV0YWlsLm1hcCgoaXRlbSkgPT4ge1xyXG4gIC8vICAgICBjb25zdCBpdGVtcHJpY2UgPSBpdGVtLnNhbGVwcmljZSAqIGl0ZW0ucW50eTtcclxuICAvLyAgICAgcHJvZHVjdHNDb3N0SEggKz0gaXRlbXByaWNlO1xyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgcmV0dXJuIHByb2R1Y3RzQ29zdEhIO1xyXG4gIC8vIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHByb2R1Y3RzVG90YWxDb3N0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3EpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgICB7Li4ucmVzdH0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fT5cclxuICAgICAgICAgICAgey8qIEJhc2ljICovfVxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIkJhc2ljXCIgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgey8qIE51bWJlciAjICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9xbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJPUSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBDdXN0b21lciBuYW1lICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21lck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBTdGFydCBEYXRlICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0RGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogRW5kIERhdGUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1EYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVuZCBEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFNoaXBwaW5nIEFkZHJlc3MgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ0FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaGlwcGluZyBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICA8Qm94IG10PXszfT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiT3RoZXJzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nQ29zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hpcHBpbmcgQ29zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlckNvc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNpZ24gLSBJbnN0YWxsYXRpb24gLSBEb2N1bWVudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdGFsZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIGRpc2NvdW50IGFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2YXRwZXJjZW50YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWQVQgJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezZ9IG1kPXs2fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlQ3JlYXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRlbENhbGN1bGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FsY0J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbGN1bGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8Qm94IG10PXszfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIlRvdGFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+TmV0IHByb2R1Y3RzIGNvc3QgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKChwcm9kdWN0c0Nvc3QgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5TaGlwcGluZyBhbmQgSW5zdGFsbGF0aW9uIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmFsdWVzKCkub3RoZXJDb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIoZ2V0VmFsdWVzKCkub3RoZXJDb3N0cykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkuc2hpcHBpbmdDb3N0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwb3EucG9xLnNoaXBwaW5nQ29zdCArIHBvcS5wb3Eub3RoZXJDb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlN1YiBUb3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FsY3VsYXRpb24uc3VidG90YWwgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5UYXhlcyA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgbmFtZT1cInZhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbGN1bGF0aW9uLnRvdGFsdmF0ICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgLyAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+R3JhbmQgdG90YWwgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgbmFtZT1cImdyYW5kdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxjdWxhdGlvbi5ncmFuZFRvdGFsICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgLyAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIHsvKiBQcm9kdWN0cyAqL31cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17OH0+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiUHJvZHVjdHNcIiAvPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs5fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IE5hbWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogUXVhbnRpdHkgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RRdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MX0geHM9ezEyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlQ3JlYXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbiBmb250U2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgey8qIFByb2R1Y3RzIFRhYmxlICovfVxyXG4gICAgICAgICAgICAgICAgPEJveCBtdD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIDxSZXN1bHRzIHF1ZXJ5PXtwb3F9IHNldFBPUT17c2V0UE9RfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgey8qIEVycm9yICovfVxyXG4gICAgICAgIHtlcnJvcnMuc3VibWl0RXJyb3IgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD17MX0gZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQgc3R5bGU9e3sgZm9udFNpemU6ICcyNHB4JyB9fSBlcnJvcj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLnN1Ym1pdEVycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Qm94IG10PXs1fT5cclxuICAgICAgICAgIHsvKiBTdWJtaXQgKi99XHJcbiAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gKFxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZWNyZWF0ZX0+XHJcbiAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRm9ybVByb3ZpZGVyPlxyXG4gICk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gYWRkcHJvZHVjdCgpIHtcclxuICAgIGlmICghZ2V0VmFsdWVzKCkucHJvZHVjdE5hbWUpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICBwb3E6IHBvcS5wb3EuaWQsXHJcbiAgICAgIHByb2R1Y3Q6IGdldFZhbHVlcygpLnByb2R1Y3ROYW1lLmlkLFxyXG4gICAgICBxbnR5OiBOdW1iZXIoZ2V0VmFsdWVzKCkucHJvZHVjdFF0eSksXHJcbiAgICAgIGVuZHVzZXJwcmljZTogZ2V0VmFsdWVzKCkucHJvZHVjdE5hbWUucHJpY2UsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjEzMzcvcG9xZGV0YWlscycsXHJcbiAgICAgIG5ld1Byb2R1Y3QsXHJcbiAgICApO1xyXG5cclxuICAgIHNldFBPUSh7IC4uLnBvcSwgcG9xRGV0YWlsOiBbLi4ucG9xLnBvcURldGFpbCwgcmVzcC5kYXRhXSB9KTtcclxuXHJcbiAgICBzZXRWYWx1ZSgncHJvZHVjdE5hbWUnLCB7fSk7XHJcbiAgICBzZXRWYWx1ZSgncHJvZHVjdFF0eScsIDApO1xyXG4gIH1cclxuICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFJlc2V0IHN1Ym1pdEVycm9yIG1lc3NhZ2VcclxuICAgICAgc2V0VmFsdWUoJ3N1Ym1pdEVycm9yJywgJycpO1xyXG4gICAgICBjb25zdCBwb3FJbnB1dCA9IHtcclxuICAgICAgICBOYW1lOiB2YWx1ZXMucG9xbmFtZSxcclxuICAgICAgICBjdXN0b21lcjogdmFsdWVzLmN1c3RvbWVyTmFtZS5pZCxcclxuICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHZhbHVlcy5zaGlwcGluZ0FkZHJlc3MsXHJcbiAgICAgICAgc3RhcnREYXRlOiB2YWx1ZXMuc3RhcnREYXRlLFxyXG4gICAgICAgIGVuZERhdGU6IHZhbHVlcy5lbmREYXRlLFxyXG4gICAgICAgIHNoaXBwaW5nQ29zdDogdmFsdWVzLnNoaXBwaW5nQ29zdCxcclxuICAgICAgICBvdGhlckNvc3Q6IHZhbHVlcy5vdGhlckNvc3RzLFxyXG4gICAgICAgIHN1YnRvdGFsOiBjYWxjdWxhdGlvbi5zdWJ0b3RhbCxcclxuICAgICAgICBncmFuZFRvdGFsOiBjYWxjdWxhdGlvbi5ncmFuZFRvdGFsLFxyXG4gICAgICAgIHRvdGFsRGlzY291bnQ6IHZhbHVlcy50b3RhbGRpc2NvdW50LFxyXG4gICAgICAgIHZhdDogdmFsdWVzLnZhdHBlcmNlbnRhZ2UsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3NcclxuICAgICAgICAucHV0KGBodHRwOi8vbG9jYWxob3N0OjEzMzcvcG9xcy8ke3BvcS5wb3EuaWR9YCwgcG9xSW5wdXQpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgIHBvcS5wb3FEZXRhaWwubWFwKGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGV0YWlsaW1wdXQgPSB7XHJcbiAgICAgICAgICAgICAgICBwb3E6IHBvcS5wb3EuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgcW50eTogaXRlbS5xbnR5LFxyXG4gICAgICAgICAgICAgICAgZW5kdXNlcnByaWNlOiBpdGVtLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgc2FsZXByaWNlOiBpdGVtLnNhbGVwcmljZSxcclxuICAgICAgICAgICAgICAgIHNhbGVwZXJjZW50YWdlOiBpdGVtLnNhbGVwZXJjZW50YWdlID8gaXRlbS5zYWxlcGVyY2VudGFnZSA6IDAsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBjb25zdCBkZXRhaWxyZXNwID0gYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3FkZXRhaWxzLyR7aXRlbS5pZH1gLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsaW1wdXQsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU2hvdyBzdWNjZXNzIG1lc3NhZ2VcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdFZGl0IHN1Y2Nlc3NmdWxseSBkb25lJywgeyB2YXJpYW50OiAnc3VjY2VzcycgfSk7XHJcbiAgICAgIHJlc2V0KCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvcG9xcycpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIC8vIFNob3cgZXJyb3IgbWVzc2FnZVxyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ0Vycm9yIGVkaXQgUXV0YXRpb24nLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcblxyXG4gICAgICAvLyBTaG93IHN1Ym1pdEVycm9yIG1lc3NhZ2VcclxuICAgICAgc2V0RXJyb3IoJ3N1Ym1pdEVycm9yJywge1xyXG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdFcnJvciBlZGl0IFF1dGF0aW9uJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9