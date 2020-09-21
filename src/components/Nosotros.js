import React from 'react';
import {
    Link
} from 'react-router-dom'

const Nosotros = () => {
    return (            
        <div className="max-w-full rounded overflow-hidden flex shadow-lg bg-red-200 bg-opacity-25">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Ahora estás en Nosotros</div>
                <p className="text-gray-700 text-base">
                    El breadcrumb muestra la direccion en donde estás
                </p>
                <p className="text-gray-700 text-base">
                    Para ir a un componente mas "abajo" da <Link to="/nosotros/contacto" className="text-white">click aqui en contacto</Link>
                </p>
                
            </div>
        </div>
     );
}
 
export default Nosotros;