webpackHotUpdate_N_E("pages/poqs/[poqId]/edit",{

/***/ "./src/components/pages/poqs/edit/Results.js":
/*!***************************************************!*\
  !*** ./src/components/pages/poqs/edit/Results.js ***!
  \***************************************************/
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
/* harmony import */ var _BulkOperations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BulkOperations */ "./src/components/pages/poqs/edit/BulkOperations.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "F:\\archip-frontend\\src\\components\\pages\\poqs\\edit\\Results.js",
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
      setPOQ = _ref.setPOQ,
      rest = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["className", "query", "setPOQ"]);

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
              children: query.poqDetail.map(function (item) {
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
                      onChange: function onChange(e) {
                        item.qnty = Number(e.target.value);
                        setPOQ(_objectSpread({}, query));
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: item.enduserprice
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: item.product.discount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
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
                        setPOQ(_objectSpread({}, query));
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: Math.round((item.saleprice + Number.EPSILON) * 100) / 100
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
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
                          lineNumber: 149,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
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
          if (query.poqDetail.length == 0) return '0-0';
          return "".concat(from, "-").concat(from + query.poqDetail.length - 1);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
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
      lineNumber: 177,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this); // setPOQ({ ...query, poqDetail: xxxxxxxxxx })
  //delete product

  function deleteProduct(productId) {
    axios__WEBPACK_IMPORTED_MODULE_12___default.a["delete"]("http://localhost:1337/poqdetails/".concat(productId)).then(function () {
      setPOQ(_objectSpread(_objectSpread({}, query), {}, {
        poqDetail: query.poqDetail.filter(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcG9xcy9lZGl0L1Jlc3VsdHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJSZXN1bHRzIiwiY2xhc3NOYW1lIiwicXVlcnkiLCJzZXRQT1EiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzQnVsa0xvYWRpbmciLCJzZXRJc0J1bGtMb2FkaW5nIiwidXNlVGFibGUiLCJzZWxlY3RlZEl0ZW1zIiwiaXNBbGxJdGVtc1NlbGVjdGVkIiwiaXNTb21lSXRlbXNTZWxlY3RlZCIsInBhZ2UiLCJsaW1pdCIsImhhc05leHQiLCJoYXNQcmV2IiwiaXNUYWJsZUxvYWRpbmciLCJpc0xvYWRpbmciLCJzZXRJdGVtcyIsInNldFNlbGVjdGVkSXRlbXMiLCJlbmFibGVCdWxrT3BlcmF0aW9ucyIsImhhbmRsZVNlbGVjdEFsbEl0ZW1zIiwiaGFuZGxlU2VsZWN0T25lSXRlbSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYW5kbGVMaW1pdENoYW5nZSIsImNsc3giLCJwb3FEZXRhaWwiLCJtYXAiLCJpdGVtIiwiaXNJdGVtU2VsZWN0ZWQiLCJpbmNsdWRlcyIsImlkIiwiaW5kZXhPZiIsImV2ZW50IiwicHJvZHVjdCIsInBhcnROdW1iZXIiLCJ3aWR0aCIsInFudHkiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJlbmR1c2VycHJpY2UiLCJkaXNjb3VudCIsInNhbGVwZXJjZW50YWdlIiwic2FsZXByaWNlIiwiTWF0aCIsInJvdW5kIiwiRVBTSUxPTiIsImRlbGV0ZVByb2R1Y3QiLCJkaXNhYmxlZCIsImZyb20iLCJsZW5ndGgiLCJwcm9kdWN0SWQiLCJheGlvcyIsInRoZW4iLCJmaWx0ZXIiLCJ2YXJpYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUFBLFVBREYsQ0F2QnNELENBdUp0RDtBQUVBOztBQUNBLFdBQVMyQyxhQUFULENBQXVCSSxTQUF2QixFQUFrQztBQUNoQ0MsaURBQUssVUFBTCw0Q0FBaURELFNBQWpELEdBQThERSxJQUE5RCxDQUFtRSxZQUFNO0FBQ3ZFeEQsWUFBTSxpQ0FDREQsS0FEQztBQUVKNEIsaUJBQVMsRUFBRTVCLEtBQUssQ0FBQzRCLFNBQU4sQ0FBZ0I4QixNQUFoQixDQUF1QixVQUFDNUIsSUFBRDtBQUFBLGlCQUFVQSxJQUFJLENBQUNHLEVBQUwsSUFBV3NCLFNBQXJCO0FBQUEsU0FBdkI7QUFGUCxTQUFOO0FBSUFsRCxxQkFBZSxDQUFDLFNBQUQsRUFBWTtBQUFFc0QsZUFBTyxFQUFFO0FBQVgsT0FBWixDQUFmO0FBQ0QsS0FORDtBQU9EO0FBQ0Y7O0dBbktRN0QsTztVQUNTSCxTLEVBQ1lTLHFELEVBbUJ4Qk0sMkQ7OztLQXJCR1osTztBQXFLTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9xcy9bcG9xSWRdL2VkaXQuNjFjZGVkMTlmYTJjYWFiZDViYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2hlY2tib3gsXHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBEaXZpZGVyLFxyXG4gIEljb25CdXR0b24sXHJcbiAgSW5wdXRBZG9ybm1lbnQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBTdmdJY29uLFxyXG4gIFRhYmxlLFxyXG4gIFRhYmxlQm9keSxcclxuICBUYWJsZUNlbGwsXHJcbiAgVGFibGVIZWFkLFxyXG4gIFRhYmxlUGFnaW5hdGlvbixcclxuICBUYWJsZVJvdyxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcclxuaW1wb3J0IHsgU2VhcmNoIGFzIFNlYXJjaEljb24sIFRyYXNoIGFzIFRyYXNoSWNvbiB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdyZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XHJcblxyXG5pbXBvcnQgdXNlVGFibGUgZnJvbSAnc3JjL2hvb2tzL3VzZVRhYmxlJztcclxuXHJcbmltcG9ydCBCdWxrT3BlcmF0aW9ucyBmcm9tICcuL0J1bGtPcGVyYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7fSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gUmVzdWx0cyh7IGNsYXNzTmFtZSwgcXVlcnksIHNldFBPUSwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IFtpc0J1bGtMb2FkaW5nLCBzZXRJc0J1bGtMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7XHJcbiAgICAvLyBpdGVtcyxcclxuICAgIHNlbGVjdGVkSXRlbXMsXHJcbiAgICBpc0FsbEl0ZW1zU2VsZWN0ZWQsXHJcbiAgICBpc1NvbWVJdGVtc1NlbGVjdGVkLFxyXG4gICAgcGFnZSxcclxuICAgIGxpbWl0LFxyXG4gICAgaGFzTmV4dCxcclxuICAgIGhhc1ByZXYsXHJcbiAgICBpc0xvYWRpbmc6IGlzVGFibGVMb2FkaW5nLFxyXG4gICAgc2V0SXRlbXMsXHJcbiAgICBzZXRTZWxlY3RlZEl0ZW1zLFxyXG4gICAgZW5hYmxlQnVsa09wZXJhdGlvbnMsXHJcbiAgICBoYW5kbGVTZWxlY3RBbGxJdGVtcyxcclxuICAgIGhhbmRsZVNlbGVjdE9uZUl0ZW0sXHJcbiAgICBoYW5kbGVQYWdlQ2hhbmdlLFxyXG4gICAgaGFuZGxlTGltaXRDaGFuZ2UsXHJcbiAgfSA9IHVzZVRhYmxlKHsgcXVlcnkgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XHJcbiAgICAgICAgICA8Qm94IG1pbldpZHRoPXs3MDB9PlxyXG4gICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQWxsSXRlbXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e2lzU29tZUl0ZW1zU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0QWxsSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UGFydCAjPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UXVhbnRpdHk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QcmljZSA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EaXNjb3VudCAoJSk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5TYWxlIFBlcmNlbnRhZ2UgKCUpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+U2FsZSBwcmljZSA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+QWN0aW9uczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICB7aXNUYWJsZUxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17NH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAge3F1ZXJ5LnBvcURldGFpbC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0l0ZW1TZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbS5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0uaWQpICE9PSAtMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0l0ZW1TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNlbGVjdE9uZUl0ZW0oZXZlbnQsIGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNJdGVtU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0ucHJvZHVjdC5wYXJ0TnVtYmVyfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHdpZHRoOiAnMTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BxbnR5JHtpdGVtLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucW50eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnFudHkgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQT1EoeyAuLi5xdWVyeSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0uZW5kdXNlcnByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLnByb2R1Y3QuZGlzY291bnR9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgd2lkdGg6ICcyMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YHNhbGVwZXJjZW50JHtpdGVtLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uc2FsZXBlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzYwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA8IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChlLnRhcmdldC52YWx1ZSA9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zYWxlcHJpY2UgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmVuZHVzZXJwcmljZSAqIE51bWJlcihlLnRhcmdldC52YWx1ZSkpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5lbmR1c2VycHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2FsZXBlcmNlbnRhZ2UgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQT1EoeyAuLi5xdWVyeSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoKGl0ZW0uc2FsZXByaWNlICsgTnVtYmVyLkVQU0lMT04pICogMTAwKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVQcm9kdWN0KGl0ZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdJY29uIGZvbnRTaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cclxuICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgY291bnQ9ey0xfVxyXG4gICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlTGltaXRDaGFuZ2V9XHJcbiAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgcm93c1BlclBhZ2U9e2xpbWl0fVxyXG4gICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbNSwgMTAsIDI1XX1cclxuICAgICAgICAgIG5leHRJY29uQnV0dG9uUHJvcHM9e3sgZGlzYWJsZWQ6ICFoYXNOZXh0IH19XHJcbiAgICAgICAgICBiYWNrSWNvbkJ1dHRvblByb3BzPXt7IGRpc2FibGVkOiAhaGFzUHJldiB9fVxyXG4gICAgICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzPXsoeyBmcm9tIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHF1ZXJ5LnBvcURldGFpbC5sZW5ndGggPT0gMCkgcmV0dXJuICcwLTAnO1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7ZnJvbX0tJHtmcm9tICsgcXVlcnkucG9xRGV0YWlsLmxlbmd0aCAtIDF9YDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8QnVsa09wZXJhdGlvbnNcclxuICAgICAgICBvcGVuPXtlbmFibGVCdWxrT3BlcmF0aW9uc31cclxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJdGVtc31cclxuICAgICAgICBpc0xvYWRpbmc9e2lzQnVsa0xvYWRpbmd9XHJcbiAgICAgICAgb25NYXJrQWN0aXZlPXsoKSA9PiB7fX1cclxuICAgICAgICBvbk1hcmtJbmFjdGl2ZT17KCkgPT4ge319XHJcbiAgICAgICAgb25EZWxldGU9eygpID0+IHt9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgLy8gc2V0UE9RKHsgLi4ucXVlcnksIHBvcURldGFpbDogeHh4eHh4eHh4eCB9KVxyXG5cclxuICAvL2RlbGV0ZSBwcm9kdWN0XHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3BvcWRldGFpbHMvJHtwcm9kdWN0SWR9YCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFBPUSh7XHJcbiAgICAgICAgLi4ucXVlcnksXHJcbiAgICAgICAgcG9xRGV0YWlsOiBxdWVyeS5wb3FEZXRhaWwuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IHByb2R1Y3RJZCksXHJcbiAgICAgIH0pO1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ2RlbGV0ZWQnLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=