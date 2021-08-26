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
        shippingaddress: projectData.poq.shippingAddress,
        shippingcost: projectData.poq.shippingcost,
        othercost: projectData.poq.othercost,
        vat: projectData.poq.vat,
        productTotalCost: projectData.poq.productTotalCost,
        subtotal: projectData.poq.subtotal,
        totalDiscount: projectData.poq.totaldiscount,
        profit: projectData.poq.profit
      };
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('http://localhost:1337/projects', projectInput).then(function (resp) {
        products.map(function (item) {
          var projectDetails = {
            project: resp.data.id,
            product: item.product.id,
            qnty: item.qnty,
            EndUserPrice: item.enduserprice,
            SalePrice: item.saleprice,
            saleprecentage: item.salepercentage
          };
          axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('http://localhost:1337/project-details', projectDetails)["catch"](function () {
            enqueueSnackbar('Error creating new Project.', {
              variant: 'error'
            });
          });
        });
        router.push('/projects');
        enqueueSnackbar('Project created successfully.', {
          variant: 'success'
        });
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvY3JlYXRlL1Byb2plY3RSZXZpZXcuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRhdGVQaWNrZXIiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsIlByb2plY3RSZXZpZXciLCJjbGFzc05hbWUiLCJwcm9qZWN0RGF0YSIsIm9uQmFjayIsIm9uTmV4dCIsInJlc3QiLCJSZWFjdCIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsImlzTW91bnRlZFJlZiIsInVzZUlzTW91bnRlZFJlZiIsImdldFByb2R1Y3RzIiwidXNlQ2FsbGJhY2siLCJheGlvcyIsImdldCIsInBvcSIsImlkIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwidXNlRWZmZWN0IiwibWV0aG9kcyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsImlzU3VibWl0dGluZyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwiY2xzeCIsInByb2plY3RJbnB1dCIsIm5hbWUiLCJwcm9qZWN0IiwicHJvamVjdE5hbWUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwic3RhdHVzIiwicHJvamVjdFN0YXR1cyIsInZhbHVlIiwidHlwZSIsIlByb2plY3RTY29wZSIsImN1c3RvbWVyIiwiY3VzdG9tZXJJZCIsImdyYW5kVG90YWwiLCJncmFuZHRvdGFsIiwic2hpcHBpbmdhZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdjb3N0Iiwib3RoZXJjb3N0IiwidmF0IiwicHJvZHVjdFRvdGFsQ29zdCIsInN1YnRvdGFsIiwidG90YWxEaXNjb3VudCIsInRvdGFsZGlzY291bnQiLCJwcm9maXQiLCJwb3N0IiwidGhlbiIsInJlc3AiLCJtYXAiLCJpdGVtIiwicHJvamVjdERldGFpbHMiLCJwcm9kdWN0IiwicW50eSIsIkVuZFVzZXJQcmljZSIsImVuZHVzZXJwcmljZSIsIlNhbGVQcmljZSIsInNhbGVwcmljZSIsInNhbGVwcmVjZW50YWdlIiwic2FsZXBlcmNlbnRhZ2UiLCJ2YXJpYW50IiwicHVzaCIsImVyciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUd2Q0MsY0FBVSxFQUFFO0FBQ1YsZUFBUztBQUNQQyxrQkFBVSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBREw7QUFEQztBQUgyQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVNBLElBQU1DLGdCQUFnQixHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CLEVBQW5CLENBQXpCOztBQUVBLFNBQVNDLGFBQVQsT0FNRztBQUFBOztBQUFBLE1BTERDLFNBS0MsUUFMREEsU0FLQztBQUFBLE1BSkRDLFdBSUMsUUFKREEsV0FJQztBQUFBLHlCQUhEQyxNQUdDO0FBQUEsTUFIREEsTUFHQyw0QkFIUSxZQUFNLENBQUUsQ0FHaEI7QUFBQSx5QkFGREMsTUFFQztBQUFBLE1BRkRBLE1BRUMsNEJBRlEsWUFBTSxDQUFFLENBRWhCO0FBQUEsTUFERUMsSUFDRjs7QUFBQSx3QkFDK0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRC9CO0FBQUE7QUFBQSxN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RSxFQWtCTGEsd0Q7OztLQTdCVDdCLGE7QUFrSU1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL2NyZWF0ZS42NzQyMmVkZmY5Y2RmNWU3MmUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcblxyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcclxuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBSZXN1bHRzIGZyb20gJ3NyYy9jb21wb25lbnRzL3BhZ2VzL3Byb2plY3RzL2NyZWF0ZS9SZXN1bHQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgdXNlSXNNb3VudGVkUmVmIGZyb20gJ3NyYy9ob29rcy91c2VJc01vdW50ZWRSZWYnO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG5cclxuICBkYXRlUGlja2VyOiB7XHJcbiAgICAnJiArICYnOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7fSk7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0UmV2aWV3KHtcclxuICBjbGFzc05hbWUsXHJcbiAgcHJvamVjdERhdGEsXHJcbiAgb25CYWNrID0gKCkgPT4ge30sXHJcbiAgb25OZXh0ID0gKCkgPT4ge30sXHJcbiAgLi4ucmVzdFxyXG59KSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IGlzTW91bnRlZFJlZiA9IHVzZUlzTW91bnRlZFJlZigpO1xyXG4gIGNvbnN0IGdldFByb2R1Y3RzID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHByb2plY3REYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3BvcWRldGFpbHM/X3doZXJlW3BvcV09JHtwcm9qZWN0RGF0YS5wb3EuaWR9YCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJvZHVjdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKHtcclxuICAgIG1vZGU6ICdhbGwnLFxyXG4gICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpLFxyXG4gICAgZGVmYXVsdFZhbHVlczoge30sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGVycm9ycyxcclxuICAgIHNldEVycm9yLFxyXG4gICAgZm9ybVN0YXRlOiB7IGlzU3VibWl0dGluZyB9LFxyXG4gIH0gPSBtZXRob2RzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVByb3ZpZGVyIHsuLi5tZXRob2RzfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICAgIHsuLi5yZXN0fT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICBQcm9qZWN0IFJldmlld1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICBQbGVhc2UgcmV2aWV3IGFsbCBwcm9kdWN0cyBhdHRhY2hlZCB0byB0aGlzIHByb2plY3QgYmVmb3JlIHNhdmVcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFJlc3VsdHMgcXVlcnk9e3Byb2R1Y3RzfSAvPlxyXG5cclxuICAgICAgICA8Qm94IG10PXs2fSBkaXNwbGF5PVwiZmxleFwiPlxyXG4gICAgICAgICAge29uQmFjayAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25CYWNrfSBzaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgIENvbXBsZXRlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Gb3JtUHJvdmlkZXI+XHJcbiAgKTtcclxuICBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IHtcclxuICAgICAgICBuYW1lOiBwcm9qZWN0RGF0YS5wcm9qZWN0LnByb2plY3ROYW1lLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogcHJvamVjdERhdGEucHJvamVjdC5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogcHJvamVjdERhdGEucHJvamVjdC5lbmREYXRlLFxyXG4gICAgICAgIHN0YXR1czogcHJvamVjdERhdGEucHJvamVjdC5wcm9qZWN0U3RhdHVzLnZhbHVlLFxyXG4gICAgICAgIHR5cGU6IHByb2plY3REYXRhLnByb2plY3QuUHJvamVjdFNjb3BlLnZhbHVlLFxyXG4gICAgICAgIGN1c3RvbWVyOiBwcm9qZWN0RGF0YS5wb3EuY3VzdG9tZXJJZCxcclxuICAgICAgICBwb3E6IHByb2plY3REYXRhLnBvcS5pZCxcclxuICAgICAgICBncmFuZFRvdGFsOiBwcm9qZWN0RGF0YS5wb3EuZ3JhbmR0b3RhbCxcclxuICAgICAgICBzaGlwcGluZ2FkZHJlc3M6IHByb2plY3REYXRhLnBvcS5zaGlwcGluZ0FkZHJlc3MsXHJcbiAgICAgICAgc2hpcHBpbmdjb3N0OiBwcm9qZWN0RGF0YS5wb3Euc2hpcHBpbmdjb3N0LFxyXG4gICAgICAgIG90aGVyY29zdDogcHJvamVjdERhdGEucG9xLm90aGVyY29zdCxcclxuICAgICAgICB2YXQ6IHByb2plY3REYXRhLnBvcS52YXQsXHJcbiAgICAgICAgcHJvZHVjdFRvdGFsQ29zdDogcHJvamVjdERhdGEucG9xLnByb2R1Y3RUb3RhbENvc3QsXHJcbiAgICAgICAgc3VidG90YWw6IHByb2plY3REYXRhLnBvcS5zdWJ0b3RhbCxcclxuICAgICAgICB0b3RhbERpc2NvdW50OiBwcm9qZWN0RGF0YS5wb3EudG90YWxkaXNjb3VudCxcclxuICAgICAgICBwcm9maXQ6IHByb2plY3REYXRhLnBvcS5wcm9maXQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjEzMzcvcHJvamVjdHMnLCBwcm9qZWN0SW5wdXQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICAgIHByb2R1Y3RzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcHJvamVjdERldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgcHJvamVjdDogcmVzcC5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0ucHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICBxbnR5OiBpdGVtLnFudHksXHJcbiAgICAgICAgICAgICAgRW5kVXNlclByaWNlOiBpdGVtLmVuZHVzZXJwcmljZSxcclxuICAgICAgICAgICAgICBTYWxlUHJpY2U6IGl0ZW0uc2FsZXByaWNlLFxyXG4gICAgICAgICAgICAgIHNhbGVwcmVjZW50YWdlOiBpdGVtLnNhbGVwZXJjZW50YWdlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjEzMzcvcHJvamVjdC1kZXRhaWxzJywgcHJvamVjdERldGFpbHMpXHJcbiAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVucXVldWVTbmFja2JhcignRXJyb3IgY3JlYXRpbmcgbmV3IFByb2plY3QuJywge1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvcHJvamVjdHMnKTtcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcignUHJvamVjdCBjcmVhdGVkIHN1Y2Nlc3NmdWxseS4nLCB7XHJcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWNjZXNzJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgc2V0RXJyb3IoJ3N1Ym1pdEVycm9yJywge1xyXG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RSZXZpZXc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=