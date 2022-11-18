import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Campaigns(props) {
  console.log(props);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        campaign_name={props.campaign_name}
        advertiser={props.advertiser}
        country={props.country}
        conversion={props.conversion}
        bid={props.bid}
        listCampaigns={props.listCampaigns}
        setListCampaigns={props.setListCampaigns}
        id={props._id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.campaign_name}</h1>
        <p className="card-id">{props.advertiser}</p>
        <p className="card-id">{props.country}</p>
        <p className="card-id">{props._id}</p>
        <p className="card-id">{props.conversion}</p>
        <h3 className="card-cost">${props.bid}</h3>
      </div>
    </>
  );
}
