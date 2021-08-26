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

  console.log(query, 'query from result ');
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
                    children: item.EndUserPrice
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
                      value: item.saleprecentage,
                      style: {
                        width: '60%'
                      },
                      onChange: function onChange(e) {
                        e.target.value < 0 ? e.target.value = 0 : e.target.value;
                        item.SalePrice = item.EndUserPrice * Number(e.target.value) / 100 + item.EndUserPrice;
                        item.saleprecentage = Number(e.target.value);
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
                    children: item.SalePrice ? Math.round((item.SalePrice + Number.EPSILON) * 100) / 100 : item.EndUserPrice
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvZWRpdC9SZXN1bHRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiUmVzdWx0cyIsImNsYXNzTmFtZSIsInF1ZXJ5Iiwic2V0cHJvamVjdCIsInJlc3QiLCJjbGFzc2VzIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNCdWxrTG9hZGluZyIsInNldElzQnVsa0xvYWRpbmciLCJ1c2VUYWJsZSIsInNlbGVjdGVkSXRlbXMiLCJpc0FsbEl0ZW1zU2VsZWN0ZWQiLCJpc1NvbWVJdGVtc1NlbGVjdGVkIiwicGFnZSIsImxpbWl0IiwiaGFzTmV4dCIsImhhc1ByZXYiLCJpc1RhYmxlTG9hZGluZyIsImlzTG9hZGluZyIsInNldEl0ZW1zIiwic2V0U2VsZWN0ZWRJdGVtcyIsImVuYWJsZUJ1bGtPcGVyYXRpb25zIiwiaGFuZGxlU2VsZWN0QWxsSXRlbXMiLCJoYW5kbGVTZWxlY3RPbmVJdGVtIiwiaGFuZGxlUGFnZUNoYW5nZSIsImhhbmRsZUxpbWl0Q2hhbmdlIiwiY29uc29sZSIsImxvZyIsImNsc3giLCJwcm9qZWN0ZGV0YWlsIiwibWFwIiwiaXRlbSIsImlzSXRlbVNlbGVjdGVkIiwiaW5jbHVkZXMiLCJpZCIsImluZGV4T2YiLCJldmVudCIsInRleHRBbGlnbiIsInByb2R1Y3QiLCJwYXJ0TnVtYmVyIiwid2lkdGgiLCJxbnR5IiwiZSIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwiRW5kVXNlclByaWNlIiwiZGlzY291bnQiLCJzYWxlcHJlY2VudGFnZSIsIlNhbGVQcmljZSIsIk1hdGgiLCJyb3VuZCIsIkVQU0lMT04iLCJkZWxldGVQcm9kdWN0IiwiZGlzYWJsZWQiLCJmcm9tIiwibGVuZ3RoIiwicHJvZHVjdElkIiwiYXhpb3MiLCJ0aGVuIiwiZmlsdGVyIiwidmFyaWFudCJd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QUksRUFBRW5DLG9CQURSO0FBRUUsY0FBUSxFQUFFWCxhQUZaO0FBR0UsZUFBUyxFQUFFSCxhQUhiO0FBSUUsa0JBQVksRUFBRSx3QkFBTSxDQUFFLENBSnhCO0FBS0Usb0JBQWMsRUFBRSwwQkFBTSxDQUFFLENBTDFCO0FBTUUsY0FBUSxFQUFFLG9CQUFNLENBQUU7QUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFxSUEsV0FBUzhDLGFBQVQsQ0FBdUJJLFNBQXZCLEVBQWtDO0FBQ2hDQyxpREFBSyxVQUFMLGlEQUNtREQsU0FEbkQsR0FFR0UsSUFGSCxDQUVRLFlBQU07QUFDVjNELGdCQUFVLGlDQUNMRCxLQURLO0FBRVI4QixxQkFBYSxFQUFFOUIsS0FBSyxDQUFDOEIsYUFBTixDQUFvQitCLE1BQXBCLENBQ2IsVUFBQzdCLElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxDQUFDRyxFQUFMLElBQVd1QixTQUFyQjtBQUFBLFNBRGE7QUFGUCxTQUFWO0FBTUFyRCxxQkFBZSxDQUFDLFNBQUQsRUFBWTtBQUFFeUQsZUFBTyxFQUFFO0FBQVgsT0FBWixDQUFmO0FBQ0QsS0FWSDtBQVdEO0FBQ0Y7O0dBektRaEUsTztVQUNTSCxTLEVBQ1lTLHFELEVBbUJ4Qk0sMkQ7OztLQXJCR1osTztBQTJLTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0vZWRpdC5mZjI5M2MyMzQzMTE5MGQ0MGU4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDaGVja2JveCxcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIERpdmlkZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBJbnB1dEFkb3JubWVudCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFN2Z0ljb24sXHJcbiAgVGFibGUsXHJcbiAgVGFibGVCb2R5LFxyXG4gIFRhYmxlQ2VsbCxcclxuICBUYWJsZUhlYWQsXHJcbiAgVGFibGVQYWdpbmF0aW9uLFxyXG4gIFRhYmxlUm93LFxyXG4gIFRleHRGaWVsZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyBTZWFyY2ggYXMgU2VhcmNoSWNvbiwgVHJhc2ggYXMgVHJhc2hJY29uIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcclxuXHJcbmltcG9ydCB1c2VUYWJsZSBmcm9tICdzcmMvaG9va3MvdXNlVGFibGUnO1xyXG5cclxuaW1wb3J0IEJ1bGtPcGVyYXRpb25zIGZyb20gJy4vQnVsa09wZXJhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRzKHsgY2xhc3NOYW1lLCBxdWVyeSwgc2V0cHJvamVjdCwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IFtpc0J1bGtMb2FkaW5nLCBzZXRJc0J1bGtMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7XHJcbiAgICAvLyBpdGVtcyxcclxuICAgIHNlbGVjdGVkSXRlbXMsXHJcbiAgICBpc0FsbEl0ZW1zU2VsZWN0ZWQsXHJcbiAgICBpc1NvbWVJdGVtc1NlbGVjdGVkLFxyXG4gICAgcGFnZSxcclxuICAgIGxpbWl0LFxyXG4gICAgaGFzTmV4dCxcclxuICAgIGhhc1ByZXYsXHJcbiAgICBpc0xvYWRpbmc6IGlzVGFibGVMb2FkaW5nLFxyXG4gICAgc2V0SXRlbXMsXHJcbiAgICBzZXRTZWxlY3RlZEl0ZW1zLFxyXG4gICAgZW5hYmxlQnVsa09wZXJhdGlvbnMsXHJcbiAgICBoYW5kbGVTZWxlY3RBbGxJdGVtcyxcclxuICAgIGhhbmRsZVNlbGVjdE9uZUl0ZW0sXHJcbiAgICBoYW5kbGVQYWdlQ2hhbmdlLFxyXG4gICAgaGFuZGxlTGltaXRDaGFuZ2UsXHJcbiAgfSA9IHVzZVRhYmxlKHsgcXVlcnkgfSk7XHJcbiAgY29uc29sZS5sb2cocXVlcnksICdxdWVyeSBmcm9tIHJlc3VsdCAnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxyXG4gICAgICAgICAgPEJveCBtaW5XaWR0aD17NzAwfT5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0FsbEl0ZW1zU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXtpc1NvbWVJdGVtc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdEFsbEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlBhcnQgIzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlF1YW50aXR5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UHJpY2UgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGlzY291bnQgKCUpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+U2FsZSBQZXJjZW50YWdlICglKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlNhbGUgcHJpY2UgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFjdGlvbnM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAge2lzVGFibGVMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtxdWVyeS5wcm9qZWN0ZGV0YWlsLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbS5pZCkgIT09IC0xfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzSXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0T25lSXRlbShldmVudCwgaXRlbS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc0l0ZW1TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3QucGFydE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgd2lkdGg6ICcxMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YHFudHkke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5xbnR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucW50eSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHByb2plY3QoeyAuLi5xdWVyeSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0uRW5kVXNlclByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLnByb2R1Y3QuZGlzY291bnR9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgd2lkdGg6ICcyMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YHNhbGVwZXJjZW50JHtpdGVtLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uc2FsZXByZWNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzYwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA8IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChlLnRhcmdldC52YWx1ZSA9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5TYWxlUHJpY2UgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLkVuZFVzZXJQcmljZSAqIE51bWJlcihlLnRhcmdldC52YWx1ZSkpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5FbmRVc2VyUHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2FsZXByZWNlbnRhZ2UgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRwcm9qZWN0KHsgLi4ucXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLlNhbGVQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLlNhbGVQcmljZSArIE51bWJlci5FUFNJTE9OKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLkVuZFVzZXJQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVByb2R1Y3QoaXRlbS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxyXG4gICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICBjb3VudD17LTF9XHJcbiAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVMaW1pdENoYW5nZX1cclxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICByb3dzUGVyUGFnZT17bGltaXR9XHJcbiAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1s1LCAxMCwgMjVdfVxyXG4gICAgICAgICAgbmV4dEljb25CdXR0b25Qcm9wcz17eyBkaXNhYmxlZDogIWhhc05leHQgfX1cclxuICAgICAgICAgIGJhY2tJY29uQnV0dG9uUHJvcHM9e3sgZGlzYWJsZWQ6ICFoYXNQcmV2IH19XHJcbiAgICAgICAgICBsYWJlbERpc3BsYXllZFJvd3M9eyh7IGZyb20gfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoID09IDApIHJldHVybiAnMC0wJztcclxuICAgICAgICAgICAgcmV0dXJuIGAke2Zyb219LSR7ZnJvbSArIHF1ZXJ5Lmxlbmd0aCAtIDF9YDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8QnVsa09wZXJhdGlvbnNcclxuICAgICAgICBvcGVuPXtlbmFibGVCdWxrT3BlcmF0aW9uc31cclxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJdGVtc31cclxuICAgICAgICBpc0xvYWRpbmc9e2lzQnVsa0xvYWRpbmd9XHJcbiAgICAgICAgb25NYXJrQWN0aXZlPXsoKSA9PiB7fX1cclxuICAgICAgICBvbk1hcmtJbmFjdGl2ZT17KCkgPT4ge319XHJcbiAgICAgICAgb25EZWxldGU9eygpID0+IHt9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZCkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Byb2plY3QtZGV0YWlscy8ke3Byb2R1Y3RJZH1gKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2V0cHJvamVjdCh7XHJcbiAgICAgICAgICAuLi5xdWVyeSxcclxuICAgICAgICAgIHByb2plY3RkZXRhaWw6IHF1ZXJ5LnByb2plY3RkZXRhaWwuZmlsdGVyKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPSBwcm9kdWN0SWQsXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVucXVldWVTbmFja2JhcignZGVsZXRlZCcsIHsgdmFyaWFudDogJ2Vycm9yJyB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9