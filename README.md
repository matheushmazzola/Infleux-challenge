Nodejs-API

POST
Create campaigns
"https://nodejs-apii.herokuapp.com/campaigns/create"


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
"https://nodejs-apii.herokuapp.com/campaigns/edit"

Description
Editing is done based on the field "campaign_name"
You can edit using one field or all at once.


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
"https://nodejs-apii.herokuapp.com/campaigns/find?campaign_name=Angry Birds&advertiser=Rovio&country=Finland&conversion=CPC&bid=3.85"

Description
You can search using one field or all for a more detailed search.

Query Params
campaign_name=Angry Birds&advertiser=Rovio&country=Finland&conversion=CPC&bid=3.85

GET
Fetch campaigns
"https://nodejs-apii.herokuapp.com/fetch?country=finland"

Description
Filters the best campaign by the highest bid using country as the main parameter.

Query Params
country=finland

DEL
Delete campaigns
"https://nodejs-apii.herokuapp.com/campaigns/delete"


json
{
  "campaign_name": "Angry Birds"
}
