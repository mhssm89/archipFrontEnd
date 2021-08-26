webpackHotUpdate_N_E("pages/projects/create",{

/***/ "./src/components/pages/projects/create/PoqSearchForm.js":
/*!***************************************************************!*\
  !*** ./src/components/pages/projects/create/PoqSearchForm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var src_components_controls_FormAsyncAutocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/controls/FormAsyncAutocomplete */ "./src/components/controls/FormAsyncAutocomplete.js");
/* harmony import */ var src_components_controls_PoqAutocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/controls/PoqAutocomplete */ "./src/components/controls/PoqAutocomplete.js");






var _jsxFileName = "F:\\archip-frontend\\src\\components\\pages\\projects\\create\\PoqSearchForm.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 /// make a request to get all the customers
// using auto complete to fill the customer name



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function () {
  return {
    root: {},
    buttonreset: {
      marginRight: 15,
      backgroundColor: '#be2f29'
    }
  };
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_10__["object"]().shape({
  poqnumber: yup__WEBPACK_IMPORTED_MODULE_10__["number"]().required('Required.'),
  poqname: yup__WEBPACK_IMPORTED_MODULE_10__["object"]()
});

function PoqSearchForm(_ref) {
  _s();

  var className = _ref.className,
      customer = _ref.customer,
      onChange = _ref.onChange,
      rest = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["className", "customer", "onChange"]);

  var classes = useStyles();
  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"])({
    mode: 'all',
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__["yupResolver"])(validationSchema),
    defaultValues: {
      poqnumber: '',
      poqname: null
    }
  });
  var handleSubmit = methods.handleSubmit,
      errors = methods.errors,
      setError = methods.setError,
      reset = methods.reset,
      getValues = methods.getValues,
      isSubmitting = methods.formState.isSubmitting;

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(data) {
      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                // NOTE: Make API request
                onChange(getValues('poqname'));
                reset();
              } catch (err) {
                console.error(err);
                setError('submitError', {
                  type: 'submit',
                  message: err.message
                });
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  onChange(getValues('poqname'));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["FormProvider"], _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", _objectSpread(_objectSpread({
      onSubmit: handleSubmit(onSubmit),
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, className)
    }, rest), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(src_components_controls_PoqAutocomplete__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "BOQ #",
        name: "poqname",
        margin: "normal",
        variant: "outlined",
        errorObj: errors
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(PoqSearchForm, "6yikod/bR8XUJt9THcQnHgr+1C8=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"]];
});

_c = PoqSearchForm;
/* harmony default export */ __webpack_exports__["default"] = (PoqSearchForm);

var _c;

