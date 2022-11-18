# Description

Challenge created with the objective of modeling and implementing a simple Ad Network.

When creating a campaign, the advertiser can choose its conversion type: cpm, cpc or cpi,
depending on which event will be used to pay the Publisher.
1. CPM (Cost per mille impressions) - the advertiser pays a bid every time the publisher
displays the ad.
2. CPC (Cost per click) - the advertiser pays a bid every time there is a click on the ad.
3. CPI (Cost per install) - the advertiser pays a bid every time there is an install of the app
being advertised (after the ad was displayed and clicked)



# Nodejs-API

### Create campaigns [POST /campaigns/create]

https://nodejs-apii.herokuapp.com/campaigns/create

+ Request (application/json)

    + Body

            {
				"campaign_name": "Angry Birds",
				"advertiser": "Rovio",
				"country": "Finland",
				"conversion": "CPC",
				"bid": "3.85"
			}


### Edit campaigns [PUT /campaigns/edit]

https://nodejs-apii.herokuapp.com/campaigns/edit?_id=$id

Description

You can edit using one field or all at once.

+ Request (application/json)

    + Body

            {
				"campaign_name": "Angry Birds",
				"advertiser": "Rovio",
				"country": "Finland",
				"conversion": "CPC",
				"bid": "3.85"
			}


### Find campaigns [GET /campaigns/find]

https://nodejs-apii.herokuapp.com/campaigns/find?campaign_name=Angry%20Birds&advertiser=Rovio&country=Finland&conversion=CPC&bid=3.85

Description

You can search using one field or all for a more detailed search.

+ Request (application/json)

    + Params
		?campaign_name=Angry Birds&advertiser=Rovio&country=Finland&conversion=CPC&bid=3.85


### Fetch campaigns [GET /fetch]

https://nodejs-apii.herokuapp.com/fetch?country=finland

Description

Filters the best campaign by the highest bid using country as the main parameter.


+ Request (application/json)

    + Params
		?country=finland


### Delete campaigns [DELETE /campaigns/delete]

Description

You can delete campaigns by _id.

https://nodejs-apii.herokuapp.com/campaigns/delete?_id=$id


