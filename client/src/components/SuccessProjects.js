import React from "react";

export default function SuccessProjects() {
  return (
    <div className="successProjects">
      <div className="successProjects__title">
        <h1>
          You Have The Power <span>Today</span> To Change <span>Tomorrow</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
      <div className="successProjects__body">
        <div className="successProjects__card">
          <i class="fa-solid fa-hands-holding-child successProjects__card-icon"></i>
          <span>12M +</span>
          <span>Children Saved</span>
        </div>
        <div className="successProjects__card">
          <i class="fa-solid fa-people-group successProjects__card-icon"></i>
          <span>2,450 +</span>
          <span>Total Volunteers</span>
        </div>
        <div className="successProjects__card">
          <i class="fa-solid fa-hand-holding-heart successProjects__card-icon"></i>
          <span>3,340</span>
          <span>Donation</span>
        </div>
        <div className="successProjects__card">
          <i class="fa-solid fa-earth-americas successProjects__card-icon"></i>
          <span>150 +</span>
          <span>Total Country</span>
        </div>
      </div>
    </div>
  );
}
