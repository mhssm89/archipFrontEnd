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
                    children: item.saleprice ? Math.round((item.saleprice + Number.EPSILON) * 100) / 100 : item.enduserprice
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
                          lineNumber: 152,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
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
        lineNumber: 164,
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
      lineNumber: 180,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcG9xcy9lZGl0L1Jlc3VsdHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJSZXN1bHRzIiwiY2xhc3NOYW1lIiwicXVlcnkiLCJzZXRQT1EiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzQnVsa0xvYWRpbmciLCJzZXRJc0J1bGtMb2FkaW5nIiwidXNlVGFibGUiLCJzZWxlY3RlZEl0ZW1zIiwiaXNBbGxJdGVtc1NlbGVjdGVkIiwiaXNTb21lSXRlbXNTZWxlY3RlZCIsInBhZ2UiLCJsaW1pdCIsImhhc05leHQiLCJoYXNQcmV2IiwiaXNUYWJsZUxvYWRpbmciLCJpc0xvYWRpbmciLCJzZXRJdGVtcyIsInNldFNlbGVjdGVkSXRlbXMiLCJlbmFibGVCdWxrT3BlcmF0aW9ucyIsImhhbmRsZVNlbGVjdEFsbEl0ZW1zIiwiaGFuZGxlU2VsZWN0T25lSXRlbSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYW5kbGVMaW1pdENoYW5nZSIsImNsc3giLCJwb3FEZXRhaWwiLCJtYXAiLCJpdGVtIiwiaXNJdGVtU2VsZWN0ZWQiLCJpbmNsdWRlcyIsImlkIiwiaW5kZXhPZiIsImV2ZW50IiwicHJvZHVjdCIsInBhcnROdW1iZXIiLCJ3aWR0aCIsInFudHkiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJlbmR1c2VycHJpY2UiLCJkaXNjb3VudCIsInNhbGVwZXJjZW50YWdlIiwic2FsZXByaWNlIiwiTWF0aCIsInJvdW5kIiwiRVBTSUxPTiIsImRlbGV0ZVByb2R1Y3QiLCJkaXNhYmxlZCIsImZyb20iLCJsZW5ndGgiLCJwcm9kdWN0SWQiLCJheGlvcyIsInRoZW4iLCJmaWx0ZXIiLCJ2YXJpYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBdkJzRCxDQTBKdEQ7QUFFQTs7QUFDQSxXQUFTMkMsYUFBVCxDQUF1QkksU0FBdkIsRUFBa0M7QUFDaENDLGlEQUFLLFVBQUwsNENBQWlERCxTQUFqRCxHQUE4REUsSUFBOUQsQ0FBbUUsWUFBTTtBQUN2RXhELFlBQU0saUNBQ0RELEtBREM7QUFFSjRCLGlCQUFTLEVBQUU1QixLQUFLLENBQUM0QixTQUFOLENBQWdCOEIsTUFBaEIsQ0FBdUIsVUFBQzVCLElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxDQUFDRyxFQUFMLElBQVdzQixTQUFyQjtBQUFBLFNBQXZCO0FBRlAsU0FBTjtBQUlBbEQscUJBQWUsQ0FBQyxTQUFELEVBQVk7QUFBRXNELGVBQU8sRUFBRTtBQUFYLE9BQVosQ0FBZjtBQUNELEtBTkQ7QUFPRDtBQUNGOztHQXRLUTdELE87VUFDU0gsUyxFQUNZUyxxRCxFQW1CeEJNLDJEOzs7S0FyQkdaLE87QUF3S01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcXMvW3BvcUlkXS9lZGl0Ljc4YjQ2MmQzZmEwYzJjMzc1MDljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENoZWNrYm94LFxyXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXHJcbiAgRGl2aWRlcixcclxuICBJY29uQnV0dG9uLFxyXG4gIElucHV0QWRvcm5tZW50LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgU3ZnSWNvbixcclxuICBUYWJsZSxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlSGVhZCxcclxuICBUYWJsZVBhZ2luYXRpb24sXHJcbiAgVGFibGVSb3csXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XHJcbmltcG9ydCB7IFNlYXJjaCBhcyBTZWFyY2hJY29uLCBUcmFzaCBhcyBUcmFzaEljb24gfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xyXG5cclxuaW1wb3J0IHVzZVRhYmxlIGZyb20gJ3NyYy9ob29rcy91c2VUYWJsZSc7XHJcblxyXG5pbXBvcnQgQnVsa09wZXJhdGlvbnMgZnJvbSAnLi9CdWxrT3BlcmF0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFJlc3VsdHMoeyBjbGFzc05hbWUsIHF1ZXJ5LCBzZXRQT1EsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCBbaXNCdWxrTG9hZGluZywgc2V0SXNCdWxrTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgLy8gaXRlbXMsXHJcbiAgICBzZWxlY3RlZEl0ZW1zLFxyXG4gICAgaXNBbGxJdGVtc1NlbGVjdGVkLFxyXG4gICAgaXNTb21lSXRlbXNTZWxlY3RlZCxcclxuICAgIHBhZ2UsXHJcbiAgICBsaW1pdCxcclxuICAgIGhhc05leHQsXHJcbiAgICBoYXNQcmV2LFxyXG4gICAgaXNMb2FkaW5nOiBpc1RhYmxlTG9hZGluZyxcclxuICAgIHNldEl0ZW1zLFxyXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyxcclxuICAgIGVuYWJsZUJ1bGtPcGVyYXRpb25zLFxyXG4gICAgaGFuZGxlU2VsZWN0QWxsSXRlbXMsXHJcbiAgICBoYW5kbGVTZWxlY3RPbmVJdGVtLFxyXG4gICAgaGFuZGxlUGFnZUNoYW5nZSxcclxuICAgIGhhbmRsZUxpbWl0Q2hhbmdlLFxyXG4gIH0gPSB1c2VUYWJsZSh7IHF1ZXJ5IH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxyXG4gICAgICAgICAgPEJveCBtaW5XaWR0aD17NzAwfT5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0FsbEl0ZW1zU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXtpc1NvbWVJdGVtc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdEFsbEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlBhcnQgIzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlF1YW50aXR5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UHJpY2UgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGlzY291bnQgKCUpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+U2FsZSBQZXJjZW50YWdlICglKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlNhbGUgcHJpY2UgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFjdGlvbnM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAge2lzVGFibGVMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtxdWVyeS5wb3FEZXRhaWwubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0uaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtLmlkKSAhPT0gLTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RPbmVJdGVtKGV2ZW50LCBpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lzSXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLnByb2R1Y3QucGFydE51bWJlcn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB3aWR0aDogJzEwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgcW50eSR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xbnR5ID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UE9RKHsgLi4ucXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLmVuZHVzZXJwcmljZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5wcm9kdWN0LmRpc2NvdW50fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHdpZHRoOiAnMjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BzYWxlcGVyY2VudCR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnNhbGVwZXJjZW50YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc2MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZS50YXJnZXQudmFsdWUgPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2FsZXByaWNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5lbmR1c2VycHJpY2UgKiBOdW1iZXIoZS50YXJnZXQudmFsdWUpKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kdXNlcnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNhbGVwZXJjZW50YWdlID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UE9RKHsgLi4ucXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNhbGVwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLnNhbGVwcmljZSArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmVuZHVzZXJwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVByb2R1Y3QoaXRlbS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxyXG4gICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICBjb3VudD17LTF9XHJcbiAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVMaW1pdENoYW5nZX1cclxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICByb3dzUGVyUGFnZT17bGltaXR9XHJcbiAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1s1LCAxMCwgMjVdfVxyXG4gICAgICAgICAgbmV4dEljb25CdXR0b25Qcm9wcz17eyBkaXNhYmxlZDogIWhhc05leHQgfX1cclxuICAgICAgICAgIGJhY2tJY29uQnV0dG9uUHJvcHM9e3sgZGlzYWJsZWQ6ICFoYXNQcmV2IH19XHJcbiAgICAgICAgICBsYWJlbERpc3BsYXllZFJvd3M9eyh7IGZyb20gfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkucG9xRGV0YWlsLmxlbmd0aCA9PSAwKSByZXR1cm4gJzAtMCc7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtmcm9tfS0ke2Zyb20gKyBxdWVyeS5wb3FEZXRhaWwubGVuZ3RoIC0gMX1gO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxCdWxrT3BlcmF0aW9uc1xyXG4gICAgICAgIG9wZW49e2VuYWJsZUJ1bGtPcGVyYXRpb25zfVxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEl0ZW1zfVxyXG4gICAgICAgIGlzTG9hZGluZz17aXNCdWxrTG9hZGluZ31cclxuICAgICAgICBvbk1hcmtBY3RpdmU9eygpID0+IHt9fVxyXG4gICAgICAgIG9uTWFya0luYWN0aXZlPXsoKSA9PiB7fX1cclxuICAgICAgICBvbkRlbGV0ZT17KCkgPT4ge319XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICAvLyBzZXRQT1EoeyAuLi5xdWVyeSwgcG9xRGV0YWlsOiB4eHh4eHh4eHh4IH0pXHJcblxyXG4gIC8vZGVsZXRlIHByb2R1Y3RcclxuICBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZCkge1xyXG4gICAgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjEzMzcvcG9xZGV0YWlscy8ke3Byb2R1Y3RJZH1gKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0UE9RKHtcclxuICAgICAgICAuLi5xdWVyeSxcclxuICAgICAgICBwb3FEZXRhaWw6IHF1ZXJ5LnBvcURldGFpbC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gcHJvZHVjdElkKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcignZGVsZXRlZCcsIHsgdmFyaWFudDogJ2Vycm9yJyB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==