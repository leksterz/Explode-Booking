import React from "react";

export default function GalleryImage() {
  function handleSubmit(event) {
    event.preventDefault();

    //delete image
  }
  return (
    <div>
      <img
        src="https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
        alt=""
        height="100px"
      />
      <br />
      <label>File name</label>
      <br />
      <label>Date uploaded</label>
      <br />
      <label>Author</label>
      <br />
      <form onSubmit={handleSubmit}>
        <button>delete image</button>
      </form>
    </div>
  );
}
