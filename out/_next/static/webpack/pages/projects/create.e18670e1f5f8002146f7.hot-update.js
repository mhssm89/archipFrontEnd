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
                  name: item.Name,
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
                  profit: profit
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvUG9xQXV0b2NvbXBsZXRlLmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5QXV0b2NvbXBsZXRlIiwibmFtZSIsImxhYmVsIiwiZXJyb3JPYmoiLCJwcm9wcyIsInVzZUZvcm1Db250ZXh0IiwiY29udHJvbCIsInVzZUNvbnRyb2xsZXIiLCJmaWVsZCIsInJlZiIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvckhhbmRsZXIiLCJpc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwib25DaGFuZ2VIYW5kbGUiLCJ2YWx1ZSIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwiTmFtZSIsImN1c3RvbWVyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjdXN0b21lcklkIiwiZ3JhbmR0b3RhbCIsImdyYW5kVG90YWwiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ2Nvc3QiLCJzaGlwcGluZ0Nvc3QiLCJvdGhlcmNvc3QiLCJvdGhlckNvc3QiLCJ2YXQiLCJwcm9kdWN0VG90YWxDb3N0IiwicHJvZHVjdFRvdGFsY29zdCIsInN1YnRvdGFsIiwidG90YWxkaXNjb3VudCIsInRvdGFsRGlzY291bnQiLCJwcm9maXQiLCJ1c2VFZmZlY3QiLCJfIiwib3B0aW9uIiwicGFyYW1zIiwiZSIsInRhcmdldCIsIklucHV0UHJvcHMiLCJlbmRBZG9ybm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFNQTtDQUlBOztDQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLG9CQUFULE9BQTZFO0FBQUE7O0FBQUE7O0FBQUEsTUFB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QUNHLFVBREY7QUFFUkMsd0JBQVksZUFDVjtBQUFBLHlCQUNHeEMsT0FBTyxnQkFBRyxxRUFBQyxrRUFBRDtBQUFrQixvQkFBSSxFQUFFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUgsR0FBb0MsSUFEOUMsRUFFR29DLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQkMsWUFGckI7QUFBQTtBQUhNO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBO0FBZGYsT0FnQ010RCxLQWhDTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFtQ0dpQixPQUFPLGlCQUFJLHFFQUFDLGdFQUFEO0FBQWdCLFdBQUssTUFBckI7QUFBQSxnQkFBdUJDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1Q0Q7O0dBakZRdEIsb0I7VUFDYUssK0QsRUFHaEJFLDhEOzs7QUErRVNQLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL2NyZWF0ZS5lMTg2NzBlMWY1ZjgwMDIxNDZmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbi8vIGltcG9ydCB7IEFQSSB9IGZyb20gJ2F3cy1hbXBsaWZ5JztcclxuaW1wb3J0IHtcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIFRleHRGaWVsZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuLy8gaW1wb3J0IHsgbGlzdFByb2R1Y3RLaW5kcyB9IGZyb20gJ3NyYy9ncmFwaHFsL3F1ZXJpZXMnO1xyXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9jb250cm9scy91dGlscyc7XHJcblxyXG4vLyBWYWxpZGF0aW9uIFNjaGVtYVxyXG4vLyBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuLy8gICBjb3VudHJ5OiB5dXAub2JqZWN0KCkubnVsbGFibGUoKS5yZXF1aXJlZCgnQ291bnRyeSBpcyByZXF1aXJlZCcpLFxyXG4vLyB9KTtcclxuXHJcbmZ1bmN0aW9uIGN1cnJlbmN5QXV0b2NvbXBsZXRlKHsgbmFtZSwgbGFiZWwgPSAnJywgZXJyb3JPYmogPSB7fSwgLi4ucHJvcHMgfSkge1xyXG4gIGNvbnN0IHsgY29udHJvbCB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICBjb25zdCB7XHJcbiAgICBmaWVsZDogeyByZWYsIG9uQ2hhbmdlLCAuLi5pbnB1dFByb3BzIH0sXHJcbiAgfSA9IHVzZUNvbnRyb2xsZXIoe1xyXG4gICAgbmFtZSxcclxuICAgIGNvbnRyb2wsXHJcbiAgfSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBpc0Vycm9yLCBlcnJvck1lc3NhZ2UgfSA9IGVycm9ySGFuZGxlcihuYW1lLCBlcnJvck9iaik7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlKHZhbHVlKSB7XHJcbiAgICAvL2lmICghdmFsdWUpIHJldHVybjtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAvLyBNYWtlIGFuIEFQSSByZXF1ZXN0XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3BvcXMnKTtcclxuICAgIHNldE9wdGlvbnMoXHJcbiAgICAgIHJlc3BvbnNlLmRhdGEubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgIG5hbWU6IGl0ZW0uTmFtZSxcclxuICAgICAgICBjdXN0b21lcjogaXRlbS5jdXN0b21lci5maXJzdE5hbWUgKyAnICcgKyBpdGVtLmN1c3RvbWVyLmxhc3ROYW1lLFxyXG4gICAgICAgIGN1c3RvbWVySWQ6IGl0ZW0uY3VzdG9tZXIuaWQsXHJcbiAgICAgICAgZ3JhbmR0b3RhbDogaXRlbS5ncmFuZFRvdGFsLFxyXG4gICAgICAgIHNoaXBwaW5nQWRkcmVzczogaXRlbS5zaGlwcGluZ0FkZHJlc3MsXHJcbiAgICAgICAgc2hpcHBpbmdjb3N0OiBpdGVtLnNoaXBwaW5nQ29zdCxcclxuICAgICAgICBvdGhlcmNvc3Q6IGl0ZW0ub3RoZXJDb3N0LFxyXG4gICAgICAgIHZhdDogaXRlbS52YXQsXHJcbiAgICAgICAgcHJvZHVjdFRvdGFsQ29zdDogaXRlbS5wcm9kdWN0VG90YWxjb3N0LFxyXG4gICAgICAgIHN1YnRvdGFsOiBpdGVtLnN1YnRvdGFsLFxyXG4gICAgICAgIHRvdGFsZGlzY291bnQ6IGl0ZW0udG90YWxEaXNjb3VudCxcclxuICAgICAgICBwcm9maXQ6IHByb2ZpdCxcclxuICAgICAgfSkpLFxyXG4gICAgKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghb3Blbikgc2V0T3B0aW9ucyhbXSk7XHJcbiAgfSwgW29wZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggZXJyb3I9e2lzRXJyb3J9PlxyXG4gICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgb25PcGVuPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoXywgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgb25DaGFuZ2UoZGF0YSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWV9XHJcbiAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24ubmFtZSA9PSB2YWx1ZS5uYW1lfVxyXG4gICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gPHNwYW4+e29wdGlvbi5uYW1lfTwvc3Bhbj59XHJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBlcnJvcj17aXNFcnJvcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZUhhbmRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAuLi5wYXJhbXMuSW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MjV9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAge3BhcmFtcy5JbnB1dFByb3BzLmVuZEFkb3JubWVudH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgICB7aXNFcnJvciAmJiA8Rm9ybUhlbHBlclRleHQgZXJyb3I+e2Vycm9yTWVzc2FnZX08L0Zvcm1IZWxwZXJUZXh0Pn1cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycmVuY3lBdXRvY29tcGxldGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=