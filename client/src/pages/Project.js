import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsProject } from "../actions/projectAction";
import Footer from "../components/Footer";
import MainLoader from "../components/MainLoader";
import ProgressBar from "@ramonak/react-progress-bar";
import RelatedProjects from "../components/RelatedProjects";
export default function Project() {
  const projectId = useParams();
  const dispatch = useDispatch();

  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  useEffect(() => {
    dispatch(detailsProject(projectId.id));
  }, [dispatch, projectId.id]);

  return (
    <div>
      {loading ? (
        <MainLoader />
      ) : error ? (
        error
      ) : (
        <div className="projectPage__container">
          <div className="projectPage__header">
            <div className="projectPage__header-content">
              <div className="projectPage__header-content-left">
                <h1>
                  Project <i class="fa-solid fa-circle-play"></i>{" "}
                  <span>{project.title}</span>
                </h1>
                <div className="projectPage__header-content-left-location">
                  <span>
                    <i class="fa-solid fa-hand-holding-heart"></i>{" "}
                    {project.category}
                  </span>
                  <span>
                    <i class="fa-solid fa-location-dot"></i> {project.location}
                  </span>
                </div>
              </div>
              <div className="projectPage__header-content-right"></div>
            </div>
          </div>
          <div className="projectPage__main">
            <div className="projectPage__main-left">
              <div className="projectPage__main-left-mainBlock">
                <img src="../images/modal/login.jpeg" alt={project.title} />
                <p>{project.paragraph}</p>
              </div>
              <div className="projectPage__main-left-block">
                {project.subtitle1 ? <h3>{project.subtitle1}</h3> : ""}
                <p>{project.paragraph1}</p>
                <img src="../images/modal/login.jpeg" alt={project.title} />
              </div>
              <div className="projectPage__main-left-block">
                {project.subtitle2 ? <h3>{project.subtitle2}</h3> : ""}
                <p>{project.paragraph2}</p>
                {project.image2 ? (
                  <img src={project.image2} alt={project.title} />
                ) : (
                  ""
                )}
              </div>
              <div className="projectPage__main-left-block">
                {project.subtitle3 ? <h3>{project.subtitle3}</h3> : ""}
                <p>{project.paragraph3}</p>
                {project.image3 ? (
                  <img src={project.image3} alt={project.title} />
                ) : (
                  ""
                )}
              </div>
              <div className="projectPage__main-left-block">
                {project.subtitle4 ? <h3>{project.subtitle4}</h3> : ""}
                <p>{project.paragraph4}</p>
                {project.image4 ? (
                  <img src={project.image4} alt={project.title} />
                ) : (
                  ""
                )}
              </div>
              <div className="projectPage__main-left-block">
                {project.subtitle5 ? <h3>{project.subtitle5}</h3> : ""}
                <p>{project.paragraph5}</p>
                {project.image5 ? (
                  <img src={project.image5} alt={project.title} />
                ) : (
                  ""
                )}
              </div>
              <div className="projectPage__main-left-block">
                {project.subtitle6 ? <h3>{project.subtitle6}</h3> : ""}
                <p>{project.paragraph6}</p>
                {project.image6 ? (
                  <img src={project.image6} alt={project.title} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="projectPage__main-right">
              <div className="projectPage__donateBox">
                <div className="projectPage__donateBox-title">
                  {/* <i class="fa-solid fa-heart-circle-plus"></i>{" "} */}
                  {project.category} <span>Donate</span>
                </div>
                <div className="projectPage__donateBox-paragraph">
                  <p>
                    Making a donation is the ultimate sign of solidarity.
                    Actions speak louder than words.
                  </p>
                </div>
                <div className="projectPage__donateBox-progress">
                  <ProgressBar
                    completed={Math.round(
                      (project.currentAmount * 100) / project.targetAmount
                    )}
                    bgColor="#ff7396"
                    labelAlignment="outside"
                    borderRadius="5px"
                    labelColor="#ff7396"
                    transitionTimingFunction="ease-in"
                    animateOnRender
                    height="12px"
                  />
                </div>
                <div className="projectPage__donateBox-totalAmount">
                  <div>
                    <span>{project.currentAmount} £</span>
                    <span>Current Amount</span>
                  </div>
                  <div>
                    <span>{project.targetAmount} £</span>
                    <span>Target Amount</span>
                  </div>
                </div>
                <div className="projectPage__donateBox-donateAmount">
                  <div>100 £</div>
                  <div>250 £</div>
                  <div>500 £</div>
                  <div>Other</div>
                </div>
                <form className="projectPage__donateBox-donateForm">
                  <input type="number" placeholder="Enter Amount" />
                  <button>Donate</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <RelatedProjects projectId={projectId.id} />
      <Footer />
    </div>
  );
}
