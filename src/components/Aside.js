
import { faDiscord, faGithub, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ListItem from './other/ListItem'



function Aside({ data }) {
    return (
        <aside className="col-12 col-md-12 col-xl-3 ">
            <div className="sidebar box shadow pb-0">
                <div className="avatar avatar--180" >
                    <div className="avatar__box">
                        <img
                            height="100%"
                            width="100%"
                            src="https://avatars.githubusercontent.com/u/42089391?s=460&u=c270fc9dad2d0d73441e8c896693b6df52ca12a6&v=4"
                            alt="Ene-Ionut-Daniel-Profile"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="title title--h3 sidebar__user-name">
                        <span className="weight--500">{data.name}</span>
                    </h3>
                    <div className="badge--main badge--light">{data.occupation}</div>
                    <div className="social">
                        <a href={data.linkedin} className="social__link" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={data.github} className="social__link" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={data.discord} className="social__link" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a href={data.twitch} className="social__link" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitch} />
                        </a>
                    </div>
                </div>
                <div className="sidebar__info box-inner box-inner--rounded">
                    <ul className="contacts-block">
                        <ListItem title="Birthday" icon="birthday-cake" data={data.birthday} />
                        <ListItem title="Address" icon="map-marker-alt" data={data.address} />
                        <ListItem title="E-mail" icon="envelope" data={data.email} />
                        <ListItem title="Phone" icon="mobile-alt" data={data.phone} />
                        <ListItem title="Phone" icon="mobile-alt" data="Other" />
                    </ul>
                    <a href="./packages/Ene_Ionut_Daniel_CV.pdf" className="btn-download" download>
                        <FontAwesomeIcon icon={faDownload} style={{ marginRight: "10px" }} />
                        Download CV
                    </a>
                </div>
            </div>
        </aside>
    )
}

export default Aside


