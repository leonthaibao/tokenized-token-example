/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/agreement/query";
exports.ids = ["pages/api/agreement/query"];
exports.modules = {

/***/ "./pages/api/agreement/query/index.js":
/*!********************************************!*\
  !*** ./pages/api/agreement/query/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./pages/api/config.js\");\n\n\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    try {\n      let postData = {\n        app_id: _config__WEBPACK_IMPORTED_MODULE_3__.configZLP.app_id,\n        app_trans_id: req.body.appTransID,\n        req_date: Date.now() // milliseconds\n\n      };\n      let data = postData.app_id + \"|\" + postData.app_trans_id + \"|\" + postData.req_date; // app_id|app_trans_id|req_date\n\n      postData.mac = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().HmacSHA256(data, _config__WEBPACK_IMPORTED_MODULE_3__.configZLP.key1).toString();\n      let postConfig = {\n        method: 'post',\n        url: _config__WEBPACK_IMPORTED_MODULE_3__.configZLP.zlp_endpoint + _config__WEBPACK_IMPORTED_MODULE_3__.ZLP_API_PATH.AGREEMENT_QUERY,\n        headers: {\n          'Content-Type': 'application/x-www-form-urlencoded'\n        },\n        data: qs__WEBPACK_IMPORTED_MODULE_2___default().stringify(postData)\n      };\n      axios__WEBPACK_IMPORTED_MODULE_0___default()(postConfig).then(function (response) {\n        res.status(200).json(response.data);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    } catch (err) {\n      res.status(500).json({\n        statusCode: 500,\n        message: err.message\n      });\n    }\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method Not Allowed');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWlja3N0YXJ0LW5leHRqcy1keW5hbWljLXFyY29kZS8uL3BhZ2VzL2FwaS9hZ3JlZW1lbnQvcXVlcnkvaW5kZXguanM/OWFkOCJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicG9zdERhdGEiLCJhcHBfaWQiLCJjb25maWdaTFAiLCJhcHBfdHJhbnNfaWQiLCJib2R5IiwiYXBwVHJhbnNJRCIsInJlcV9kYXRlIiwiRGF0ZSIsIm5vdyIsImRhdGEiLCJtYWMiLCJDcnlwdG9KUyIsInRvU3RyaW5nIiwicG9zdENvbmZpZyIsInVybCIsIlpMUF9BUElfUEFUSCIsImhlYWRlcnMiLCJxcyIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTtBQUNGLFVBQUlDLFFBQVEsR0FBRztBQUNiQyxjQUFNLEVBQUVDLHFEQURLO0FBRWJDLG9CQUFZLEVBQUVOLEdBQUcsQ0FBQ08sSUFBSixDQUFTQyxVQUZWO0FBR2JDLGdCQUFRLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxFQUhHLENBR1M7O0FBSFQsT0FBZjtBQU1BLFVBQUlDLElBQUksR0FBR1QsUUFBUSxDQUFDQyxNQUFULEdBQWtCLEdBQWxCLEdBQXdCRCxRQUFRLENBQUNHLFlBQWpDLEdBQWdELEdBQWhELEdBQXNESCxRQUFRLENBQUNNLFFBQTFFLENBUEUsQ0FPa0Y7O0FBQ3BGTixjQUFRLENBQUNVLEdBQVQsR0FBZUMsMkRBQUEsQ0FBb0JGLElBQXBCLEVBQTBCUCxtREFBMUIsRUFBMENVLFFBQTFDLEVBQWY7QUFHQSxVQUFJQyxVQUFVLEdBQUc7QUFDZmQsY0FBTSxFQUFFLE1BRE87QUFFZmUsV0FBRyxFQUFFWiwyREFBQSxHQUF5QmEsaUVBRmY7QUFHZkMsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCO0FBRFQsU0FITTtBQU1mUCxZQUFJLEVBQUVRLG1EQUFBLENBQWFqQixRQUFiO0FBTlMsT0FBakI7QUFTQWtCLGtEQUFLLENBQUNMLFVBQUQsQ0FBTCxDQUNDTSxJQURELENBQ00sVUFBVUMsUUFBVixFQUFvQjtBQUN4QnRCLFdBQUcsQ0FBQ3VCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsUUFBUSxDQUFDWCxJQUE5QjtBQUNELE9BSEQsRUFJQ2MsS0FKRCxDQUlPLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsT0FORDtBQU9ELEtBM0JELENBMkJFLE9BQU9HLEdBQVAsRUFBWTtBQUNaN0IsU0FBRyxDQUFDdUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNNLGtCQUFVLEVBQUUsR0FBYjtBQUFrQkMsZUFBTyxFQUFFRixHQUFHLENBQUNFO0FBQS9CLE9BQXJCO0FBQ0Q7QUFDRixHQS9CRCxNQStCTztBQUNML0IsT0FBRyxDQUFDZ0MsU0FBSixDQUFjLE9BQWQsRUFBdUIsTUFBdkI7QUFDQWhDLE9BQUcsQ0FBQ3VCLE1BQUosQ0FBVyxHQUFYLEVBQWdCVSxHQUFoQixDQUFvQixvQkFBcEI7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FncmVlbWVudC9xdWVyeS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDcnlwdG9KUyBmcm9tIFwiY3J5cHRvLWpzXCI7XG5pbXBvcnQgcXMgZnJvbSBcInFzXCI7XG5pbXBvcnQge2NvbmZpZ1pMUCwgWkxQX0FQSV9QQVRIfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGFwcF9pZDogY29uZmlnWkxQLmFwcF9pZCxcbiAgICAgICAgYXBwX3RyYW5zX2lkOiByZXEuYm9keS5hcHBUcmFuc0lELFxuICAgICAgICByZXFfZGF0ZTogRGF0ZS5ub3coKSwgLy8gbWlsbGlzZWNvbmRzXG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhID0gcG9zdERhdGEuYXBwX2lkICsgXCJ8XCIgKyBwb3N0RGF0YS5hcHBfdHJhbnNfaWQgKyBcInxcIiArIHBvc3REYXRhLnJlcV9kYXRlOyAvLyBhcHBfaWR8YXBwX3RyYW5zX2lkfHJlcV9kYXRlXG4gICAgICBwb3N0RGF0YS5tYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjU2KGRhdGEsIGNvbmZpZ1pMUC5rZXkxKS50b1N0cmluZygpO1xuXG5cbiAgICAgIGxldCBwb3N0Q29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiBjb25maWdaTFAuemxwX2VuZHBvaW50ICsgWkxQX0FQSV9QQVRILkFHUkVFTUVOVF9RVUVSWSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBxcy5zdHJpbmdpZnkocG9zdERhdGEpXG4gICAgICB9O1xuXG4gICAgICBheGlvcyhwb3N0Q29uZmlnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIE5vdCBBbGxvd2VkJyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/agreement/query/index.js\n");

/***/ }),

