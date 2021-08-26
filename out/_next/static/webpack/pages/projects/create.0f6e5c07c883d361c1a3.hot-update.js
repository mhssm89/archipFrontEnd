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
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = Object(F_archip_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var projectInput;
      return F_archip_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              projectInput = {
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
                othercost: projectData.poq,
                vat: projectData.poq,
                producttotalcost: projectData.poq,
                subtotal: projectData.poq,
                totaldiscount: projectData.poq,
                profit: projectData.poq
              };
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('http://localhost:1337/projects', projectInput).then(function (resp) {
                products.map(function (item) {
                  var projectDetails = {
                    project: resp.data.id,
                    product: item.product.id,
                    qnty: item.qnty,
                    EndUserPrice: item.product.price,
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

            case 4:
              router.push('/projects');
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              setError('submitError', {
                type: 'submit',
                message: _context2.t0.message
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return _onSubmit.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdHMvY3JlYXRlL1Byb2plY3RSZXZpZXcuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRhdGVQaWNrZXIiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInZhbGlkYXRpb25TY2hlbWEiLCJ5dXAiLCJzaGFwZSIsIlByb2plY3RSZXZpZXciLCJjbGFzc05hbWUiLCJwcm9qZWN0RGF0YSIsIm9uQmFjayIsIm9uTmV4dCIsInJlc3QiLCJSZWFjdCIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsImlzTW91bnRlZFJlZiIsInVzZUlzTW91bnRlZFJlZiIsImdldFByb2R1Y3RzIiwidXNlQ2FsbGJhY2siLCJheGlvcyIsImdldCIsInBvcSIsImlkIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwidXNlRWZmZWN0IiwibWV0aG9kcyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsImlzU3VibWl0dGluZyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwiY2xzeCIsInByb2plY3RJbnB1dCIsIm5hbWUiLCJwcm9qZWN0IiwicHJvamVjdE5hbWUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwic3RhdHVzIiwicHJvamVjdFN0YXR1cyIsInZhbHVlIiwidHlwZSIsIlByb2plY3RTY29wZSIsImN1c3RvbWVyIiwiY3VzdG9tZXJJZCIsImdyYW5kVG90YWwiLCJncmFuZHRvdGFsIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdjb3N0Iiwib3RoZXJjb3N0IiwidmF0IiwicHJvZHVjdHRvdGFsY29zdCIsInN1YnRvdGFsIiwidG90YWxkaXNjb3VudCIsInByb2ZpdCIsInBvc3QiLCJ0aGVuIiwicmVzcCIsIm1hcCIsIml0ZW0iLCJwcm9qZWN0RGV0YWlscyIsInByb2R1Y3QiLCJxbnR5IiwiRW5kVXNlclByaWNlIiwicHJpY2UiLCJTYWxlUHJpY2UiLCJzYWxlcHJpY2UiLCJ2YXJpYW50IiwicHVzaCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUd2Q0MsY0FBVSxFQUFFO0FBQ1YsZUFBUztBQUNQQyxrQkFBVSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBREw7QUFEQztBQUgyQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVNBLElBQU1DLGdCQUFnQixHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CLEVBQW5CLENBQXpCOztBQUVBLFNBQVNDLGFBQVQsT0FNRztBQUFBOztBQUFBLE1BTERDLFNBS0MsUUFMREEsU0FLQztBQUFBLE1BSkRDLFdBSUMsUUFKREEsV0FJQztBQUFBLHlCQUhEQyxNQUdDO0FBQUEsTUFIREEsTUFHQyw0QkFIUSxZQUFNLENBQUUsQ0FHaEI7QUFBQSx5QkFGREMsTUFFQztBQUFBLE1BRkRBLE1BRUMsNEJBRlEsWUFBTSxDQUFFLENBRWhCO0FBQUEsTUFERUMsSUFDRjs7QUFBQSx3QkFDK0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRC9CO0FBQUE7QUFBQSxNQUNNQyxRQUROO0FBQUEsTUFDZ0JDLFdBRGhCOztBQUVELE1BQU1DLE9BQU8sR0FBR3BCLFNBQVMsRUFBekI7QUFDQSxNQUFNcUIsTUFBTSxH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UTlFLGE7VUFRU1YsUyxFQUNEc0Isc0QsRUFDYUMsc0QsRUFDUEcsa0UsRUFrQkxhLHdEOzs7S0E3QlQ3QixhO0FBc0lNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9jcmVhdGUuMGY2ZTVjMDdjODgzZDM2MWMxYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5cclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCc7XHJcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgUmVzdWx0cyBmcm9tICdzcmMvY29tcG9uZW50cy9wYWdlcy9wcm9qZWN0cy9jcmVhdGUvUmVzdWx0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHVzZUlzTW91bnRlZFJlZiBmcm9tICdzcmMvaG9va3MvdXNlSXNNb3VudGVkUmVmJztcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7fSxcclxuXHJcbiAgZGF0ZVBpY2tlcjoge1xyXG4gICAgJyYgKyAmJzoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe30pO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdFJldmlldyh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHByb2plY3REYXRhLFxyXG4gIG9uQmFjayA9ICgpID0+IHt9LFxyXG4gIG9uTmV4dCA9ICgpID0+IHt9LFxyXG4gIC4uLnJlc3RcclxufSkge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCBpc01vdW50ZWRSZWYgPSB1c2VJc01vdW50ZWRSZWYoKTtcclxuICBjb25zdCBnZXRQcm9kdWN0cyA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChwcm9qZWN0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3FkZXRhaWxzP193aGVyZVtwb3FdPSR7cHJvamVjdERhdGEucG9xLmlkfWAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBtZXRob2RzID0gdXNlRm9ybSh7XHJcbiAgICBtb2RlOiAnYWxsJyxcclxuICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcih2YWxpZGF0aW9uU2NoZW1hKSxcclxuICAgIGRlZmF1bHRWYWx1ZXM6IHt9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBzZXRFcnJvcixcclxuICAgIGZvcm1TdGF0ZTogeyBpc1N1Ym1pdHRpbmcgfSxcclxuICB9ID0gbWV0aG9kcztcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgICB7Li4ucmVzdH0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgUHJvamVjdCBSZXZpZXdcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgUGxlYXNlIHJldmlldyBhbGwgcHJvZHVjdHMgYXR0YWNoZWQgdG8gdGhpcyBwcm9qZWN0IGJlZm9yZSBzYXZlXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxSZXN1bHRzIHF1ZXJ5PXtwcm9kdWN0c30gLz5cclxuXHJcbiAgICAgICAgPEJveCBtdD17Nn0gZGlzcGxheT1cImZsZXhcIj5cclxuICAgICAgICAgIHtvbkJhY2sgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQmFja30gc2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0gLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICBDb21wbGV0ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRm9ybVByb3ZpZGVyPlxyXG4gICk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSB7XHJcbiAgICAgICAgbmFtZTogcHJvamVjdERhdGEucHJvamVjdC5wcm9qZWN0TmFtZSxcclxuICAgICAgICBzdGFydERhdGU6IHByb2plY3REYXRhLnByb2plY3Quc3RhcnREYXRlLFxyXG4gICAgICAgIGVuZERhdGU6IHByb2plY3REYXRhLnByb2plY3QuZW5kRGF0ZSxcclxuICAgICAgICBzdGF0dXM6IHByb2plY3REYXRhLnByb2plY3QucHJvamVjdFN0YXR1cy52YWx1ZSxcclxuICAgICAgICB0eXBlOiBwcm9qZWN0RGF0YS5wcm9qZWN0LlByb2plY3RTY29wZS52YWx1ZSxcclxuICAgICAgICBjdXN0b21lcjogcHJvamVjdERhdGEucG9xLmN1c3RvbWVySWQsXHJcbiAgICAgICAgcG9xOiBwcm9qZWN0RGF0YS5wb3EuaWQsXHJcbiAgICAgICAgZ3JhbmRUb3RhbDogcHJvamVjdERhdGEucG9xLmdyYW5kdG90YWwsXHJcbiAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBwcm9qZWN0RGF0YS5wb3Euc2hpcHBpbmdBZGRyZXNzLFxyXG4gICAgICAgIHNoaXBwaW5nY29zdDogcHJvamVjdERhdGEucG9xLnNoaXBwaW5nY29zdCxcclxuICAgICAgICBvdGhlcmNvc3Q6IHByb2plY3REYXRhLnBvcSxcclxuICAgICAgICB2YXQ6IHByb2plY3REYXRhLnBvcSxcclxuICAgICAgICBwcm9kdWN0dG90YWxjb3N0OiBwcm9qZWN0RGF0YS5wb3EsXHJcbiAgICAgICAgc3VidG90YWw6IHByb2plY3REYXRhLnBvcSxcclxuICAgICAgICB0b3RhbGRpc2NvdW50OiBwcm9qZWN0RGF0YS5wb3EsXHJcbiAgICAgICAgcHJvZml0OiBwcm9qZWN0RGF0YS5wb3EsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjEzMzcvcHJvamVjdHMnLCBwcm9qZWN0SW5wdXQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICAgIHByb2R1Y3RzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcHJvamVjdERldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgcHJvamVjdDogcmVzcC5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0ucHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICBxbnR5OiBpdGVtLnFudHksXHJcbiAgICAgICAgICAgICAgRW5kVXNlclByaWNlOiBpdGVtLnByb2R1Y3QucHJpY2UsXHJcbiAgICAgICAgICAgICAgU2FsZVByaWNlOiBpdGVtLnNhbGVwcmljZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Byb2plY3QtZGV0YWlscycsIHByb2plY3REZXRhaWxzKVxyXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVucXVldWVTbmFja2JhcignUHJvamVjdCBjcmVhdGVkIHN1Y2Nlc3NmdWxseS4nLCB7XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVucXVldWVTbmFja2JhcignRXJyb3IgY3JlYXRpbmcgbmV3IFByb2plY3QuJywge1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ0Vycm9yIGNyZWF0aW5nIG5ldyBQcm9qZWN0LicsIHsgdmFyaWFudDogJ2Vycm9yJyB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgcm91dGVyLnB1c2goJy9wcm9qZWN0cycpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgc2V0RXJyb3IoJ3N1Ym1pdEVycm9yJywge1xyXG4gICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RSZXZpZXc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=