$RefreshReg$(_c, "PoqSearchForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvY3JlYXRlL1BvcVNlYXJjaEZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJidXR0b25yZXNldCIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidmFsaWRhdGlvblNjaGVtYSIsInl1cCIsInNoYXBlIiwicG9xbnVtYmVyIiwicmVxdWlyZWQiLCJwb3FuYW1lIiwiUG9xU2VhcmNoRm9ybSIsImNsYXNzTmFtZSIsImN1c3RvbWVyIiwib25DaGFuZ2UiLCJyZXN0IiwiY2xhc3NlcyIsIm1ldGhvZHMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsImdldFZhbHVlcyIsImlzU3VibWl0dGluZyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInR5cGUiLCJtZXNzYWdlIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQUEsU0FBTztBQUNsQ0MsUUFBSSxFQUFFLEVBRDRCO0FBRWxDQyxlQUFXLEVBQUU7QUFDWEMsaUJBQVcsRUFBRSxFQURGO0FBRVhDLHFCQUFlLEVBQUU7QUFGTjtBQUZxQixHQUFQO0FBQUEsQ0FBRCxDQUE1QjtBQVFBLElBQU1DLGdCQUFnQixHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxXQUFTLEVBQUVGLDJDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsV0FBdEIsQ0FEK0I7QUFFMUNDLFNBQU8sRUFBRUosMkNBQUE7QUFGaUMsQ0FBbkIsQ0FBekI7O0FBS0EsU0FBU0ssYUFBVCxPQUFtRTtBQUFBOztBQUFBLE1BQTFDQyxTQUEwQyxRQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVJDLElBQVE7O0FBQ2pFLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7QUFDQSxNQUFNa0IsT0FBTyxHQUFHQywrREFBTyxDQUFDO0FBQ3RCQyxRQUFJLEVBQUUsS0FEZ0I7QUFFdEJDLFlBQVEsRUFBRUMsMkVBQVcsQ0FBQ2hCLGdCQUFELENBRkM7QUFHdEJpQixpQkFBYSxFQUFFO0FBQ2JkLGVBQVMsRUFBRSxFQURFO0FBRWJFLGFBQU8sRUFBRTtBQUZJO0FBSE8sR0FBRCxDQUF2QjtBQUZpRSxNQVcvRGEsWUFYK0QsR0FpQjdETixPQWpCNkQsQ0FXL0RNLFlBWCtEO0FBQUEsTUFZL0RDLE1BWitELEdBaUI3RFAsT0FqQjZELENBWS9ETyxNQVorRDtBQUFBLE1BYS9EQyxRQWIrRCxHQWlCN0RSLE9BakI2RCxDQWEvRFEsUUFiK0Q7QUFBQSxNQWMvREMsS0FkK0QsR0FpQjdEVCxPQWpCNkQsQ0FjL0RTLEtBZCtEO0FBQUEsTUFlL0RDLFNBZitELEdBaUI3RFYsT0FqQjZELENBZS9EVSxTQWYrRDtBQUFBLE1BZ0JsREMsWUFoQmtELEdBaUI3RFgsT0FqQjZELENBZ0IvRFksU0FoQitELENBZ0JsREQsWUFoQmtEOztBQWtCakUsTUFBTUUsUUFBUTtBQUFBLGlTQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZixrQkFBSTtBQUNGO0FBQ0FqQix3QkFBUSxDQUFDYSxTQUFTLENBQUMsU0FBRCxDQUFWLENBQVI7QUFDQUQscUJBQUs7QUFDTixlQUpELENBSUUsT0FBT00sR0FBUCxFQUFZO0FBQ1pDLHVCQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBUCx3QkFBUSxDQUFDLGFBQUQsRUFBZ0I7QUFDdEJVLHNCQUFJLEVBQUUsUUFEZ0I7QUFFdEJDLHlCQUFPLEVBQUVKLEdBQUcsQ0FBQ0k7QUFGUyxpQkFBaEIsQ0FBUjtBQUlEOztBQVhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJOLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFhQWhCLFVBQVEsQ0FBQ2EsU0FBUyxDQUFDLFNBQUQsQ0FBVixDQUFSO0FBQ0Esc0JBQ0UscUVBQUMsNERBQUQsa0NBQWtCVixPQUFsQjtBQUFBLDJCQUNFO0FBQ0UsY0FBUSxFQUFFTSxZQUFZLENBQUNPLFFBQUQsQ0FEeEI7QUFFRSxlQUFTLEVBQUVPLG9EQUFJLENBQUNyQixPQUFPLENBQUNmLElBQVQsRUFBZVcsU0FBZjtBQUZqQixPQUdNRyxJQUhOO0FBQUEsNkJBSUUscUVBQUMsZ0ZBQUQ7QUFDRSxhQUFLLEVBQUMsT0FEUjtBQUVFLFlBQUksRUFBQyxTQUZQO0FBR0UsY0FBTSxFQUFDLFFBSFQ7QUFJRSxlQUFPLEVBQUMsVUFKVjtBQUtFLGdCQUFRLEVBQUVTO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBaERRYixhO1VBQ1NaLFMsRUFDQW1CLHVEOzs7S0FGVFAsYTtBQWtETUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvY3JlYXRlLjhmMWFlY2NkMGFiN2U0OTg0NjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcblxyXG4vLy8gbWFrZSBhIHJlcXVlc3QgdG8gZ2V0IGFsbCB0aGUgY3VzdG9tZXJzXHJcbi8vIHVzaW5nIGF1dG8gY29tcGxldGUgdG8gZmlsbCB0aGUgY3VzdG9tZXIgbmFtZVxyXG5pbXBvcnQgRm9ybUFzeW5jQXV0b2NvbXBsZXRlIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL0Zvcm1Bc3luY0F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBQb3FBdXRvY29tcGxldGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvUG9xQXV0b2NvbXBsZXRlJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG4gIGJ1dHRvbnJlc2V0OiB7XHJcbiAgICBtYXJnaW5SaWdodDogMTUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmUyZjI5JyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBwb3FudW1iZXI6IHl1cC5udW1iZXIoKS5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgcG9xbmFtZTogeXVwLm9iamVjdCgpLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFBvcVNlYXJjaEZvcm0oeyBjbGFzc05hbWUsIGN1c3RvbWVyLCBvbkNoYW5nZSwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKHtcclxuICAgIG1vZGU6ICdhbGwnLFxyXG4gICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpLFxyXG4gICAgZGVmYXVsdFZhbHVlczoge1xyXG4gICAgICBwb3FudW1iZXI6ICcnLFxyXG4gICAgICBwb3FuYW1lOiBudWxsLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBzZXRFcnJvcixcclxuICAgIHJlc2V0LFxyXG4gICAgZ2V0VmFsdWVzLFxyXG4gICAgZm9ybVN0YXRlOiB7IGlzU3VibWl0dGluZyB9LFxyXG4gIH0gPSBtZXRob2RzO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIE5PVEU6IE1ha2UgQVBJIHJlcXVlc3RcclxuICAgICAgb25DaGFuZ2UoZ2V0VmFsdWVzKCdwb3FuYW1lJykpO1xyXG4gICAgICByZXNldCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgc2V0RXJyb3IoJ3N1Ym1pdEVycm9yJywge1xyXG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uQ2hhbmdlKGdldFZhbHVlcygncG9xbmFtZScpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgICB7Li4ucmVzdH0+XHJcbiAgICAgICAgPFBvcUF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgbGFiZWw9XCJCT1EgI1wiXHJcbiAgICAgICAgICBuYW1lPVwicG9xbmFtZVwiXHJcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Gb3JtUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9xU2VhcmNoRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==