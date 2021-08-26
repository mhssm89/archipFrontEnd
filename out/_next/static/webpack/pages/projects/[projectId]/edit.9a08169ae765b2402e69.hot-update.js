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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(project.project.productTotalCost),
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
      shippingAddress: project.project.shippingAddress || '',
      shippingCost: project.project.shippingCost || 0,
      otherCosts: project.project.otherCost || 0,
      totaldiscount: project.project.totalDiscount || 0,
      vatpercentage: project.project.vat || 0,
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
      itemproductcost += element.Saleprice * element.qnty;
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
  }

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
          lg: 4,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
              title: "Basic"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
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
                    lineNumber: 216,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
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
                    lineNumber: 225,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
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
                    lineNumber: 234,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
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
                    name: "scope",
                    label: "Project Scope",
                    options: projectscope,
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
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(src_components_controls_FormDatePicker__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    name: "startDate",
                    label: "Start Date",
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
                    name: "endDate",
                    label: "End Date",
                    variant: "outlined",
                    errorObj: errors
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
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
                    lineNumber: 282,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
            mt: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
                title: "Others"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
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
                      lineNumber: 305,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
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
                      name: "totaldiscount",
                      label: "Total discount amount",
                      type: "number",
                      variant: "outlined",
                      errorObj: errors
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 324,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 12,
                    md: 12
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
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
                      lineNumber: 335,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 334,
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
                      lineNumber: 344,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
            mt: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
                title: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 363,
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
                      lineNumber: 367,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: Math.round((productsCost + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 370,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 369,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Shipping and Installation : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 376,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 375,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: getValues().otherCosts ? Number(getValues().otherCosts) + Number(getValues().shippingCost) : project.project.shippingcost + project.project.otherCost
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 379,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 378,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Sub Total : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 388,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: Math.round((calculation.subtotal + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 391,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Taxes : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 398,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 397,
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
                      lineNumber: 401,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 400,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Grand total : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 408,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      name: "grandtotal",
                      children: Math.round((calculation.grandTotal + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 411,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 410,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 365,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
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
              lineNumber: 426,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
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
                    lineNumber: 432,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 430,
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
                    lineNumber: 441,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 440,
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
                        lineNumber: 458,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 457,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 451,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 449,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 429,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                mt: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Results__WEBPACK_IMPORTED_MODULE_23__["default"], {
                  query: project,
                  setproject: setproject
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 464,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
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
          lineNumber: 475,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mt: 5,
        children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "contained",
          color: "secondary",
          type: "submit",
          disabled: isSubmitting,
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 481,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 201,
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
                EndUserPrice: getValues().productName.price
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

_s(Form, "5Selr6yX/6JFDncHBmDXS5svUo8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvZWRpdC9Gb3JtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJlZGl0b3IiLCJoZWlnaHQiLCJhZGRQcm9kdWN0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJwcm9qZWN0U3RhdHVzIiwibGFiZWwiLCJ2YWx1ZSIsInByb2plY3RzY29wZSIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsInByb2plY3ROYW1lIiwibWF4IiwicmVxdWlyZWQiLCJjdXN0b21lck5hbWUiLCJpZCIsIm51bGxhYmxlIiwibmFtZSIsInBvcU51bWJlciIsImN1c3RvbWVyIiwiY3VzdG9tZXJJZCIsImdyYW5kdG90YWwiLCJzY29wZSIsImxhYmxlIiwic3RhdHVzIiwic3RhcnREYXRlIiwidHlwZUVycm9yIiwiZW5kRGF0ZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nQ29zdCIsIm90aGVyQ29zdHMiLCJ0b3RhbGRpc2NvdW50IiwidmF0cGVyY2VudGFnZSIsInByb2R1Y3RRdHkiLCJwcm9kdWN0TmFtZSIsIkZvcm0iLCJjbGFzc05hbWUiLCJwcm9qZWN0Iiwic2V0cHJvamVjdCIsInJlc3QiLCJjbGFzc2VzIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicHJvZHVjdFRvdGFsQ29zdCIsInByb2R1Y3RzQ29zdCIsInNldFByb2R1Y3RzQ29zdCIsInN1YnRvdGFsIiwidG90YWx2YXQiLCJ2YXQiLCJncmFuZFRvdGFsIiwiY2FsY3VsYXRpb24iLCJzZXRDYWxjdWxhdGlvbiIsImVuYWJsZWNyZWF0ZSIsInNldEVuYWJsZUNyZWF0ZSIsIm1ldGhvZHMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwicG9xIiwiTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidHlwZSIsIkRhdGUiLCJvdGhlckNvc3QiLCJ0b3RhbERpc2NvdW50Iiwic3VibWl0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInNldFZhbHVlIiwiZ2V0VmFsdWVzIiwicmVzZXQiLCJpc1N1Ym1pdHRpbmciLCJmb3JtU3RhdGUiLCJoYW5kZWxDYWxjdWxhdGUiLCJpdGVtcHJvZHVjdGNvc3QiLCJwcm9qZWN0ZGV0YWlsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJTYWxlcHJpY2UiLCJxbnR5IiwiTnVtYmVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiY2xzeCIsImNhbGNCdXR0b24iLCJNYXRoIiwicm91bmQiLCJFUFNJTE9OIiwic2hpcHBpbmdjb3N0IiwiYWRkcHJvZHVjdCIsImZvbnRTaXplIiwibWVzc2FnZSIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0IiwiRW5kVXNlclByaWNlIiwicHJpY2UiLCJheGlvcyIsInBvc3QiLCJyZXNwIiwiZGF0YSIsInZhbHVlcyIsInZhcmlhbnQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsVUFBTSxFQUFFO0FBQ04sc0JBQWdCO0FBQ2RDLGNBQU0sRUFBRTtBQURNO0FBRFYsS0FGK0I7QUFPdkNDLGNBQVUsRUFBRTtBQUNWQyxnQkFBVSxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFQMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFZQSxJQUFN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QWMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZbUIsTUFBWixFQUZFLENBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFsRSwrQkFBZSxDQUFDLDRCQUFELEVBQStCO0FBQUVtRSx5QkFBTyxFQUFFO0FBQVgsaUJBQS9CLENBQWY7QUFDQWpDLHFCQUFLLEdBbEJILENBb0JGO0FBQ0QsZUFyQkQsQ0FxQkUsT0FBT2tDLEdBQVAsRUFBWTtBQUNaO0FBQ0FwRSwrQkFBZSxDQUFDLG9CQUFELEVBQXVCO0FBQUVtRSx5QkFBTyxFQUFFO0FBQVgsaUJBQXZCLENBQWYsQ0FGWSxDQUlaOztBQUNBcEMsd0JBQVEsQ0FBQyxhQUFELEVBQWdCO0FBQ3RCUCxzQkFBSSxFQUFFLFFBRGdCO0FBRXRCaUMseUJBQU8sRUFBRTtBQUZhLGlCQUFoQixDQUFSO0FBSUQ7O0FBL0JIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaFp5RDtBQUFBO0FBQUE7QUFpYjFEOztHQWpiUWhFLEk7VUFDU3hDLFMsRUFDWThDLHNELEVBYVpnQix3RDs7O0tBZlR0QixJO0FBbWJNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdElkXS9lZGl0LjlhMDgxNjlhZTc2NWIyNDAyZTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJY29uQnV0dG9uLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgU3ZnSWNvbixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyBQbHVzIGFzIFBsdXNJY29uIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb3JtQXV0b2NvbXBsZXRlIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgRm9ybURhdGVQaWNrZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRm9ybURhdGVQaWNrZXInO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBDdXN0b21lckF1dG9Db21wZWxldGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQ3VzdG9tZXJBdXRvQ29tcGVsZXRlJztcclxuaW1wb3J0IFBvcUF1dG9Db21wbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Qb3FBdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgUHJvZHVjdEF1dG9Db21wbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Qcm9kdWN0QXV0b0NvbXBlbGV0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL1Jlc3VsdHMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbiAgZWRpdG9yOiB7XHJcbiAgICAnJiAucWwtZWRpdG9yJzoge1xyXG4gICAgICBoZWlnaHQ6IDQwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGRQcm9kdWN0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHByb2plY3RTdGF0dXMgPSBbXHJcbiAgeyBsYWJlbDogJ05lZ290aWF0aW9uJywgdmFsdWU6ICdOZWdvdGlhdGlvbicgfSxcclxuICB7IGxhYmVsOiAnU2lnbmVkJywgdmFsdWU6ICdTaWduZWQnIH0sXHJcbiAgeyBsYWJlbDogJ0lucHJvZ3Jlc3MnLCB2YWx1ZTogJ0lucHJvZ3Jlc3MnIH0sXHJcbiAgeyBsYWJlbDogJ0ZpbmlzaGVkJywgdmFsdWU6ICdGaW5pc2hlZCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IHByb2plY3RzY29wZSA9IFtcclxuICB7IGxhYmVsOiAnUGVyc29uYWwnLCB2YWx1ZTogJ1BlcnNvbmFsJyB9LFxyXG4gIHsgbGFiZWw6ICdDb21tZXJjaWFsJywgdmFsdWU6ICdDb21tZXJjaWFsJyB9LFxyXG4gIHsgbGFiZWw6ICdJbmR1c3RyaWFsJywgdmFsdWU6ICdJbmR1c3RyaWFsJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgcHJvamVjdE5hbWU6IHl1cC5zdHJpbmcoKS5tYXgoMjU1KS5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgY3VzdG9tZXJOYW1lOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgaWQ6IHl1cC5udW1iZXIoKS5udWxsYWJsZSgpLFxyXG4gICAgICBuYW1lOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgIH0pXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnJlcXVpcmVkKCdDdXRvbWVyIG5hbWUgaXMgcmVxdWlyZWQnKSxcclxuXHJcbiAgcG9xTnVtYmVyOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgaWQ6IHl1cC5udW1iZXIoKS5udWxsYWJsZSxcclxuICAgICAgbmFtZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICAgIGN1c3RvbWVyOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgICAgY3VzdG9tZXJJZDogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgICAgIGdyYW5kdG90YWw6IHl1cC5udW1iZXIoKS5udWxsYWJsZSgpLFxyXG4gICAgfSlcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAucmVxdWlyZWQoJ0JPUSBuYW1lIGlzIHJlcXVpcmVkJyksXHJcbiAgc2NvcGU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoe1xyXG4gICAgICBsYWJsZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICAgIHZhbHVlOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgIH0pXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnJlcXVpcmVkKCdQcm9qZWN0IHNjb3BlIGlzIHJlcXVpcmVkJyksXHJcbiAgc3RhdHVzOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgbGFibGU6IHl1cC5zdHJpbmcoKS5udWxsYWJsZSgpLFxyXG4gICAgICB2YWx1ZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICB9KVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC5yZXF1aXJlZCgnUHJvamVjdCBzdGF0dXMgaXMgcmVxdWlyZWQnKSxcclxuICBzdGFydERhdGU6IHl1cFxyXG4gICAgLmRhdGUoKVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC50eXBlRXJyb3IoJ0ludmFsaWQgZGF0ZS4nKVxyXG4gICAgLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBlbmREYXRlOiB5dXBcclxuICAgIC5kYXRlKClcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAudHlwZUVycm9yKCdJbnZhbGlkIGRhdGUuJylcclxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgc2hpcHBpbmdBZGRyZXNzOiB5dXAuc3RyaW5nKCkubWF4KDI1NSksXHJcbiAgc2hpcHBpbmdDb3N0OiB5dXAubnVtYmVyKCksXHJcbiAgb3RoZXJDb3N0czogeXVwLm51bWJlcigpLFxyXG4gIHRvdGFsZGlzY291bnQ6IHl1cC5udW1iZXIoKSxcclxuICB2YXRwZXJjZW50YWdlOiB5dXAubnVtYmVyKCksXHJcbiAgcHJvZHVjdFF0eTogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgcHJvZHVjdE5hbWU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoeyBpZDogeXVwLm51bWJlcigpLCBuYW1lOiB5dXAuc3RyaW5nKCkgfSlcclxuICAgIC5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEZvcm0oeyBjbGFzc05hbWUsIHByb2plY3QsIHNldHByb2plY3QsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCBbcHJvZHVjdHNDb3N0LCBzZXRQcm9kdWN0c0Nvc3RdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBwcm9qZWN0LnByb2plY3QucHJvZHVjdFRvdGFsQ29zdCxcclxuICApO1xyXG4gIGNvbnN0IFtjYWxjdWxhdGlvbiwgc2V0Q2FsY3VsYXRpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgc3VidG90YWw6IHByb2plY3QucHJvamVjdC5zdWJ0b3RhbCxcclxuICAgIHRvdGFsdmF0OiAocHJvamVjdC5wcm9qZWN0LnZhdCAqIHByb2plY3QucHJvamVjdC5zdWJ0b3RhbCkgLyAxMDAsXHJcbiAgICBncmFuZFRvdGFsOlxyXG4gICAgICBwcm9qZWN0LnByb2plY3Quc3VidG90YWwgK1xyXG4gICAgICAocHJvamVjdC5wcm9qZWN0LnZhdCAqIHByb2plY3QucHJvamVjdC5zdWJ0b3RhbCkgLyAxMDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2VuYWJsZWNyZWF0ZSwgc2V0RW5hYmxlQ3JlYXRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oe1xyXG4gICAgbW9kZTogJ2FsbCcsXHJcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIodmFsaWRhdGlvblNjaGVtYSksXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QubmFtZSB8fCAnJyxcclxuICAgICAgcG9xTnVtYmVyOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBwcm9qZWN0LnByb2plY3QucG9xLmlkLFxyXG4gICAgICAgICAgbmFtZTogcHJvamVjdC5wcm9qZWN0LnBvcS5OYW1lLFxyXG4gICAgICAgICAgY3VzdG9tZXI6IGAke3Byb2plY3QucHJvamVjdC5jdXN0b21lci5maXJzdE5hbWV9ICR7cHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmxhc3ROYW1lfWAsXHJcbiAgICAgICAgICBjdXN0b21lcklkOiBwcm9qZWN0LnByb2plY3QuY3VzdG9tZXIuaWQsXHJcbiAgICAgICAgICBncmFuZHRvdGFsOiBwcm9qZWN0LnByb2plY3QuZ3JhbmRUb3RhbCxcclxuICAgICAgICB9IHx8IG51bGwsXHJcbiAgICAgIGN1c3RvbWVyTmFtZTpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogcHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmlkLFxyXG4gICAgICAgICAgbmFtZTogYCR7cHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmZpcnN0TmFtZX0gJHtwcm9qZWN0LnByb2plY3QuY3VzdG9tZXIubGFzdE5hbWV9IGAsXHJcbiAgICAgICAgfSB8fCBudWxsLFxyXG4gICAgICBzdGF0dXM6XHJcbiAgICAgICAgeyBsYWJlbDogcHJvamVjdC5wcm9qZWN0LnN0YXR1cywgdmFsdWU6IHByb2plY3QucHJvamVjdC5zdGF0dXMgfSB8fCAnJyxcclxuICAgICAgc2NvcGU6IHsgbGFiZWw6IHByb2plY3QucHJvamVjdC50eXBlLCB2YWx1ZTogcHJvamVjdC5wcm9qZWN0LnR5cGUgfSB8fCAnJyxcclxuICAgICAgc3RhcnREYXRlOiBwcm9qZWN0LnByb2plY3Quc3RhcnREYXRlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgIGVuZERhdGU6IHByb2plY3QucHJvamVjdC5lbmREYXRlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgIHNoaXBwaW5nQWRkcmVzczogcHJvamVjdC5wcm9qZWN0LnNoaXBwaW5nQWRkcmVzcyB8fCAnJyxcclxuICAgICAgc2hpcHBpbmdDb3N0OiBwcm9qZWN0LnByb2plY3Quc2hpcHBpbmdDb3N0IHx8IDAsXHJcbiAgICAgIG90aGVyQ29zdHM6IHByb2plY3QucHJvamVjdC5vdGhlckNvc3QgfHwgMCxcclxuICAgICAgdG90YWxkaXNjb3VudDogcHJvamVjdC5wcm9qZWN0LnRvdGFsRGlzY291bnQgfHwgMCxcclxuICAgICAgdmF0cGVyY2VudGFnZTogcHJvamVjdC5wcm9qZWN0LnZhdCB8fCAwLFxyXG4gICAgICBwcm9kdWN0UXR5OiAxLFxyXG4gICAgICBwcm9kdWN0TmFtZTogbnVsbCxcclxuICAgICAgc3VibWl0RXJyb3I6ICcnLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBzZXRFcnJvcixcclxuICAgIHNldFZhbHVlLFxyXG4gICAgZ2V0VmFsdWVzLFxyXG4gICAgcmVzZXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgaXNTdWJtaXR0aW5nIH0sXHJcbiAgfSA9IG1ldGhvZHM7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRlbENhbGN1bGF0ZSgpIHtcclxuICAgIGxldCBpdGVtcHJvZHVjdGNvc3QgPSAwO1xyXG4gICAgcHJvamVjdC5wcm9qZWN0ZGV0YWlsLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaXRlbXByb2R1Y3Rjb3N0ICs9IGVsZW1lbnQuU2FsZXByaWNlICogZWxlbWVudC5xbnR5O1xyXG4gICAgfSk7XHJcbiAgICBzZXRQcm9kdWN0c0Nvc3QoaXRlbXByb2R1Y3Rjb3N0KTtcclxuICAgIHZhciBzdWJ0b3RhbCA9XHJcbiAgICAgIGl0ZW1wcm9kdWN0Y29zdCArXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5vdGhlckNvc3RzKSArXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5zaGlwcGluZ0Nvc3QpIC1cclxuICAgICAgTnVtYmVyKGdldFZhbHVlcygpLnRvdGFsZGlzY291bnQpO1xyXG4gICAgdmFyIHRvdGFsdmF0ID0gKHN1YnRvdGFsICogZ2V0VmFsdWVzKCkudmF0cGVyY2VudGFnZSkgLyAxMDA7XHJcbiAgICB2YXIgZ3JhbmRUb3RhbCA9IHN1YnRvdGFsICsgdG90YWx2YXQ7XHJcbiAgICBzZXRDYWxjdWxhdGlvbih7IHN1YnRvdGFsLCB0b3RhbHZhdCwgZ3JhbmRUb3RhbCB9KTtcclxuICB9XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBsb2FkY3Byb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVByb3ZpZGVyIHsuLi5tZXRob2RzfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICAgIHsuLi5yZXN0fT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9PlxyXG4gICAgICAgICAgICB7LyogQmFzaWMgKi99XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiQmFzaWNcIiAvPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICB7LyogUHJvamVjdCBuYW1lICMgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9qZWN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBDdXN0b21lciBuYW1lICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJBdXRvQ29tcGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogUE9RIG51bWJlciAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcUF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvcU51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkIuTy5RICNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBwcm9qZWN0IHN0YXR1cyAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1BdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9qZWN0IFN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0U3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogcHJvamVjdCBzY29wZSAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1BdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY29wZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3QgU2NvcGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvamVjdHNjb3BlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogU3RhcnQgRGF0ZSAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybURhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIEVuZCBEYXRlICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVuZERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbmQgRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBTaGlwcGluZyBBZGRyZXNzICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hpcHBpbmcgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgey8qIENvc3RzICovfVxyXG4gICAgICAgICAgICA8Qm94IG10PXszfT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiT3RoZXJzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQ29zdCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaGlwcGluZyBDb3N0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdDb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaGlwcGluZyBDb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBPdGhlciBDb3N0cyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyQ29zdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2lnbiAtIEluc3RhbGxhdGlvbiAtIERvY3VtZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG90YWxkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgZGlzY291bnQgYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT48L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZhdHBlcmNlbnRhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZBVCAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17Nn0gbWQ9ezZ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVDcmVhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGVsQ2FsY3VsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxjQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FsY3VsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBtdD17M30+XHJcbiAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIlRvdGFsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5OZXQgcHJvZHVjdHMgY29zdCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKChwcm9kdWN0c0Nvc3QgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlNoaXBwaW5nIGFuZCBJbnN0YWxsYXRpb24gOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmFsdWVzKCkub3RoZXJDb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKGdldFZhbHVlcygpLm90aGVyQ29zdHMpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5zaGlwcGluZ0Nvc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9qZWN0LnByb2plY3Quc2hpcHBpbmdjb3N0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdC5vdGhlckNvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlN1YiBUb3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxjdWxhdGlvbi5zdWJ0b3RhbCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VGF4ZXMgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJ2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbGN1bGF0aW9uLnRvdGFsdmF0ICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5HcmFuZCB0b3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBuYW1lPVwiZ3JhbmR0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FsY3VsYXRpb24uZ3JhbmRUb3RhbCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICB7LyogUHJvZHVjdHMgKi99XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIlByb2R1Y3RzXCIgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OX0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBOYW1lICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFF1YW50aXR5ICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0UXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezF9IHhzPXsxMn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgQnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZUNyZWF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHByb2R1Y3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0cyBUYWJsZSAqL31cclxuICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8UmVzdWx0cyBxdWVyeT17cHJvamVjdH0gc2V0cHJvamVjdD17c2V0cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIHsvKiBFcnJvciAqL31cclxuICAgICAgICB7ZXJyb3JzLnN1Ym1pdEVycm9yICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9ezF9IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAnMjRweCcgfX0gZXJyb3I+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5zdWJtaXRFcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJveCBtdD17NX0+XHJcbiAgICAgICAgICB7LyogU3VibWl0ICovfVxyXG4gICAgICAgICAge2lzU3VibWl0dGluZyA/IChcclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRm9ybVByb3ZpZGVyPlxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZHByb2R1Y3QoKSB7XHJcbiAgICBpZiAoIWdldFZhbHVlcygpLnByb2R1Y3ROYW1lKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0LmlkLFxyXG4gICAgICBwcm9kdWN0OiBnZXRWYWx1ZXMoKS5wcm9kdWN0TmFtZS5pZCxcclxuICAgICAgcW50eTogTnVtYmVyKGdldFZhbHVlcygpLnByb2R1Y3RRdHkpLFxyXG4gICAgICBFbmRVc2VyUHJpY2U6IGdldFZhbHVlcygpLnByb2R1Y3ROYW1lLnByaWNlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Byb2plY3QtZGV0YWlscycsXHJcbiAgICAgIG5ld1Byb2R1Y3QsXHJcbiAgICApO1xyXG4gICAgc2V0cHJvamVjdCh7XHJcbiAgICAgIC4uLnByb2plY3QsXHJcbiAgICAgIHByb2plY3RkZXRhaWw6IFsuLi5wcm9qZWN0LnByb2plY3RkZXRhaWwsIHJlc3AuZGF0YV0sXHJcbiAgICB9KTtcclxuICAgIHNldFZhbHVlKCdwcm9kdWN0TmFtZScsIHt9KTtcclxuICAgIHNldFZhbHVlKCdwcm9kdWN0UXR5JywgMCk7XHJcbiAgfVxyXG5cclxuICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KHZhbHVlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0VmFsdWUoJ3N1Ym1pdEVycm9yJywgJycpO1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAvLyBSZXNldCBzdWJtaXRFcnJvciBtZXNzYWdlXHJcbiAgICAgIC8vIHNldFZhbHVlKCdzdWJtaXRFcnJvcicsICcnKTtcclxuICAgICAgLy8gY29uc3QgcHJvamVjdElucHV0ID0ge1xyXG4gICAgICAvLyAgIG5hbWU6IHZhbHVlcy5wcm9qZWN0TmFtZSxcclxuICAgICAgLy8gICBjdXN0b21lcjogdmFsdWUuY3VzdG9tZXJOYW1lLmlkLFxyXG4gICAgICAvLyAgIHBvcTogdmFsdWUucG9xTnVtYmVyLmlkLFxyXG4gICAgICAvLyAgIHN0YXR1czogdmFsdWUuc3RhdHVzLmxhYmVsLFxyXG4gICAgICAvLyAgIHR5cGU6IHZhbHVlLnNjb3BlLmxhYmVsLFxyXG4gICAgICAvLyAgIHNhcnREYXRlOiB2YWx1ZS5zdGFydERhdGUsXHJcbiAgICAgIC8vICAgZW5kRGF0ZTogdmFsdWUuZW5kRGF0ZSxcclxuICAgICAgLy8gICBncmFuZFRvdGFsOiBjYWxjdWxhdGlvbi5ncmFuZFRvdGFsLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5wdXQpO1xyXG5cclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdwcm9qZWN0IGVkaXQgc3VjY2Vzc2Z1bGx5LicsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgICByZXNldCgpO1xyXG5cclxuICAgICAgLy8gU2hvdyBzdWNjZXNzIG1lc3NhZ2VcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvLyBTaG93IGVycm9yIG1lc3NhZ2VcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdFcnJvciBlZGl0IFByb2plY3QnLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcblxyXG4gICAgICAvLyBTaG93IHN1Ym1pdEVycm9yIG1lc3NhZ2VcclxuICAgICAgc2V0RXJyb3IoJ3N1Ym1pdEVycm9yJywge1xyXG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdFcnJvciBlZGl0IHByb2plY3QnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=