import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../actions/activityActions";
import { createNews } from "../actions/newsActions";
import MainLoader from "../components/MainLoader";

export default function CreateNews(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [subtitle1, setSubtitle1] = useState("");
  const [paragraph1, setParagraph1] = useState("");
  const [image1, setImage1] = useState("");
  const [subtitle2, setSubtitle2] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [image2, setImage2] = useState("");
  const [subtitle3, setSubtitle3] = useState("");
  const [paragraph3, setParagraph3] = useState("");
  const [image3, setImage3] = useState("");
  const [subtitle4, setSubtitle4] = useState("");
  const [paragraph4, setParagraph4] = useState("");
  const [image4, setImage4] = useState("");

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const dispatch = useDispatch();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const uploadImageHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  const uploadImageHandler1 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      });
      setImage1(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const uploadImageHandler2 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      });
      setImage2(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const uploadImageHandler3 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      });
      setImage3(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  const uploadImageHandler4 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      });
      setImage4(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createNews(
        title,
        image,
        subtitle1,
        paragraph1,
        image1,
        subtitle2,
        paragraph2,
        image2,
        subtitle3,
        paragraph3,
        image3,
        subtitle4,
        paragraph4,
        image4
      )
    );
  };

  return (
    <>
      <div className="createActivity">
        <form className="createActivity__container" onSubmit={submitHandler}>
          <div className="editUser__container-title">
            <h1>Create News</h1>
            <i
              onClick={props.closeModal}
              class="editUser__container-exit fa-solid fa-xmark"
            ></i>
          </div>
          <div className="createActivity__inputBox">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Main Image Link</label>
            <input
              type="text"
              placeholder="Image Link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="createActivity__inputBox">
            {loadingUpload && "Uploading Image"}
            {errorUpload && errorUpload}
            <label>Choose Main Image</label>
            <input
              type="file"
              placeholder="Title"
              onChange={uploadImageHandler}
            />
          </div>

          <div className="createActivity__inputBox">
            <label>Subtitle 1</label>
            <input
              type="text"
              placeholder="Subtitle 1"
              value={subtitle1}
              onChange={(e) => {
                setSubtitle1(e.target.value);
              }}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Paragraph 1</label>
            <textarea
              type="text"
              placeholder="Paragraph 1"
              value={paragraph1}
              onChange={(e) => {
                setParagraph1(e.target.value);
              }}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Image 1</label>
            <input
              type="text"
              placeholder="Image 1 Link"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Choose Image 1</label>
            <input
              type="file"
              placeholder="Image 1 Link"
              onChange={uploadImageHandler1}
            />
          </div>

          <div className="createActivity__inputBox">
            <label>Subtitle 2</label>
            <input
              type="text"
              placeholder="Subtitle 2"
              value={subtitle2}
              onChange={(e) => {
                setSubtitle2(e.target.value);
              }}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Paragraph 2</label>
            <textarea
              type="text"
              placeholder="Paragraph 2"
              value={paragraph2}
              onChange={(e) => {
                setParagraph2(e.target.value);
              }}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Image 2</label>
            <input
              type="text"
              placeholder="Image 2 Link"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Choose Image 2</label>
            <input
              type="file"
              placeholder="Title"
              onChange={uploadImageHandler2}
            />
          </div>

          <div className="createActivity__inputBox">
            <label>Subtitle 3</label>
            <input
              type="text"
              placeholder="Subtitle 3"
              value={subtitle3}
              onChange={(e) => {
                setSubtitle3(e.target.value);
              }}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Paragraph 3</label>
            <textarea
              type="text"
              placeholder="Paragraph 3"
              value={paragraph3}
              onChange={(e) => {
                setParagraph3(e.target.value);
              }}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Image 3</label>
            <input
              type="text"
              placeholder="Image 3 Link"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Choose Image 3</label>
            <input
              type="file"
              placeholder="Title"
              onChange={uploadImageHandler3}
            />
          </div>

          <div className="createActivity__inputBox">
            <label>Subtitle 4</label>
            <input
              type="text"
              placeholder="Subtitle 4"
              value={subtitle4}
              onChange={(e) => {
                setSubtitle4(e.target.value);
              }}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Paragraph 4</label>
            <textarea
              type="text"
              placeholder="Paragraph 4"
              value={paragraph4}
              onChange={(e) => {
                setParagraph4(e.target.value);
              }}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Image 4</label>
            <input
              type="text"
              placeholder="Image 4 Link"
              value={image4}
              onChange={(e) => setImage4(e.target.value)}
            />
          </div>
          <div className="createActivity__inputBox">
            <label>Choose Image 4</label>
            <input
              type="file"
              placeholder="Title"
              onChange={uploadImageHandler4}
            />
          </div>

          <div className="createActivity__inputBox">
            <button type="submit">Create News</button>
          </div>
        </form>
      </div>
    </>
  );
}
