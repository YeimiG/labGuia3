import { Link } from 'react-route-dom'
import { Children, ReactNode } from 'react'

interface LayoutProps{
    children: ReactNode
}
const Layout= ({children}: LayoutProps)=>{

return(
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-white">
    <nav className="bg-red-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-black-600 tracking-tight"> Recetas de Pizzas</h1>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="text-white-700 hover:text-gray-600 transition-colors">
            Inicio
          </Link>
          <Link to="/favorites" className="text-white-700 hover:text-gray-600 transition-colors">
            Mis Favoritas
          </Link>
        </div>
      </div>
    </nav>

    <main className="container mx-auto p-4">{children}</main>
    <footer className="bg-red-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>Recetas de pizzas</p>
        <p>Creado por: <span className="font-semibold">Yeimi Sucely García Aldana</span></p>
        <p>Código de estudiante: <span className="font-mono">GA22-I04-001</span></p>
      </div>
    </footer>
  </div>

)


}
export default Layout