webpackHotUpdate_N_E("pages/projects/create",{

/***/ "./src/components/pages/projects/create/ProjectReview.js":
/*!***************************************************************!*\
  !*** ./src/components/pages/projects/create/ProjectReview.js ***!
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
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var src_components_pages_projects_create_Result__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/pages/projects/create/Result */ "./src/components/pages/projects/create/Result.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_hooks_useIsMountedRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/hooks/useIsMountedRef */ "./src/hooks/useIsMountedRef.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "F:\\archip-frontend\\src\\components\\pages\\projects\\create\\ProjectReview.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {},
    datePicker: {
      '& + &': {
        marginLeft: theme.spacing(2)
      }
    }
  };
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_11__["object"]().shape({});

function ProjectReview(_ref) {
  _s();

  var className = _ref.className,
      projectData = _ref.projectData,
      _ref$onBack = _ref.onBack,
      onBack = _ref$onBack === void 0 ? function () {} : _ref$onBack,
      _ref$onNext = _ref.onNext,
      onNext = _ref$onNext === void 0 ? function () {} : _ref$onNext,
      rest = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["className", "projectData", "onBack", "onNext"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState([]),
      _React$useState2 = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      products = _React$useState2[0],
      setProducts = _React$useState2[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"])();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_15__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var isMountedRef = Object(src_hooks_useIsMountedRef__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var getProducts = react__WEBPACK_IMPORTED_MODULE_6___default.a.useCallback( /*#__PURE__*/Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
    var response;
    return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!projectData) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("http://localhost:1337/poqdetails?_where[poq]=".concat(projectData.poq.id));

          case 4:
            response = _context.sent;
            setProducts(response.data);

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  })));
  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    getProducts();
  }, []);
  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"])({
    mode: 'all',
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__["yupResolver"])(validationSchema),
    defaultValues: {}
  });
  var handleSubmit = methods.handleSubmit,
      errors = methods.errors,
      setError = methods.setError,
      isSubmitting = methods.formState.isSubmitting;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["FormProvider"], _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", _objectSpread(_objectSpread({
      onSubmit: handleSubmit(onSubmit),
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, className)
    }, rest), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "h3",
        color: "textPrimary",
        children: "Project Review"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "subtitle1",
        color: "textSecondary",
        children: "Please review all products attached to this project before save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(src_components_pages_projects_create_Result__WEBPACK_IMPORTED_MODULE_12__["default"], {
        query: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
          lineNumber: 84,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
          flexGrow: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          color: "secondary",
          disabled: isSubmitting,
          type: "submit",
          variant: "contained",
          size: "large",
          children: "Complete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);

  function onSubmit() {
    try {
      var projectInput = {
        name: projectData.project.projectName,
        startDate: projectData.project.startDate,
        endDate: projectData.project.endDate,
        status: projectData.project.projectStatus.value,
        type: projectData.project.ProjectScope.value,
        customer: projectData.poq.customerId,
        poq: projectData.poq.id,
        grandTotal: projectData.poq.grandtotal,
        shippingAddress: projectData.poq.shippingAddress,
        shippingcost: projectData.poq.shippingcost,
        othercost: projectData.poq.othercost,
        vat: projectData.poq.vat,
        productTotalCost: projectData.poq.productTotalCost,
        subtotal: projectData.poq.subtotal,
        totaldiscount: projectData.poq.totaldiscount,
        profit: projectData.poq.profit
      };
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('http://localhost:1337/projects', projectInput).then(function (resp) {
        products.map(function (item) {
          var projectDetails = {
            project: resp.data.id,
            product: item.product.id,
            qnty: item.qnty,
            EndUserPrice: item.enduserprice,
            SalePrice: item.saleprice
          };
          axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('http://localhost:1337/project-details', projectDetails).then(function () {
            enqueueSnackbar('Project created successfully.', {
              variant: 'success'
            });
          })["catch"](function () {
            enqueueSnackbar('Error creating new Project.', {
              variant: 'error'
            });
          });
        });
      })["catch"](function () {
        enqueueSnackbar('Error creating new Project.', {
          variant: 'error'
        });
      });
      router.push('/projects');
    } catch (err) {
      console.error(err);
      setError('submitError', {
        type: 'submit',
        message: err.message
      });
    }
  }
}

_s(ProjectReview, "O0l2pPzHEexvTCjUh71sErmrCzU=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"], notistack__WEBPACK_IMPORTED_MODULE_15__["useSnackbar"], src_hooks_useIsMountedRef__WEBPACK_IMPORTED_MODULE_14__["default"], react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"]];
});

_c = ProjectReview;
/* harmony default export */ __webpack_exports__["default"] = (ProjectReview);

var _c;

