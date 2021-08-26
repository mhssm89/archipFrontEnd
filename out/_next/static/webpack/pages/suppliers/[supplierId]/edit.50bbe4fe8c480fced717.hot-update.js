webpackHotUpdate_N_E("pages/suppliers/[supplierId]/edit",{

/***/ "./src/components/pages/suppliers/edit/Form.js":
/*!*****************************************************!*\
  !*** ./src/components/pages/suppliers/edit/Form.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/controls/FormInput */ "./src/components/controls/FormInput.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "F:\\archip-frontend\\src\\components\\pages\\suppliers\\edit\\Form.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function () {
  return {
    root: {}
  };
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_11__["object"]().shape({
  supplierName: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().max(255).required('Required.'),
  email: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().email('Invalid email.').max(255),
  phonenumber: yup__WEBPACK_IMPORTED_MODULE_11__["string"](),
  description: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().max(255)
});

function Form(_ref) {
  _s();

  var className = _ref.className,
      supplier = _ref.supplier,
      rest = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["className", "supplier"]);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  var classes = useStyles();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_9__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"])({
    mode: 'all',
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__["yupResolver"])(validationSchema),
    defaultValues: {
      supplierName: supplier.supplierName || '',
      email: supplier.emailaddress || '',
      phonenumber: supplier.phonenumber || '',
      description: supplier.description || '',
      submitError: ''
    }
  });
  var handleSubmit = methods.handleSubmit,
      errors = methods.errors,
      setError = methods.setError,
      setValue = methods.setValue,
      _methods$formState = methods.formState,
      isSubmitting = _methods$formState.isSubmitting,
      isDirty = _methods$formState.isDirty,
      dirtyFields = _methods$formState.dirtyFields;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["FormProvider"], _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", _objectSpread(_objectSpread({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, className),
      onSubmit: handleSubmit(onSubmit)
    }, rest), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              item: true,
              md: 8,
              xs: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
                name: "supplierName",
                label: "Name",
                variant: "outlined",
                errorObj: errors
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              item: true,
              md: 8,
              xs: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
                name: "email",
                label: "Email Address",
                variant: "outlined",
                errorObj: errors
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              item: true,
              md: 8,
              xs: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
                name: "phonenumber",
                label: "Phone Number",
                variant: "outlined",
                errorObj: errors
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              item: true,
              md: 12,
              xs: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(src_components_controls_FormInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
                name: "description",
                label: "Description",
                variant: "outlined",
                errorObj: errors
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), errors.submitError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
            mt: 1,
            display: "flex",
            justifyContent: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
              style: {
                fontSize: '24px'
              },
              error: true,
              children: errors.submitError.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
            mt: 5,
            display: "flex",
            justifyContent: "flex-end",
            children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              variant: "contained",
              color: "secondary",
              type: "submit",
              disabled: isSubmitting,
              children: "Save"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this); // ##################################################

  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
      var supplierName, email, phonenumber, description, supplierId, data, response;
      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              supplierName = _ref2.supplierName, email = _ref2.email, phonenumber = _ref2.phonenumber, description = _ref2.description;
              _context.prev = 1;
              // Reset submitError message
              setValue('submitError', ''); // Return if no data changed

              if (isDirty) {
                _context.next = 6;
                break;
              }

              enqueueSnackbar('No data changes.', {
                variant: 'info'
              });
              return _context.abrupt("return");

            case 6:
              supplierId = router.query['supplierId'];
              data = {
                supplierName: supplierName,
                emailaddress: email,
                phonenumber: phonenumber,
                description: description
              };
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.put("".concat("http://localhost:1337", "/suppliers/").concat(supplierId), data).then(function () {
                enqueueSnackbar('supplier edit successfully.', {
                  variant: 'success'
                });
              })["catch"](function () {
                enqueueSnackbar('Error edit  supplier.', {
                  variant: 'error'
                });
              });

            case 10:
              response = _context.sent;
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              // Show error message
              enqueueSnackbar('Error updating supplier.', {
                variant: 'error'
              }); // Show submitError message

              setError('submitError', {
                type: 'submit',
                message: 'Error updating supplier.'
              });

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));
    return _onSubmit.apply(this, arguments);
  }
}

