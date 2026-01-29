import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import counterReducer from "./states/counter.ts"
import upgradesReducer from "./states/upgrades.ts"
import perksReducer from "./states/perks.ts"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    upgrades: upgradesReducer,
    perks: perksReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
