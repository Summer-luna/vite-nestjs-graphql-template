import { SettingsProvider } from '@context/setting.context'
import { GraphqlProvider } from '@graphql/graphql-provider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Paths } from '@constants/paths'

function App() {
  return (
    <Router>
      <SettingsProvider>
        <GraphqlProvider>
            <Routes>
              <Route path={Paths.ADMIN} >
              </Route>
            </Routes>
        </GraphqlProvider>
      </SettingsProvider>
    </Router>
  )
}

export default App