_s(Form, "hU7Rf5+dwoO38Rsc7tiYJDWmFz0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"], useStyles, notistack__WEBPACK_IMPORTED_MODULE_9__["useSnackbar"], react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3VwcGxpZXJzL2VkaXQvRm9ybS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsInN1cHBsaWVyTmFtZSIsIm1heCIsInJlcXVpcmVkIiwiZW1haWwiLCJwaG9uZW51bWJlciIsImRlc2NyaXB0aW9uIiwiRm9ybSIsImNsYXNzTmFtZSIsInN1cHBsaWVyIiwicmVzdCIsInJvdXRlciIsInVzZVJvdXRlciIsImNsYXNzZXMiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsIm1ldGhvZHMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwiZW1haWxhZGRyZXNzIiwic3VibWl0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInNldFZhbHVlIiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwiaXNEaXJ0eSIsImRpcnR5RmllbGRzIiwiY2xzeCIsIm9uU3VibWl0IiwiZm9udFNpemUiLCJtZXNzYWdlIiwidmFyaWFudCIsInN1cHBsaWVySWQiLCJxdWVyeSIsImRhdGEiLCJheGlvcyIsInB1dCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUFBLFNBQU87QUFDbENDLFFBQUksRUFBRTtBQUQ0QixHQUFQO0FBQUEsQ0FBRCxDQUE1QjtBQUlBLElBQU1DLGdCQUFnQixHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxj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LEtBRkg7QUFHWEMsMkJBQVcsRUFBRUEsV0FIRjtBQUlYQywyQkFBVyxFQUFFQTtBQUpGLGVBWGpCO0FBQUE7QUFBQSxxQkFrQjJCa0MsNkNBQUssQ0FDekJDLEdBRG9CLFdBRWhCQyx1QkFGZ0Isd0JBRWdDTCxVQUZoQyxHQUduQkUsSUFIbUIsRUFLcEJJLElBTG9CLENBS2YsWUFBTTtBQUNWNUIsK0JBQWUsQ0FBQyw2QkFBRCxFQUFnQztBQUM3Q3FCLHlCQUFPLEVBQUU7QUFEb0MsaUJBQWhDLENBQWY7QUFHRCxlQVRvQixXQVVkLFlBQU07QUFDWHJCLCtCQUFlLENBQUMsdUJBQUQsRUFBMEI7QUFBRXFCLHlCQUFPLEVBQUU7QUFBWCxpQkFBMUIsQ0FBZjtBQUNELGVBWm9CLENBbEIzQjs7QUFBQTtBQWtCVVEsc0JBbEJWO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF5Q0k7QUFDQTdCLDZCQUFlLENBQUMsMEJBQUQsRUFBNkI7QUFBRXFCLHVCQUFPLEVBQUU7QUFBWCxlQUE3QixDQUFmLENBMUNKLENBNENJOztBQUNBVixzQkFBUSxDQUFDLGFBQUQsRUFBZ0I7QUFDdEJtQixvQkFBSSxFQUFFLFFBRGdCO0FBRXRCVix1QkFBTyxFQUFFO0FBRmEsZUFBaEIsQ0FBUjs7QUE3Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqRzhDO0FBQUE7QUFBQTtBQW9KL0M7O0dBcEpRNUIsSTtVQUNRSyxzRCxFQUNDakIsUyxFQUNZbUIscUQsRUFDWkcsd0Q7OztLQUpUVixJO0FBc0pNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdXBwbGllcnMvW3N1cHBsaWVySWRdL2VkaXQuNTBiYmU0ZmU4YzQ4MGZjZWQ3MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcclxuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29udHJvbHMvRm9ybUlucHV0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIHN1cHBsaWVyTmFtZTogeXVwLnN0cmluZygpLm1heCgyNTUpLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBlbWFpbDogeXVwLnN0cmluZygpLmVtYWlsKCdJbnZhbGlkIGVtYWlsLicpLm1heCgyNTUpLFxyXG4gIHBob25lbnVtYmVyOiB5dXAuc3RyaW5nKCksXHJcbiAgZGVzY3JpcHRpb246IHl1cC5zdHJpbmcoKS5tYXgoMjU1KSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBGb3JtKHsgY2xhc3NOYW1lLCBzdXBwbGllciwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKHtcclxuICAgIG1vZGU6ICdhbGwnLFxyXG4gICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpLFxyXG4gICAgZGVmYXVsdFZhbHVlczoge1xyXG4gICAgICBzdXBwbGllck5hbWU6IHN1cHBsaWVyLnN1cHBsaWVyTmFtZSB8fCAnJyxcclxuICAgICAgZW1haWw6IHN1cHBsaWVyLmVtYWlsYWRkcmVzcyB8fCAnJyxcclxuICAgICAgcGhvbmVudW1iZXI6IHN1cHBsaWVyLnBob25lbnVtYmVyIHx8ICcnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogc3VwcGxpZXIuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIHN1Ym1pdEVycm9yOiAnJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZXJyb3JzLFxyXG4gICAgc2V0RXJyb3IsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIGZvcm1TdGF0ZTogeyBpc1N1Ym1pdHRpbmcsIGlzRGlydHksIGRpcnR5RmllbGRzIH0sXHJcbiAgfSA9IG1ldGhvZHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVByb3ZpZGVyIHsuLi5tZXRob2RzfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgIHsuLi5yZXN0fT5cclxuICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezh9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdXBwbGllck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezh9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yT2JqPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBlcnJvck9iaj17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgey8qIEVycm9yICovfVxyXG4gICAgICAgICAgICB7ZXJyb3JzLnN1Ym1pdEVycm9yICYmIChcclxuICAgICAgICAgICAgICA8Qm94IG10PXsxfSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQgc3R5bGU9e3sgZm9udFNpemU6ICcyNHB4JyB9fSBlcnJvcj5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5zdWJtaXRFcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezV9IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICAgIHsvKiBTdWJtaXQgKi99XHJcbiAgICAgICAgICAgICAge2lzU3VibWl0dGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0Zvcm1Qcm92aWRlcj5cclxuICApO1xyXG5cclxuICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KHsgc3VwcGxpZXJOYW1lLCBlbWFpbCwgcGhvbmVudW1iZXIsIGRlc2NyaXB0aW9uIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFJlc2V0IHN1Ym1pdEVycm9yIG1lc3NhZ2VcclxuICAgICAgc2V0VmFsdWUoJ3N1Ym1pdEVycm9yJywgJycpO1xyXG5cclxuICAgICAgLy8gUmV0dXJuIGlmIG5vIGRhdGEgY2hhbmdlZFxyXG4gICAgICBpZiAoIWlzRGlydHkpIHtcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ05vIGRhdGEgY2hhbmdlcy4nLCB7IHZhcmlhbnQ6ICdpbmZvJyB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3VwcGxpZXJJZCA9IHJvdXRlci5xdWVyeVsnc3VwcGxpZXJJZCddO1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHN1cHBsaWVyTmFtZTogc3VwcGxpZXJOYW1lLFxyXG4gICAgICAgIGVtYWlsYWRkcmVzczogZW1haWwsXHJcbiAgICAgICAgcGhvbmVudW1iZXI6IHBob25lbnVtYmVyLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcclxuICAgICAgICAucHV0KFxyXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORFVSTH0vc3VwcGxpZXJzLyR7c3VwcGxpZXJJZH1gLFxyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdzdXBwbGllciBlZGl0IHN1Y2Nlc3NmdWxseS4nLCB7XHJcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWNjZXNzJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcignRXJyb3IgZWRpdCAgc3VwcGxpZXIuJywgeyB2YXJpYW50OiAnZXJyb3InIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBDb250c3J1Y3QgaW5wdXRcclxuICAgICAgLy8gY29uc3QgaW5wdXQgPSB7XHJcbiAgICAgIC8vICAgbmFtZSxcclxuICAgICAgLy8gICBzdGF0dXM6IHN0YXR1cyA/ICdBQ1RJVkUnIDogJ0lOQUNUSVZFJyxcclxuICAgICAgLy8gfTtcclxuXHJcbiAgICAgIC8vIE1ha2UgYW4gQVBJIHJlcXVlc3RcclxuXHJcbiAgICAgIC8vIFNob3cgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlXHJcbiAgICAgIGVucXVldWVTbmFja2JhcignRXJyb3IgdXBkYXRpbmcgc3VwcGxpZXIuJywgeyB2YXJpYW50OiAnZXJyb3InIH0pO1xyXG5cclxuICAgICAgLy8gU2hvdyBzdWJtaXRFcnJvciBtZXNzYWdlXHJcbiAgICAgIHNldEVycm9yKCdzdWJtaXRFcnJvcicsIHtcclxuICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICBtZXNzYWdlOiAnRXJyb3IgdXBkYXRpbmcgc3VwcGxpZXIuJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9