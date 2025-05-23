import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="min-h-screen grid grid-cols-[250px_1fr] bg-gray-50">
      <Sidebar  />
      <div className="flex flex-col">
        <Header />
        <main className="p-6 space-y-6">
        </main>
      </div>
    </div>
  )
}

export default App
