
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext.jsx"

import DefaultLayout from "./pages/DefaultLayout.jsx"
import HomePage from "./pages/Homepage.jsx"
import About from "./pages/About.jsx"
import Contacts from "./pages/Contacts.jsx"
import Books from "./pages/Books.jsx"
import Details from "./pages/Details.jsx"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout} >
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={About} />
            <Route path="/contacts" Component={Contacts} />
            <Route path="/books" >
              <Route index Component={Books} />
              <Route path=":id" Component={Details} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
