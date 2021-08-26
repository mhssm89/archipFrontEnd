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
                  style: {
                    textAlign: 'center'
                  },
                  children: "Part #"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  style: {
                    textAlign: 'center'
                  },
                  children: "Quantity"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  style: {
                    textAlign: 'center'
                  },
                  children: "Price "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  style: {
                    textAlign: 'center'
                  },
                  children: "Discount (%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  style: {
                    textAlign: 'center'
                  },
                  children: "Sale Price"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                  align: "right",
                  children: "Actions"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
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
                lineNumber: 91,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
                      lineNumber: 104,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    style: {
                      textAlign: 'center'
                    },
                    children: item.product.partNumber
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
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
                      lineNumber: 116,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: item.enduserprice
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: item.product.discount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
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
                      lineNumber: 131,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: item.saleprice ? Math.round((item.saleprice + Number.EPSILON) * 100) / 100 : item.enduserprice
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
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
                          lineNumber: 160,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 25
                  }, _this)]
                }, item.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
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
        lineNumber: 172,
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
      lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvZWRpdC9SZXN1bHRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiUmVzdWx0cyIsImNsYXNzTmFtZSIsInF1ZXJ5Iiwic2V0cHJvamVjdCIsInJlc3QiLCJjbGFzc2VzIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNCdWxrTG9hZGluZyIsInNldElzQnVsa0xvYWRpbmciLCJ1c2VUYWJsZSIsInNlbGVjdGVkSXRlbXMiLCJpc0FsbEl0ZW1zU2VsZWN0ZWQiLCJpc1NvbWVJdGVtc1NlbGVjdGVkIiwicGFnZSIsImxpbWl0IiwiaGFzTmV4dCIsImhhc1ByZXYiLCJpc1RhYmxlTG9hZGluZyIsImlzTG9hZGluZyIsInNldEl0ZW1zIiwic2V0U2VsZWN0ZWRJdGVtcyIsImVuYWJsZUJ1bGtPcGVyYXRpb25zIiwiaGFuZGxlU2VsZWN0QWxsSXRlbXMiLCJoYW5kbGVTZWxlY3RPbmVJdGVtIiwiaGFuZGxlUGFnZUNoYW5nZSIsImhhbmRsZUxpbWl0Q2hhbmdlIiwiY2xzeCIsInRleHRBbGlnbiIsInByb2plY3RkZXRhaWwiLCJtYXAiLCJpdGVtIiwiaXNJdGVtU2VsZWN0ZWQiLCJpbmNsdWRlcyIsImlkIiwiaW5kZXhPZiIsImV2ZW50IiwicHJvZHVjdCIsInBhcnROdW1iZXIiLCJ3aWR0aCIsInFudHkiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJlbmR1c2VycHJpY2UiLCJkaXNjb3VudCIsInNhbGVwZXJjZW50YWdlIiwic2FsZXByaWNlIiwiTWF0aCIsInJvdW5kIiwiRVBTSUxPTiIsImRlbGV0ZVByb2R1Y3QiLCJkaXNhYmxlZCIsImZyb20iLCJsZW5ndGgiLCJwcm9kdWN0SWQiLCJheGlvcyIsInRoZW4iLCJmaWx0ZXIiLCJ2YXJpYW50Il0sIm1hcHBpbmdzIjoiOzs7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Q3VELE1BQWIsR0FBc0IsQ0FBeEM7QUFDRDtBQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUErSEUscUVBQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUVqQyxvQkFEUjtBQUVFLGNBQVEsRUFBRVgsYUFGWjtBQUdFLGVBQVMsRUFBRUgsYUFIYjtBQUlFLGtCQUFZLEVBQUUsd0JBQU0sQ0FBRSxDQUp4QjtBQUtFLG9CQUFjLEVBQUUsMEJBQU0sQ0FBRSxDQUwxQjtBQU1FLGNBQVEsRUFBRSxvQkFBTSxDQUFFO0FBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBMElBLFdBQVM0QyxhQUFULENBQXVCSSxTQUF2QixFQUFrQztBQUNoQ0MsaURBQUssVUFBTCxpREFDbURELFNBRG5ELEdBRUdFLElBRkgsQ0FFUSxZQUFNO0FBQ1Z6RCxnQkFBVSxpQ0FDTEQsS0FESztBQUVSNkIscUJBQWEsRUFBRTdCLEtBQUssQ0FBQzZCLGFBQU4sQ0FBb0I4QixNQUFwQixDQUNiLFVBQUM1QixJQUFEO0FBQUEsaUJBQVVBLElBQUksQ0FBQ0csRUFBTCxJQUFXc0IsU0FBckI7QUFBQSxTQURhO0FBRlAsU0FBVjtBQU1BbkQscUJBQWUsQ0FBQyxTQUFELEVBQVk7QUFBRXVELGVBQU8sRUFBRTtBQUFYLE9BQVosQ0FBZjtBQUNELEtBVkg7QUFXRDtBQUNGOztHQTlLUTlELE87VUFDU0gsUyxFQUNZUyxxRCxFQW1CeEJNLDJEOzs7S0FyQkdaLE87QUFnTE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0SWRdL2VkaXQuYWFhZjRkMzMwZjU5NDU3YjUzMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2hlY2tib3gsXHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBEaXZpZGVyLFxyXG4gIEljb25CdXR0b24sXHJcbiAgSW5wdXRBZG9ybm1lbnQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBTdmdJY29uLFxyXG4gIFRhYmxlLFxyXG4gIFRhYmxlQm9keSxcclxuICBUYWJsZUNlbGwsXHJcbiAgVGFibGVIZWFkLFxyXG4gIFRhYmxlUGFnaW5hdGlvbixcclxuICBUYWJsZVJvdyxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcclxuaW1wb3J0IHsgU2VhcmNoIGFzIFNlYXJjaEljb24sIFRyYXNoIGFzIFRyYXNoSWNvbiB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdyZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XHJcblxyXG5pbXBvcnQgdXNlVGFibGUgZnJvbSAnc3JjL2hvb2tzL3VzZVRhYmxlJztcclxuXHJcbmltcG9ydCBCdWxrT3BlcmF0aW9ucyBmcm9tICcuL0J1bGtPcGVyYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7fSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gUmVzdWx0cyh7IGNsYXNzTmFtZSwgcXVlcnksIHNldHByb2plY3QsIC4uLnJlc3QgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCBbaXNCdWxrTG9hZGluZywgc2V0SXNCdWxrTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgLy8gaXRlbXMsXHJcbiAgICBzZWxlY3RlZEl0ZW1zLFxyXG4gICAgaXNBbGxJdGVtc1NlbGVjdGVkLFxyXG4gICAgaXNTb21lSXRlbXNTZWxlY3RlZCxcclxuICAgIHBhZ2UsXHJcbiAgICBsaW1pdCxcclxuICAgIGhhc05leHQsXHJcbiAgICBoYXNQcmV2LFxyXG4gICAgaXNMb2FkaW5nOiBpc1RhYmxlTG9hZGluZyxcclxuICAgIHNldEl0ZW1zLFxyXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyxcclxuICAgIGVuYWJsZUJ1bGtPcGVyYXRpb25zLFxyXG4gICAgaGFuZGxlU2VsZWN0QWxsSXRlbXMsXHJcbiAgICBoYW5kbGVTZWxlY3RPbmVJdGVtLFxyXG4gICAgaGFuZGxlUGFnZUNoYW5nZSxcclxuICAgIGhhbmRsZUxpbWl0Q2hhbmdlLFxyXG4gIH0gPSB1c2VUYWJsZSh7IHF1ZXJ5IH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxyXG4gICAgICAgICAgPEJveCBtaW5XaWR0aD17NzAwfT5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0FsbEl0ZW1zU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXtpc1NvbWVJdGVtc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdEFsbEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+UGFydCAjPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBRdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByaWNlIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgRGlzY291bnQgKCUpXHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FsZSBQcmljZVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+QWN0aW9uczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICB7aXNUYWJsZUxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17NH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAge3F1ZXJ5LnByb2plY3RkZXRhaWwubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0uaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtLmlkKSAhPT0gLTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RPbmVJdGVtKGV2ZW50LCBpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lzSXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5wYXJ0TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB3aWR0aDogJzEwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgcW50eSR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xbnR5ID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0cHJvamVjdCh7IC4uLnF1ZXJ5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5lbmR1c2VycHJpY2V9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0ucHJvZHVjdC5kaXNjb3VudH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB3aWR0aDogJzIwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgc2FsZXBlcmNlbnQke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5zYWxlcGVyY2VudGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNjAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlIDwgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGUudGFyZ2V0LnZhbHVlID0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNhbGVwcmljZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZW5kdXNlcnByaWNlICogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVuZHVzZXJwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zYWxlcGVyY2VudGFnZSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHByb2plY3QoeyAuLi5xdWVyeSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2FsZXByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uc2FsZXByaWNlICsgTnVtYmVyLkVQU0lMT04pICogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uZW5kdXNlcnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlUHJvZHVjdChpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbiBmb250U2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XHJcbiAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgIGNvdW50PXstMX1cclxuICAgICAgICAgIG9uQ2hhbmdlUGFnZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUxpbWl0Q2hhbmdlfVxyXG4gICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgIHJvd3NQZXJQYWdlPXtsaW1pdH1cclxuICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNV19XHJcbiAgICAgICAgICBuZXh0SWNvbkJ1dHRvblByb3BzPXt7IGRpc2FibGVkOiAhaGFzTmV4dCB9fVxyXG4gICAgICAgICAgYmFja0ljb25CdXR0b25Qcm9wcz17eyBkaXNhYmxlZDogIWhhc1ByZXYgfX1cclxuICAgICAgICAgIGxhYmVsRGlzcGxheWVkUm93cz17KHsgZnJvbSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeS5sZW5ndGggPT0gMCkgcmV0dXJuICcwLTAnO1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7ZnJvbX0tJHtmcm9tICsgcXVlcnkubGVuZ3RoIC0gMX1gO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxCdWxrT3BlcmF0aW9uc1xyXG4gICAgICAgIG9wZW49e2VuYWJsZUJ1bGtPcGVyYXRpb25zfVxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEl0ZW1zfVxyXG4gICAgICAgIGlzTG9hZGluZz17aXNCdWxrTG9hZGluZ31cclxuICAgICAgICBvbk1hcmtBY3RpdmU9eygpID0+IHt9fVxyXG4gICAgICAgIG9uTWFya0luYWN0aXZlPXsoKSA9PiB7fX1cclxuICAgICAgICBvbkRlbGV0ZT17KCkgPT4ge319XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3QocHJvZHVjdElkKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjEzMzcvcHJvamVjdC1kZXRhaWxzLyR7cHJvZHVjdElkfWApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRwcm9qZWN0KHtcclxuICAgICAgICAgIC4uLnF1ZXJ5LFxyXG4gICAgICAgICAgcHJvamVjdGRldGFpbDogcXVlcnkucHJvamVjdGRldGFpbC5maWx0ZXIoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9IHByb2R1Y3RJZCxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdkZWxldGVkJywgeyB2YXJpYW50OiAnZXJyb3InIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=