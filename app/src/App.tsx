import { useSyncExternalStore } from 'react'
import Home from './pages/Home'
import Editor from './pages/Editor'
import Questoes from './pages/Questoes'

const subscribe = (callback: () => void) => {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}
const getSnapshot = () => window.location.hash

export default function App() {
  const currentPath = useSyncExternalStore(subscribe, getSnapshot)

  const path = currentPath.replace('#', '')

  return (
    <>
      {(path === '' || path === '/') && <Home />}
      {(path === 'editor' || path === '/editor') && <Editor />}
      {(path === 'questoes' || path === '/questoes') && <Questoes />}
    </>
  )
}
