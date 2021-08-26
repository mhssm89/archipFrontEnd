webpackHotUpdate_N_E("pages/projects/[projectId]/edit",{

/***/ "./src/components/pages/projects/edit/Results.js":
/*!*******************************************************!*\
  !*** ./src/components/pages/projects/edit/Results.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_hooks_useTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/hooks/useTable */ "./src/hooks/useTable.js");
/* harmony import */ var _BulkOperations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BulkOperations */ "./src/components/pages/projects/edit/BulkOperations.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "F:\\archip-frontend\\src\\components\\pages\\projects\\edit\\Results.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function () {
  return {
    root: {}
  };
});

function Results(_ref) {
  _s();

  var _this = this;

  var className = _ref.className,
      query = _ref.query,
      setproject = _ref.setproject,
      rest = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["className", "query", "setproject"]);

  var classes = useStyles();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_7__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      isBulkLoading = _React$useState2[0],
      setIsBulkLoading = _React$useState2[1];

  var _useTable = Object(src_hooks_useTable__WEBPACK_IMPORTED_MODULE_10__["default"])({
    query: query
  }),
      selectedItems = _useTable.selectedItems,
      isAllItemsSelected = _useTable.isAllItemsSelected,
      isSomeItemsSelected = _useTable.isSomeItemsSelected,
      page = _useTable.page,
      limit = _useTable.limit,
      hasNext = _useTable.hasNext,
      hasPrev = _useTable.hasPrev,
      isTableLoading = _useTable.isLoading,
      setItems = _useTable.setItems,
      setSelectedItems = _useTable.setSelectedItems,
      enableBulkOperations = _useTable.enableBulkOperations,
      handleSelectAllItems = _useTable.handleSelectAllItems,
      handleSelectOneItem = _useTable.handleSelectOneItem,
      handlePageChange = _useTable.handlePageChange,
      handleLimitChange = _useTable.handleLimitChange;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className)
  }, rest), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
          minWidth: 700,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Table"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableHead"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableRow"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  padding: "checkbox",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
                    checked: isAllItemsSelected,
                    indeterminate: isSomeItemsSelected,
                    onChange: handleSelectAllItems
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  children: "Part #"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  children: "Quantity"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  children: "Price "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  children: "Discount (%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  children: "Sale Percentage (%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  children: "Sale price "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  align: "right",
                  children: "Actions"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this), isTableLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
              display: "flex",
              justifyContent: "center",
              mt: 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableBody"], {
              children: query.projectdetail.map(function (item) {
                var isItemSelected = selectedItems.includes(item.id);
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableRow"], {
                  hover: true,
                  selected: selectedItems.indexOf(item.id) !== -1,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    padding: "checkbox",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
                      checked: isItemSelected,
                      onChange: function onChange(event) {
                        return handleSelectOneItem(event, item.id);
                      },
                      value: isItemSelected
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    style: {
                      textAlign: 'center'
                    },
                    children: item.product.partNumber
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    style: {
                      width: '10%'
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
                      type: "number",
                      name: "qnty".concat(item.id),
                      variant: "outlined",
                      value: item.qnty,
                      style: {
                        textAlign: 'center'
                      },
                      onChange: function onChange(e) {
                        item.qnty = Number(e.target.value);
                        setproject(_objectSpread({}, query));
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: item.enduserprice
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: item.product.discount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    style: {
                      width: '20%'
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
                      type: "number",
                      name: "salepercent".concat(item.id),
                      variant: "outlined",
                      value: item.salepercentage,
                      style: {
                        width: '60%'
                      },
                      onChange: function onChange(e) {
                        e.target.value < 0 ? e.target.value = 0 : e.target.value;
                        item.saleprice = item.enduserprice * Number(e.target.value) / 100 + item.enduserprice;
                        item.salepercentage = Number(e.target.value);
                        setproject(_objectSpread({}, query));
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: item.saleprice ? Math.round((item.saleprice + Number.EPSILON) * 100) / 100 : item.enduserprice
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    align: "right",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
                      onClick: function onClick() {
                        return deleteProduct(item.id);
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["SvgIcon"], {
                        fontSize: "small",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_8__["Trash"], {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 155,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 25
                  }, _this)]
                }, item.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TablePagination"], {
        component: "div",
        count: -1,
        onChangePage: handlePageChange,
        onChangeRowsPerPage: handleLimitChange,
        page: page,
        rowsPerPage: limit,
        rowsPerPageOptions: [5, 10, 25],
        nextIconButtonProps: {
          disabled: !hasNext
        },
        backIconButtonProps: {
          disabled: !hasPrev
        },
        labelDisplayedRows: function labelDisplayedRows(_ref2) {
          var from = _ref2.from;
          if (query.length == 0) return '0-0';
          return "".concat(from, "-").concat(from + query.length - 1);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_BulkOperations__WEBPACK_IMPORTED_MODULE_11__["default"], {
      open: enableBulkOperations,
      selected: selectedItems,
      isLoading: isBulkLoading,
      onMarkActive: function onMarkActive() {},
      onMarkInactive: function onMarkInactive() {},
      onDelete: function onDelete() {}
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);

  function deleteProduct(productId) {
    axios__WEBPACK_IMPORTED_MODULE_12___default.a["delete"]("http://localhost:1337/project-details/".concat(productId)).then(function () {
      setproject(_objectSpread(_objectSpread({}, query), {}, {
        projectdetail: query.projectdetail.filter(function (item) {
          return item.id != productId;
        })
      }));
      enqueueSnackbar('deleted', {
        variant: 'error'
      });
    });
  }
}

_s(Results, "Sx7PfbNN325Ku6TKvEue2puXVwY=", false, function () {
  return [useStyles, notistack__WEBPACK_IMPORTED_MODULE_7__["useSnackbar"], src_hooks_useTable__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = Results;
/* harmony default export */ __webpack_exports__["default"] = (Results);

var _c;

$RefreshReg$(_c, "Results");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvZWRpdC9SZXN1bHRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiUmVzdWx0cyIsImNsYXNzTmFtZSIsInF1ZXJ5Iiwic2V0cHJvamVjdCIsInJlc3QiLCJjbGFzc2VzIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNCdWxrTG9hZGluZyIsInNldElzQnVsa0xvYWRpbmciLCJ1c2VUYWJsZSIsInNlbGVjdGVkSXRlbXMiLCJpc0FsbEl0ZW1zU2VsZWN0ZWQiLCJpc1NvbWVJdGVtc1NlbGVjdGVkIiwicGFnZSIsImxpbWl0IiwiaGFzTmV4dCIsImhhc1ByZXYiLCJpc1RhYmxlTG9hZGluZyIsImlzTG9hZGluZyIsInNldEl0ZW1zIiwic2V0U2VsZWN0ZWRJdGVtcyIsImVuYWJsZUJ1bGtPcGVyYXRpb25zIiwiaGFuZGxlU2VsZWN0QWxsSXRlbXMiLCJoYW5kbGVTZWxlY3RPbmVJdGVtIiwiaGFuZGxlUGFnZUNoYW5nZSIsImhhbmRsZUxpbWl0Q2hhbmdlIiwiY2xzeCIsInByb2plY3RkZXRhaWwiLCJtYXAiLCJpdGVtIiwiaXNJdGVtU2VsZWN0ZWQiLCJpbmNsdWRlcyIsImlkIiwiaW5kZXhPZiIsImV2ZW50IiwidGV4dEFsaWduIiwicHJvZHVjdCIsInBhcnROdW1iZXIiLCJ3aWR0aCIsInFudHkiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJlbmR1c2VycHJpY2UiLCJkaXNjb3VudCIsInNhbGVwZXJjZW50YWdlIiwic2FsZXByaWNlIiwiTWF0aCIsInJvdW5kIiwiRVBTSUxPTiIsImRlbGV0ZVByb2R1Y3QiLCJkaXNhYmxlZCIsImZyb20iLCJsZW5ndGgiLCJwcm9kdWN0SWQiLCJheGlvcyIsInRoZW4iLCJmaWx0ZXIiLCJ2YXJpYW50Il0sIm1hcHBpbmdzIjoiOzs7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QkFBWSxFQUFFLHdCQUFNLENBQUUsQ0FKeEI7QUFLRSxvQkFBYyxFQUFFLDBCQUFNLENBQUUsQ0FMMUI7QUFNRSxjQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQXFJQSxXQUFTNEMsYUFBVCxDQUF1QkksU0FBdkIsRUFBa0M7QUFDaENDLGlEQUFLLFVBQUwsaURBQ21ERCxTQURuRCxHQUVHRSxJQUZILENBRVEsWUFBTTtBQUNWekQsZ0JBQVUsaUNBQ0xELEtBREs7QUFFUjRCLHFCQUFhLEVBQUU1QixLQUFLLENBQUM0QixhQUFOLENBQW9CK0IsTUFBcEIsQ0FDYixVQUFDN0IsSUFBRDtBQUFBLGlCQUFVQSxJQUFJLENBQUNHLEVBQUwsSUFBV3VCLFNBQXJCO0FBQUEsU0FEYTtBQUZQLFNBQVY7QUFNQW5ELHFCQUFlLENBQUMsU0FBRCxFQUFZO0FBQUV1RCxlQUFPLEVBQUU7QUFBWCxPQUFaLENBQWY7QUFDRCxLQVZIO0FBV0Q7QUFDRjs7R0F6S1E5RCxPO1VBQ1NILFMsRUFDWVMscUQsRUFtQnhCTSwyRDs7O0tBckJHWixPO0FBMktNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdElkXS9lZGl0LjEyNDk5M2NhMGNiNjg0ZGMyMDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENoZWNrYm94LFxyXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXHJcbiAgRGl2aWRlcixcclxuICBJY29uQnV0dG9uLFxyXG4gIElucHV0QWRvcm5tZW50LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgU3ZnSWNvbixcclxuICBUYWJsZSxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlSGVhZCxcclxuICBUYWJsZVBhZ2luYXRpb24sXHJcbiAgVGFibGVSb3csXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XHJcbmltcG9ydCB7IFNlYXJjaCBhcyBTZWFyY2hJY29uLCBUcmFzaCBhcyBUcmFzaEljb24gfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xyXG5cclxuaW1wb3J0IHVzZVRhYmxlIGZyb20gJ3NyYy9ob29rcy91c2VUYWJsZSc7XHJcblxyXG5pbXBvcnQgQnVsa09wZXJhdGlvbnMgZnJvbSAnLi9CdWxrT3BlcmF0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFJlc3VsdHMoeyBjbGFzc05hbWUsIHF1ZXJ5LCBzZXRwcm9qZWN0LCAuLi5yZXN0IH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgY29uc3QgW2lzQnVsa0xvYWRpbmcsIHNldElzQnVsa0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHtcclxuICAgIC8vIGl0ZW1zLFxyXG4gICAgc2VsZWN0ZWRJdGVtcyxcclxuICAgIGlzQWxsSXRlbXNTZWxlY3RlZCxcclxuICAgIGlzU29tZUl0ZW1zU2VsZWN0ZWQsXHJcbiAgICBwYWdlLFxyXG4gICAgbGltaXQsXHJcbiAgICBoYXNOZXh0LFxyXG4gICAgaGFzUHJldixcclxuICAgIGlzTG9hZGluZzogaXNUYWJsZUxvYWRpbmcsXHJcbiAgICBzZXRJdGVtcyxcclxuICAgIHNldFNlbGVjdGVkSXRlbXMsXHJcbiAgICBlbmFibGVCdWxrT3BlcmF0aW9ucyxcclxuICAgIGhhbmRsZVNlbGVjdEFsbEl0ZW1zLFxyXG4gICAgaGFuZGxlU2VsZWN0T25lSXRlbSxcclxuICAgIGhhbmRsZVBhZ2VDaGFuZ2UsXHJcbiAgICBoYW5kbGVMaW1pdENoYW5nZSxcclxuICB9ID0gdXNlVGFibGUoeyBxdWVyeSB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8UGVyZmVjdFNjcm9sbGJhcj5cclxuICAgICAgICAgIDxCb3ggbWluV2lkdGg9ezcwMH0+XHJcbiAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNBbGxJdGVtc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17aXNTb21lSXRlbXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RBbGxJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QYXJ0ICM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5RdWFudGl0eTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlByaWNlIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRpc2NvdW50ICglKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlNhbGUgUGVyY2VudGFnZSAoJSk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5TYWxlIHByaWNlIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5BY3Rpb25zPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgIHtpc1RhYmxlTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXs0fT5cclxuICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cXVlcnkucHJvamVjdGRldGFpbC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0l0ZW1TZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbS5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0uaWQpICE9PSAtMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0l0ZW1TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNlbGVjdE9uZUl0ZW0oZXZlbnQsIGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNJdGVtU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0LnBhcnROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHdpZHRoOiAnMTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BxbnR5JHtpdGVtLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucW50eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnFudHkgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRwcm9qZWN0KHsgLi4ucXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLmVuZHVzZXJwcmljZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5wcm9kdWN0LmRpc2NvdW50fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHdpZHRoOiAnMjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BzYWxlcGVyY2VudCR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnNhbGVwZXJjZW50YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc2MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZS50YXJnZXQudmFsdWUgPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2FsZXByaWNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5lbmR1c2VycHJpY2UgKiBOdW1iZXIoZS50YXJnZXQudmFsdWUpKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kdXNlcnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNhbGVwZXJjZW50YWdlID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0cHJvamVjdCh7IC4uLnF1ZXJ5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zYWxlcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5zYWxlcHJpY2UgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgLyAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5lbmR1c2VycHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVQcm9kdWN0KGl0ZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdJY29uIGZvbnRTaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cclxuICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgY291bnQ9ey0xfVxyXG4gICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlTGltaXRDaGFuZ2V9XHJcbiAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgcm93c1BlclBhZ2U9e2xpbWl0fVxyXG4gICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbNSwgMTAsIDI1XX1cclxuICAgICAgICAgIG5leHRJY29uQnV0dG9uUHJvcHM9e3sgZGlzYWJsZWQ6ICFoYXNOZXh0IH19XHJcbiAgICAgICAgICBiYWNrSWNvbkJ1dHRvblByb3BzPXt7IGRpc2FibGVkOiAhaGFzUHJldiB9fVxyXG4gICAgICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzPXsoeyBmcm9tIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA9PSAwKSByZXR1cm4gJzAtMCc7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtmcm9tfS0ke2Zyb20gKyBxdWVyeS5sZW5ndGggLSAxfWA7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPEJ1bGtPcGVyYXRpb25zXHJcbiAgICAgICAgb3Blbj17ZW5hYmxlQnVsa09wZXJhdGlvbnN9XHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgaXNMb2FkaW5nPXtpc0J1bGtMb2FkaW5nfVxyXG4gICAgICAgIG9uTWFya0FjdGl2ZT17KCkgPT4ge319XHJcbiAgICAgICAgb25NYXJrSW5hY3RpdmU9eygpID0+IHt9fVxyXG4gICAgICAgIG9uRGVsZXRlPXsoKSA9PiB7fX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcm9qZWN0LWRldGFpbHMvJHtwcm9kdWN0SWR9YClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldHByb2plY3Qoe1xyXG4gICAgICAgICAgLi4ucXVlcnksXHJcbiAgICAgICAgICBwcm9qZWN0ZGV0YWlsOiBxdWVyeS5wcm9qZWN0ZGV0YWlsLmZpbHRlcihcclxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT0gcHJvZHVjdElkLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ2RlbGV0ZWQnLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==