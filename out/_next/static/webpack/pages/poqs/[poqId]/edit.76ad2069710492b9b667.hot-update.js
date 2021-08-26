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
                    children: item.saleprice
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcG9xcy9lZGl0L1Jlc3VsdHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJSZXN1bHRzIiwiY2xhc3NOYW1lIiwicXVlcnkiLCJzZXRQT1EiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzQnVsa0xvYWRpbmciLCJzZXRJc0J1bGtMb2FkaW5nIiwidXNlVGFibGUiLCJzZWxlY3RlZEl0ZW1zIiwiaXNBbGxJdGVtc1NlbGVjdGVkIiwiaXNTb21lSXRlbXNTZWxlY3RlZCIsInBhZ2UiLCJsaW1pdCIsImhhc05leHQiLCJoYXNQcmV2IiwiaXNUYWJsZUxvYWRpbmciLCJpc0xvYWRpbmciLCJzZXRJdGVtcyIsInNldFNlbGVjdGVkSXRlbXMiLCJlbmFibGVCdWxrT3BlcmF0aW9ucyIsImhhbmRsZVNlbGVjdEFsbEl0ZW1zIiwiaGFuZGxlU2VsZWN0T25lSXRlbSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYW5kbGVMaW1pdENoYW5nZSIsImNsc3giLCJwb3FEZXRhaWwiLCJtYXAiLCJpdGVtIiwiaXNJdGVtU2VsZWN0ZWQiLCJpbmNsdWRlcyIsImlkIiwiaW5kZXhPZiIsImV2ZW50IiwicHJvZHVjdCIsInBhcnROdW1iZXIiLCJ3aWR0aCIsInFudHkiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJlbmR1c2VycHJpY2UiLCJkaXNjb3VudCIsInNhbGVwZXJjZW50YWdlIiwic2FsZXByaWNlIiwiZGVsZXRlUHJvZHVjdCIsImRpc2FibGVkIiwiZnJvbSIsImxlbmd0aCIsInByb2R1Y3RJZCIsImF4aW9zIiwidGhlbiIsImZpbHRlciIsInZhcmlhbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FB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RCxHQUE4REUsSUFBOUQsQ0FBbUUsWUFBTTtBQUN2RXJELFlBQU0saUNBQ0RELEtBREM7QUFFSjRCLGlCQUFTLEVBQUU1QixLQUFLLENBQUM0QixTQUFOLENBQWdCMkIsTUFBaEIsQ0FBdUIsVUFBQ3pCLElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxDQUFDRyxFQUFMLElBQVdtQixTQUFyQjtBQUFBLFNBQXZCO0FBRlAsU0FBTjtBQUlBL0MscUJBQWUsQ0FBQyxTQUFELEVBQVk7QUFBRW1ELGVBQU8sRUFBRTtBQUFYLE9BQVosQ0FBZjtBQUNELEtBTkQ7QUFPRDtBQUNGOztHQWhLUTFELE87VUFDU0gsUyxFQUNZUyxxRCxFQW1CeEJNLDJEOzs7S0FyQkdaLE87QUFrS01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcXMvW3BvcUlkXS9lZGl0Ljc2YWQyMDY5NzEwNDkyYjliNjY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENoZWNrYm94LFxyXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXHJcbiAgRGl2aWRlcixcclxuICBJY29uQnV0dG9uLFxyXG4gIElucHV0QWRvcm5tZW50LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgU3ZnSWNvbixcclxuICBUYWJsZSxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlSGVhZCxcclxuICBUYWJsZVBhZ2luYXRpb24sXHJcbiAgVGFibGVSb3csXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XHJcbmltcG9ydCB7IFNlYXJjaCBhcyBTZWFyY2hJY29uLCBUcmFzaCBhcyBUcmFzaEljb24gfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xyXG5cclxuaW1wb3J0IHVzZVRhYmxlIGZyb20gJ3NyYy9ob29rcy91c2VUYWJsZSc7XHJcblxyXG5pbXBvcnQgQnVsa09wZXJhdGlvbnMgZnJvbSAnLi9CdWxrT3BlcmF0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFJlc3VsdHMoeyBjbGFzc05hbWUsIHF1ZXJ5LCBzZXRQT1EsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCBbaXNCdWxrTG9hZGluZywgc2V0SXNCdWxrTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgLy8gaXRlbXMsXHJcbiAgICBzZWxlY3RlZEl0ZW1zLFxyXG4gICAgaXNBbGxJdGVtc1NlbGVjdGVkLFxyXG4gICAgaXNTb21lSXRlbXNTZWxlY3RlZCxcclxuICAgIHBhZ2UsXHJcbiAgICBsaW1pdCxcclxuICAgIGhhc05leHQsXHJcbiAgICBoYXNQcmV2LFxyXG4gICAgaXNMb2FkaW5nOiBpc1RhYmxlTG9hZGluZyxcclxuICAgIHNldEl0ZW1zLFxyXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyxcclxuICAgIGVuYWJsZUJ1bGtPcGVyYXRpb25zLFxyXG4gICAgaGFuZGxlU2VsZWN0QWxsSXRlbXMsXHJcbiAgICBoYW5kbGVTZWxlY3RPbmVJdGVtLFxyXG4gICAgaGFuZGxlUGFnZUNoYW5nZSxcclxuICAgIGhhbmRsZUxpbWl0Q2hhbmdlLFxyXG4gIH0gPSB1c2VUYWJsZSh7IHF1ZXJ5IH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxyXG4gICAgICAgICAgPEJveCBtaW5XaWR0aD17NzAwfT5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0FsbEl0ZW1zU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXtpc1NvbWVJdGVtc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdEFsbEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlBhcnQgIzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlF1YW50aXR5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UHJpY2UgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGlzY291bnQgKCUpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+U2FsZSBQZXJjZW50YWdlICglKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlNhbGUgcHJpY2UgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFjdGlvbnM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAge2lzVGFibGVMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtxdWVyeS5wb3FEZXRhaWwubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0uaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtLmlkKSAhPT0gLTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RPbmVJdGVtKGV2ZW50LCBpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lzSXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLnByb2R1Y3QucGFydE51bWJlcn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB3aWR0aDogJzEwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgcW50eSR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xbnR5ID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UE9RKHsgLi4ucXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLmVuZHVzZXJwcmljZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5wcm9kdWN0LmRpc2NvdW50fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHdpZHRoOiAnMjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BzYWxlcGVyY2VudCR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnNhbGVwZXJjZW50YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc2MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZS50YXJnZXQudmFsdWUgPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2FsZXByaWNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5lbmR1c2VycHJpY2UgKiBOdW1iZXIoZS50YXJnZXQudmFsdWUpKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kdXNlcnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNhbGVwZXJjZW50YWdlID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UE9RKHsgLi4ucXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLnNhbGVwcmljZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlUHJvZHVjdChpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbiBmb250U2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XHJcbiAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgIGNvdW50PXstMX1cclxuICAgICAgICAgIG9uQ2hhbmdlUGFnZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUxpbWl0Q2hhbmdlfVxyXG4gICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgIHJvd3NQZXJQYWdlPXtsaW1pdH1cclxuICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNV19XHJcbiAgICAgICAgICBuZXh0SWNvbkJ1dHRvblByb3BzPXt7IGRpc2FibGVkOiAhaGFzTmV4dCB9fVxyXG4gICAgICAgICAgYmFja0ljb25CdXR0b25Qcm9wcz17eyBkaXNhYmxlZDogIWhhc1ByZXYgfX1cclxuICAgICAgICAgIGxhYmVsRGlzcGxheWVkUm93cz17KHsgZnJvbSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeS5wb3FEZXRhaWwubGVuZ3RoID09IDApIHJldHVybiAnMC0wJztcclxuICAgICAgICAgICAgcmV0dXJuIGAke2Zyb219LSR7ZnJvbSArIHF1ZXJ5LnBvcURldGFpbC5sZW5ndGggLSAxfWA7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPEJ1bGtPcGVyYXRpb25zXHJcbiAgICAgICAgb3Blbj17ZW5hYmxlQnVsa09wZXJhdGlvbnN9XHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgaXNMb2FkaW5nPXtpc0J1bGtMb2FkaW5nfVxyXG4gICAgICAgIG9uTWFya0FjdGl2ZT17KCkgPT4ge319XHJcbiAgICAgICAgb25NYXJrSW5hY3RpdmU9eygpID0+IHt9fVxyXG4gICAgICAgIG9uRGVsZXRlPXsoKSA9PiB7fX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIC8vIHNldFBPUSh7IC4uLnF1ZXJ5LCBwb3FEZXRhaWw6IHh4eHh4eHh4eHggfSlcclxuXHJcbiAgLy9kZWxldGUgcHJvZHVjdFxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3QocHJvZHVjdElkKSB7XHJcbiAgICBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3FkZXRhaWxzLyR7cHJvZHVjdElkfWApLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRQT1Eoe1xyXG4gICAgICAgIC4uLnF1ZXJ5LFxyXG4gICAgICAgIHBvcURldGFpbDogcXVlcnkucG9xRGV0YWlsLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPSBwcm9kdWN0SWQpLFxyXG4gICAgICB9KTtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdkZWxldGVkJywgeyB2YXJpYW50OiAnZXJyb3InIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9