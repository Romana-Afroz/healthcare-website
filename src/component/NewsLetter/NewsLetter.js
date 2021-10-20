import React from "react";

const NewsLetter = () => {
  return (
    <div class="container mt-5 border p-5">
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <h1>Join Our Newsletter</h1>
          <p>
            A newsletter is a printed or electronic report containing news
            concerning the activities of a business or an organization that is
            sent to its members, customers, employees or other subscribers.
            Newsletters generally contain one main topic of interest to its
            recipients. A newsletter may be considered grey literature.
          </p>
        </div>
        <div class="col-lg-4 col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your Email"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary mt-5"
            type="button"
            id="button-addon2"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
