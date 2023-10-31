import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const FeedbackAnalysis = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "300px" }}
          src="https://www.atpi.com/media/cache/picture/35a05bdfc8e6aa40d1c9798e355cefdb.webp"
          alt="Hero Image"
          className="img-fluid w-100"
        />
      </div>
      <div className="centered-text">
        <h1>Train Schedules</h1>
      </div>

      <div className="container-fluid">
        <div className="w-75 mx-auto text-center p-3 mt-1">
          <div>
            <div className="container p-1 mt-4 mb-4">
              <div className="row ">
                <div className="shadow-lg card  mx-auto w-100">
                  <div className=" container d-flex flex-row">
                    <input
                      type="text"
                      placeholder="Search By Train Name"
                      className="form-control mt-3 w-50 mx-2"
                      onChange={(e) => {
                        // setSearch(e.target.value);
                      }}
                    />

                    <Link
                      className="btn btn-primary mt-3 p-2"
                      style={{ width: 190, marginLeft: 460 }}
                      to={"/feedbackForm"}
                    >
                      Add Train &nbsp;
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    </Link>
                  </div>
                  <table class="table table-striped mt-3">
                    <thead className="table-primary">
                      <tr>
                        <th scope="col">Train Name</th>
                        <th scope="col">Note</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                  {trainList
                    ?.filter((value) => {
                      if (search === "") {
                        return value;
                      } else if (
                        value.trainName
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return value;
                      }
                      return 0;
                    })
                    .map((t) => (
                      <tr key={t.id}>
                        <td>{t.trainName}</td>
                        <td>{t.note}</td>
                        <td>
                          {t.status === 0 ? "Published" : "Unpublished"}
                        </td>
                        <td className="d-flex justify-content-sm-around">
                          <Link
                            className="btn btn-primary"
                            to={`/scheduleTable/${t.id}`}
                          >
                            Schedules
                          </Link>

                          {t.status === 0 ? (
                            <button
                              type="button"
                              onClick={() => deleteTrain(t.id)}
                              className="btn btn-danger" // Display "Unpublish" button
                            >
                              Unpublish
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => publishTrain(t.id)}
                              className="btn btn-success" // Display "Publish" button
                            >
                              Publish
                            </button>
                          )}

                          <Link
                            className="btn btn-warning"
                            to={`/trainForm/${t.id}`}
                          >
                            Update
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody> */}
                  </table>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAnalysis;
