Nodejs-API

POST
Create campaigns
http://localhost:3000/campaigns/create

Bodyraw (json)
json
{
  "campaign_name": "Angry Birds",
  "advertiser": "Rovio",
  "country": "Finland",
  "conversion": "CPC",
  "bid": "3.85"
}

PUT
Edit campaigns
http://localhost:3000/campaigns/edit
StartFragment

Description
Editing is done based on the field "campaign_name"
You can edit using one field or all at once.

Bodyraw (json)
json
{
  "campaign_name": "Angry Birds",
  "advertiser": "Rovio",
  "country": "Finland",
  "conversion": "CPC",
  "bid": "3.85"
}

GET
Find campaigns
http://localhost:3000/campaigns/find
StartFragment

Description
You can search using one field or all for a more detailed search.

Bodyraw (json)
json
{
  "campaign_name": "Angry Birds",
  "advertiser": "Rovio",
  "country": "Finland",
  "conversion": "CPC",
  "bid": "3.85"
}

GET
Fetch campaigns
http://localhost:3000/fetch?country=finland
StartFragment

Description
Filters the best campaign by the highest bid using country as the main parameter.

Query Params
country=finland

DEL
Delete campaigns
http://localhost:3000/campaigns/delete

Bodyraw (json)
json
{
  "campaign_name": "Angry Birds"
}
