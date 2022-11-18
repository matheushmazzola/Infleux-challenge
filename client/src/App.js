import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Campaigns from "./components/cards/cards";

export default function App() {
  const [values, setValues] = useState();
  const [listCampaigns, setListCampaigns] = useState([]);

  const handleCreate = () => {
    Axios.post("http://localhost:3001/campaigns/create", {
      campaign_name: values.campaign_name,
      advertiser: values.advertiser,
      country: values.country,
      conversion: values.conversion,
      bid: values.bid,
    }).then(() => {
      Axios.get("http://localhost:3001/campaigns/find", {
        campaign_name: values.campaign_name,
        advertiser: values.advertiser,
        country: values.country,
        conversion: values.conversion,
        bid: values.bid,
      }).then((response) => {
        setListCampaigns([...listCampaigns,
          {
            id: response.data.campaign._id,
            campaign_name: values.campaign_name,
            advertiser: values.advertiser,
            country: values.country,
            conversion: values.conversion,
            bid: values.bid,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/fetch?country=").then((response) => {
      console.log(response.data.campaign);
      setListCampaigns(response.data.campaign);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="create-container">
      <div className="create-container">
        <h1 className="create-title">Create new campaign</h1>

        <input
          type="text"
          name="campaign_name"
          placeholder="Campaign name"
          className="Create-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Advertiser"
          name="advertiser"
          className="Create-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          className="Create-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Conversion"
          name="conversion"
          className="Create-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Bid"
          name="bid"
          className="Create-input"
          onChange={handleaddValues}
        />

        <button onClick={handleCreate} className="Create-button">
          Create
        </button>
      </div>

      {listCampaigns.map((val) => (
        <Campaigns
          key = {val._id}
          listCampaigns={listCampaigns}
          setListCampaigns={setListCampaigns}
          id={val._id}
          campaign_name={val.campaign_name}
          advertiser={val.advertiser}
          country={val.country}
          conversion={val.conversion}
          bid={val.bid}
        />
      ))}
    </div>
  );
}