$RefreshReg$(_c, "ProjectReview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvY3JlYXRlL1Byb2plY3RSZXZpZXcuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRhdGVQaWNrZXIiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsIlByb2plY3RSZXZpZXciLCJjbGFzc05hbWUiLCJwcm9qZWN0RGF0YSIsIm9uQmFjayIsIm9uTmV4dCIsInJlc3QiLCJSZWFjdCIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsImlzTW91bnRlZFJlZiIsInVzZUlzTW91bnRlZFJlZiIsImdldFByb2R1Y3RzIiwidXNlQ2FsbGJhY2siLCJheGlvcyIsImdldCIsInBvcSIsImlkIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwidXNlRWZmZWN0IiwibWV0aG9kcyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsImlzU3VibWl0dGluZyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwiY2xzeCIsInByb2plY3RJbnB1dCIsIm5hbWUiLCJwcm9qZWN0IiwicHJvamVjdE5hbWUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwic3RhdHVzIiwicHJvamVjdFN0YXR1cyIsInZhbHVlIiwidHlwZSIsIlByb2plY3RTY29wZSIsImN1c3RvbWVyIiwiY3VzdG9tZXJJZCIsImdyYW5kVG90YWwiLCJncmFuZHRvdGFsIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdjb3N0Iiwib3RoZXJjb3N0IiwidmF0IiwicHJvZHVjdFRvdGFsQ29zdCIsInN1YnRvdGFsIiwidG90YWxkaXNjb3VudCIsInByb2ZpdCIsInBvc3QiLCJ0aGVuIiwicmVzcCIsIm1hcCIsIml0ZW0iLCJwcm9qZWN0RGV0YWlscyIsInByb2R1Y3QiLCJxbnR5IiwiRW5kVXNlclByaWNlIiwiZW5kdXNlcnByaWNlIiwiU2FsZVByaWNlIiwic2FsZXByaWNlIiwidmFyaWFudCIsInB1c2giLCJlcnIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFHdkNDLGNBQVUsRUFBRTtBQUNWLGVBQVM7QUFDUEMsa0JBQVUsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQURMO0FBREM7QUFIMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFTQSxJQUFNQyxnQkFBZ0IsR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQixFQUFuQixDQUF6Qjs7QUFFQSxTQUFTQyxhQUFULE9BTUc7QUFBQTs7QUFBQSxNQUxEQyxTQUtDLFFBTERBLFNBS0M7QUFBQSxNQUpEQyxXQUlDLFFBSkRBLFdBSUM7QUFBQSx5QkFIREMsTUFHQztBQUFBLE1BSERBLE1BR0MsNEJBSFEsWUFBTSxDQUFFLENBR2hCO0FBQUEseUJBRkRDLE1BRUM7QUFBQSxNQUZEQSxNQUVDLDRCQUZRLFlBQU0sQ0FBRSxDQUVoQjtBQUFBLE1BREVDLElBQ0Y7O0FBQUEsd0JBQytCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUQvQjtBQUFBO0FBQUEsTUFDTUMsUUFETjtBQUFBLE1BQ2dCQyxXQURoQjs7QUFFRCxNQUFNQyxPQUFPLEdBQUdwQixTQUFTLEVBQXpCO0FBQ0Es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Q2FDLHNELEVBQ1BHLGtFLEVBa0JMYSx3RDs7O0tBN0JUN0IsYTtBQXNJTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvY3JlYXRlLmQ0ZjkyYmNiMGYzZWJlZTA0Njk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgeyBGb3JtUHJvdmlkZXIsIHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IFJlc3VsdHMgZnJvbSAnc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvY3JlYXRlL1Jlc3VsdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB1c2VJc01vdW50ZWRSZWYgZnJvbSAnc3JjL2hvb2tzL3VzZUlzTW91bnRlZFJlZic7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcblxyXG4gIGRhdGVQaWNrZXI6IHtcclxuICAgICcmICsgJic6IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHt9KTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RSZXZpZXcoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBwcm9qZWN0RGF0YSxcclxuICBvbkJhY2sgPSAoKSA9PiB7fSxcclxuICBvbk5leHQgPSAoKSA9PiB7fSxcclxuICAuLi5yZXN0XHJcbn0pIHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gdXNlSXNNb3VudGVkUmVmKCk7XHJcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAocHJvamVjdERhdGEpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEzMzcvcG9xZGV0YWlscz9fd2hlcmVbcG9xXT0ke3Byb2plY3REYXRhLnBvcS5pZH1gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQcm9kdWN0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oe1xyXG4gICAgbW9kZTogJ2FsbCcsXHJcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIodmFsaWRhdGlvblNjaGVtYSksXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7fSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZXJyb3JzLFxyXG4gICAgc2V0RXJyb3IsXHJcbiAgICBmb3JtU3RhdGU6IHsgaXNTdWJtaXR0aW5nIH0sXHJcbiAgfSA9IG1ldGhvZHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtUHJvdmlkZXIgey4uLm1ldGhvZHN9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgey4uLnJlc3R9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgIFByb2plY3QgUmV2aWV3XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgIFBsZWFzZSByZXZpZXcgYWxsIHByb2R1Y3RzIGF0dGFjaGVkIHRvIHRoaXMgcHJvamVjdCBiZWZvcmUgc2F2ZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8UmVzdWx0cyBxdWVyeT17cHJvZHVjdHN9IC8+XHJcblxyXG4gICAgICAgIDxCb3ggbXQ9ezZ9IGRpc3BsYXk9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7b25CYWNrICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkJhY2t9IHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxCb3ggZmxleEdyb3c9ezF9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgQ29tcGxldGVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0Zvcm1Qcm92aWRlcj5cclxuICApO1xyXG4gIGZ1bmN0aW9uIG9uU3VibWl0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcHJvamVjdElucHV0ID0ge1xyXG4gICAgICAgIG5hbWU6IHByb2plY3REYXRhLnByb2plY3QucHJvamVjdE5hbWUsXHJcbiAgICAgICAgc3RhcnREYXRlOiBwcm9qZWN0RGF0YS5wcm9qZWN0LnN0YXJ0RGF0ZSxcclxuICAgICAgICBlbmREYXRlOiBwcm9qZWN0RGF0YS5wcm9qZWN0LmVuZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBwcm9qZWN0RGF0YS5wcm9qZWN0LnByb2plY3RTdGF0dXMudmFsdWUsXHJcbiAgICAgICAgdHlwZTogcHJvamVjdERhdGEucHJvamVjdC5Qcm9qZWN0U2NvcGUudmFsdWUsXHJcbiAgICAgICAgY3VzdG9tZXI6IHByb2plY3REYXRhLnBvcS5jdXN0b21lcklkLFxyXG4gICAgICAgIHBvcTogcHJvamVjdERhdGEucG9xLmlkLFxyXG4gICAgICAgIGdyYW5kVG90YWw6IHByb2plY3REYXRhLnBvcS5ncmFuZHRvdGFsLFxyXG4gICAgICAgIHNoaXBwaW5nQWRkcmVzczogcHJvamVjdERhdGEucG9xLnNoaXBwaW5nQWRkcmVzcyxcclxuICAgICAgICBzaGlwcGluZ2Nvc3Q6IHByb2plY3REYXRhLnBvcS5zaGlwcGluZ2Nvc3QsXHJcbiAgICAgICAgb3RoZXJjb3N0OiBwcm9qZWN0RGF0YS5wb3Eub3RoZXJjb3N0LFxyXG4gICAgICAgIHZhdDogcHJvamVjdERhdGEucG9xLnZhdCxcclxuICAgICAgICBwcm9kdWN0VG90YWxDb3N0OiBwcm9qZWN0RGF0YS5wb3EucHJvZHVjdFRvdGFsQ29zdCxcclxuICAgICAgICBzdWJ0b3RhbDogcHJvamVjdERhdGEucG9xLnN1YnRvdGFsLFxyXG4gICAgICAgIHRvdGFsZGlzY291bnQ6IHByb2plY3REYXRhLnBvcS50b3RhbGRpc2NvdW50LFxyXG4gICAgICAgIHByb2ZpdDogcHJvamVjdERhdGEucG9xLnByb2ZpdCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcm9qZWN0cycsIHByb2plY3RJbnB1dClcclxuICAgICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgcHJvZHVjdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBwcm9qZWN0RGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICBwcm9qZWN0OiByZXNwLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5wcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgIHFudHk6IGl0ZW0ucW50eSxcclxuICAgICAgICAgICAgICBFbmRVc2VyUHJpY2U6IGl0ZW0uZW5kdXNlcnByaWNlLFxyXG4gICAgICAgICAgICAgIFNhbGVQcmljZTogaXRlbS5zYWxlcHJpY2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcm9qZWN0LWRldGFpbHMnLCBwcm9qZWN0RGV0YWlscylcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1Byb2plY3QgY3JlYXRlZCBzdWNjZXNzZnVsbHkuJywge1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ0Vycm9yIGNyZWF0aW5nIG5ldyBQcm9qZWN0LicsIHtcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdFcnJvciBjcmVhdGluZyBuZXcgUHJvamVjdC4nLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvcHJvamVjdHMnKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHNldEVycm9yKCdzdWJtaXRFcnJvcicsIHtcclxuICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UmV2aWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9