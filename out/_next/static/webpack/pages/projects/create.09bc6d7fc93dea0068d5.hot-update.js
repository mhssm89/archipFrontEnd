webpackHotUpdate_N_E("pages/projects/create",{

/***/ "./src/components/pages/projects/create/Poqdetail.js":
/*!***********************************************************!*\
  !*** ./src/components/pages/projects/create/Poqdetail.js ***!
  \***********************************************************/
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
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var src_components_pages_projects_create_PoqSearchForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/pages/projects/create/PoqSearchForm */ "./src/components/pages/projects/create/PoqSearchForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "F:\\archip-frontend\\src\\components\\pages\\projects\\create\\Poqdetail.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {},
    stepButton: {
      '& + &': {
        marginLeft: theme.spacing(2)
      },
      fontWeightMedium: {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  };
});

function Poqdetail(_ref) {
  _s();

  var className = _ref.className,
      handlePoq = _ref.handlePoq,
      _ref$onBack = _ref.onBack,
      onBack = _ref$onBack === void 0 ? function () {} : _ref$onBack,
      _ref$onNext = _ref.onNext,
      onNext = _ref$onNext === void 0 ? function () {} : _ref$onNext,
      rest = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["className", "handlePoq", "onBack", "onNext"]);

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      isSubmitting = _React$useState2[0],
      setSubmitting = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(null),
      _React$useState4 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(null),
      _React$useState6 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState5, 2),
      poq = _React$useState6[0],
      setPoq = _React$useState6[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {
      var response;
      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.prev = 1;
              setSubmitting(true);

              if (!poq) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("http://localhost:1337/poqdetails?_where[poq]=".concat(poq.id));

            case 6:
              response = _context.sent;
              handlePoq(poq);

            case 8:
              // NOTE: Make API request
              if (onNext) {
                onNext();
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);
              setError(_context.t0.message);

            case 15:
              _context.prev = 15;
              setSubmitting(false);
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11, 15, 18]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  console.log(poq);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", _objectSpread(_objectSpread({
    onSubmit: handleSubmit,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, className)
  }, rest), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
          variant: "h3",
          mb: 3,
          children: "Select B.O.Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(src_components_pages_projects_create_PoqSearchForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onChange: setPoq
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
            title: "P.O.Q Summery"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Table"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableBody"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableRow"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
                  children: "Customer Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, this), poq ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
                  children: poq.customer
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 21
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
                  children: " - "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableRow"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
                  children: "Total Cost"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, this), poq ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
                  children: poq.grandtotal
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
                  children: "0.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
      mt: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormHelperText"], {
        error: true,
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
      mt: 6,
      display: "flex",
      children: [onBack && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: onBack,
        size: "large",
        children: "Previous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        flexGrow: 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), poq ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: "secondary",
        disabled: isSubmitting,
        type: "submit" // to be removed
        ,
        variant: "contained",
        size: "large",
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: "secondary",
        disabled: true,
        type: "submit" // to be removed
        ,
        variant: "contained",
        size: "large",
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

_s(Poqdetail, "tka96li2C7MvjYnFU4gHY7uXaU0=", false, function () {
  return [useStyles];
});

_c = Poqdetail;
/* harmony default export */ __webpack_exports__["default"] = (Poqdetail);

var _c;

$RefreshReg$(_c, "Poqdetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvY3JlYXRlL1BvcWRldGFpbC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwic3RlcEJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRXZWlnaHQiLCJ0eXBvZ3JhcGh5IiwiUG9xZGV0YWlsIiwiY2xhc3NOYW1lIiwiaGFuZGxlUG9xIiwib25CYWNrIiwib25OZXh0IiwicmVzdCIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJwb3EiLCJzZXRQb3EiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJnZXQiLCJpZCIsInJlc3BvbnNlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJsb2ciLCJjbHN4IiwiY3VzdG9tZXIiLCJncmFuZHRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQW1CQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsY0FBVSxFQUFFO0FBQ1YsZUFBUztBQUNQQyxrQkFBVSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBREwsT0FEQztBQUlWQyxzQkFBZ0IsRUFBRTtBQUNoQkMsa0JBQVUsRUFBRU4sS0FBSyxDQUFDTyxVQUFOLENBQWlCRjtBQURiO0FBSlI7QUFGMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBWUEsU0FBU0csU0FBVCxPQU1HO0FBQUE7O0FBQUEsTUFMREMsU0FLQyxRQUxEQSxTQUtDO0FBQUEs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QSxjQUZKLGVBTUUscUVBQUMscURBQUQ7QUFBSyxnQkFBUSxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLEVBT0dVLEdBQUcsZ0JBQ0YscUVBQUMsd0RBQUQ7QUFDRSxhQUFLLEVBQUMsV0FEUjtBQUVFLGdCQUFRLEVBQUVKLFlBRlo7QUFHRSxZQUFJLEVBQUMsUUFIUCxDQUdnQjtBQUhoQjtBQUlFLGVBQU8sRUFBQyxXQUpWO0FBS0UsWUFBSSxFQUFDLE9BTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERSxnQkFVRixxRUFBQyx3REFBRDtBQUNFLGFBQUssRUFBQyxXQURSO0FBRUUsZ0JBQVEsRUFBRSxJQUZaO0FBR0UsWUFBSSxFQUFDLFFBSFAsQ0FHZ0I7QUFIaEI7QUFJRSxlQUFPLEVBQUMsV0FKVjtBQUtFLFlBQUksRUFBQyxPQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRDs7R0EvR1FULFM7VUFPU1YsUzs7O0tBUFRVLFM7QUFpSE1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL2NyZWF0ZS4wOWJjNmQ3ZmM5M2RlYTAwNjhkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFJhZGlvLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgR3JpZCxcclxuICBJbnB1dCxcclxuICBDYXJkLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgRGl2aWRlcixcclxuICBUYWJsZSxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVDZWxsLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUG9xU2VhcmNoRm9ybSBmcm9tICdzcmMvY29tcG9uZW50cy9wYWdlcy9wcm9qZWN0cy9jcmVhdGUvUG9xU2VhcmNoRm9ybSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7fSxcclxuICBzdGVwQnV0dG9uOiB7XHJcbiAgICAnJiArICYnOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgZm9udFdlaWdodE1lZGl1bToge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFBvcWRldGFpbCh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGhhbmRsZVBvcSxcclxuICBvbkJhY2sgPSAoKSA9PiB7fSxcclxuICBvbk5leHQgPSAoKSA9PiB7fSxcclxuICAuLi5yZXN0XHJcbn0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcG9xLCBzZXRQb3FdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICBpZiAocG9xKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3BvcWRldGFpbHM/X3doZXJlW3BvcV09JHtwb3EuaWR9YCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGhhbmRsZVBvcShwb3EpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE5PVEU6IE1ha2UgQVBJIHJlcXVlc3RcclxuXHJcbiAgICAgIGlmIChvbk5leHQpIHtcclxuICAgICAgICBvbk5leHQoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhwb3EpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIG1iPXszfT5cclxuICAgICAgICAgICAgU2VsZWN0IEIuTy5RXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgICAgPFBvcVNlYXJjaEZvcm0gb25DaGFuZ2U9e3NldFBvcX0gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJQLk8uUSBTdW1tZXJ5XCIgLz5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q3VzdG9tZXIgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICB7cG9xID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3BvcS5jdXN0b21lcn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiAtIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbCBDb3N0PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3EgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cG9xLmdyYW5kdG90YWx9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4wLjAwPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgIDxCb3ggbXQ9ezJ9PlxyXG4gICAgICAgICAgPEZvcm1IZWxwZXJUZXh0IGVycm9yPntlcnJvcn08L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgICA8Qm94IG10PXs2fSBkaXNwbGF5PVwiZmxleFwiPlxyXG4gICAgICAgIHtvbkJhY2sgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkJhY2t9IHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSAvPlxyXG4gICAgICAgIHtwb3EgPyAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIC8vIHRvIGJlIHJlbW92ZWRcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgLy8gdG8gYmUgcmVtb3ZlZFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcWRldGFpbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==