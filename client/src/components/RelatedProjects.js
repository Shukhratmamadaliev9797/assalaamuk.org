import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { relatedListProjects } from "../actions/projectAction";
import MainLoader from "./MainLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProgressBar from "@ramonak/react-progress-bar";
import { addToCart } from "../actions/cartActions";
import Title from "./Title";
export default function RelatedProjects(props) {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState();
  const [id, setId] = useState();
  const [addedCart, setAddedCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(relatedListProjects(props.projectId));
  }, [dispatch, props.projectId]);

  const projectRelated = useSelector((state) => state.projectRelated);
  const { loading, error, projects } = projectRelated;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(id, type, amount));
  };
  return (
    <div className="projectPage__relatedProjects">
      <Title>Similar Projects</Title>
      <br />
      <br />
      <br />
      {loading ? (
        <MainLoader />
      ) : error ? (
        error
      ) : (
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project) => {
            return (
              <SwiperSlide>
                <div className="projectsComponent__project-title">
                  <h1>{project.title.substring(0, 22)}...</h1>
                </div>
                <div className="projectsComponent__project-image">
                  <img src="../images/modal/login.jpeg" alt={project.title} />
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
                  <button type="submit" onClick={() => setType(project.title)}>
                    Donate
                  </button>
                </form>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
