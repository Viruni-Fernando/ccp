import React, { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [formData, setFormData] = useState({
    gender: "",
    SeniorCitizen: "",
    Partner: "",
    Dependents: "",
    Tenure: "",
    PhoneService: "",
    MultipleLines: "",
    OnlineSecurity: "",
    OnlineBackup: "",
    DeviceProtection: "",
    TechSupport: "",
    StreamingTV: "",
    StreamingMovies: "",
    PaperlessBilling: "",
    MonthlyCharges: "",
    TotalCharges: "",
    InternetService: "",
    Contract: "",
    PaymentMethod: "",
  });

  const [result, setResult] = useState(null);
  const [plotUrls, setPlotUrls] = useState({
    url_1: "",
    url_2: "",
    url_3: "",
    url_4: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an HTTP POST request to your Flask API
    // Make an HTTP POST request to your Flask API
    Axios.post("http://localhost:5000/predict", formData)
      .then((response) => {
        // Update the result and plot URL states with the API response
        console.log(response.data);

        setResult(response.data);
        setPlotUrls({
          url_1: response.data.url_1,
          url_2: response.data.url_2,
          url_3: response.data.url_3,
          url_4: response.data.url_4,
        });
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="card w-75 container mt-6 form-container mt-5 px-5 shadow-lg cardcol">
          <h2 class="mt-4">Customer churn Prediction </h2>

          <div class="row">
            <div class="justify-content-center py-3 mt-2  w-50">
              <div style={{}} class="col-md-8 p-2 ">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Type of Plan :
                  </label>
                  <select
                    class="form-control w-50"
                    id="SeniorCitizen"
                    name="SeniorCitizen"
                    value={formData.TotalCharges}
                    onChange={handleChange}>
                    <option value="1">primary plan</option>
                    <option value="0">extended plan</option>
                    <option value="1">premium plan</option>
                  </select>
                </div>
              </div>

              <div class="col-md-8 p-2">
                <div class="form-group row border">
                  <label class="fw-bolder w-50 mt-2" >
                    Vehicle Class :
                  </label>
                  <select
                    class="form-control w-50 border"
                    id="Partner"
                    name="Partner"
                    value={formData.Partner}
                   
                  >
                    <option value="1">Omnibus</option>
                    <option value="0">Truck</option>
                    <option value="5">Dual Purpose</option>
                    <option value="0">Passenger Car</option>
                    <option value="1">Motorbike</option>
                  </select>
                </div>
              </div>

              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Tenure in Months:
                  </label>
                  <select
                    class="form-control w-50"
                    id="Dependents"
                    name="Dependents"
                    value={formData.Dependents}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="0">2</option>
                    <option value="1">3</option>
                    <option value="0">4</option>
                    <option value="1">5</option>
                    <option value="0">6</option>
                    <option value="1">7</option>
                    <option value="0">8</option>
                    <option value="1">9</option>
                    <option value="0">10</option>
                    <option value="1">11</option>
                    <option value="0">12</option>
                    <option value="1">13</option>
                    <option value="0">14</option>
                    <option value="1">15</option>
                    <option value="0">16</option>
                    <option value="1">17</option>
                    <option value="0">18</option>
                    <option value="1">19</option>
                    <option value="0">20</option>
                    <option value="1">21</option>
                    <option value="0">22</option>
                    <option value="1">23</option>
                    <option value="0">24</option>
                  </select>
                </div>
              </div>

              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Contract:
                  </label>
                  <select
                    class="form-control w-50"
                    id="PaperlessBilling"
                    name="PaperlessBilling"
                    value={formData.PaperlessBilling}
                    onChange={handleChange}
                  >
                    <option value="1">Month-to-Month</option>
                    <option value="0">One Year</option>
                    <option value="1">Two Year</option>
                  </select>
                </div>
              </div>

              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Transaction Type :
                  </label>
                  <select
                    class="form-control w-50"
                    id="PhoneService"
                    name="PhoneService"
                    value={formData.PhoneService}
                    onChange={handleChange}
                  >
                    <option value="1">New</option>
                    <option value="0">Modification</option>
                    <option value="1">Renewal</option>
                    <option value="0">Termination</option>
                    <option value="1">Other</option>
                  </select>
                </div>
              </div>

              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Rechability:
                  </label>
                  <select
                    class="form-control w-50"
                    id="MultipleLines"
                    name="MultipleLines"
                    value={formData.MultipleLines}
                    onChange={handleChange}
                  >
                    <option value="1">via the web</option>
                    <option value="0">contacting agent</option>
                    <option value="1">customer call center</option>
                  </select>
                </div>
              </div>

              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Gender:
                  </label>
                  <select
                    class="form-control w-50"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                </div>
              </div>
              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2">
                    SeniorCitizen:
                  </label>
                  <select
                    class="form-control w-50"
                    id="InternetService"
                    name="InternetService"
                    value={formData.InternetService}
                    onChange={handleChange}
                  >
                    <option value="0">Yes</option>
                    <option value="1">No</option>
                  </select>
                </div>
              </div>
              <div class="col-md-8 p-2 ">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Contract:
                  </label>
                  <select
                    class="form-control w-50"
                    id="Contract"
                    name="Contract"
                    value={formData.Contract}
                    onChange={handleChange}
                  >
                    <option value="0">Month-to-Month</option>
                    <option value="1">One-Year</option>
                    <option value="2">Two-Year</option>
                  </select>
                </div>
              </div>
              <div class="col-md-8 p-2">
                <div class="form-group row ">
                  <label class="fw-bolder w-50 mt-2" >
                    Payment:
                  </label>
                  <select
                    class="form-control w-50"
                    id="PaymentMethod"
                    name="PaymentMethod"
                    value={formData.PaymentMethod}
                    onChange={handleChange}
                  >
                    <option value="0">Automatic: Bank Transfer</option>
                    <option value="1">Automatic: Credit Card</option>
                    <option value="2">Electronic Check</option>
                    <option value="3">Mailed Check</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="justify-content-center py-3 w-50">
              <div class="col-md-8 p-2 ">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    {" "}
                    Branch:
                  </label>
                  <select
                    class="form-control w-50"
                    id="OnlineSecurity"
                    name="OnlineSecurity"
                    value={formData.OnlineSecurity}
                    onChange={handleChange}
                  >
                    <option value="1">Battaramulla</option>
                    <option value="0">Town Hall (City Office) </option>
                    <option value="1">Galewela</option>
                    <option value="0">Thanamalwila</option>
                    <option value="1">Jaffna</option>
                    <option value="0">Pettah (Kotahena)</option>
                    <option value="1">Other</option>
                  </select>
                </div>
              </div>

              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Province :
                  </label>
                  <select
                    class="form-control w-50"
                    id="OnlineBackup"
                    name="OnlineBackup"
                    value={formData.OnlineBackup}
                    onChange={handleChange}
                  >
                    <option value="1">Western</option>
                    <option value="0">Central</option>
                    <option value="1">Southern</option>
                    <option value="0">Eastern</option>
                    <option value="1">Northern</option>
                    <option value="0">North Central </option>
                    <option value="1">North Western </option>
                    <option value="0">Uva</option>
                    <option value="0">Sabaragamuwa</option>
                  </select>
                </div>
              </div>
              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    District :
                  </label>
                  <select
                    class="form-control w-50"
                    id="DeviceProtection"
                    name="DeviceProtection"
                    value={formData.DeviceProtection}
                    onChange={handleChange}
                  >
                    <option value="1">Colombo</option>
                    <option value="0">Kurunegala</option>
                    <option value="1">Gampaha</option>
                    <option value="0">Kandy</option>
                    <option value="1">Kalutara</option>
                    <option value="0">Ratnapura</option>
                    <option value="1">Kegalle </option>
                    <option value="0">Anuradhapura</option>
                    <option value="0">Other</option>
                  </select>
                </div>
              </div>
              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Dependants:
                  </label>
                  <select
                    class="form-control w-50"
                    id="TechSupport"
                    name="TechSupport"
                    value={formData.TechSupport}
                    onChange={handleChange}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Work Status:
                  </label>
                  <select
                    class="form-control w-50"
                    id="StreamingTV"
                    name="StreamingTV"
                    value={formData.StreamingTV}
                    onChange={handleChange}
                  >
                    <option value="1">Employed</option>
                    <option value="0">Unemployed</option>
                  </select>
                </div>
              </div>
              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Marital Status:
                  </label>
                  <select
                    class="form-control w-50"
                    id="StreamingMovies"
                    name="StreamingMovies"
                    value={formData.StreamingMovies}
                    onChange={handleChange}
                  >
                    <option value="1">Married</option>
                    <option value="0">Single</option>
                  </select>
                </div>
              </div>

              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2" >
                    Monthly Charges:
                  </label>
                  <input
                    type="number"
                    min="0"
                    class="form-control w-50"
                    name="MonthlyCharges"
                    placeholder="In thousands"
                    required="required"
                    value={formData.MonthlyCharges}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-md-8 p-2">
                <div class="form-group row">
                  <label class="fw-bolder w-50 mt-2">
                    Vehicle Age:
                  </label>
                  <input
                    type="number"
                    min="0"
                    class="form-control w-50"
                    name="Tenure"
                    placeholder="Tenure in Months"
                    required="required"
                    value={formData.Tenure}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center py-3 border">
            <div class="col-md-12 text-center">
              <button type="submit" class="btn btn-primary btn-lg w-50">
                Predict
              </button>
            </div>
          </div>
        </div>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" />
        <input type="text" name="SeniorCitizen" value={formData.SeniorCitizen} onChange={handleChange} placeholder="Senior Citizen" />
        <input type="text" name="Partner" value={formData.Partner} onChange={handleChange} placeholder="Partner" />
        <input type="text" name="Dependents" value={formData.Dependents} onChange={handleChange} placeholder="Dependents" />
        <input type="text" name="Tenure" value={formData.Tenure} onChange={handleChange} placeholder="Tenure" />
        <input type="text" name="PhoneService" value={formData.PhoneService} onChange={handleChange} placeholder="Phone Service" />
        <input type="text" name="MultipleLines" value={formData.MultipleLines} onChange={handleChange} placeholder="Multiple Lines" />
        <input type="text" name="OnlineSecurity" value={formData.OnlineSecurity} onChange={handleChange} placeholder="Online Security" />
        <input type="text" name="OnlineBackup" value={formData.OnlineBackup} onChange={handleChange} placeholder="Online Backup" />
        <input type="text" name="DeviceProtection" value={formData.DeviceProtection} onChange={handleChange} placeholder="Device Protection" />
        <input type="text" name="TechSupport" value={formData.TechSupport} onChange={handleChange} placeholder="Tech Support" />
        <input type="text" name="StreamingTV" value={formData.StreamingTV} onChange={handleChange} placeholder="Streaming TV" />
        <input type="text" name="StreamingMovies" value={formData.StreamingMovies} onChange={handleChange} placeholder="Streaming Movies" />
        <input type="text" name="PaperlessBilling" value={formData.PaperlessBilling} onChange={handleChange} placeholder="Paperless Billing" />
        <input type="text" name="MonthlyCharges" value={formData.MonthlyCharges} onChange={handleChange} placeholder="Monthly Charges" />
        <input type="text" name="TotalCharges" value={formData.TotalCharges} onChange={handleChange} placeholder="Total Charges" />
        <input type="text" name="InternetService" value={formData.InternetService} onChange={handleChange} placeholder="Internet Service" />
        <input type="text" name="Contract" value={formData.Contract} onChange={handleChange} placeholder="Contract" />
        <input type="text" name="PaymentMethod" value={formData.PaymentMethod} onChange={handleChange} placeholder="Payment Method" />
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div>
          {/* Display the API response here */}
          <p>Churn Probability: {result.cltv}</p>
          <p>Expected Lifetime Value: {result.expected_lifetime_value}</p>
          <div>
            {/* Display the plots using the URLs received from the API */}
            <img src={plotUrls.url_3} alt="Plot 1" />
            <img src={plotUrls.url_1} alt="Plot 2" />
            <img src={result.shap_plot} alt="Plot 3" />
            <br />
            <br />
            <img src={plotUrls.url_2} alt="Plot 4" />
          </div>
          <div>
            {/* Display the plots using the URLs received from the API */}
            <img
              src={`data:image/png;base64,${result.gauge_plot}`}
              alt="Plot 1"
            />
            <img
              src={`data:image/png;base64,${result.hazard_plot}`}
              alt="Plot 2"
            />
            <img
              src={`data:image/png;base64,${result.survival_plot}`}
              alt="Plot 3"
            />
            <br />
            <br />
            <img
              src={`data:image/png;base64,${result.shap_plot}`}
              alt="Plot 4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;