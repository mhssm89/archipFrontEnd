webpackHotUpdate_N_E("pages/projects/create",{

/***/ "./src/components/controls/PoqAutocomplete.js":
/*!****************************************************!*\
  !*** ./src/components/controls/PoqAutocomplete.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var src_components_controls_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/controls/utils */ "./src/components/controls/utils.js");








var _jsxFileName = "F:\\archip-frontend\\src\\components\\controls\\PoqAutocomplete.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import { API } from 'aws-amplify';



 // import { listProductKinds } from 'src/graphql/queries';

 // Validation Schema
// const validationSchema = yup.object().shape({
//   country: yup.object().nullable().required('Country is required'),
// });

function currencyAutocomplete(_ref) {
  _s();

  var _this = this;

  var name = _ref.name,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$errorObj = _ref.errorObj,
      errorObj = _ref$errorObj === void 0 ? {} : _ref$errorObj,
      props = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["name", "label", "errorObj"]);

  var _useFormContext = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useFormContext"])(),
      control = _useFormContext.control;

  var _useController = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useController"])({
    name: name,
    control: control
  }),
      _useController$field = _useController.field,
      ref = _useController$field.ref,
      _onChange = _useController$field.onChange,
      inputProps = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_useController$field, ["ref", "onChange"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState([]),
      _React$useState4 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      options = _React$useState4[0],
      setOptions = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState6 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState5, 2),
      loading = _React$useState6[0],
      setLoading = _React$useState6[1];

  var _errorHandler = Object(src_components_controls_utils__WEBPACK_IMPORTED_MODULE_11__["errorHandler"])(name, errorObj),
      isError = _errorHandler.isError,
      errorMessage = _errorHandler.errorMessage;

  function onChangeHandle(_x) {
    return _onChangeHandle.apply(this, arguments);
  }

  function _onChangeHandle() {
    _onChangeHandle = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
      var response;
      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //if (!value) return;
              setLoading(true); // Make an API request

              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:1337/poqs');

            case 3:
              response = _context.sent;
              setOptions(response.data.map(function (item) {
                return {
                  id: item.id,
                  name: item.id,
                  customer: item.customer.firstName + ' ' + item.customer.lastName,
                  customerId: item.customer.id,
                  grandtotal: item.grandTotal,
                  shippingAddress: item.shippingAddress,
                  shippingcost: item.shippingCost,
                  othercost: item.otherCost,
                  vat: item.vat,
                  productTotalCost: item.productTotalcost,
                  subtotal: item.subtotal,
                  totaldiscount: item.totalDiscount,
                  profit: item.profit
                };
              }));
              setLoading(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onChangeHandle.apply(this, arguments);
  }

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    if (!open) setOptions([]);
  }, [open]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
    fullWidth: true,
    error: isError,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, inputProps), {}, {
      ref: ref,
      open: open,
      options: options,
      loading: loading,
      onOpen: function onOpen() {
        return setOpen(true);
      },
      onClose: function onClose() {
        return setOpen(false);
      },
      onChange: function onChange(_, data) {
        _onChange(data);
      },
      getOptionLabel: function getOptionLabel(option) {
        return option.name;
      },
      getOptionSelected: function getOptionSelected(option, value) {
        return option.name == value.name;
      },
      renderOption: function renderOption(option) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: option.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 35
        }, _this);
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], _objectSpread(_objectSpread({}, params), {}, {
          label: label,
          variant: "outlined",
          error: isError,
          onChange: function onChange(e) {
            return onChangeHandle(e.target.value);
          },
          InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
            endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
              children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {
                size: 25
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 30
              }, _this) : null, params.InputProps.endAdornment]
            }, void 0, true)
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this);
      }
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormHelperText"], {
      error: true,
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(currencyAutocomplete, "l3OSJJVbP1un2mXOy2irrxnIRsc=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useFormContext"], react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useController"]];
});

