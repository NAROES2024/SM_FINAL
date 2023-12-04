import React from "react";
import EventData from "../data/EventData";
import axios from "axios";
import MyVerticallyCenteredModal from "./DetailsModel";

function EventDetail({link}) {
  const event = EventData.find(({ link:eventlink }) => eventlink === link);
  console.log(event)
  const [modalShow, setModalShow] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [isRegistered, setIsRegistered] = React.useState(false);

  if (localStorage.getItem("token")) {

    async function check() {
      const data = await axios
        .post("http://localhost:5000/event/isregistered", {
          token: localStorage.getItem("token"),
          link: event.link,
        })
        .then((t) => setIsRegistered(t.data));
    }
    check();
  }

  async function details() {
    const data = await axios
      .post("http://localhost:5000/razorpay" + event.link, {
        token: localStorage.getItem("token"),
      })
      .then((t) => t.data);

    //set user and add link to data
    setUser({
      name: data.name,
      email: data.email,
      contact: data.contact,
      link: event.link,
      id: data.id,
      sm_id: data.sm_id,
      amount: data.amount,
      currency: data.currency,
      teamSize: data.teamSize,
    });

    setModalShow(true);
  }

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container py-5 px-lg-5">
          <div class="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="text-primary-gradient fw-medium">How It Works</h5>
            <h1 class="mb-2">{event.name}</h1>
          </div>

          <div class="row">
            <div class="col-lg-8 mb-3">
              <img src={event.poster} class="img-fluid" alt="" />
              <p class="mt-4 text-center">{event.description}</p>
            </div>
            <div class="col-lg-4">
              <div class="course-info d-flex justify-content-between align-items-center mb-2">
                <h5>Team Size</h5>
                <p>{event.teamSize}</p>
              </div>

              <div class="course-info d-flex justify-content-between align-items-center mb-2">
                <h5>Event Fee</h5>
                <p>{event.fee}</p>
              </div>

              <div class="course-info d-flex justify-content-between align-items-center mb-2">
                <h5>Prize Money</h5>
                <p>{event.prize}</p>
              </div>

              <div class="course-info d-flex justify-content-between align-items-center mb-2">
                <h5>Schedule</h5>
                <p>{event.date}</p>
              </div>

              <div class="course-info d-flex justify-content-between align-items-center mb-2">
                <h5>Schedule</h5>
                <p>
                  <a
                    href={event.brochure}
                    class="btn btn-secondary-gradient rounded-pill py-2 px-4"
                  >
                    Info Brochure
                  </a>
                </p>
              </div>

              <div class="course-info d-flex justify-content-between align-items-center mb-2">
                <h5>Submission</h5>
                <p>
                  <a
                    class="btn btn-secondary-gradient rounded-pill py-2 px-4"
                    href={event.submission}
                  >
                    Form
                  </a>
                </p>
              </div>

              {localStorage.getItem("token") ? (
                <div class="course-info d-flex justify-content-between align-items-center mb-2">
                  <h5>Register Event</h5>
                  {isRegistered ? (
                    <p>
                      <a class="btn btn-green-gredient rounded-pill py-2 px-4">
                        already registered
                      </a>
                    </p>
                  ) : (
                    <p>
                      <a
                        class="btn btn-secondary-gradient rounded-pill py-2 px-4"
                        onClick={details}
                      >
                        Register Now
                      </a>
                    </p>
                  )}
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    user={user}
                  />
                </div>
              ) : (
                <div class="course-info d-flex justify-content-between align-items-center mb-2">
                  <h5>Register Event</h5>
                  <p>
                    <a
                      href="/register"
                      class="btn btn-primary-gradient rounded-pill py-2 px-4 navbar-nav"
                    >
                      login
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div class="container text-center" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                {event.rulestab.map((tab) => (
                  <li class="nav-item">
                    <a
                      class="nav-link rounded"
                      data-bs-toggle="tab"
                      href={"#tab-" + tab.tabId}
                    >
                      <h5>{tab.heading}</h5>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content">
                {event.rulestab.map((tab) => (
                  <div class="tab-pane" id={"tab-" + tab.tabId}>
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>{tab.heading}</h3>
                        {tab.data.map((data) => (
                          <p>{data}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
