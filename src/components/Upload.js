import React, { Component } from "react";

export default class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
    };
  }

  //uploads to backend
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new formData();
    let url = "";
    let requestProperties = {
      method: "POST",
      header: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    };

    formData.append("file", this.state.file);

    fetch(url, requestProperties)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <h2>upload</h2>
        <form onSubmit={this.handleSubmit}>
          <span>Choose your file</span>
          <input
            type="file"
            name="image_to_upload"
            id="image_to_upload"
            onChange={this.handleChange}
          />
          <button type="submit">upload image</button>
        </form>
      </div>
    );
  }
}
