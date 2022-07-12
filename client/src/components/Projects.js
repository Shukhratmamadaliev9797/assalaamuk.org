import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { listProject } from "../actions/projectAction";
import MainLoader from "./MainLoader";
import ProgressBar from "@ramonak/react-progress-bar";
import { addToCart } from "../actions/cartActions";
import { Link, useHistory } from "react-router-dom";
import CartAdded from "../modals/CartAdded";

export default function Projects() {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState();
  const [id, setId] = useState();
  const [addedCart, setAddedCart] = useState(false);
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems, error, success } = cart;

  const projectLists = useSelector((state) => state.projectLists);
  const { loading: listLoading, error: listError, projectList } = projectLists;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProject());

    if (cartItems) {
      setId(cartItems.length);
    }
  }, [dispatch, success, cartItems]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(id, type, amount));
    setAddedCart(true);
  };

  return (
    <>
      {addedCart ? (
        <CartAdded
          returnList={() => {
            setAddedCart(false);
            history.push("/projects");
          }}
          goToCart={() => {
            setAddedCart(false);
            history.push("/basket");
          }}
          closeModal={() => setAddedCart(false)}
        />
      ) : (
        ""
      )}
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
                    <SwiperSlide key={project._id}>
                      <div className="projectsComponent__project-title">
                        <h1>{project.title.substring(0, 22)}...</h1>
                      </div>
                      <div className="projectsComponent__project-image">
                        <img
                          src="./images/modal/login.jpeg"
                          alt={project.title}
                        />
                        <span>{project.location}</span>
                      </div>

                      <div className="projectsComponent__project-paragraph">
                        <p>{project.paragraph.substring(0, 100)}...</p>
                        <Link to={`/project/${project._id}`}>Read more...</Link>
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
                          height="14px"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })
              )}
            </Swiper>
          </div>
          <div className="projectsComponent__all">
            <Link to="/projects">
              View all projects <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
