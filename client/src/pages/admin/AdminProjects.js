import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, listProject } from "../../actions/projectAction";
import MainLoader from "../../components/MainLoader";
import CreateProject from "../../modals/CreateProject";
import Delete from "../../modals/Delete";
import EditProject from "../../modals/EditProject";

export default function AdminProjects() {
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [deleteProjectModal, setDeleteProjectModal] = useState(false);
  const [editProjectModal, setEditProjectModal] = useState(false);
  const [project, setProject] = useState();
  const dispatch = useDispatch();
  const projectCreate = useSelector((state) => state.projectCreate);
  const { loading, error, success } = projectCreate;

  const projectLists = useSelector((state) => state.projectLists);
  const { loading: listLoading, error: listError, projectList } = projectLists;

  const projectDelete = useSelector((state) => state.projectDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = projectDelete;
  const projectUpdate = useSelector((state) => state.projectUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = projectUpdate;

  useEffect(() => {
    if (success) {
      setCreateProjectModal(false);
    }
    if (successDelete) {
      setDeleteProjectModal(false);
    }
    if (successUpdate) {
      setEditProjectModal(false);
    }
    dispatch(listProject());
  }, [success, dispatch, successDelete, successUpdate]);

  const projectDeleteHandler = (project) => {
    dispatch(deleteProject(project._id));
  };

  return (
    <>
      {createProjectModal ? (
        <CreateProject
          closeModal={() => {
            setCreateProjectModal(false);
          }}
        />
      ) : (
        ""
      )}
      {deleteProjectModal ? (
        <Delete
          heading="Delete Project"
          body="Are you sure to delete project?"
          closeModal={() => setDeleteProjectModal(false)}
          deleteHandler={() => projectDeleteHandler(project)}
        />
      ) : (
        ""
      )}
      {editProjectModal ? (
        <EditProject
          closeModal={() => {
            setEditProjectModal(false);
          }}
          project={project}
        />
      ) : (
        ""
      )}
      <div className="projects">
        <div className="projects__container">
          <div className="projects__title">
            <h1>Projects</h1>
            <button
              onClick={() => {
                setCreateProjectModal(true);
              }}
            >
              Create Project
            </button>
          </div>
          <div className="activities__cards">
            {listLoading ? (
              <MainLoader />
            ) : listError ? (
              <div>{listError}</div>
            ) : (
              projectList.map((project) => {
                return (
                  <div className="activities__activity">
                    <div className="activities__activity-title">
                      {project.title.substring(0, 60)}
                    </div>
                    <div className="activities__activity-image">
                      <img src={project.image} alt={project.title} />
                    </div>

                    <div className="activities__activity-paragraph">
                      {project.paragraph1.substring(0, 300)}
                    </div>
                    <div className="activities__activity-amount">
                      <div>Current Amount: {project.currentAmount}$</div>
                      <div>Target Amount: {project.targetAmount}$</div>
                    </div>
                    <div className="activities__activity-action">
                      <button
                        onClick={() => {
                          setEditProjectModal(true);
                          setProject(project);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setDeleteProjectModal(true);
                          setProject(project);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
