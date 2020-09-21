import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Link,
    useLocation
} from 'react-router-dom'

const Header = () => {
    const [navbarOpen, setNavbarOpen] =useState(false)
    const [direcciones, setDirecciones] = useState([])
    const [locArray, setLocarray] = useState([])
    let location = useLocation()

    const setPath = (loc) => {
        setLocarray([])
        setDirecciones([])

        let arr = loc.split("/")
        arr.shift()
        setLocarray(arr)
        let str = ''
        const dir = arr.map(l => {
            str += `/${l}`
            return str
        })
        setDirecciones(dir)
    }

    useEffect(()=>{
        setPath(location.pathname)
    }, [location])

    return ( 
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-green-500 mb-2">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-no-wrap uppercase text-white"
              to="/"
            >
              Practicando Routing
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon="bars" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-start" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none">
              <li className="nav-item">
                <Link
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                    Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/Nosotros"
                >
                    Nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container flex flex-wrap justify-end mx-auto px-3">
            <ul className="flex  lg:flex-fow list-none">
                {
                    locArray.map((l,i) =>{
                        return (
                        <li className="nav-item" key={i}>
                            <Link 
                                className="px-1 text-xs uppercase font-bold leading-snug text-white"
                                to={direcciones[i]}
                            >
                                / {l}
                            </Link>
                        </li>
                        )
                })}
            </ul>
        </div>
      </nav>
    );
}
 
export default Header;