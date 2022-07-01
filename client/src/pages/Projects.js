import React, { useEffect } from "react";
import Title from "../components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { listProject } from "../actions/projectAction";
import MainLoader from "../components/MainLoader";

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
                    <div>
                      <img src={project.image} />
                    </div>
                    <div></div>
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