/* harmony default export */ __webpack_exports__["default"] = (currencyAutocomplete);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvUG9xQXV0b2NvbXBsZXRlLmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5QXV0b2NvbXBsZXRlIiwibmFtZSIsImxhYmVsIiwiZXJyb3JPYmoiLCJwcm9wcyIsInVzZUZvcm1Db250ZXh0IiwiY29udHJvbCIsInVzZUNvbnRyb2xsZXIiLCJmaWVsZCIsInJlZiIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvckhhbmRsZXIiLCJpc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwib25DaGFuZ2VIYW5kbGUiLCJ2YWx1ZSIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwiY3VzdG9tZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImN1c3RvbWVySWQiLCJncmFuZHRvdGFsIiwiZ3JhbmRUb3RhbCIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nY29zdCIsInNoaXBwaW5nQ29zdCIsIm90aGVyY29zdCIsIm90aGVyQ29zdCIsInZhdCIsInByb2R1Y3RUb3RhbENvc3QiLCJwcm9kdWN0VG90YWxjb3N0Iiwic3VidG90YWwiLCJ0b3RhbGRpc2NvdW50IiwidG90YWxEaXNjb3VudCIsInByb2ZpdCIsInVzZUVmZmVjdCIsIl8iLCJvcHRpb24iLCJwYXJhbXMiLCJlIiwidGFyZ2V0IiwiSW5wdXRQcm9wcyIsImVuZEFkb3JubWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQU1BO0NBSUE7O0NBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esb0JBQVQsT0FBNkU7QUFBQTs7QUFBQTs7QUFBQSxNQUE3Q0MsSUFB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TSxDQUFDRyxVQURGO0FBRVJDLHdCQUFZLGVBQ1Y7QUFBQSx5QkFDR3ZDLE9BQU8sZ0JBQUcscUVBQUMsa0VBQUQ7QUFBa0Isb0JBQUksRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFILEdBQW9DLElBRDlDLEVBRUdtQyxNQUFNLENBQUNHLFVBQVAsQ0FBa0JDLFlBRnJCO0FBQUE7QUFITTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQTtBQWRmLE9BZ0NNckQsS0FoQ047QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBbUNHaUIsT0FBTyxpQkFBSSxxRUFBQyxnRUFBRDtBQUFnQixXQUFLLE1BQXJCO0FBQUEsZ0JBQXVCQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEOztHQWpGUXRCLG9CO1VBQ2FLLCtELEVBR2hCRSw4RDs7O0FBK0VTUCxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9jcmVhdGUuN2U1N2E5MjFhYTY1MTRkYjYzM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vLyBpbXBvcnQgeyBBUEkgfSBmcm9tICdhd3MtYW1wbGlmeSc7XHJcbmltcG9ydCB7XHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlJztcclxuXHJcbmltcG9ydCB7IHVzZUNvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbi8vIGltcG9ydCB7IGxpc3RQcm9kdWN0S2luZHMgfSBmcm9tICdzcmMvZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgZXJyb3JIYW5kbGVyIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvdXRpbHMnO1xyXG5cclxuLy8gVmFsaWRhdGlvbiBTY2hlbWFcclxuLy8gY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbi8vICAgY291bnRyeTogeXVwLm9iamVjdCgpLm51bGxhYmxlKCkucmVxdWlyZWQoJ0NvdW50cnkgaXMgcmVxdWlyZWQnKSxcclxuLy8gfSk7XHJcblxyXG5mdW5jdGlvbiBjdXJyZW5jeUF1dG9jb21wbGV0ZSh7IG5hbWUsIGxhYmVsID0gJycsIGVycm9yT2JqID0ge30sIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCB7IGNvbnRyb2wgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgY29uc3Qge1xyXG4gICAgZmllbGQ6IHsgcmVmLCBvbkNoYW5nZSwgLi4uaW5wdXRQcm9wcyB9LFxyXG4gIH0gPSB1c2VDb250cm9sbGVyKHtcclxuICAgIG5hbWUsXHJcbiAgICBjb250cm9sLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgaXNFcnJvciwgZXJyb3JNZXNzYWdlIH0gPSBlcnJvckhhbmRsZXIobmFtZSwgZXJyb3JPYmopO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZSh2YWx1ZSkge1xyXG4gICAgLy9pZiAoIXZhbHVlKSByZXR1cm47XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gTWFrZSBhbiBBUEkgcmVxdWVzdFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3FzJyk7XHJcbiAgICBzZXRPcHRpb25zKFxyXG4gICAgICByZXNwb25zZS5kYXRhLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICBuYW1lOiBpdGVtLmlkLFxyXG4gICAgICAgIGN1c3RvbWVyOiBpdGVtLmN1c3RvbWVyLmZpcnN0TmFtZSArICcgJyArIGl0ZW0uY3VzdG9tZXIubGFzdE5hbWUsXHJcbiAgICAgICAgY3VzdG9tZXJJZDogaXRlbS5jdXN0b21lci5pZCxcclxuICAgICAgICBncmFuZHRvdGFsOiBpdGVtLmdyYW5kVG90YWwsXHJcbiAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBpdGVtLnNoaXBwaW5nQWRkcmVzcyxcclxuICAgICAgICBzaGlwcGluZ2Nvc3Q6IGl0ZW0uc2hpcHBpbmdDb3N0LFxyXG4gICAgICAgIG90aGVyY29zdDogaXRlbS5vdGhlckNvc3QsXHJcbiAgICAgICAgdmF0OiBpdGVtLnZhdCxcclxuICAgICAgICBwcm9kdWN0VG90YWxDb3N0OiBpdGVtLnByb2R1Y3RUb3RhbGNvc3QsXHJcbiAgICAgICAgc3VidG90YWw6IGl0ZW0uc3VidG90YWwsXHJcbiAgICAgICAgdG90YWxkaXNjb3VudDogaXRlbS50b3RhbERpc2NvdW50LFxyXG4gICAgICAgIHByb2ZpdDogaXRlbS5wcm9maXQsXHJcbiAgICAgIH0pKSxcclxuICAgICk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIW9wZW4pIHNldE9wdGlvbnMoW10pO1xyXG4gIH0sIFtvcGVuXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGVycm9yPXtpc0Vycm9yfT5cclxuICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIG9uT3Blbj17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICBvbkNoYW5nZT17KF8sIGRhdGEpID0+IHtcclxuICAgICAgICAgIG9uQ2hhbmdlKGRhdGEpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5uYW1lfVxyXG4gICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXsob3B0aW9uLCB2YWx1ZSkgPT4gb3B0aW9uLm5hbWUgPT0gdmFsdWUubmFtZX1cclxuICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IDxzcGFuPntvcHRpb24ubmFtZX08L3NwYW4+fVxyXG4gICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgZXJyb3I9e2lzRXJyb3J9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VIYW5kbGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgLi4ucGFyYW1zLklucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezI1fSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIHtwYXJhbXMuSW5wdXRQcm9wcy5lbmRBZG9ybm1lbnR9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgLz5cclxuICAgICAge2lzRXJyb3IgJiYgPEZvcm1IZWxwZXJUZXh0IGVycm9yPntlcnJvck1lc3NhZ2V9PC9Gb3JtSGVscGVyVGV4dD59XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJlbmN5QXV0b2NvbXBsZXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9