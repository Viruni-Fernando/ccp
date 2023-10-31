import React, { useState, useEffect } from "react";
import axios from "axios";
const FeedbackForm = () => {
  const [inputText, setInputText] = useState("");
  const [sentimentResult, setSentimentResult] = useState(null);
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/analyze_sentiment",
        {
          text: inputText,
        }
      );

      const data = response.data;
      setSentimentResult(data.prediction);
      setPositiveCount(data.positive_sentiments);
      setNegativeCount(data.negative_sentiments);
      setReviews(data.reviews);
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
      <div className="row">
        <div
          class="card  text-bg-white adminNotice-table mb-3 shadow-lg text-center col-sm-6 mx-auto"
          style={{ borderRadius: 30, marginTop: -125 }}
        >
          <div>
            <h1>Sentiment Analysis</h1>
            <textarea
              placeholder="Enter text for sentiment analysis"
              value={inputText}
              onChange={handleInputChange}
            />
            <button onClick={analyzeSentiment}>Analyze Sentiment</button>
            {sentimentResult && (
              <div>
                <h2>Analysis Result: {sentimentResult}</h2>
                <p>Positive Sentiments: {positiveCount}</p>
                <p>Negative Sentiments: {negativeCount}</p>
                <h3>Reviews:</h3>
                <ul>
                  {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div class="card-body">
            <h2 class="card-title mt-1">Add Train</h2>
            <form
            //   onSubmit={submitTrain}
            >
              <div>
                <div className="row col-sm-8   mx-auto mt-3">
                  <strong
                    style={{ marginLeft: -9 }}
                    className="col-sm-3 col-form-label"
                  >
                    Customer ID
                  </strong>
                  <input
                    name="trainName"
                    style={{ marginLeft: 9 }}
                    className="form-control w-75"
                    placeholder="Add Name..."
                    type="text"
                    //   value={trainName}
                    //   minLength="1"
                    //   onChange={(e) => {
                    //     setTrainName(e.target.value);
                    //   }}
                    required
                  />
                </div>

                <div className="row col-sm-8 mx-auto mt-3">
                  <strong
                    style={{ marginLeft: -3 }}
                    className="col-sm-3  col-form-label"
                  >
                    Customer Name
                  </strong>

                  <input
                    name="note"
                    style={{ marginLeft: 3 }}
                    className="form-control w-75"
                    placeholder="Add Type."
                    type="text"
                    //   value={note}
                    //   minLength="5"
                    //   onChange={(e) => {
                    //     setNote(e.target.value);
                    //   }}
                    required
                  />
                </div>

                <div className="row col-sm-8 mx-auto mt-3">
                  <strong
                    style={{ marginLeft: -3 }}
                    className="col-sm-3  col-form-label"
                  >
                    Vehicle type
                  </strong>

                  <input
                    name="note"
                    style={{ marginLeft: 3 }}
                    className="form-control w-75"
                    placeholder="Add Type."
                    type="text"
                    //   value={note}
                    //   minLength="5"
                    //   onChange={(e) => {
                    //     setNote(e.target.value);
                    //   }}
                    required
                  />
                </div>

                <div className="row col-sm-8 mx-auto mt-3">
                  <strong
                    style={{ marginLeft: -3 }}
                    className="col-sm-3  col-form-label"
                  >
                    Vehicle age
                  </strong>

                  <input
                    name="note"
                    style={{ marginLeft: 3 }}
                    className="form-control w-75"
                    placeholder="Add Type."
                    type="text"
                    //   value={note}
                    //   minLength="5"
                    //   onChange={(e) => {
                    //     setNote(e.target.value);
                    //   }}
                    required
                  />
                </div>

                <div className="row col-sm-8 mx-auto mt-3">
                  <strong
                    style={{ marginLeft: -3 }}
                    className="col-sm-3  col-form-label"
                  >
                    Customer Name
                  </strong>

                  <input
                    name="note"
                    style={{ marginLeft: 3 }}
                    className="form-control w-75"
                    placeholder="Add Type."
                    type="text"
                    //   value={note}
                    //   minLength="5"
                    //   onChange={(e) => {
                    //     setNote(e.target.value);
                    //   }}
                    required
                  />
                </div>

                <div className="row col-sm-8 mx-auto mt-3">
                  <strong
                    style={{ marginLeft: -3 }}
                    className="col-sm-3  col-form-label"
                  >
                    Contract
                  </strong>

                  <input
                    name="note"
                    style={{ marginLeft: 3 }}
                    className="form-control w-75"
                    placeholder="Add Type."
                    type="text"
                    //   value={note}
                    //   minLength="5"
                    //   onChange={(e) => {
                    //     setNote(e.target.value);
                    //   }}
                    required
                  />
                </div>

                <div className="row col-sm-8 mx-auto mt-3">
                  <strong
                    style={{ marginLeft: -3 }}
                    className="col-sm-3  col-form-label"
                  >
                    Type of plan
                  </strong>

                  <input
                    name="note"
                    style={{ marginLeft: 3 }}
                    className="form-control w-75"
                    placeholder="Add Type."
                    type="text"
                    //   value={note}
                    //   minLength="5"
                    //   onChange={(e) => {
                    //     setNote(e.target.value);
                    //   }}
                    required
                  />
                </div>

                <div className="row col-sm-8 mx-auto mt-3">
                  <strong
                    style={{ marginLeft: -3 }}
                    className="col-sm-3  col-form-label"
                  >
                    Feedback
                  </strong>

                  <input
                    name="note"
                    style={{ marginLeft: 3 }}
                    className="form-control w-75"
                    placeholder="Add Type."
                    type="text"
                    //   value={note}
                    //   minLength="5"
                    //   onChange={(e) => {
                    //     setNote(e.target.value);
                    //   }}
                    required
                  />
                </div>

                <div
                  className="row w-50 mx-auto mt-3 mb-4 "
                  style={{ borderRadius: 30 }}
                >
                  <input
                    className="btn btn-primary mt-4 mx-auto shadow-lg"
                    type="submit"
                    value="Save"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
