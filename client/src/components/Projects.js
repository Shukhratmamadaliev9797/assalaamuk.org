import React, { useEffect } from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { listProject } from "../actions/projectAction";
import MainLoader from "./MainLoader";

export default function Projects() {
  const projectLists = useSelector((state) => state.projectLists);
  const { loading: listLoading, error: listError, projectList } = projectLists;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProject());
  }, [dispatch]);

  return (
    <div className="projectsComponent">
      <div className="projectsComponent__container">
        <Title>Projects</Title>
        <div className="projectsComponent__projects">
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
            {listLoading ? (
              <MainLoader />
            ) : listError ? (
              <div>{listError}</div>
            ) : (
              projectList.map((project) => {
                return (
                  <SwiperSlide>
                    <div className="projectsComponent__project-title">
                      <h1>{project.title.substring(0, 22)}...</h1>
                    </div>
                    <div className="projectsComponent__project-image">
                      <img src={project.image} />
                      <span>{project.location}</span>
                    </div>

                    <div className="projectsComponent__project-paragraph">
                      <p>{project.paragraph.substring(0, 150)}</p>
                    </div>
                    <form className="projectsComponent__project-donate">
                      <input type="text" placeholder="amount" />
                      <button>Donate</button>
                    </form>
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
