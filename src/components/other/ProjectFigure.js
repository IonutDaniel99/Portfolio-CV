import React from 'react'

function ProjectFigure({ language, url, image, name, description }) {
    return (
        <figure className="gallery-grid__item category-concept">
            <h4 className="title gallery-grid__title text-center">{name}</h4>
            <div className="gallery-grid__image-wrap">
                <a href={url} target="_blank" rel="noreferrer">
                    <img className="gallery-grid__image cover" src={image} data-zoom="" alt="" />
                </a>
            </div>
            <figcaption className="gallery-grid__caption">
                <h4 className="title gallery-grid__title h5"><small>{language}</small></h4>
                <span className="gallery-grid__category">{description}</span>
            </figcaption>
        </figure>
    )
}

export default ProjectFigure
