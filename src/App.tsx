import { Sidebar, MobileAppPromo } from '@components'
import { Dashboard } from '@pages'

function App() {
  return (
    <>
      {/* Mobile App Prompt View (visible only on screens smaller than md / 768px) */}
      <div className="md:hidden block w-full h-full">
        <MobileAppPromo />
      </div>

      {/* Standard Application View (visible only on md screens and larger) */}
      <div className="hidden md:flex h-screen bg-bg-main overflow-hidden w-full">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </>
  )
}

export default App
