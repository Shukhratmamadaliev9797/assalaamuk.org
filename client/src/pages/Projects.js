import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProject } from "../actions/projectAction";
import MainLoader from "../components/MainLoader";
import Title from "../components/Title";
import ProgressBar from "@ramonak/react-progress-bar";
import { addToCart } from "../actions/cartActions";
export default function Projects() {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState();
  const [id, setId] = useState();
  const [addedCart, setAddedCart] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProject());
  }, [dispatch]);

  const projectLists = useSelector((state) => state.projectLists);
  const { loading: listLoading, error: listError, projectList } = projectLists;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(id, type, amount));
  };

  return (
    <div className="projectsPage">
      <div className="projectsPage__hero">
        <div className="projectsPage__hero-content">
          <div>
            <h1>
              <span>Be The Reason </span>
              Someone Smiles Today!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="projectsPage__container">
        <Title>Projects</Title>
        <div className="projectsPage__projects">
          {listLoading ? (
            <MainLoader />
          ) : listError ? (
            listError
          ) : (
            projectList.map((project) => {
              return (
                <div>
                  <div className="projectsComponent__project-title">
                    <h1>{project.title.substring(0, 22)}...</h1>
                  </div>
                  <div className="projectsComponent__project-image">
                    <img src="./images/modal/login.jpeg" alt={project.title} />
                    <span>{project.location}</span>
                  </div>

                  <div className="projectsComponent__project-paragraph">
                    <p>{project.paragraph.substring(0, 100)}...</p>
                  </div>
                  <div className="projectsComponent__project-progress">
                    <ProgressBar
                      completed={Math.round(
                        (project.currentAmount * 100) / project.targetAmount
                      )}
                      bgColor="#ff7396"
                      labelAlignment="center"
                      borderRadius="5px"
                      labelColor="#f9f4f4"
                      transitionTimingFunction="ease-in"
                      animateOnRender
                    />
                  </div>
                  <form
                    onSubmit={submitHandler}
                    className="projectsComponent__project-donate"
                  >
                    <input
                      type="text"
                      placeholder="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <button
                      type="submit"
                      onClick={() => setType(project.title)}
                    >
                      Donate
                    </button>
                  </form>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
