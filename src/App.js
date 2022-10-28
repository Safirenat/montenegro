import React from "react";
import "./App.scss";
import { Main } from "./components/Main/Main";
import { Wooden } from "../src/components/Catalog/Wooden";
import { Route, Routes } from "react-router-dom";
import { Glass } from "./components/Catalog/Glass";
import { Combined } from "./components/Catalog/Combined";
import { Window } from "./components/Catalog/Window";
import { Furniture } from "./components/Catalog/Furniture";
import { Accessories } from "./components/Catalog/Accessories";
import { Info } from "./components/Info/Info";

export const App = () => {
	// useEffect(() => {
	//   document.title = "Safin_Renat"
	// }, [])

	return (
		<Routes>
			<Route index element={<Main />} />
			<Route element={<Wooden />} path="/wooden/" />
			<Route element={<Glass />} path="/glass/" />
			<Route element={<Combined />} path="/combined/" />
			<Route element={<Window />} path="/window/" />
			<Route element={<Furniture />} path="/furniture/" />
			<Route element={<Accessories />} path="/accessories/" />
			<Route element={<Info />} path="/info/" />



            
			{/* <Route element={<Card />} path="/card/" /> */}

			{/* <Route element={<LoginPage />} path="/login" />
          <Route element={<Secure />} path="/safety/" />
          <Route element={<Data />} path="/data/" />
          <Route element={<Rates />} path="/rates/" />
          <Route element={<RestorePage />} path="/restore" />
          <Route element={<SignupPage />} path="/signup" />
          <Route element={<NotFound />} path="/notfound" />
          <Route path="*" element={<Navigate to="/notfound" />} />

          <Route
              path="/dashboard/*"
              element={
                  <RequireAuth>
                      <Dashboard />
                  </RequireAuth>
              }
          />

          <Route element={<SocialSignUpPage />} path="/social-signup" />

          <Route element={<InvoicePage />} path="/invoice/:invoiceId" />

          <Route
              element={<InvoicePage />}
              path="/invoice/:invoiceId/status"
          />

          <Route path="/dashboard/*" element={<Dashboard />} /> */}
		</Routes>
	);
};
