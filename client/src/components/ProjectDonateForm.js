import React from "react";

export default function ProjectDonateForm() {
  return (
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
  );
}
