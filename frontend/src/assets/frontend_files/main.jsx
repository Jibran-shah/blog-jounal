const StrictMode = __vite__cjsImport0_react["StrictMode"];const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=d759050e";
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=d759050e";
import { CssBaseline, ThemeProvider } from "/node_modules/.vite/deps/@mui_material.js?v=d759050e";
import { RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=d759050e";
import Router from "/src/Router.jsx?t=1794682218822";
import theme from "/src/theme.js";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=d759050e";
import "/src/global.styles.css";
var _jsxFileName = "D:/work/WebDev/LawFirm/frontend/src/main.jsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d759050e";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(/* @__PURE__ */ _jsxDEV(StrictMode, { children: [/* @__PURE__ */ _jsxDEV(CssBaseline, {}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 14,
	columnNumber: 5
}, this), /* @__PURE__ */ _jsxDEV(ThemeProvider, {
	theme,
	children: /* @__PURE__ */ _jsxDEV(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ _jsxDEV(RouterProvider, { router: Router }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 7
	}, this)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 15,
	columnNumber: 5
}, this)] }, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 13,
	columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxhQUFhLHFCQUFxQjtBQUMzQyxTQUFTLHNCQUFzQjtBQUMvQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsYUFBYSwyQkFBMEI7QUFDaEQsT0FBTzs7O0FBRVAsTUFBTSxjQUFjLElBQUksWUFBWTtBQUVwQyxXQUFXLFNBQVMsZUFBZSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQzFDLHdCQUFDLFlBQUQsYUFDRSx3QkFBQyxhQUFELENBQWE7Ozs7VUFDYix3QkFBQyxlQUFEO0NBQXNCO1dBQ3BCLHdCQUFDLHFCQUFEO0VBQXFCLFFBQVE7WUFDM0Isd0JBQUMsZ0JBQUQsRUFBZ0IsUUFBUSxPQUFROzs7OztDQUNiOzs7OztBQUNSOzs7O1FBQ0w7Ozs7UUFDZCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcbmltcG9ydCB7IENzc0Jhc2VsaW5lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCB7IFJvdXRlclByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9Sb3V0ZXInXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSdcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCJcbmltcG9ydCBcIi4vZ2xvYmFsLnN0eWxlcy5jc3NcIlxuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgPENzc0Jhc2VsaW5lLz5cbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e1JvdXRlcn0vPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgPC9TdHJpY3RNb2RlPixcbilcbiJdfQ==