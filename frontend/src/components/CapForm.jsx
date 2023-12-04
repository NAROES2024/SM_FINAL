import React from "react";
import axios from "axios";

function CapSection() {
  const [data, setData] = React.useState({});
  const [yos, setYos] = React.useState(0);
  const [major, setMajor] = React.useState("");
  const [sm, setSm] = React.useState("");
  const [idea, setIdea] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [whysm, setWhysm] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    // get user from token
    axios
      .get("http://localhost:5000/user", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    // check if user has already submitted the form
    React.useEffect(() => {
        axios.post("http://localhost:5000/cap/isregistered", 
            {
                token: localStorage.getItem("token"),
            },
        ).then((res) => {
            if (res.data === "submitted") {
                setIsSubmitted(true);
            }
        }).catch((err) => console.log(err));
    }, []);

  function handleSubmit() {
    const Capdata = {
      sm_id: data.sm_id,
      name: data.name,
      email: data.email,
      college: data.college,
      contact: data.contact,
      major: major,
      yos: yos,
      sm: sm,
      idea: idea,
      experience: experience,
      whysm: whysm,
    };
    axios
      .post("http://localhost:5000/cap", Capdata)
      .then((res) => {
        console.log(res);
        if (res.data === "success") {
          alert("Form Submitted");
        } else {
          alert("Form Submission Failed");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div class="container-xxl" id="contact">
        <div class="container px-lg-5">
          {localStorage.getItem("token") ? (
            <>
              <div class="text-center fadeInUp" data-wow-delay="0.1s">
                <h5 class="text-primary-gradient fw-medium">
                  SM'24 Campus Ambassador
                </h5>
                <h1 class="mb-5">Fill out the below form</h1>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <div class=" fadeInUp" data-wow-delay="0.3s">
                    <p class="text-center mb-4">name : {data.name}</p>
                    <p class="text-center mb-4">Email : {data.email}</p>
                    <p class="text-center mb-4">SmId : {data.sm_id}</p>
                    <p class="text-center mb-4">college : {data.college}</p>
                    <p class="text-center mb-4">contact : {data.contact}</p>
                    <form>
                      <div class="row g-3">
                        <div class="col-md-6">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Major/Area of Study"
                              onChange={(e) => setMajor(e.target.value)}
                              required
                            />
                            <label for="name">Major/Area of Study</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating">
                            <input
                              type="number"
                              class="form-control"
                              min="1"
                              placeholder="Current Year of Study"
                              onChange={(e) => setYos(e.target.value)}
                              required
                            />
                            <label for="number">Current Year of Study</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="subject"
                              placeholder="(yes/no)"
                              onChange={(e) => setSm(e.target.value)}
                              required
                            />
                            <label for="subject">
                              Have you attended SM? ( Yes / No )
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating">
                            <textarea
                              class="form-control"
                              placeholder="Leave a message here"
                              id="message"
                              style={{ height: "150px" }}
                              onChange={(e) => setWhysm(e.target.value)}
                              required
                            ></textarea>
                            <label for="message">
                              Why you want to be a SM CAP? (100 words)
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating">
                            <textarea
                              class="form-control"
                              placeholder="Leave a message here"
                              id="message"
                              style={{ height: "150px" }}
                              onChange={(e) => setIdea(e.target.value)}
                              required
                            ></textarea>
                            <label for="message">
                              Propose an idea to promote SM ? (50 words)
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating">
                            <textarea
                              class="form-control"
                              placeholder="Leave a message here"
                              id="message"
                              style={{ height: "150px" }}
                              onChange={(e) => setExperience(e.target.value)}
                              required
                            ></textarea>
                            <label for="message">
                              Experience with leadership roles? (50 words)
                            </label>
                          </div>
                        </div>
                        <div class="col-12 text-center">
                          {isSubmitted ? (
                            <>
                              <button
                                class="btn btn-green-gredient rounded-pill py-3 px-5"
                                type="submit"
                              >
                                already submitted
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                class="btn btn-primary-gradient rounded-pill py-3 px-5"
                                onClick={handleSubmit}
                                type="submit"
                              >
                                Send Message
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 class="text-primary-gradient fw-medium">
                  SM'24 Campus Ambassador
                </h5>
                <h1 class="mb-5">login to see form</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CapSection;