/***/ "./pages/api/config.js":
/*!*****************************!*\
  !*** ./pages/api/config.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configZLP\": function() { return /* binding */ configZLP; },\n/* harmony export */   \"ZLP_API_PATH\": function() { return /* binding */ ZLP_API_PATH; },\n/* harmony export */   \"API_ROUTES\": function() { return /* binding */ API_ROUTES; }\n/* harmony export */ });\nconst configZLP = {\n  app_id: \"2554\",\n  key1: \"sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn\",\n  key2: \"trMrHtvjo6myautxDUiAcYsVtaeQ8nhf\",\n  zlp_endpoint: \"https://sb-openapi.zalopay.vn/v2\",\n  host: \"http://localhost:3000\"\n};\nconst ZLP_API_PATH = {\n  CREATE_ORDER: \"/create\",\n  QUERY_ORDER: \"/query\",\n  AGREEMENT_BINDING: \"/agreement/bind\",\n  AGREEMENT_UNBINDING: \"/agreement/unbind\",\n  AGREEMENT_QUERY: \"/agreement/query\",\n  AGREEMENT_BALANCE: \"/agreement/balance\",\n  AGREEMENT_PAY: \"/agreement/pay\",\n  AGREEMENT_QUERY_USER: \"/agreement/query_user\"\n};\nconst API_ROUTES = {\n  CREATE_ORDER: \"/api/create\",\n  QUERY_ORDER: \"/api/query\",\n  AGREEMENT_BINDING: \"/api/agreement/bind\",\n  AGREEMENT_UNBINDING: \"/api/agreement/unbind\",\n  AGREEMENT_QUERY: \"/api/agreement/query\",\n  AGREEMENT_BALANCE: \"/api/agreement/balance\",\n  AGREEMENT_PAY: \"/api/agreement/pay\",\n  AGREEMENT_QUERY_USER: \"/api/agreement/query_user\",\n  AGREEMENT_CALLBACK: \"/api/callback/agreement\",\n  CREATE_ORDER_CALLBACK: \"/api/callback/order\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWlja3N0YXJ0LW5leHRqcy1keW5hbWljLXFyY29kZS8uL3BhZ2VzL2FwaS9jb25maWcuanM/ZjZjNCJdLCJuYW1lcyI6WyJjb25maWdaTFAiLCJhcHBfaWQiLCJwcm9jZXNzIiwia2V5MSIsImtleTIiLCJ6bHBfZW5kcG9pbnQiLCJob3N0IiwiTUVSQ0hBTlRfRU5EUE9JTlQiLCJaTFBfQVBJX1BBVEgiLCJDUkVBVEVfT1JERVIiLCJRVUVSWV9PUkRFUiIsIkFHUkVFTUVOVF9CSU5ESU5HIiwiQUdSRUVNRU5UX1VOQklORElORyIsIkFHUkVFTUVOVF9RVUVSWSIsIkFHUkVFTUVOVF9CQUxBTkNFIiwiQUdSRUVNRU5UX1BBWSIsIkFHUkVFTUVOVF9RVUVSWV9VU0VSIiwiQVBJX1JPVVRFUyIsIkFHUkVFTUVOVF9DQUxMQkFDSyIsIkNSRUFURV9PUkRFUl9DQUxMQkFDSyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsU0FBUyxHQUFHO0FBQ3ZCQyxRQUFNLEVBQUVDLE1BRGU7QUFFdkJDLE1BQUksRUFBRUQsa0NBRmlCO0FBR3ZCRSxNQUFJLEVBQUVGLGtDQUhpQjtBQUl2QkcsY0FBWSxFQUFFSCxrQ0FKUztBQUt2QkksTUFBSSxFQUFFSix1QkFBNkJLO0FBTFosQ0FBbEI7QUFRQSxNQUFNQyxZQUFZLEdBQUc7QUFDMUJDLGNBQVksRUFBRSxTQURZO0FBRTFCQyxhQUFXLEVBQUUsUUFGYTtBQUcxQkMsbUJBQWlCLEVBQUUsaUJBSE87QUFJMUJDLHFCQUFtQixFQUFFLG1CQUpLO0FBSzFCQyxpQkFBZSxFQUFFLGtCQUxTO0FBTTFCQyxtQkFBaUIsRUFBRSxvQkFOTztBQU8xQkMsZUFBYSxFQUFFLGdCQVBXO0FBUTFCQyxzQkFBb0IsRUFBRTtBQVJJLENBQXJCO0FBV0EsTUFBTUMsVUFBVSxHQUFHO0FBQ3hCUixjQUFZLEVBQUUsYUFEVTtBQUV4QkMsYUFBVyxFQUFFLFlBRlc7QUFHeEJDLG1CQUFpQixFQUFFLHFCQUhLO0FBSXhCQyxxQkFBbUIsRUFBRSx1QkFKRztBQUt4QkMsaUJBQWUsRUFBRSxzQkFMTztBQU14QkMsbUJBQWlCLEVBQUUsd0JBTks7QUFPeEJDLGVBQWEsRUFBRSxvQkFQUztBQVF4QkMsc0JBQW9CLEVBQUUsMkJBUkU7QUFTeEJFLG9CQUFrQixFQUFFLHlCQVRJO0FBVXhCQyx1QkFBcUIsRUFBRTtBQVZDLENBQW5CIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb25maWdaTFAgPSB7XG4gIGFwcF9pZDogcHJvY2Vzcy5lbnYuWkxQX01FUkNIQU5UX0FQUF9JRCxcbiAga2V5MTogcHJvY2Vzcy5lbnYuWkxQX01FUkNIQU5UX0tFWTEsXG4gIGtleTI6IHByb2Nlc3MuZW52LlpMUF9NRVJDSEFOVF9LRVkyLFxuICB6bHBfZW5kcG9pbnQ6IHByb2Nlc3MuZW52LlpMUF9NRVJDSEFOVF9FTkRQT0lOVCxcbiAgaG9zdDogcHJvY2Vzcy5lbnYuTUVSQ0hBTlRfRU5EUE9JTlRcbn07XG5cbmV4cG9ydCBjb25zdCBaTFBfQVBJX1BBVEggPSB7XG4gIENSRUFURV9PUkRFUjogXCIvY3JlYXRlXCIsXG4gIFFVRVJZX09SREVSOiBcIi9xdWVyeVwiLFxuICBBR1JFRU1FTlRfQklORElORzogXCIvYWdyZWVtZW50L2JpbmRcIixcbiAgQUdSRUVNRU5UX1VOQklORElORzogXCIvYWdyZWVtZW50L3VuYmluZFwiLFxuICBBR1JFRU1FTlRfUVVFUlk6IFwiL2FncmVlbWVudC9xdWVyeVwiLFxuICBBR1JFRU1FTlRfQkFMQU5DRTogXCIvYWdyZWVtZW50L2JhbGFuY2VcIixcbiAgQUdSRUVNRU5UX1BBWTogXCIvYWdyZWVtZW50L3BheVwiLFxuICBBR1JFRU1FTlRfUVVFUllfVVNFUjogXCIvYWdyZWVtZW50L3F1ZXJ5X3VzZXJcIixcbn1cblxuZXhwb3J0IGNvbnN0IEFQSV9ST1VURVMgPSB7XG4gIENSRUFURV9PUkRFUjogXCIvYXBpL2NyZWF0ZVwiLFxuICBRVUVSWV9PUkRFUjogXCIvYXBpL3F1ZXJ5XCIsXG4gIEFHUkVFTUVOVF9CSU5ESU5HOiBcIi9hcGkvYWdyZWVtZW50L2JpbmRcIixcbiAgQUdSRUVNRU5UX1VOQklORElORzogXCIvYXBpL2FncmVlbWVudC91bmJpbmRcIixcbiAgQUdSRUVNRU5UX1FVRVJZOiBcIi9hcGkvYWdyZWVtZW50L3F1ZXJ5XCIsXG4gIEFHUkVFTUVOVF9CQUxBTkNFOiBcIi9hcGkvYWdyZWVtZW50L2JhbGFuY2VcIixcbiAgQUdSRUVNRU5UX1BBWTogXCIvYXBpL2FncmVlbWVudC9wYXlcIixcbiAgQUdSRUVNRU5UX1FVRVJZX1VTRVI6IFwiL2FwaS9hZ3JlZW1lbnQvcXVlcnlfdXNlclwiLFxuICBBR1JFRU1FTlRfQ0FMTEJBQ0s6IFwiL2FwaS9jYWxsYmFjay9hZ3JlZW1lbnRcIixcbiAgQ1JFQVRFX09SREVSX0NBTExCQUNLOiBcIi9hcGkvY2FsbGJhY2svb3JkZXJcIixcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/config.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("crypto-js");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/agreement/query/index.js"));
module.exports = __webpack_exports__;

})();