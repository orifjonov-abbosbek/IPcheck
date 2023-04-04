import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckIP = () => {
  const [ip, setIp] = React.useState("");
  const [ipData, setIpData] = React.useState({});

  const fetchIP = async () => {
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await res.json();
      setIpData(data);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchIP();
  };

  return (
    <>
      <div className="container">
        <div className="wrapper mt-5 pb-5">
          <form onSubmit={handleSubmit} className="d-flex  mx-auto gap-2">
            <input
              className="form-control"
              type="text"
              placeholder="Enter IP address"
              value={ip}
              onChange={(event) => setIp(event.target.value)}
            />
            <button className="btn btn-secondary" type="submit">
              Check
            </button>
          </form>
          <h1
            className="text-white text-center mt-2"
            style={{ fontSize: "18px" }}
          >
            Click to "check" button to know your IP address
          </h1>
          {ipData.ip && (
            <div className="card mt-4 mx-auto " style={{ width: "300px" }}>
              <div className="card-header">
                <p className="text-center">Info about IP</p>
              </div>
              <div className="card-body mt-3">
          
                <p>IP Address: {ipData.ip}</p>
                <p>City: {ipData.city}</p>
                <p>Region: {ipData.region}</p>
                <p>Country: {ipData.country_name}</p>
                <p>Timezone: {ipData.timezone}</p>
                <p>Currency: {ipData.currency}</p>
              </div>
              <div className="card-footer">
                <p className="text-center">Location credintials</p>
                <p>Latitude: {ipData.latitude}</p>
                <p>Longitude: {ipData.longitude}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckIP;
