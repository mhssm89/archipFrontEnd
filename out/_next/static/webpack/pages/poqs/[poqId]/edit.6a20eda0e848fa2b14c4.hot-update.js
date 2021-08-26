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
                        item.saleprice = item.product.price * Number(e.target.value) / 100 + item.product.price;
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
                    children: item.price
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
                          lineNumber: 146,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
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
        lineNumber: 158,
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
      lineNumber: 174,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcG9xcy9lZGl0L1Jlc3VsdHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJSZXN1bHRzIiwiY2xhc3NOYW1lIiwicXVlcnkiLCJzZXRQT1EiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzQnVsa0xvYWRpbmciLCJzZXRJc0J1bGtMb2FkaW5nIiwidXNlVGFibGUiLCJzZWxlY3RlZEl0ZW1zIiwiaXNBbGxJdGVtc1NlbGVjdGVkIiwiaXNTb21lSXRlbXNTZWxlY3RlZCIsInBhZ2UiLCJsaW1pdCIsImhhc05leHQiLCJoYXNQcmV2IiwiaXNUYWJsZUxvYWRpbmciLCJpc0xvYWRpbmciLCJzZXRJdGVtcyIsInNldFNlbGVjdGVkSXRlbXMiLCJlbmFibGVCdWxrT3BlcmF0aW9ucyIsImhhbmRsZVNlbGVjdEFsbEl0ZW1zIiwiaGFuZGxlU2VsZWN0T25lSXRlbSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYW5kbGVMaW1pdENoYW5nZSIsImNsc3giLCJwb3FEZXRhaWwiLCJtYXAiLCJpdGVtIiwiaXNJdGVtU2VsZWN0ZWQiLCJpbmNsdWRlcyIsImlkIiwiaW5kZXhPZiIsImV2ZW50IiwicHJvZHVjdCIsInBhcnROdW1iZXIiLCJ3aWR0aCIsInFudHkiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJlbmR1c2VycHJpY2UiLCJkaXNjb3VudCIsInNhbGVwZXJjZW50YWdlIiwic2FsZXByaWNlIiwicHJpY2UiLCJkZWxldGVQcm9kdWN0IiwiZGlzYWJsZWQiLCJmcm9tIiwibGVuZ3RoIiwicHJvZHVjdElkIiwiYXhpb3MiLCJ0aGVuIiwiZmlsdGVyIiwidmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFB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O0FBQ2hDQyxpREFBSyxVQUFMLDRDQUFpREQsU0FBakQsR0FBOERFLElBQTlELENBQW1FLFlBQU07QUFDdkV0RCxZQUFNLGlDQUNERCxLQURDO0FBRUo0QixpQkFBUyxFQUFFNUIsS0FBSyxDQUFDNEIsU0FBTixDQUFnQjRCLE1BQWhCLENBQXVCLFVBQUMxQixJQUFEO0FBQUEsaUJBQVVBLElBQUksQ0FBQ0csRUFBTCxJQUFXb0IsU0FBckI7QUFBQSxTQUF2QjtBQUZQLFNBQU47QUFJQWhELHFCQUFlLENBQUMsU0FBRCxFQUFZO0FBQUVvRCxlQUFPLEVBQUU7QUFBWCxPQUFaLENBQWY7QUFDRCxLQU5EO0FBT0Q7QUFDRjs7R0FoS1EzRCxPO1VBQ1NILFMsRUFDWVMscUQsRUFtQnhCTSwyRDs7O0tBckJHWixPO0FBa0tNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3FzL1twb3FJZF0vZWRpdC42YTIwZWRhMGU4NDhmYTJiMTRjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDaGVja2JveCxcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIERpdmlkZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBJbnB1dEFkb3JubWVudCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFN2Z0ljb24sXHJcbiAgVGFibGUsXHJcbiAgVGFibGVCb2R5LFxyXG4gIFRhYmxlQ2VsbCxcclxuICBUYWJsZUhlYWQsXHJcbiAgVGFibGVQYWdpbmF0aW9uLFxyXG4gIFRhYmxlUm93LFxyXG4gIFRleHRGaWVsZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyBTZWFyY2ggYXMgU2VhcmNoSWNvbiwgVHJhc2ggYXMgVHJhc2hJY29uIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcclxuXHJcbmltcG9ydCB1c2VUYWJsZSBmcm9tICdzcmMvaG9va3MvdXNlVGFibGUnO1xyXG5cclxuaW1wb3J0IEJ1bGtPcGVyYXRpb25zIGZyb20gJy4vQnVsa09wZXJhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRzKHsgY2xhc3NOYW1lLCBxdWVyeSwgc2V0UE9RLCAuLi5yZXN0IH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgY29uc3QgW2lzQnVsa0xvYWRpbmcsIHNldElzQnVsa0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHtcclxuICAgIC8vIGl0ZW1zLFxyXG4gICAgc2VsZWN0ZWRJdGVtcyxcclxuICAgIGlzQWxsSXRlbXNTZWxlY3RlZCxcclxuICAgIGlzU29tZUl0ZW1zU2VsZWN0ZWQsXHJcbiAgICBwYWdlLFxyXG4gICAgbGltaXQsXHJcbiAgICBoYXNOZXh0LFxyXG4gICAgaGFzUHJldixcclxuICAgIGlzTG9hZGluZzogaXNUYWJsZUxvYWRpbmcsXHJcbiAgICBzZXRJdGVtcyxcclxuICAgIHNldFNlbGVjdGVkSXRlbXMsXHJcbiAgICBlbmFibGVCdWxrT3BlcmF0aW9ucyxcclxuICAgIGhhbmRsZVNlbGVjdEFsbEl0ZW1zLFxyXG4gICAgaGFuZGxlU2VsZWN0T25lSXRlbSxcclxuICAgIGhhbmRsZVBhZ2VDaGFuZ2UsXHJcbiAgICBoYW5kbGVMaW1pdENoYW5nZSxcclxuICB9ID0gdXNlVGFibGUoeyBxdWVyeSB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8UGVyZmVjdFNjcm9sbGJhcj5cclxuICAgICAgICAgIDxCb3ggbWluV2lkdGg9ezcwMH0+XHJcbiAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNBbGxJdGVtc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17aXNTb21lSXRlbXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RBbGxJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QYXJ0ICM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5RdWFudGl0eTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlByaWNlIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRpc2NvdW50ICglKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlNhbGUgUGVyY2VudGFnZSAoJSk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5TYWxlIHByaWNlIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5BY3Rpb25zPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgIHtpc1RhYmxlTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXs0fT5cclxuICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cXVlcnkucG9xRGV0YWlsLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbS5pZCkgIT09IC0xfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzSXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0T25lSXRlbShldmVudCwgaXRlbS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc0l0ZW1TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5wcm9kdWN0LnBhcnROdW1iZXJ9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgd2lkdGg6ICcxMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YHFudHkke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5xbnR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucW50eSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBPUSh7IC4uLnF1ZXJ5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5lbmR1c2VycHJpY2V9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0ucHJvZHVjdC5kaXNjb3VudH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB3aWR0aDogJzIwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgc2FsZXBlcmNlbnQke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5zYWxlcGVyY2VudGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNjAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlIDwgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGUudGFyZ2V0LnZhbHVlID0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNhbGVwcmljZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0ucHJvZHVjdC5wcmljZSAqIE51bWJlcihlLnRhcmdldC52YWx1ZSkpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNhbGVwZXJjZW50YWdlID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UE9RKHsgLi4ucXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLnByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVQcm9kdWN0KGl0ZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdJY29uIGZvbnRTaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cclxuICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgY291bnQ9ey0xfVxyXG4gICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlTGltaXRDaGFuZ2V9XHJcbiAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgcm93c1BlclBhZ2U9e2xpbWl0fVxyXG4gICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbNSwgMTAsIDI1XX1cclxuICAgICAgICAgIG5leHRJY29uQnV0dG9uUHJvcHM9e3sgZGlzYWJsZWQ6ICFoYXNOZXh0IH19XHJcbiAgICAgICAgICBiYWNrSWNvbkJ1dHRvblByb3BzPXt7IGRpc2FibGVkOiAhaGFzUHJldiB9fVxyXG4gICAgICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzPXsoeyBmcm9tIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHF1ZXJ5LnBvcURldGFpbC5sZW5ndGggPT0gMCkgcmV0dXJuICcwLTAnO1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7ZnJvbX0tJHtmcm9tICsgcXVlcnkucG9xRGV0YWlsLmxlbmd0aCAtIDF9YDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8QnVsa09wZXJhdGlvbnNcclxuICAgICAgICBvcGVuPXtlbmFibGVCdWxrT3BlcmF0aW9uc31cclxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJdGVtc31cclxuICAgICAgICBpc0xvYWRpbmc9e2lzQnVsa0xvYWRpbmd9XHJcbiAgICAgICAgb25NYXJrQWN0aXZlPXsoKSA9PiB7fX1cclxuICAgICAgICBvbk1hcmtJbmFjdGl2ZT17KCkgPT4ge319XHJcbiAgICAgICAgb25EZWxldGU9eygpID0+IHt9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgLy8gc2V0UE9RKHsgLi4ucXVlcnksIHBvcURldGFpbDogeHh4eHh4eHh4eCB9KVxyXG5cclxuICAvL2RlbGV0ZSBwcm9kdWN0XHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3BvcWRldGFpbHMvJHtwcm9kdWN0SWR9YCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFBPUSh7XHJcbiAgICAgICAgLi4ucXVlcnksXHJcbiAgICAgICAgcG9xRGV0YWlsOiBxdWVyeS5wb3FEZXRhaWwuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IHByb2R1Y3RJZCksXHJcbiAgICAgIH0pO1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ2RlbGV0ZWQnLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=