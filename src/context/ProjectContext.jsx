import React from 'react'
import { createContext } from 'react';

export const projectProfileContext = createContext();

const ProjectContext = (props) => {
    const value = {};

    return (
        <div>
            <projectProfileContext.Provider value={value}>
                {props.children}
            </projectProfileContext.Provider>
        </div>
    )   
}

export default ProjectContext
