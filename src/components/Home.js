import React from 'react';

const Home = () => {
    return ( 
        <div className="max-w-full rounded overflow-hidden flex shadow-lg bg-red-200 bg-opacity-25">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Ahora estás en home</div>
                <p className="text-gray-700 text-base">
                Esta practica está hecha con React-router-dom y su hook useLocation para hacer un breadcrum dinamico.
                </p>
                <p className="text-gray-700 text-base">
                También se uso Tailwind para los estilos y los componentes de FontAwesome.
                </p>

            </div>
        </div>
    );
}
 
export default Home;