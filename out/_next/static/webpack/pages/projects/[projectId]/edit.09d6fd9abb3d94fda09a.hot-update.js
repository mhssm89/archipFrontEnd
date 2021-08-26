webpackHotUpdate_N_E("pages/projects/[projectId]/edit",{

/***/ "./src/components/pages/projects/edit/Form.js":
/*!****************************************************!*\
  !*** ./src/components/pages/projects/edit/Form.js ***!
  \****************************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_components_controls_FormAutocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/controls/FormAutocomplete */ "./src/components/controls/FormAutocomplete.js");
/* harmony import */ var src_components_controls_FormDatePicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components/controls/FormDatePicker */ "./src/components/controls/FormDatePicker.js");
/* harmony import */ var src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/controls/FormInput */ "./src/components/controls/FormInput.js");
/* harmony import */ var src_components_controls_CustomerAutoCompelete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/components/controls/CustomerAutoCompelete */ "./src/components/controls/CustomerAutoCompelete.js");
/* harmony import */ var src_components_controls_PoqAutocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/components/controls/PoqAutocomplete */ "./src/components/controls/PoqAutocomplete.js");
/* harmony import */ var src_components_controls_ProductAutoCompelete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/components/controls/ProductAutoCompelete */ "./src/components/controls/ProductAutoCompelete.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Results */ "./src/components/pages/projects/edit/Results.js");








var _jsxFileName = "F:\\archip-frontend\\src\\components\\pages\\projects\\edit\\Form.js",
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
var projectStatus = [{
  label: 'Negotiation',
  value: 'Negotiation'
}, {
  label: 'Signed',
  value: 'Signed'
}, {
  label: 'Inprogress',
  value: 'Inprogress'
}, {
  label: 'Finished',
  value: 'Finished'
}];
var projectscope = [{
  label: 'Personal',
  value: 'Personal'
}, {
  label: 'Commercial',
  value: 'Commercial'
}, {
  label: 'Industrial',
  value: 'Industrial'
}];
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
  projectName: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().max(255).required('Required.'),
  customerName: yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
    id: yup__WEBPACK_IMPORTED_MODULE_14__["number"]().nullable(),
    name: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().nullable()
  }).nullable().required('Cutomer name is required'),
  poqNumber: yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
    id: yup__WEBPACK_IMPORTED_MODULE_14__["number"]().nullable,
    name: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().nullable(),
    customer: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().nullable(),
    customerId: yup__WEBPACK_IMPORTED_MODULE_14__["number"]().nullable(),
    grandtotal: yup__WEBPACK_IMPORTED_MODULE_14__["number"]().nullable()
  }).nullable().required('BOQ name is required'),
  scope: yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
    lable: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().nullable(),
    value: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().nullable()
  }).nullable().required('Project scope is required'),
  status: yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
    lable: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().nullable(),
    value: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().nullable()
  }).nullable().required('Project status is required'),
  startDate: yup__WEBPACK_IMPORTED_MODULE_14__["date"]().nullable().typeError('Invalid date.').required('Required.'),
  endDate: yup__WEBPACK_IMPORTED_MODULE_14__["date"]().nullable().typeError('Invalid date.').required('Required.'),
  shippingAddress: yup__WEBPACK_IMPORTED_MODULE_14__["string"]().max(255),
  shippingCost: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
  otherCosts: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
  totaldiscount: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
  vatpercentage: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
  productQty: yup__WEBPACK_IMPORTED_MODULE_14__["number"]().nullable(),
  productName: yup__WEBPACK_IMPORTED_MODULE_14__["object"]().shape({
    id: yup__WEBPACK_IMPORTED_MODULE_14__["number"](),
    name: yup__WEBPACK_IMPORTED_MODULE_14__["string"]()
  }).nullable()
});

