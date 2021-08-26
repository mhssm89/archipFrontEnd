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
    var subtotal = loadcproduct() + Number(getValues().otherCosts) + Number(getValues().shippingCost) - Number(getValues().totaldiscount);
    var totalvat = subtotal * getValues().vatpercentage / 100;
    var grandTotal = subtotal + totalvat;
    setCalculation({
      subtotal: subtotal,
      totalvat: totalvat,
      grandTotal: grandTotal
    });
  }

  function loadcproduct() {
    var productsCostHH = 0;
    project.projectdetail.map(function (item) {
      var itemprice = item.EndUserPrice * item.qnty;
      productsCostHH += itemprice;
    });
    return productsCostHH;
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
          lg: 5,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
              title: "Basic"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
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
                    lineNumber: 220,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
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
                    lineNumber: 229,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
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
                    lineNumber: 238,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
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
                    lineNumber: 248,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
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
                    lineNumber: 258,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
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
                    lineNumber: 268,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
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
                    lineNumber: 277,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
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
                    lineNumber: 286,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
            mt: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
                title: "Others"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
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
                      lineNumber: 309,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
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
                      lineNumber: 319,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
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
                      lineNumber: 328,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 12,
                    md: 12
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 336,
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
                      lineNumber: 339,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
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
                        handelCalculate();
                      },
                      className: classes.calcButton,
                      children: "Calculate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 348,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
            mt: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
                title: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 397,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 398,
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
                      lineNumber: 402,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 401,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: Math.round((loadcproduct() + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 405,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Shipping and Installation : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 411,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 410,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 414,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 413,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Sub Total : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 422,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 421,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: Math.round((calculation.subtotal + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 425,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 424,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Taxes : "
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
                      name: "vat",
                      children: Math.round((calculation.totalvat + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 435,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 434,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Grand total : "
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
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      name: "grandtotal",
                      children: Math.round((calculation.grandTotal + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 445,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 444,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 400,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
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
              lineNumber: 460,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
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
                    lineNumber: 466,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 464,
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
                    lineNumber: 475,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 474,
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
                        lineNumber: 491,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 490,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 485,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 483,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 463,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                mt: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Results__WEBPACK_IMPORTED_MODULE_23__["default"], {
                  query: project,
                  setproject: setproject
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 498,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 497,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 462,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 459,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
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
          lineNumber: 508,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mt: 5,
        children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "contained",
          color: "secondary",
          type: "submit",
          disabled: isSubmitting,
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
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

_s(Form, "RLv6ymyHptUgG4XsEbZiEvq1DuY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvZWRpdC9Gb3JtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJlZGl0b3IiLCJoZWlnaHQiLCJhZGRQcm9kdWN0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJwcm9qZWN0U3RhdHVzIiwibGFiZWwiLCJ2YWx1ZSIsInByb2plY3RzY29wZSIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsInByb2plY3ROYW1lIiwibWF4IiwicmVxdWlyZWQiLCJjdXN0b21lck5hbWUiLCJpZCIsIm51bGxhYmxlIiwibmFtZSIsInBvcU51bWJlciIsImN1c3RvbWVyIiwiY3VzdG9tZXJJZCIsImdyYW5kdG90YWwiLCJzY29wZSIsImxhYmxlIiwic3RhdHVzIiwic3RhcnREYXRlIiwidHlwZUVycm9yIiwiZW5kRGF0ZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nQ29zdCIsIm90aGVyQ29zdHMiLCJ0b3RhbGRpc2NvdW50IiwidmF0cGVyY2VudGFnZSIsInByb2R1Y3RRdHkiLCJwcm9kdWN0TmFtZSIsIkZvcm0iLCJjbGFzc05hbWUiLCJwcm9qZWN0Iiwic2V0cHJvamVjdCIsInJlc3QiLCJjbGFzc2VzIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicHJqZWN0IiwicHJvZHVjdFRvdGFsQ29zdCIsInByb2R1Y3RzQ29zdCIsInNldFByb2R1Y3RzQ29zdCIsInN1YnRvdGFsIiwidG90YWx2YXQiLCJ2YXQiLCJncmFuZFRvdGFsIiwiY2FsY3VsYXRpb24iLCJzZXRDYWxjdWxhdGlvbiIsIm1ldGhvZHMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwicG9xIiwiTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidHlwZSIsIkRhdGUiLCJvdGhlckNvc3QiLCJ0b3RhbERpc2NvdW50Iiwic3VibWl0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInNldFZhbHVlIiwiZ2V0VmFsdWVzIiwicmVzZXQiLCJpc1N1Ym1pdHRpbmciLCJmb3JtU3RhdGUiLCJoYW5kZWxDYWxjdWxhdGUiLCJsb2FkY3Byb2R1Y3QiLCJOdW1iZXIiLCJwcm9kdWN0c0Nvc3RISCIsInByb2plY3RkZXRhaWwiLCJtYXAiLCJpdGVtIiwiaXRlbXByaWNlIiwiRW5kVXNlclByaWNlIiwicW50eSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImNsc3giLCJjYWxjQnV0dG9uIiwiTWF0aCIsInJvdW5kIiwiRVBTSUxPTiIsImFkZHByb2R1Y3QiLCJmb250U2l6ZSIsIm1lc3NhZ2UiLCJuZXdQcm9kdWN0IiwicHJvZHVjdCIsInByaWNlIiwiU2FsZVByaWNlIiwiYXhpb3MiLCJwb3N0IiwicmVzcCIsImRhdGEiLCJ2YWx1ZXMiLCJ2YXJpYW50IiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLFVBQU0sRUFBRTtBQUNOLHNCQUFnQjtBQUNkQyxjQUFNLEVBQUU7QUFETTtBQURWLEtBRitCO0FBT3ZDQyxjQUFVLEVBQUU7QUFDVkMsZ0JBQVUsRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQURGO0FBUDJCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBWUEsSUFBTUMsYUFBYSxHQUFHLENBQ3BCO0FB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LENBcUJFLE9BQU9tQyxHQUFQLEVBQVk7QUFDWjtBQUNBcEUsK0JBQWUsQ0FBQyxvQkFBRCxFQUF1QjtBQUFFbUUseUJBQU8sRUFBRTtBQUFYLGlCQUF2QixDQUFmLENBRlksQ0FJWjs7QUFDQXJDLHdCQUFRLENBQUMsYUFBRCxFQUFnQjtBQUN0QlAsc0JBQUksRUFBRSxRQURnQjtBQUV0QmtDLHlCQUFPLEVBQUU7QUFGYSxpQkFBaEIsQ0FBUjtBQUlEOztBQS9CSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWxieUQ7QUFBQTtBQUFBO0FBbWQxRDs7R0FuZFFoRSxJO1VBQ1N4QyxTLEVBQ1k4QyxzRCxFQVlaZSx3RDs7O0tBZFRyQixJO0FBcWRNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdElkXS9lZGl0LmNjOWQwYzE2ZTcxZWZjYTJlMzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJY29uQnV0dG9uLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgU3ZnSWNvbixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyBQbHVzIGFzIFBsdXNJY29uIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb3JtQXV0b2NvbXBsZXRlIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgRm9ybURhdGVQaWNrZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRm9ybURhdGVQaWNrZXInO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBDdXN0b21lckF1dG9Db21wZWxldGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvQ3VzdG9tZXJBdXRvQ29tcGVsZXRlJztcclxuaW1wb3J0IFBvcUF1dG9Db21wbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Qb3FBdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgUHJvZHVjdEF1dG9Db21wbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Qcm9kdWN0QXV0b0NvbXBlbGV0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL1Jlc3VsdHMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbiAgZWRpdG9yOiB7XHJcbiAgICAnJiAucWwtZWRpdG9yJzoge1xyXG4gICAgICBoZWlnaHQ6IDQwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGRQcm9kdWN0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHByb2plY3RTdGF0dXMgPSBbXHJcbiAgeyBsYWJlbDogJ05lZ290aWF0aW9uJywgdmFsdWU6ICdOZWdvdGlhdGlvbicgfSxcclxuICB7IGxhYmVsOiAnU2lnbmVkJywgdmFsdWU6ICdTaWduZWQnIH0sXHJcbiAgeyBsYWJlbDogJ0lucHJvZ3Jlc3MnLCB2YWx1ZTogJ0lucHJvZ3Jlc3MnIH0sXHJcbiAgeyBsYWJlbDogJ0ZpbmlzaGVkJywgdmFsdWU6ICdGaW5pc2hlZCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IHByb2plY3RzY29wZSA9IFtcclxuICB7IGxhYmVsOiAnUGVyc29uYWwnLCB2YWx1ZTogJ1BlcnNvbmFsJyB9LFxyXG4gIHsgbGFiZWw6ICdDb21tZXJjaWFsJywgdmFsdWU6ICdDb21tZXJjaWFsJyB9LFxyXG4gIHsgbGFiZWw6ICdJbmR1c3RyaWFsJywgdmFsdWU6ICdJbmR1c3RyaWFsJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgcHJvamVjdE5hbWU6IHl1cC5zdHJpbmcoKS5tYXgoMjU1KS5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgY3VzdG9tZXJOYW1lOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgaWQ6IHl1cC5udW1iZXIoKS5udWxsYWJsZSgpLFxyXG4gICAgICBuYW1lOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgIH0pXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnJlcXVpcmVkKCdDdXRvbWVyIG5hbWUgaXMgcmVxdWlyZWQnKSxcclxuXHJcbiAgcG9xTnVtYmVyOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgaWQ6IHl1cC5udW1iZXIoKS5udWxsYWJsZSxcclxuICAgICAgbmFtZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICAgIGN1c3RvbWVyOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgICAgY3VzdG9tZXJJZDogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgICAgIGdyYW5kdG90YWw6IHl1cC5udW1iZXIoKS5udWxsYWJsZSgpLFxyXG4gICAgfSlcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAucmVxdWlyZWQoJ0JPUSBuYW1lIGlzIHJlcXVpcmVkJyksXHJcbiAgc2NvcGU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoe1xyXG4gICAgICBsYWJsZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICAgIHZhbHVlOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgIH0pXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnJlcXVpcmVkKCdQcm9qZWN0IHNjb3BlIGlzIHJlcXVpcmVkJyksXHJcbiAgc3RhdHVzOiB5dXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgbGFibGU6IHl1cC5zdHJpbmcoKS5udWxsYWJsZSgpLFxyXG4gICAgICB2YWx1ZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICB9KVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC5yZXF1aXJlZCgnUHJvamVjdCBzdGF0dXMgaXMgcmVxdWlyZWQnKSxcclxuICBzdGFydERhdGU6IHl1cFxyXG4gICAgLmRhdGUoKVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC50eXBlRXJyb3IoJ0ludmFsaWQgZGF0ZS4nKVxyXG4gICAgLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBlbmREYXRlOiB5dXBcclxuICAgIC5kYXRlKClcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAudHlwZUVycm9yKCdJbnZhbGlkIGRhdGUuJylcclxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgc2hpcHBpbmdBZGRyZXNzOiB5dXAuc3RyaW5nKCkubWF4KDI1NSksXHJcbiAgc2hpcHBpbmdDb3N0OiB5dXAubnVtYmVyKCksXHJcbiAgb3RoZXJDb3N0czogeXVwLm51bWJlcigpLFxyXG4gIHRvdGFsZGlzY291bnQ6IHl1cC5udW1iZXIoKSxcclxuICB2YXRwZXJjZW50YWdlOiB5dXAubnVtYmVyKCksXHJcbiAgcHJvZHVjdFF0eTogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgcHJvZHVjdE5hbWU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoeyBpZDogeXVwLm51bWJlcigpLCBuYW1lOiB5dXAuc3RyaW5nKCkgfSlcclxuICAgIC5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEZvcm0oeyBjbGFzc05hbWUsIHByb2plY3QsIHNldHByb2plY3QsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCBbcHJvZHVjdHNDb3N0LCBzZXRQcm9kdWN0c0Nvc3RdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBwcm9qZWN0LnByamVjdC5wcm9kdWN0VG90YWxDb3N0LFxyXG4gICk7XHJcbiAgY29uc3QgW2NhbGN1bGF0aW9uLCBzZXRDYWxjdWxhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBzdWJ0b3RhbDogcHJvamVjdC5wcm9qZWN0LnN1YnRvdGFsLFxyXG4gICAgdG90YWx2YXQ6IChwcm9qZWN0LnByb2plY3QudmF0ICogcHJvamVjdC5wcm9qZWN0LnN1YnRvdGFsKSAvIDEwMCxcclxuICAgIGdyYW5kVG90YWw6XHJcbiAgICAgIHByb2plY3QucHJvamVjdC5zdWJ0b3RhbCArXHJcbiAgICAgIChwcm9qZWN0LnByb2plY3QudmF0ICogcHJvamVjdC5wcm9qZWN0LnN1YnRvdGFsKSAvIDEwMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oe1xyXG4gICAgbW9kZTogJ2FsbCcsXHJcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIodmFsaWRhdGlvblNjaGVtYSksXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QubmFtZSB8fCAnJyxcclxuICAgICAgcG9xTnVtYmVyOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBwcm9qZWN0LnByb2plY3QucG9xLmlkLFxyXG4gICAgICAgICAgbmFtZTogcHJvamVjdC5wcm9qZWN0LnBvcS5OYW1lLFxyXG4gICAgICAgICAgY3VzdG9tZXI6IGAke3Byb2plY3QucHJvamVjdC5jdXN0b21lci5maXJzdE5hbWV9ICR7cHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmxhc3ROYW1lfWAsXHJcbiAgICAgICAgICBjdXN0b21lcklkOiBwcm9qZWN0LnByb2plY3QuY3VzdG9tZXIuaWQsXHJcbiAgICAgICAgICBncmFuZHRvdGFsOiBwcm9qZWN0LnByb2plY3QuZ3JhbmRUb3RhbCxcclxuICAgICAgICB9IHx8IG51bGwsXHJcbiAgICAgIGN1c3RvbWVyTmFtZTpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogcHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmlkLFxyXG4gICAgICAgICAgbmFtZTogYCR7cHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmZpcnN0TmFtZX0gJHtwcm9qZWN0LnByb2plY3QuY3VzdG9tZXIubGFzdE5hbWV9IGAsXHJcbiAgICAgICAgfSB8fCBudWxsLFxyXG4gICAgICBzdGF0dXM6XHJcbiAgICAgICAgeyBsYWJlbDogcHJvamVjdC5wcm9qZWN0LnN0YXR1cywgdmFsdWU6IHByb2plY3QucHJvamVjdC5zdGF0dXMgfSB8fCAnJyxcclxuICAgICAgc2NvcGU6IHsgbGFiZWw6IHByb2plY3QucHJvamVjdC50eXBlLCB2YWx1ZTogcHJvamVjdC5wcm9qZWN0LnR5cGUgfSB8fCAnJyxcclxuICAgICAgc3RhcnREYXRlOiBwcm9qZWN0LnByb2plY3Quc3RhcnREYXRlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgIGVuZERhdGU6IHByb2plY3QucHJvamVjdC5lbmREYXRlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgIHNoaXBwaW5nQWRkcmVzczogcHJvamVjdC5wcm9qZWN0LnBvcS5zaGlwcGluZ0FkZHJlc3MgfHwgJycsXHJcbiAgICAgIHNoaXBwaW5nQ29zdDogcHJvamVjdC5wcm9qZWN0LnBvcS5zaGlwcGluZ0Nvc3QgfHwgMCxcclxuICAgICAgb3RoZXJDb3N0czogcHJvamVjdC5wcm9qZWN0LnBvcS5vdGhlckNvc3QgfHwgMCxcclxuICAgICAgdG90YWxkaXNjb3VudDogcHJvamVjdC5wcm9qZWN0LnBvcS50b3RhbERpc2NvdW50IHx8IDAsXHJcbiAgICAgIHZhdHBlcmNlbnRhZ2U6IHByb2plY3QucHJvamVjdC5wb3EudmF0IHx8IDAsXHJcbiAgICAgIHByb2R1Y3RRdHk6IDEsXHJcbiAgICAgIHByb2R1Y3ROYW1lOiBudWxsLFxyXG4gICAgICBzdWJtaXRFcnJvcjogJycsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHtcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGVycm9ycyxcclxuICAgIHNldEVycm9yLFxyXG4gICAgc2V0VmFsdWUsXHJcbiAgICBnZXRWYWx1ZXMsXHJcbiAgICByZXNldCxcclxuICAgIGZvcm1TdGF0ZTogeyBpc1N1Ym1pdHRpbmcgfSxcclxuICB9ID0gbWV0aG9kcztcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGVsQ2FsY3VsYXRlKCkge1xyXG4gICAgdmFyIHN1YnRvdGFsID1cclxuICAgICAgbG9hZGNwcm9kdWN0KCkgK1xyXG4gICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkub3RoZXJDb3N0cykgK1xyXG4gICAgICBOdW1iZXIoZ2V0VmFsdWVzKCkuc2hpcHBpbmdDb3N0KSAtXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS50b3RhbGRpc2NvdW50KTtcclxuICAgIHZhciB0b3RhbHZhdCA9IChzdWJ0b3RhbCAqIGdldFZhbHVlcygpLnZhdHBlcmNlbnRhZ2UpIC8gMTAwO1xyXG4gICAgdmFyIGdyYW5kVG90YWwgPSBzdWJ0b3RhbCArIHRvdGFsdmF0O1xyXG4gICAgc2V0Q2FsY3VsYXRpb24oeyBzdWJ0b3RhbCwgdG90YWx2YXQsIGdyYW5kVG90YWwgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2FkY3Byb2R1Y3QoKSB7XHJcbiAgICBsZXQgcHJvZHVjdHNDb3N0SEggPSAwO1xyXG4gICAgcHJvamVjdC5wcm9qZWN0ZGV0YWlsLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtcHJpY2UgPSBpdGVtLkVuZFVzZXJQcmljZSAqIGl0ZW0ucW50eTtcclxuICAgICAgcHJvZHVjdHNDb3N0SEggKz0gaXRlbXByaWNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzQ29zdEhIO1xyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxvYWRjcHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtUHJvdmlkZXIgey4uLm1ldGhvZHN9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgey4uLnJlc3R9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NX0+XHJcbiAgICAgICAgICAgIHsvKiBCYXNpYyAqL31cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJCYXNpY1wiIC8+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBQcm9qZWN0IG5hbWUgIyAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2plY3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIEN1c3RvbWVyIG5hbWUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21lckF1dG9Db21wZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21lck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBQT1EgbnVtYmVyICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9xQXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9xTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQi5PLlEgI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIHByb2plY3Qgc3RhdHVzICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3QgU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2plY3RTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBwcm9qZWN0IHNjb3BlICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjb3BlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdCBTY29wZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0c2NvcGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBTdGFydCBEYXRlICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0RGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogRW5kIERhdGUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1EYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVuZCBEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFNoaXBwaW5nIEFkZHJlc3MgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ0FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaGlwcGluZyBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICB7LyogQ29zdHMgKi99XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJPdGhlcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb3N0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIFNoaXBwaW5nIENvc3QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ0Nvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoaXBwaW5nIENvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIE90aGVyIENvc3RzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJDb3N0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzaWduIC0gSW5zdGFsbGF0aW9uIC0gRG9jdW1lbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbGRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBkaXNjb3VudCBhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmF0cGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVkFUICVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXs2fSBtZD17Nn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRlbENhbGN1bGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FsY0J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbGN1bGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgey8qIDxDYXJkSGVhZGVyIHRpdGxlPVwiVG90YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk5ldCBwcm9kdWN0cyBjb3N0IDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57bG9hZGNwcm9kdWN0KCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5TdWIgVG90YWwgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntjYWxjdWxhdGlvbi5zdWJ0b3RhbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlZBVCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgbmFtZT1cInZhdFwiPntjYWxjdWxhdGlvbi50b3RhbHZhdH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlRvdGFsIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJncmFuZHRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGlvbi5ncmFuZFRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIlRvdGFsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5OZXQgcHJvZHVjdHMgY29zdCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKChsb2FkY3Byb2R1Y3QoKSArIE51bWJlci5FUFNJTE9OKSAqIDEwMCkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U2hpcHBpbmcgYW5kIEluc3RhbGxhdGlvbiA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Z2V0VmFsdWVzKCkub3RoZXJDb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKGdldFZhbHVlcygpLm90aGVyQ29zdHMpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5zaGlwcGluZ0Nvc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwb3EucG9xLnNoaXBwaW5nQ29zdCArIHBvcS5wb3Eub3RoZXJDb3N0fSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3ViIFRvdGFsIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbGN1bGF0aW9uLnN1YnRvdGFsICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5UYXhlcyA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgbmFtZT1cInZhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FsY3VsYXRpb24udG90YWx2YXQgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgLyAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkdyYW5kIHRvdGFsIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJncmFuZHRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxjdWxhdGlvbi5ncmFuZFRvdGFsICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIHsvKiBQcm9kdWN0cyAqL31cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiUHJvZHVjdHNcIiAvPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs5fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IE5hbWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogUXVhbnRpdHkgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RRdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MX0geHM9ezEyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbiBmb250U2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgey8qIFByb2R1Y3RzIFRhYmxlICovfVxyXG4gICAgICAgICAgICAgICAgPEJveCBtdD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIDxSZXN1bHRzIHF1ZXJ5PXtwcm9qZWN0fSBzZXRwcm9qZWN0PXtzZXRwcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgey8qIEVycm9yICovfVxyXG4gICAgICAgIHtlcnJvcnMuc3VibWl0RXJyb3IgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD17MX0gZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQgc3R5bGU9e3sgZm9udFNpemU6ICcyNHB4JyB9fSBlcnJvcj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLnN1Ym1pdEVycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Qm94IG10PXs1fT5cclxuICAgICAgICAgIHsvKiBTdWJtaXQgKi99XHJcbiAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gKFxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cclxuICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Gb3JtUHJvdmlkZXI+XHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gYWRkcHJvZHVjdCgpIHtcclxuICAgIGlmICghZ2V0VmFsdWVzKCkucHJvZHVjdE5hbWUpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnByb2plY3QuaWQsXHJcbiAgICAgIHByb2R1Y3Q6IGdldFZhbHVlcygpLnByb2R1Y3ROYW1lLmlkLFxyXG4gICAgICBxbnR5OiBOdW1iZXIoZ2V0VmFsdWVzKCkucHJvZHVjdFF0eSksXHJcbiAgICAgIEVuZFVzZXJQcmljZTogZ2V0VmFsdWVzKCkucHJvZHVjdE5hbWUucHJpY2UsXHJcbiAgICAgIFNhbGVQcmljZTogMCxcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcm9qZWN0LWRldGFpbHMnLFxyXG4gICAgICBuZXdQcm9kdWN0LFxyXG4gICAgKTtcclxuICAgIHNldHByb2plY3Qoe1xyXG4gICAgICAuLi5wcm9qZWN0LFxyXG4gICAgICBwcm9qZWN0ZGV0YWlsOiBbLi4ucHJvamVjdC5wcm9qZWN0ZGV0YWlsLCByZXNwLmRhdGFdLFxyXG4gICAgfSk7XHJcbiAgICBzZXRWYWx1ZSgncHJvZHVjdE5hbWUnLCB7fSk7XHJcbiAgICBzZXRWYWx1ZSgncHJvZHVjdFF0eScsIDApO1xyXG4gIH1cclxuXHJcbiAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldFZhbHVlKCdzdWJtaXRFcnJvcicsICcnKTtcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgICAgLy8gUmVzZXQgc3VibWl0RXJyb3IgbWVzc2FnZVxyXG4gICAgICAvLyBzZXRWYWx1ZSgnc3VibWl0RXJyb3InLCAnJyk7XHJcbiAgICAgIC8vIGNvbnN0IHByb2plY3RJbnB1dCA9IHtcclxuICAgICAgLy8gICBuYW1lOiB2YWx1ZXMucHJvamVjdE5hbWUsXHJcbiAgICAgIC8vICAgY3VzdG9tZXI6IHZhbHVlLmN1c3RvbWVyTmFtZS5pZCxcclxuICAgICAgLy8gICBwb3E6IHZhbHVlLnBvcU51bWJlci5pZCxcclxuICAgICAgLy8gICBzdGF0dXM6IHZhbHVlLnN0YXR1cy5sYWJlbCxcclxuICAgICAgLy8gICB0eXBlOiB2YWx1ZS5zY29wZS5sYWJlbCxcclxuICAgICAgLy8gICBzYXJ0RGF0ZTogdmFsdWUuc3RhcnREYXRlLFxyXG4gICAgICAvLyAgIGVuZERhdGU6IHZhbHVlLmVuZERhdGUsXHJcbiAgICAgIC8vICAgZ3JhbmRUb3RhbDogY2FsY3VsYXRpb24uZ3JhbmRUb3RhbCxcclxuICAgICAgLy8gfTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdElucHV0KTtcclxuXHJcbiAgICAgIGVucXVldWVTbmFja2JhcigncHJvamVjdCBlZGl0IHN1Y2Nlc3NmdWxseS4nLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJyB9KTtcclxuICAgICAgcmVzZXQoKTtcclxuXHJcbiAgICAgIC8vIFNob3cgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlXHJcbiAgICAgIGVucXVldWVTbmFja2JhcignRXJyb3IgZWRpdCBQcm9qZWN0JywgeyB2YXJpYW50OiAnZXJyb3InIH0pO1xyXG5cclxuICAgICAgLy8gU2hvdyBzdWJtaXRFcnJvciBtZXNzYWdlXHJcbiAgICAgIHNldEVycm9yKCdzdWJtaXRFcnJvcicsIHtcclxuICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICBtZXNzYWdlOiAnRXJyb3IgZWRpdCBwcm9qZWN0JyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9