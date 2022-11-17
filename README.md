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

https://nodejs-apii.herokuapp.com/campaigns/edit?campaign_name=Angry%20Birds

Description
Editing is done based on the param "campaign_name"
You can edit using one field or all at once.

+ Request (application/json)

    + Body

		{
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

https://nodejs-apii.herokuapp.com/campaigns/delete


+ Request (application/json)

    + Body

            {
				"campaign_name": "Angry Birds"
			}