function Form(_ref) {
  _s();

  var className = _ref.className,
      project = _ref.project,
      setproject = _ref.setproject,
      rest = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["className", "project", "setproject"]);

  var classes = useStyles();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_11__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(project.prject.productTotalCost),
      _React$useState2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
      productsCost = _React$useState2[0],
      setProductsCost = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState({
    subtotal: project.project.subtotal,
    totalvat: project.project.vat * project.project.subtotal / 100,
    grandTotal: project.project.subtotal + project.project.vat * project.project.subtotal / 100
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
      projectName: project.project.name || '',
      poqNumber: {
        id: project.project.poq.id,
        name: project.project.poq.Name,
        customer: "".concat(project.project.customer.firstName, " ").concat(project.project.customer.lastName),
        customerId: project.project.customer.id,
        grandtotal: project.project.grandTotal
      } || null,
      customerName: {
        id: project.project.customer.id,
        name: "".concat(project.project.customer.firstName, " ").concat(project.project.customer.lastName, " ")
      } || null,
      status: {
        label: project.project.status,
        value: project.project.status
      } || '',
      scope: {
        label: project.project.type,
        value: project.project.type
      } || '',
      startDate: project.project.startDate || new Date(),
      endDate: project.project.endDate || new Date(),
      shippingAddress: project.project.poq.shippingAddress || '',
      shippingCost: project.project.poq.shippingCost || 0,
      otherCosts: project.project.poq.otherCost || 0,
      totaldiscount: project.project.poq.totalDiscount || 0,
      vatpercentage: project.project.poq.vat || 0,
      productQty: 1,
      productName: null,
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
    project.projectdetail.forEach(function (element) {
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
  } // function loadcproduct() {
  //   let productsCostHH = 0;
  //   project.projectdetail.map((item) => {
  //     const itemprice = item.EndUserPrice * item.qnty;
  //     productsCostHH += itemprice;
  //   });
  //   return productsCostHH;
  // }


  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {// loadcproduct();
  }, []);
  console.log(project);
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
          lg: 5,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
              title: "Basic"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
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
                    name: "projectName",
                    label: "Project Name",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 12,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_CustomerAutoCompelete__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    name: "customerName",
                    label: "Customer",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 12,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_PoqAutocomplete__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    name: "poqNumber",
                    label: "B.O.Q #",
                    variant: "outlined",
                    disabled: true,
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 12,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormAutocomplete__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    name: "status",
                    label: "Project Status",
                    options: projectStatus,
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 12,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormAutocomplete__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    name: "scope",
                    label: "Project Scope",
                    options: projectscope,
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
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
                    lineNumber: 274,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
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
                    lineNumber: 283,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
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
                    lineNumber: 292,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
            mt: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
                title: "Others"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
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
                      lineNumber: 315,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
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
                      lineNumber: 325,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
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
                      lineNumber: 334,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 333,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 12,
                    md: 12
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
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
                      lineNumber: 345,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
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
                      lineNumber: 354,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
            mt: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
                title: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 17
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
                      lineNumber: 409,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 408,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: Math.round((loadcproduct() + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 412,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 411,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Shipping and Installation : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 418,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 417,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 421,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 420,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Sub Total : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 429,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 428,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: Math.round((calculation.subtotal + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 432,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 431,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Taxes : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 439,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 438,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      name: "vat",
                      children: Math.round((calculation.totalvat + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 442,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 441,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Grand total : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 449,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 448,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      name: "grandtotal",
                      children: Math.round((calculation.grandTotal + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 452,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 451,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 407,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 406,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
          item: true,
          xs: 12,
          lg: 7,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
              title: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                container: true,
                spacing: 2,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 9,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_ProductAutoCompelete__WEBPACK_IMPORTED_MODULE_21__["default"], {
                    name: "productName",
                    label: "Product",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 473,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 471,
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
                    lineNumber: 482,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 481,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                  item: true,
                  md: 1,
                  xs: 12,
                  alignItems: "center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
                    color: "secondary",
                    onClick: function onClick() {
                      addproduct();
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["SvgIcon"], {
                      fontSize: "large",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_12__["Plus"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 498,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 497,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 492,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 490,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                mt: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Results__WEBPACK_IMPORTED_MODULE_23__["default"], {
                  query: project,
                  setproject: setproject
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 505,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 504,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
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
          lineNumber: 515,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mt: 5,
        children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "contained",
          color: "secondary",
          type: "submit",
          disabled: isSubmitting,
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 211,
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
                project: project.project.id,
                product: getValues().productName.id,
                qnty: Number(getValues().productQty),
                EndUserPrice: getValues().productName.price,
                SalePrice: 0
              };
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_22___default.a.post('http://localhost:1337/project-details', newProduct);

            case 5:
              resp = _context.sent;
              setproject(_objectSpread(_objectSpread({}, project), {}, {
                projectdetail: [].concat(Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(project.projectdetail), [resp.data])
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
    _onSubmit = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                setValue('submitError', '');
                console.log(values); // Reset submitError message
                // setValue('submitError', '');
                // const projectInput = {
                //   name: values.projectName,
                //   customer: value.customerName.id,
                //   poq: value.poqNumber.id,
                //   status: value.status.label,
                //   type: value.scope.label,
                //   sartDate: value.startDate,
                //   endDate: value.endDate,
                //   grandTotal: calculation.grandTotal,
                // };
                // console.log(projectInput);

                enqueueSnackbar('project edit successfully.', {
                  variant: 'success'
                });
                reset(); // Show success message
              } catch (err) {
                // Show error message
                enqueueSnackbar('Error edit Project', {
                  variant: 'error'
                }); // Show submitError message

                setError('submitError', {
                  type: 'submit',
                  message: 'Error edit project'
                });
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onSubmit.apply(this, arguments);
  }
}

_s(Form, "HQ1GHI77tIW07f4tkgriwUy98Ns=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvZWRpdC9Gb3JtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJlZGl0b3IiLCJoZWlnaHQiLCJhZGRQcm9kdWN0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJwcm9qZWN0U3RhdHVzIiwibGFiZWwiLCJ2YWx1ZSIsInByb2plY3RzY29wZSIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsInByb2plY3ROYW1lIiwibWF4IiwicmVxdWlyZWQiLCJjdXN0b21lck5hbWUiLCJpZCIsIm51bGxhYmxlIiwibmFtZSIsInBvcU51bWJlciIsImN1c3RvbWVyIiwiY3VzdG9tZXJJZCIsImdyYW5kdG90YWwiLCJzY29wZSIsImxhYmxlIiwic3RhdHVzIiwic3RhcnREYXRlIiwidHlwZUVycm9yIiwiZW5kRGF0ZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nQ29zdCIsIm90aGVyQ29zdHMiLCJ0b3RhbGRpc2NvdW50IiwidmF0cGVyY2VudGFnZSIsInByb2R1Y3RRdHkiLCJwcm9kdWN0TmFtZSIsIkZvcm0iLCJjbGFzc05hbWUiLCJwcm9qZWN0Iiwic2V0cHJvamVjdCIsInJlc3QiLCJjbGFzc2VzIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicHJqZWN0IiwicHJvZHVjdFRvdGFsQ29zdCIsInByb2R1Y3RzQ29zdCIsInNldFByb2R1Y3RzQ29zdCIsInN1YnRvdGFsIiwidG90YWx2YXQiLCJ2YXQiLCJncmFuZFRvdGFsIiwiY2FsY3VsYXRpb24iLCJzZXRDYWxjdWxhdGlvbiIsImVuYWJsZWNyZWF0ZSIsInNldEVuYWJsZUNyZWF0ZSIsIm1ldGhvZHMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwicG9xIiwiTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidHlwZSIsIkRhdGUiLCJvdGhlckNvc3QiLCJ0b3RhbERpc2NvdW50Iiwic3VibWl0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInNldFZhbHVlIiwiZ2V0VmFsdWVzIiwicmVzZXQiLCJpc1N1Ym1pdHRpbmciLCJmb3JtU3RhdGUiLCJoYW5kZWxDYWxjdWxhdGUiLCJpdGVtcHJvZHVjdGNvc3QiLCJwcm9qZWN0ZGV0YWlsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzYWxlcHJpY2UiLCJxbnR5IiwiTnVtYmVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiY2xzeCIsImNhbGNCdXR0b24iLCJNYXRoIiwicm91bmQiLCJsb2FkY3Byb2R1Y3QiLCJFUFNJTE9OIiwiYWRkcHJvZHVjdCIsImZvbnRTaXplIiwibWVzc2FnZSIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0IiwiRW5kVXNlclByaWNlIiwicHJpY2UiLCJTYWxlUHJpY2UiLCJheGlvcyIsInBvc3QiLCJyZXNwIiwiZGF0YSIsInZhbHVlcyIsInZhcmlhbnQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsVUFBTSxFQUFFO0FBQ04sc0JBQWdCO0FBQ2RDLGNBQU0sRUFBRTtBQURNO0FBRFYsS0FGK0I7QUFPdkNDLGNBQVUsRUFBRTtBQUNWQyxnQkFBVSxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFQMkIsR0FBWjtBQUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFwRSwrQkFBZSxDQUFDLDRCQUFELEVBQStCO0FBQUVxRSx5QkFBTyxFQUFFO0FBQVgsaUJBQS9CLENBQWY7QUFDQWxDLHFCQUFLLEdBbEJILENBb0JGO0FBQ0QsZUFyQkQsQ0FxQkUsT0FBT21DLEdBQVAsRUFBWTtBQUNaO0FBQ0F0RSwrQkFBZSxDQUFDLG9CQUFELEVBQXVCO0FBQUVxRSx5QkFBTyxFQUFFO0FBQVgsaUJBQXZCLENBQWYsQ0FGWSxDQUlaOztBQUNBckMsd0JBQVEsQ0FBQyxhQUFELEVBQWdCO0FBQ3RCUCxzQkFBSSxFQUFFLFFBRGdCO0FBRXRCaUMseUJBQU8sRUFBRTtBQUZhLGlCQUFoQixDQUFSO0FBSUQ7O0FBL0JIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBemJ5RDtBQUFBO0FBQUE7QUEwZDFEOztHQTFkUWpFLEk7VUFDU3hDLFMsRUFDWThDLHNELEVBYVppQix3RDs7O0tBZlR2QixJO0FBNGRNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdElkXS9lZGl0LjA5ZDZmZDlhYmIzZDk0ZmRhMDlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJY29uQnV0dG9uLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgU3ZnSWNvbixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyBQbHVzIGFzIFBsdXNJY29uIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb3JtQXV0b2NvbXBsZXRlIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgRm9ybURhdGVQaWNrZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRm9ybURhdGVQaWNrZXInO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBDdXN0b21lckF1dG9Db21wZWxldGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQ3VzdG9tZXJBdXRvQ29tcGVsZXRlJztcclxuaW1wb3J0IFBvcUF1dG9Db21wbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Qb3FBdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgUHJvZHVjdEF1dG9Db21wbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Qcm9kdWN0QXV0b0NvbXBlbGV0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL1Jlc3VsdHMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbiAgZWRpdG9yOiB7XHJcbiAgICAnJiAucWwtZWRpdG9yJzoge1xyXG4gICAgICBoZWlnaHQ6IDQwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGRQcm9kdWN0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHByb2plY3RTdGF0dXMgPSBbXHJcbiAgeyBsYWJlbDogJ05lZ290aWF0aW9uJywgdmFsdWU6ICdOZWdvdGlhdGlvbicgfSxcclxuICB7IGxhYmVsOiAnU2lnbmVkJywgdmFsdWU6ICdTaWduZWQnIH0sXHJcbiAgeyBsYWJlbDogJ0lucHJvZ3Jlc3MnLCB2YWx1ZTogJ0lucHJvZ3Jlc3MnIH0sXHJcbiAgeyBsYWJlbDogJ0ZpbmlzaGVkJywgdmFsdWU6ICdGaW5pc2hlZCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IHByb2plY3RzY29wZSA9IFtcclxuICB7IGxhYmVsOiAnUGVyc29uYWwnLCB2YWx1ZTogJ1BlcnNvbmFsJyB9LFxyXG4gIHsgbGFiZWw6ICdDb21tZXJjaWFsJywgdmFsdWU6ICdDb21tZXJjaWFsJyB9LFxyXG4gIHsgbGFiZWw6ICdJbmR1c3RyaWFsJywgdmFsdWU6ICdJbmR1c3RyaWFsJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgcHJvamVjdE5hbWU6IHl1cC5zdHJpbmcoKS5tYXgoMjU1KS5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgY3VzdG9tZXJOYW1lOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgaWQ6IHl1cC5udW1iZXIoKS5udWxsYWJsZSgpLFxyXG4gICAgICBuYW1lOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgIH0pXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnJlcXVpcmVkKCdDdXRvbWVyIG5hbWUgaXMgcmVxdWlyZWQnKSxcclxuXHJcbiAgcG9xTnVtYmVyOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgaWQ6IHl1cC5udW1iZXIoKS5udWxsYWJsZSxcclxuICAgICAgbmFtZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICAgIGN1c3RvbWVyOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgICAgY3VzdG9tZXJJZDogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgICAgIGdyYW5kdG90YWw6IHl1cC5udW1iZXIoKS5udWxsYWJsZSgpLFxyXG4gICAgfSlcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAucmVxdWlyZWQoJ0JPUSBuYW1lIGlzIHJlcXVpcmVkJyksXHJcbiAgc2NvcGU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoe1xyXG4gICAgICBsYWJsZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICAgIHZhbHVlOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgIH0pXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnJlcXVpcmVkKCdQcm9qZWN0IHNjb3BlIGlzIHJlcXVpcmVkJyksXHJcbiAgc3RhdHVzOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgbGFibGU6IHl1cC5zdHJpbmcoKS5udWxsYWJsZSgpLFxyXG4gICAgICB2YWx1ZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICB9KVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC5yZXF1aXJlZCgnUHJvamVjdCBzdGF0dXMgaXMgcmVxdWlyZWQnKSxcclxuICBzdGFydERhdGU6IHl1cFxyXG4gICAgLmRhdGUoKVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC50eXBlRXJyb3IoJ0ludmFsaWQgZGF0ZS4nKVxyXG4gICAgLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBlbmREYXRlOiB5dXBcclxuICAgIC5kYXRlKClcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAudHlwZUVycm9yKCdJbnZhbGlkIGRhdGUuJylcclxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgc2hpcHBpbmdBZGRyZXNzOiB5dXAuc3RyaW5nKCkubWF4KDI1NSksXHJcbiAgc2hpcHBpbmdDb3N0OiB5dXAubnVtYmVyKCksXHJcbiAgb3RoZXJDb3N0czogeXVwLm51bWJlcigpLFxyXG4gIHRvdGFsZGlzY291bnQ6IHl1cC5udW1iZXIoKSxcclxuICB2YXRwZXJjZW50YWdlOiB5dXAubnVtYmVyKCksXHJcbiAgcHJvZHVjdFF0eTogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgcHJvZHVjdE5hbWU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoeyBpZDogeXVwLm51bWJlcigpLCBuYW1lOiB5dXAuc3RyaW5nKCkgfSlcclxuICAgIC5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEZvcm0oeyBjbGFzc05hbWUsIHByb2plY3QsIHNldHByb2plY3QsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCBbcHJvZHVjdHNDb3N0LCBzZXRQcm9kdWN0c0Nvc3RdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBwcm9qZWN0LnByamVjdC5wcm9kdWN0VG90YWxDb3N0LFxyXG4gICk7XHJcbiAgY29uc3QgW2NhbGN1bGF0aW9uLCBzZXRDYWxjdWxhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBzdWJ0b3RhbDogcHJvamVjdC5wcm9qZWN0LnN1YnRvdGFsLFxyXG4gICAgdG90YWx2YXQ6IChwcm9qZWN0LnByb2plY3QudmF0ICogcHJvamVjdC5wcm9qZWN0LnN1YnRvdGFsKSAvIDEwMCxcclxuICAgIGdyYW5kVG90YWw6XHJcbiAgICAgIHByb2plY3QucHJvamVjdC5zdWJ0b3RhbCArXHJcbiAgICAgIChwcm9qZWN0LnByb2plY3QudmF0ICogcHJvamVjdC5wcm9qZWN0LnN1YnRvdGFsKSAvIDEwMCxcclxuICB9KTtcclxuICBjb25zdCBbZW5hYmxlY3JlYXRlLCBzZXRFbmFibGVDcmVhdGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBtZXRob2RzID0gdXNlRm9ybSh7XHJcbiAgICBtb2RlOiAnYWxsJyxcclxuICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcih2YWxpZGF0aW9uU2NoZW1hKSxcclxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5uYW1lIHx8ICcnLFxyXG4gICAgICBwb3FOdW1iZXI6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHByb2plY3QucHJvamVjdC5wb3EuaWQsXHJcbiAgICAgICAgICBuYW1lOiBwcm9qZWN0LnByb2plY3QucG9xLk5hbWUsXHJcbiAgICAgICAgICBjdXN0b21lcjogYCR7cHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmZpcnN0TmFtZX0gJHtwcm9qZWN0LnByb2plY3QuY3VzdG9tZXIubGFzdE5hbWV9YCxcclxuICAgICAgICAgIGN1c3RvbWVySWQ6IHByb2plY3QucHJvamVjdC5jdXN0b21lci5pZCxcclxuICAgICAgICAgIGdyYW5kdG90YWw6IHByb2plY3QucHJvamVjdC5ncmFuZFRvdGFsLFxyXG4gICAgICAgIH0gfHwgbnVsbCxcclxuICAgICAgY3VzdG9tZXJOYW1lOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBwcm9qZWN0LnByb2plY3QuY3VzdG9tZXIuaWQsXHJcbiAgICAgICAgICBuYW1lOiBgJHtwcm9qZWN0LnByb2plY3QuY3VzdG9tZXIuZmlyc3ROYW1lfSAke3Byb2plY3QucHJvamVjdC5jdXN0b21lci5sYXN0TmFtZX0gYCxcclxuICAgICAgICB9IHx8IG51bGwsXHJcbiAgICAgIHN0YXR1czpcclxuICAgICAgICB7IGxhYmVsOiBwcm9qZWN0LnByb2plY3Quc3RhdHVzLCB2YWx1ZTogcHJvamVjdC5wcm9qZWN0LnN0YXR1cyB9IHx8ICcnLFxyXG4gICAgICBzY29wZTogeyBsYWJlbDogcHJvamVjdC5wcm9qZWN0LnR5cGUsIHZhbHVlOiBwcm9qZWN0LnByb2plY3QudHlwZSB9IHx8ICcnLFxyXG4gICAgICBzdGFydERhdGU6IHByb2plY3QucHJvamVjdC5zdGFydERhdGUgfHwgbmV3IERhdGUoKSxcclxuICAgICAgZW5kRGF0ZTogcHJvamVjdC5wcm9qZWN0LmVuZERhdGUgfHwgbmV3IERhdGUoKSxcclxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiBwcm9qZWN0LnByb2plY3QucG9xLnNoaXBwaW5nQWRkcmVzcyB8fCAnJyxcclxuICAgICAgc2hpcHBpbmdDb3N0OiBwcm9qZWN0LnByb2plY3QucG9xLnNoaXBwaW5nQ29zdCB8fCAwLFxyXG4gICAgICBvdGhlckNvc3RzOiBwcm9qZWN0LnByb2plY3QucG9xLm90aGVyQ29zdCB8fCAwLFxyXG4gICAgICB0b3RhbGRpc2NvdW50OiBwcm9qZWN0LnByb2plY3QucG9xLnRvdGFsRGlzY291bnQgfHwgMCxcclxuICAgICAgdmF0cGVyY2VudGFnZTogcHJvamVjdC5wcm9qZWN0LnBvcS52YXQgfHwgMCxcclxuICAgICAgcHJvZHVjdFF0eTogMSxcclxuICAgICAgcHJvZHVjdE5hbWU6IG51bGwsXHJcbiAgICAgIHN1Ym1pdEVycm9yOiAnJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZXJyb3JzLFxyXG4gICAgc2V0RXJyb3IsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIGdldFZhbHVlcyxcclxuICAgIHJlc2V0LFxyXG4gICAgZm9ybVN0YXRlOiB7IGlzU3VibWl0dGluZyB9LFxyXG4gIH0gPSBtZXRob2RzO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kZWxDYWxjdWxhdGUoKSB7XHJcbiAgICBsZXQgaXRlbXByb2R1Y3Rjb3N0ID0gMDtcclxuICAgIHByb2plY3QucHJvamVjdGRldGFpbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGl0ZW1wcm9kdWN0Y29zdCArPSBlbGVtZW50LnNhbGVwcmljZSAqIGVsZW1lbnQucW50eTtcclxuICAgIH0pO1xyXG4gICAgc2V0UHJvZHVjdHNDb3N0KGl0ZW1wcm9kdWN0Y29zdCk7XHJcbiAgICB2YXIgc3VidG90YWwgPVxyXG4gICAgICBpdGVtcHJvZHVjdGNvc3QgK1xyXG4gICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkub3RoZXJDb3N0cykgK1xyXG4gICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkuc2hpcHBpbmdDb3N0KSAtXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS50b3RhbGRpc2NvdW50KTtcclxuICAgIHZhciB0b3RhbHZhdCA9IChzdWJ0b3RhbCAqIGdldFZhbHVlcygpLnZhdHBlcmNlbnRhZ2UpIC8gMTAwO1xyXG4gICAgdmFyIGdyYW5kVG90YWwgPSBzdWJ0b3RhbCArIHRvdGFsdmF0O1xyXG4gICAgc2V0Q2FsY3VsYXRpb24oeyBzdWJ0b3RhbCwgdG90YWx2YXQsIGdyYW5kVG90YWwgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBsb2FkY3Byb2R1Y3QoKSB7XHJcbiAgLy8gICBsZXQgcHJvZHVjdHNDb3N0SEggPSAwO1xyXG4gIC8vICAgcHJvamVjdC5wcm9qZWN0ZGV0YWlsLm1hcCgoaXRlbSkgPT4ge1xyXG4gIC8vICAgICBjb25zdCBpdGVtcHJpY2UgPSBpdGVtLkVuZFVzZXJQcmljZSAqIGl0ZW0ucW50eTtcclxuICAvLyAgICAgcHJvZHVjdHNDb3N0SEggKz0gaXRlbXByaWNlO1xyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgcmV0dXJuIHByb2R1Y3RzQ29zdEhIO1xyXG4gIC8vIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxvYWRjcHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtUHJvdmlkZXIgey4uLm1ldGhvZHN9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgey4uLnJlc3R9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NX0+XHJcbiAgICAgICAgICAgIHsvKiBCYXNpYyAqL31cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJCYXNpY1wiIC8+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBQcm9qZWN0IG5hbWUgIyAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2plY3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIEN1c3RvbWVyIG5hbWUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21lckF1dG9Db21wZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21lck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBQT1EgbnVtYmVyICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9xQXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9xTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQi5PLlEgI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIHByb2plY3Qgc3RhdHVzICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3QgU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2plY3RTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBwcm9qZWN0IHNjb3BlICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjb3BlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdCBTY29wZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0c2NvcGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBTdGFydCBEYXRlICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0RGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogRW5kIERhdGUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1EYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVuZCBEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFNoaXBwaW5nIEFkZHJlc3MgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ0FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaGlwcGluZyBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICB7LyogQ29zdHMgKi99XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJPdGhlcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb3N0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIFNoaXBwaW5nIENvc3QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ0Nvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoaXBwaW5nIENvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIE90aGVyIENvc3RzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJDb3N0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzaWduIC0gSW5zdGFsbGF0aW9uIC0gRG9jdW1lbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbGRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBkaXNjb3VudCBhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmF0cGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVkFUICVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXs2fSBtZD17Nn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZUNyZWF0ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kZWxDYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGNCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYWxjdWxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IG10PXszfT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q2FyZEhlYWRlciB0aXRsZT1cIlRvdGFsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5OZXQgcHJvZHVjdHMgY29zdCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2xvYWRjcHJvZHVjdCgpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3ViIFRvdGFsIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Y2FsY3VsYXRpb24uc3VidG90YWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5WQVQgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJ2YXRcIj57Y2FsY3VsYXRpb24udG90YWx2YXR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Ub3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBuYW1lPVwiZ3JhbmR0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRpb24uZ3JhbmRUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+ICovfVxyXG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJUb3RhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+TmV0IHByb2R1Y3RzIGNvc3QgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZCgobG9hZGNwcm9kdWN0KCkgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlNoaXBwaW5nIGFuZCBJbnN0YWxsYXRpb24gOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2dldFZhbHVlcygpLm90aGVyQ29zdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IE51bWJlcihnZXRWYWx1ZXMoKS5vdGhlckNvc3RzKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkuc2hpcHBpbmdDb3N0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9xLnBvcS5zaGlwcGluZ0Nvc3QgKyBwb3EucG9xLm90aGVyQ29zdH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlN1YiBUb3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxjdWxhdGlvbi5zdWJ0b3RhbCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VGF4ZXMgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJ2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbGN1bGF0aW9uLnRvdGFsdmF0ICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5HcmFuZCB0b3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBuYW1lPVwiZ3JhbmR0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FsY3VsYXRpb24uZ3JhbmRUb3RhbCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICB7LyogUHJvZHVjdHMgKi99XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezd9PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIlByb2R1Y3RzXCIgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OX0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBOYW1lICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFF1YW50aXR5ICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0UXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezF9IHhzPXsxMn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgQnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHByb2R1Y3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0cyBUYWJsZSAqL31cclxuICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8UmVzdWx0cyBxdWVyeT17cHJvamVjdH0gc2V0cHJvamVjdD17c2V0cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIHsvKiBFcnJvciAqL31cclxuICAgICAgICB7ZXJyb3JzLnN1Ym1pdEVycm9yICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9ezF9IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAnMjRweCcgfX0gZXJyb3I+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5zdWJtaXRFcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJveCBtdD17NX0+XHJcbiAgICAgICAgICB7LyogU3VibWl0ICovfVxyXG4gICAgICAgICAge2lzU3VibWl0dGluZyA/IChcclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRm9ybVByb3ZpZGVyPlxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZHByb2R1Y3QoKSB7XHJcbiAgICBpZiAoIWdldFZhbHVlcygpLnByb2R1Y3ROYW1lKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0LmlkLFxyXG4gICAgICBwcm9kdWN0OiBnZXRWYWx1ZXMoKS5wcm9kdWN0TmFtZS5pZCxcclxuICAgICAgcW50eTogTnVtYmVyKGdldFZhbHVlcygpLnByb2R1Y3RRdHkpLFxyXG4gICAgICBFbmRVc2VyUHJpY2U6IGdldFZhbHVlcygpLnByb2R1Y3ROYW1lLnByaWNlLFxyXG4gICAgICBTYWxlUHJpY2U6IDAsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjEzMzcvcHJvamVjdC1kZXRhaWxzJyxcclxuICAgICAgbmV3UHJvZHVjdCxcclxuICAgICk7XHJcbiAgICBzZXRwcm9qZWN0KHtcclxuICAgICAgLi4ucHJvamVjdCxcclxuICAgICAgcHJvamVjdGRldGFpbDogWy4uLnByb2plY3QucHJvamVjdGRldGFpbCwgcmVzcC5kYXRhXSxcclxuICAgIH0pO1xyXG4gICAgc2V0VmFsdWUoJ3Byb2R1Y3ROYW1lJywge30pO1xyXG4gICAgc2V0VmFsdWUoJ3Byb2R1Y3RRdHknLCAwKTtcclxuICB9XHJcblxyXG4gIC8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQodmFsdWVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRWYWx1ZSgnc3VibWl0RXJyb3InLCAnJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgIC8vIFJlc2V0IHN1Ym1pdEVycm9yIG1lc3NhZ2VcclxuICAgICAgLy8gc2V0VmFsdWUoJ3N1Ym1pdEVycm9yJywgJycpO1xyXG4gICAgICAvLyBjb25zdCBwcm9qZWN0SW5wdXQgPSB7XHJcbiAgICAgIC8vICAgbmFtZTogdmFsdWVzLnByb2plY3ROYW1lLFxyXG4gICAgICAvLyAgIGN1c3RvbWVyOiB2YWx1ZS5jdXN0b21lck5hbWUuaWQsXHJcbiAgICAgIC8vICAgcG9xOiB2YWx1ZS5wb3FOdW1iZXIuaWQsXHJcbiAgICAgIC8vICAgc3RhdHVzOiB2YWx1ZS5zdGF0dXMubGFiZWwsXHJcbiAgICAgIC8vICAgdHlwZTogdmFsdWUuc2NvcGUubGFiZWwsXHJcbiAgICAgIC8vICAgc2FydERhdGU6IHZhbHVlLnN0YXJ0RGF0ZSxcclxuICAgICAgLy8gICBlbmREYXRlOiB2YWx1ZS5lbmREYXRlLFxyXG4gICAgICAvLyAgIGdyYW5kVG90YWw6IGNhbGN1bGF0aW9uLmdyYW5kVG90YWwsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJbnB1dCk7XHJcblxyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ3Byb2plY3QgZWRpdCBzdWNjZXNzZnVsbHkuJywgeyB2YXJpYW50OiAnc3VjY2VzcycgfSk7XHJcbiAgICAgIHJlc2V0KCk7XHJcblxyXG4gICAgICAvLyBTaG93IHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIC8vIFNob3cgZXJyb3IgbWVzc2FnZVxyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ0Vycm9yIGVkaXQgUHJvamVjdCcsIHsgdmFyaWFudDogJ2Vycm9yJyB9KTtcclxuXHJcbiAgICAgIC8vIFNob3cgc3VibWl0RXJyb3IgbWVzc2FnZVxyXG4gICAgICBzZXRFcnJvcignc3VibWl0RXJyb3InLCB7XHJcbiAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXHJcbiAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGVkaXQgcHJvamVjdCcsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==