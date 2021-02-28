import React from 'react';
import webdev from "../images/webdev.svg"
import education from "../images/education.svg"
import experience from "../images/experience.svg"
import android from "../images/android.svg"
import ProjectFigure from './other/ProjectFigure';


function Content({ data }) {
    return (
        <content className="col-12 col-md-12 col-xl-9">
            <div className="box shadow mt-0 pb-0">
                <div className="pb-0 pb-sm-2 content__about">
                    <h1 className="title title--h1 first-title title__separate">About Me</h1>
                    <p>{data.description_1}</p>
                    <p>{data.description_2}</p>
                </div>
                <div className="box-inner pb-0">
                    <h2 className="title title--h3">What I'm Doing</h2>
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="case-item box box__second">
                                <img className="case-item__icon" src={webdev} alt="" />
                                <div>
                                    <h3 className="title title--h5">{data.what_im_doing.first.name}</h3>
                                    <p className="case-item__caption">{data.what_im_doing.first.desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12">
                            <div className="case-item box box__second">
                                <img className="case-item__icon" src={android} alt="" />
                                <div>
                                    <h3 className="title title--h5">{data.what_im_doing.second.name}</h3>
                                    <p className="case-item__caption">{data.what_im_doing.second.desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12">
                            <div className="case-item box box__second">
                                <img className="case-item__icon" src={webdev} alt="" />
                                <div>
                                    <h3 className="title title--h5">{data.what_im_doing.third.name}</h3>
                                    <p className="case-item__caption">{data.what_im_doing.third.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box shadow mt-4 pb-0">
                <div className="pb-3">
                    <h1 className="title title--h1 first-title title__separate pt-4">Resume</h1>
                </div>
                <div className="pb-0">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h2 className="title title--h3"><img className="title-icon" src={education} alt="" /> Education</h2>
                            <div className="timeline">
                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">{data.education.first.school}</h5>
                                    <span className="timeline__period">{data.education.first.start} — {data.education.first.end}</span>
                                    <p className="timeline__description">{data.education.first.description}</p>
                                </article>

                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">{data.education.second.school}</h5>
                                    <span className="timeline__period">{data.education.second.start} — {data.education.second.end}</span>
                                    <p className="timeline__description">{data.education.second.description}</p>
                                </article>

                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">{data.education.third.school}</h5>
                                    <span className="timeline__period">{data.education.third.start} — {data.education.third.end}</span>
                                    <p className="timeline__description">{data.education.third.description}</p>
                                </article>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h2 className="title title--h3"><img className="title-icon" src={experience} alt="" /> Experience</h2>
                            <div className="timeline">
                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">{data.experience.first.school}</h5>
                                    <span className="timeline__period">{data.experience.first.start} — {data.experience.first.end}</span>
                                    <p className="timeline__description">{data.experience.first.description}</p>
                                </article>

                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">{data.experience.second.school}</h5>
                                    <span className="timeline__period">{data.experience.second.start} — {data.experience.second.end}</span>
                                    <p className="timeline__description">{data.experience.second.description}</p>
                                </article>

                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">{data.experience.third.school}</h5>
                                    <span className="timeline__period">{data.experience.third.start} — {data.experience.third.end}</span>
                                    <p className="timeline__description">{data.experience.third.description}</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-inner box-inner--rounded">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h2 className="title title--h3">Design Skills</h2>
                            <div className="box box__second">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-index" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: data.skills.design.first.level }}>
                                        <div className="progress-text"><span>{data.skills.design.first.name}</span><span>{data.skills.design.first.level}</span></div>
                                    </div>
                                    <div className="progress-text"><span>{data.skills.design.first.name}</span></div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-index" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: data.skills.design.second.level }}>
                                        <div className="progress-text"><span>{data.skills.design.second.name}</span><span>{data.skills.design.second.level}</span></div>
                                    </div>
                                    <div className="progress-text"><span>{data.skills.design.second.name}</span></div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-index" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: data.skills.design.third.level }}>
                                        <div className="progress-text"><span>{data.skills.design.third.name}</span><span>{data.skills.design.third.level}</span></div>
                                    </div>
                                    <div className="progress-text"><span>{data.skills.design.third.name}</span></div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-index" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: data.skills.design.fourth.level }}>
                                        <div className="progress-text"><span>{data.skills.design.fourth.name}</span><span>{data.skills.design.fourth.level}</span></div>
                                    </div>
                                    <div className="progress-text"><span>{data.skills.design.fourth.name}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                            <h2 className="title title--h3">Coding Skills</h2>
                            <div className="box box__second">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-index" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: data.skills.coding.first.level }}>
                                        <div className="progress-text"><span>{data.skills.coding.first.name}</span><span>{data.skills.coding.first.level}</span></div>
                                    </div>
                                    <div className="progress-text"><span>{data.skills.coding.first.name}</span></div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-index" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: data.skills.coding.second.level }}>
                                        <div className="progress-text"><span>{data.skills.coding.second.name}</span><span>{data.skills.coding.second.level}</span></div>
                                    </div>
                                    <div className="progress-text"><span>{data.skills.coding.second.name}</span></div>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar progress-bar-index" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: data.skills.coding.third.level }}>
                                        <div className="progress-text"><span>{data.skills.coding.third.name}</span><span>{data.skills.coding.third.level}</span></div>
                                    </div>
                                    <div className="progress-text"><span>{data.skills.coding.third.name}</span></div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-index" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: data.skills.coding.fourth.level }}>
                                        <div className="progress-text"><span>{data.skills.coding.fourth.name}</span><span>{data.skills.coding.fourth.level}</span></div>
                                    </div>
                                    <div className="progress-text"><span>{data.skills.coding.fourth.name}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <h6 className="p-3 text-center">All percentages are based on Linkedin Skill Assessments quiz.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box shadow mt-4 pb-4">
                <h1 className="title title--h1 first-title title__separate">Portfolio</h1>
                <div class="gallery-grid">
                    {Object.keys(data.projects).map(key => {
                        return <ProjectFigure
                            url={data.projects[key].url}
                            image={data.projects[key].image}
                            name={data.projects[key].name}
                            description={data.projects[key].desc} />
                    })}
                </div>
            </div>
        </content>
    )
}

export default Content
