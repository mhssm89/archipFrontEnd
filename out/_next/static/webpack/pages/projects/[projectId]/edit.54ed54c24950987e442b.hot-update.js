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
          lg: 4,
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
                      children: Math.round((productsCost + Number.EPSILON) * 100) / 100
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
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: getValues().otherCosts ? Number(getValues().otherCosts) + Number(getValues().shippingCost) : project.project.shippingcost + project.project.otherCost
                    }, void 0, false, {
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
                      lineNumber: 430,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 429,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: Math.round((calculation.subtotal + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 433,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 432,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Taxes : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 440,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 439,
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
                      lineNumber: 443,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 442,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    md: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      children: "Grand total : "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 450,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 449,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
                      name: "grandtotal",
                      children: Math.round((calculation.grandTotal + Number.EPSILON) * 100) / 100
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 453,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 452,
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
          lg: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
              title: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 469,
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
                    lineNumber: 474,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
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
                    lineNumber: 483,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 482,
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
                        lineNumber: 500,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 499,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 493,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 491,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 471,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
                mt: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Results__WEBPACK_IMPORTED_MODULE_23__["default"], {
                  query: project,
                  setproject: setproject
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 507,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 506,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 470,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 467,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 466,
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
          lineNumber: 517,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mt: 5,
        children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "contained",
          color: "secondary",
          type: "submit",
          disabled: isSubmitting,
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 523,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvZWRpdC9Gb3JtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJlZGl0b3IiLCJoZWlnaHQiLCJhZGRQcm9kdWN0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJwcm9qZWN0U3RhdHVzIiwibGFiZWwiLCJ2YWx1ZSIsInByb2plY3RzY29wZSIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsInByb2plY3ROYW1lIiwibWF4IiwicmVxdWlyZWQiLCJjdXN0b21lck5hbWUiLCJpZCIsIm51bGxhYmxlIiwibmFtZSIsInBvcU51bWJlciIsImN1c3RvbWVyIiwiY3VzdG9tZXJJZCIsImdyYW5kdG90YWwiLCJzY29wZSIsImxhYmxlIiwic3RhdHVzIiwic3RhcnREYXRlIiwidHlwZUVycm9yIiwiZW5kRGF0ZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nQ29zdCIsIm90aGVyQ29zdHMiLCJ0b3RhbGRpc2NvdW50IiwidmF0cGVyY2VudGFnZSIsInByb2R1Y3RRdHkiLCJwcm9kdWN0TmFtZSIsIkZvcm0iLCJjbGFzc05hbWUiLCJwcm9qZWN0Iiwic2V0cHJvamVjdCIsInJlc3QiLCJjbGFzc2VzIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicHJqZWN0IiwicHJvZHVjdFRvdGFsQ29zdCIsInByb2R1Y3RzQ29zdCIsInNldFByb2R1Y3RzQ29zdCIsInN1YnRvdGFsIiwidG90YWx2YXQiLCJ2YXQiLCJncmFuZFRvdGFsIiwiY2FsY3VsYXRpb24iLCJzZXRDYWxjdWxhdGlvbiIsImVuYWJsZWNyZWF0ZSIsInNldEVuYWJsZUNyZWF0ZSIsIm1ldGhvZHMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwicG9xIiwiTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidHlwZSIsIkRhdGUiLCJvdGhlckNvc3QiLCJ0b3RhbERpc2NvdW50Iiwic3VibWl0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInNldFZhbHVlIiwiZ2V0VmFsdWVzIiwicmVzZXQiLCJpc1N1Ym1pdHRpbmciLCJmb3JtU3RhdGUiLCJoYW5kZWxDYWxjdWxhdGUiLCJpdGVtcHJvZHVjdGNvc3QiLCJwcm9qZWN0ZGV0YWlsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzYWxlcHJpY2UiLCJxbnR5IiwiTnVtYmVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiY2xzeCIsImNhbGNCdXR0b24iLCJNYXRoIiwicm91bmQiLCJFUFNJTE9OIiwic2hpcHBpbmdjb3N0IiwiYWRkcHJvZHVjdCIsImZvbnRTaXplIiwibWVzc2FnZSIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0IiwiRW5kVXNlclByaWNlIiwicHJpY2UiLCJheGlvcyIsInBvc3QiLCJyZXNwIiwiZGF0YSIsInZhbHVlcyIsInZhcmlhbnQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsVUFBTSxFQUFFO0FBQ04sc0JBQWdCO0FBQ2RDLGNBQU0sRUFBRTtBQURNO0FBRFYsS0FGK0I7QUFPdkNDLGNBQVUsRUFBRTtBQUNWQyxnQkFBVSxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFQMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7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V0EwYjFDZ0IsUUExYjBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlTQTBiekQsa0JBQXdCa0IsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGtCQUFJO0FBQ0ZsQyx3QkFBUSxDQUFDLGFBQUQsRUFBZ0IsRUFBaEIsQ0FBUjtBQUNBYyx1QkFBTyxDQUFDQyxHQUFSLENBQVltQixNQUFaLEVBRkUsQ0FHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQW5FLCtCQUFlLENBQUMsNEJBQUQsRUFBK0I7QUFBRW9FLHlCQUFPLEVBQUU7QUFBWCxpQkFBL0IsQ0FBZjtBQUNBakMscUJBQUssR0FsQkgsQ0FvQkY7QUFDRCxlQXJCRCxDQXFCRSxPQUFPa0MsR0FBUCxFQUFZO0FBQ1o7QUFDQXJFLCtCQUFlLENBQUMsb0JBQUQsRUFBdUI7QUFBRW9FLHlCQUFPLEVBQUU7QUFBWCxpQkFBdkIsQ0FBZixDQUZZLENBSVo7O0FBQ0FwQyx3QkFBUSxDQUFDLGFBQUQsRUFBZ0I7QUFDdEJQLHNCQUFJLEVBQUUsUUFEZ0I7QUFFdEJpQyx5QkFBTyxFQUFFO0FBRmEsaUJBQWhCLENBQVI7QUFJRDs7QUEvQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0ExYnlEO0FBQUE7QUFBQTtBQTJkMUQ7O0dBM2RRakUsSTtVQUNTeEMsUyxFQUNZOEMsc0QsRUFhWmlCLHdEOzs7S0FmVHZCLEk7QUE2ZE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0SWRdL2VkaXQuNTRlZDU0YzI0OTUwOTg3ZTQ0MmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXHJcbiAgRGl2aWRlcixcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIEljb25CdXR0b24sXHJcbiAgbWFrZVN0eWxlcyxcclxuICBTdmdJY29uLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XHJcbmltcG9ydCB7IFBsdXMgYXMgUGx1c0ljb24gfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZvcm1BdXRvY29tcGxldGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRm9ybUF1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBGb3JtRGF0ZVBpY2tlciBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9Gb3JtRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEN1c3RvbWVyQXV0b0NvbXBlbGV0ZSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy9DdXN0b21lckF1dG9Db21wZWxldGUnO1xyXG5pbXBvcnQgUG9xQXV0b0NvbXBsZXRlIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1BvcUF1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBQcm9kdWN0QXV0b0NvbXBsZXRlIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1Byb2R1Y3RBdXRvQ29tcGVsZXRlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7fSxcclxuICBlZGl0b3I6IHtcclxuICAgICcmIC5xbC1lZGl0b3InOiB7XHJcbiAgICAgIGhlaWdodDogNDAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFkZFByb2R1Y3Q6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgcHJvamVjdFN0YXR1cyA9IFtcclxuICB7IGxhYmVsOiAnTmVnb3RpYXRpb24nLCB2YWx1ZTogJ05lZ290aWF0aW9uJyB9LFxyXG4gIHsgbGFiZWw6ICdTaWduZWQnLCB2YWx1ZTogJ1NpZ25lZCcgfSxcclxuICB7IGxhYmVsOiAnSW5wcm9ncmVzcycsIHZhbHVlOiAnSW5wcm9ncmVzcycgfSxcclxuICB7IGxhYmVsOiAnRmluaXNoZWQnLCB2YWx1ZTogJ0ZpbmlzaGVkJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgcHJvamVjdHNjb3BlID0gW1xyXG4gIHsgbGFiZWw6ICdQZXJzb25hbCcsIHZhbHVlOiAnUGVyc29uYWwnIH0sXHJcbiAgeyBsYWJlbDogJ0NvbW1lcmNpYWwnLCB2YWx1ZTogJ0NvbW1lcmNpYWwnIH0sXHJcbiAgeyBsYWJlbDogJ0luZHVzdHJpYWwnLCB2YWx1ZTogJ0luZHVzdHJpYWwnIH0sXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBwcm9qZWN0TmFtZTogeXVwLnN0cmluZygpLm1heCgyNTUpLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBjdXN0b21lck5hbWU6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoe1xyXG4gICAgICBpZDogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgICAgIG5hbWU6IHl1cC5zdHJpbmcoKS5udWxsYWJsZSgpLFxyXG4gICAgfSlcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAucmVxdWlyZWQoJ0N1dG9tZXIgbmFtZSBpcyByZXF1aXJlZCcpLFxyXG5cclxuICBwb3FOdW1iZXI6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoe1xyXG4gICAgICBpZDogeXVwLm51bWJlcigpLm51bGxhYmxlLFxyXG4gICAgICBuYW1lOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgICAgY3VzdG9tZXI6IHl1cC5zdHJpbmcoKS5udWxsYWJsZSgpLFxyXG4gICAgICBjdXN0b21lcklkOiB5dXAubnVtYmVyKCkubnVsbGFibGUoKSxcclxuICAgICAgZ3JhbmR0b3RhbDogeXVwLm51bWJlcigpLm51bGxhYmxlKCksXHJcbiAgICB9KVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC5yZXF1aXJlZCgnQk9RIG5hbWUgaXMgcmVxdWlyZWQnKSxcclxuICBzY29wZTogeXVwXHJcbiAgICAub2JqZWN0KClcclxuICAgIC5zaGFwZSh7XHJcbiAgICAgIGxhYmxlOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgICAgdmFsdWU6IHl1cC5zdHJpbmcoKS5udWxsYWJsZSgpLFxyXG4gICAgfSlcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAucmVxdWlyZWQoJ1Byb2plY3Qgc2NvcGUgaXMgcmVxdWlyZWQnKSxcclxuICBzdGF0dXM6IHl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoe1xyXG4gICAgICBsYWJsZTogeXVwLnN0cmluZygpLm51bGxhYmxlKCksXHJcbiAgICAgIHZhbHVlOiB5dXAuc3RyaW5nKCkubnVsbGFibGUoKSxcclxuICAgIH0pXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnJlcXVpcmVkKCdQcm9qZWN0IHN0YXR1cyBpcyByZXF1aXJlZCcpLFxyXG4gIHN0YXJ0RGF0ZTogeXVwXHJcbiAgICAuZGF0ZSgpXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnR5cGVFcnJvcignSW52YWxpZCBkYXRlLicpXHJcbiAgICAucmVxdWlyZWQoJ1JlcXVpcmVkLicpLFxyXG4gIGVuZERhdGU6IHl1cFxyXG4gICAgLmRhdGUoKVxyXG4gICAgLm51bGxhYmxlKClcclxuICAgIC50eXBlRXJyb3IoJ0ludmFsaWQgZGF0ZS4nKVxyXG4gICAgLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBzaGlwcGluZ0FkZHJlc3M6IHl1cC5zdHJpbmcoKS5tYXgoMjU1KSxcclxuICBzaGlwcGluZ0Nvc3Q6IHl1cC5udW1iZXIoKSxcclxuICBvdGhlckNvc3RzOiB5dXAubnVtYmVyKCksXHJcbiAgdG90YWxkaXNjb3VudDogeXVwLm51bWJlcigpLFxyXG4gIHZhdHBlcmNlbnRhZ2U6IHl1cC5udW1iZXIoKSxcclxuICBwcm9kdWN0UXR5OiB5dXAubnVtYmVyKCkubnVsbGFibGUoKSxcclxuICBwcm9kdWN0TmFtZTogeXVwXHJcbiAgICAub2JqZWN0KClcclxuICAgIC5zaGFwZSh7IGlkOiB5dXAubnVtYmVyKCksIG5hbWU6IHl1cC5zdHJpbmcoKSB9KVxyXG4gICAgLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gRm9ybSh7IGNsYXNzTmFtZSwgcHJvamVjdCwgc2V0cHJvamVjdCwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IFtwcm9kdWN0c0Nvc3QsIHNldFByb2R1Y3RzQ29zdF0gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIHByb2plY3QucHJqZWN0LnByb2R1Y3RUb3RhbENvc3QsXHJcbiAgKTtcclxuICBjb25zdCBbY2FsY3VsYXRpb24sIHNldENhbGN1bGF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHN1YnRvdGFsOiBwcm9qZWN0LnByb2plY3Quc3VidG90YWwsXHJcbiAgICB0b3RhbHZhdDogKHByb2plY3QucHJvamVjdC52YXQgKiBwcm9qZWN0LnByb2plY3Quc3VidG90YWwpIC8gMTAwLFxyXG4gICAgZ3JhbmRUb3RhbDpcclxuICAgICAgcHJvamVjdC5wcm9qZWN0LnN1YnRvdGFsICtcclxuICAgICAgKHByb2plY3QucHJvamVjdC52YXQgKiBwcm9qZWN0LnByb2plY3Quc3VidG90YWwpIC8gMTAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlbmFibGVjcmVhdGUsIHNldEVuYWJsZUNyZWF0ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKHtcclxuICAgIG1vZGU6ICdhbGwnLFxyXG4gICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpLFxyXG4gICAgZGVmYXVsdFZhbHVlczoge1xyXG4gICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0Lm5hbWUgfHwgJycsXHJcbiAgICAgIHBvcU51bWJlcjpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogcHJvamVjdC5wcm9qZWN0LnBvcS5pZCxcclxuICAgICAgICAgIG5hbWU6IHByb2plY3QucHJvamVjdC5wb3EuTmFtZSxcclxuICAgICAgICAgIGN1c3RvbWVyOiBgJHtwcm9qZWN0LnByb2plY3QuY3VzdG9tZXIuZmlyc3ROYW1lfSAke3Byb2plY3QucHJvamVjdC5jdXN0b21lci5sYXN0TmFtZX1gLFxyXG4gICAgICAgICAgY3VzdG9tZXJJZDogcHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmlkLFxyXG4gICAgICAgICAgZ3JhbmR0b3RhbDogcHJvamVjdC5wcm9qZWN0LmdyYW5kVG90YWwsXHJcbiAgICAgICAgfSB8fCBudWxsLFxyXG4gICAgICBjdXN0b21lck5hbWU6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHByb2plY3QucHJvamVjdC5jdXN0b21lci5pZCxcclxuICAgICAgICAgIG5hbWU6IGAke3Byb2plY3QucHJvamVjdC5jdXN0b21lci5maXJzdE5hbWV9ICR7cHJvamVjdC5wcm9qZWN0LmN1c3RvbWVyLmxhc3ROYW1lfSBgLFxyXG4gICAgICAgIH0gfHwgbnVsbCxcclxuICAgICAgc3RhdHVzOlxyXG4gICAgICAgIHsgbGFiZWw6IHByb2plY3QucHJvamVjdC5zdGF0dXMsIHZhbHVlOiBwcm9qZWN0LnByb2plY3Quc3RhdHVzIH0gfHwgJycsXHJcbiAgICAgIHNjb3BlOiB7IGxhYmVsOiBwcm9qZWN0LnByb2plY3QudHlwZSwgdmFsdWU6IHByb2plY3QucHJvamVjdC50eXBlIH0gfHwgJycsXHJcbiAgICAgIHN0YXJ0RGF0ZTogcHJvamVjdC5wcm9qZWN0LnN0YXJ0RGF0ZSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICBlbmREYXRlOiBwcm9qZWN0LnByb2plY3QuZW5kRGF0ZSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHByb2plY3QucHJvamVjdC5wb3Euc2hpcHBpbmdBZGRyZXNzIHx8ICcnLFxyXG4gICAgICBzaGlwcGluZ0Nvc3Q6IHByb2plY3QucHJvamVjdC5wb3Euc2hpcHBpbmdDb3N0IHx8IDAsXHJcbiAgICAgIG90aGVyQ29zdHM6IHByb2plY3QucHJvamVjdC5wb3Eub3RoZXJDb3N0IHx8IDAsXHJcbiAgICAgIHRvdGFsZGlzY291bnQ6IHByb2plY3QucHJvamVjdC5wb3EudG90YWxEaXNjb3VudCB8fCAwLFxyXG4gICAgICB2YXRwZXJjZW50YWdlOiBwcm9qZWN0LnByb2plY3QucG9xLnZhdCB8fCAwLFxyXG4gICAgICBwcm9kdWN0UXR5OiAxLFxyXG4gICAgICBwcm9kdWN0TmFtZTogbnVsbCxcclxuICAgICAgc3VibWl0RXJyb3I6ICcnLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBzZXRFcnJvcixcclxuICAgIHNldFZhbHVlLFxyXG4gICAgZ2V0VmFsdWVzLFxyXG4gICAgcmVzZXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgaXNTdWJtaXR0aW5nIH0sXHJcbiAgfSA9IG1ldGhvZHM7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRlbENhbGN1bGF0ZSgpIHtcclxuICAgIGxldCBpdGVtcHJvZHVjdGNvc3QgPSAwO1xyXG4gICAgcHJvamVjdC5wcm9qZWN0ZGV0YWlsLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaXRlbXByb2R1Y3Rjb3N0ICs9IGVsZW1lbnQuc2FsZXByaWNlICogZWxlbWVudC5xbnR5O1xyXG4gICAgfSk7XHJcbiAgICBzZXRQcm9kdWN0c0Nvc3QoaXRlbXByb2R1Y3Rjb3N0KTtcclxuICAgIHZhciBzdWJ0b3RhbCA9XHJcbiAgICAgIGl0ZW1wcm9kdWN0Y29zdCArXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5vdGhlckNvc3RzKSArXHJcbiAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5zaGlwcGluZ0Nvc3QpIC1cclxuICAgICAgTnVtYmVyKGdldFZhbHVlcygpLnRvdGFsZGlzY291bnQpO1xyXG4gICAgdmFyIHRvdGFsdmF0ID0gKHN1YnRvdGFsICogZ2V0VmFsdWVzKCkudmF0cGVyY2VudGFnZSkgLyAxMDA7XHJcbiAgICB2YXIgZ3JhbmRUb3RhbCA9IHN1YnRvdGFsICsgdG90YWx2YXQ7XHJcbiAgICBzZXRDYWxjdWxhdGlvbih7IHN1YnRvdGFsLCB0b3RhbHZhdCwgZ3JhbmRUb3RhbCB9KTtcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGxvYWRjcHJvZHVjdCgpIHtcclxuICAvLyAgIGxldCBwcm9kdWN0c0Nvc3RISCA9IDA7XHJcbiAgLy8gICBwcm9qZWN0LnByb2plY3RkZXRhaWwubWFwKChpdGVtKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IGl0ZW1wcmljZSA9IGl0ZW0uRW5kVXNlclByaWNlICogaXRlbS5xbnR5O1xyXG4gIC8vICAgICBwcm9kdWN0c0Nvc3RISCArPSBpdGVtcHJpY2U7XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICByZXR1cm4gcHJvZHVjdHNDb3N0SEg7XHJcbiAgLy8gfVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gbG9hZGNwcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgICB7Li4ucmVzdH0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fT5cclxuICAgICAgICAgICAgey8qIEJhc2ljICovfVxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIkJhc2ljXCIgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgey8qIFByb2plY3QgbmFtZSAjICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvamVjdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9qZWN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogQ3VzdG9tZXIgbmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyQXV0b0NvbXBlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbWVyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkN1c3RvbWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFBPUSBudW1iZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3FBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb3FOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCLk8uUSAjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogcHJvamVjdCBzdGF0dXMgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdCBTdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvamVjdFN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIHByb2plY3Qgc2NvcGUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2NvcGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9qZWN0IFNjb3BlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2plY3RzY29wZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFN0YXJ0IERhdGUgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1EYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhcnREYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBFbmQgRGF0ZSAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybURhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbmREYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kIERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogU2hpcHBpbmcgQWRkcmVzcyAqL31cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoaXBwaW5nIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDb3N0cyAqL31cclxuICAgICAgICAgICAgPEJveCBtdD17M30+XHJcbiAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIk90aGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIENvc3QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogU2hpcHBpbmcgQ29zdCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nQ29zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hpcHBpbmcgQ29zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogT3RoZXIgQ29zdHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlckNvc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNpZ24gLSBJbnN0YWxsYXRpb24gLSBEb2N1bWVudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdGFsZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIGRpc2NvdW50IGFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2YXRwZXJjZW50YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWQVQgJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezZ9IG1kPXs2fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlQ3JlYXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRlbENhbGN1bGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FsY0J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbGN1bGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgey8qIDxDYXJkSGVhZGVyIHRpdGxlPVwiVG90YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk5ldCBwcm9kdWN0cyBjb3N0IDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57bG9hZGNwcm9kdWN0KCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5TdWIgVG90YWwgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntjYWxjdWxhdGlvbi5zdWJ0b3RhbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlZBVCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgbmFtZT1cInZhdFwiPntjYWxjdWxhdGlvbi50b3RhbHZhdH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlRvdGFsIDogPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJncmFuZHRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGlvbi5ncmFuZFRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIlRvdGFsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5OZXQgcHJvZHVjdHMgY29zdCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKChwcm9kdWN0c0Nvc3QgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlNoaXBwaW5nIGFuZCBJbnN0YWxsYXRpb24gOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmFsdWVzKCkub3RoZXJDb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKGdldFZhbHVlcygpLm90aGVyQ29zdHMpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihnZXRWYWx1ZXMoKS5zaGlwcGluZ0Nvc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9qZWN0LnByb2plY3Quc2hpcHBpbmdjb3N0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdC5vdGhlckNvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlN1YiBUb3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxjdWxhdGlvbi5zdWJ0b3RhbCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VGF4ZXMgOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG5hbWU9XCJ2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbGN1bGF0aW9uLnRvdGFsdmF0ICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5HcmFuZCB0b3RhbCA6IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBuYW1lPVwiZ3JhbmR0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FsY3VsYXRpb24uZ3JhbmRUb3RhbCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICB7LyogUHJvZHVjdHMgKi99XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIlByb2R1Y3RzXCIgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OX0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBOYW1lICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgey8qIFF1YW50aXR5ICovfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0UXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmo9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezF9IHhzPXsxMn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgQnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZUNyZWF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHByb2R1Y3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0cyBUYWJsZSAqL31cclxuICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8UmVzdWx0cyBxdWVyeT17cHJvamVjdH0gc2V0cHJvamVjdD17c2V0cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIHsvKiBFcnJvciAqL31cclxuICAgICAgICB7ZXJyb3JzLnN1Ym1pdEVycm9yICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9ezF9IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAnMjRweCcgfX0gZXJyb3I+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5zdWJtaXRFcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJveCBtdD17NX0+XHJcbiAgICAgICAgICB7LyogU3VibWl0ICovfVxyXG4gICAgICAgICAge2lzU3VibWl0dGluZyA/IChcclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRm9ybVByb3ZpZGVyPlxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZHByb2R1Y3QoKSB7XHJcbiAgICBpZiAoIWdldFZhbHVlcygpLnByb2R1Y3ROYW1lKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0LmlkLFxyXG4gICAgICBwcm9kdWN0OiBnZXRWYWx1ZXMoKS5wcm9kdWN0TmFtZS5pZCxcclxuICAgICAgcW50eTogTnVtYmVyKGdldFZhbHVlcygpLnByb2R1Y3RRdHkpLFxyXG4gICAgICBFbmRVc2VyUHJpY2U6IGdldFZhbHVlcygpLnByb2R1Y3ROYW1lLnByaWNlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Byb2plY3QtZGV0YWlscycsXHJcbiAgICAgIG5ld1Byb2R1Y3QsXHJcbiAgICApO1xyXG4gICAgc2V0cHJvamVjdCh7XHJcbiAgICAgIC4uLnByb2plY3QsXHJcbiAgICAgIHByb2plY3RkZXRhaWw6IFsuLi5wcm9qZWN0LnByb2plY3RkZXRhaWwsIHJlc3AuZGF0YV0sXHJcbiAgICB9KTtcclxuICAgIHNldFZhbHVlKCdwcm9kdWN0TmFtZScsIHt9KTtcclxuICAgIHNldFZhbHVlKCdwcm9kdWN0UXR5JywgMCk7XHJcbiAgfVxyXG5cclxuICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KHZhbHVlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0VmFsdWUoJ3N1Ym1pdEVycm9yJywgJycpO1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAvLyBSZXNldCBzdWJtaXRFcnJvciBtZXNzYWdlXHJcbiAgICAgIC8vIHNldFZhbHVlKCdzdWJtaXRFcnJvcicsICcnKTtcclxuICAgICAgLy8gY29uc3QgcHJvamVjdElucHV0ID0ge1xyXG4gICAgICAvLyAgIG5hbWU6IHZhbHVlcy5wcm9qZWN0TmFtZSxcclxuICAgICAgLy8gICBjdXN0b21lcjogdmFsdWUuY3VzdG9tZXJOYW1lLmlkLFxyXG4gICAgICAvLyAgIHBvcTogdmFsdWUucG9xTnVtYmVyLmlkLFxyXG4gICAgICAvLyAgIHN0YXR1czogdmFsdWUuc3RhdHVzLmxhYmVsLFxyXG4gICAgICAvLyAgIHR5cGU6IHZhbHVlLnNjb3BlLmxhYmVsLFxyXG4gICAgICAvLyAgIHNhcnREYXRlOiB2YWx1ZS5zdGFydERhdGUsXHJcbiAgICAgIC8vICAgZW5kRGF0ZTogdmFsdWUuZW5kRGF0ZSxcclxuICAgICAgLy8gICBncmFuZFRvdGFsOiBjYWxjdWxhdGlvbi5ncmFuZFRvdGFsLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5wdXQpO1xyXG5cclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdwcm9qZWN0IGVkaXQgc3VjY2Vzc2Z1bGx5LicsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgICByZXNldCgpO1xyXG5cclxuICAgICAgLy8gU2hvdyBzdWNjZXNzIG1lc3NhZ2VcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvLyBTaG93IGVycm9yIG1lc3NhZ2VcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdFcnJvciBlZGl0IFByb2plY3QnLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcblxyXG4gICAgICAvLyBTaG93IHN1Ym1pdEVycm9yIG1lc3NhZ2VcclxuICAgICAgc2V0RXJyb3IoJ3N1Ym1pdEVycm9yJywge1xyXG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdFcnJvciBlZGl0IHByb2plY3QnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=