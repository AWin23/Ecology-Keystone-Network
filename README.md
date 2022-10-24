# Ecology Keystone Network 
Ecology Keystone Network is a software that informs people on localized concurrent natural disasters and global ecological disasters. 

Our project is a full-stack web application that runs on Netlify. You traverse a 2d map of your local area or across the globe and can click on certain keystones to learn more about them. These keystones are concurrent natural disasters in your local area and/or ecological disasters across the globe. By clicking these keystones, you are informed about the type of event it is, its date of origin, its region of impact, as well as additional information and safety guidelines from an embedded hyperlink.

For both keystone types, concurrent natural disasters and ecological disasters, we have an automated system that scrapes the internet and government databases for keywords, phrases, and location matching to identify and publicize these natural and ecological disasters as unverified keystones. We then have a small team verify the legitimacy of the event and its details before we officially verify it as a keystone on our map. With localized concurrent natural disasters specifically, we also aggregate from local news stations and online sources in the area of the reported concurrent disaster. We chose this method because we figured that the speed at which disasters are reported is the fastest when done by local observers and new stations assigned to particular regions of geography. Our keystones update as information from our sources updates. Once the natural disaster passes, we store its information in our history of previous natural disasters in that localized area and remove its keystone from the 2d map.

Some different features that we have implemented and/or are attempting to implement are the following. A search option that allows you to filter for certain characteristics such as wildfire disasters, floods, localized disasters, or global ecological disasters. A proactive tool that tracks your localized location and creates a “disaster bubble” around you to specifically highlight and inform you of specific hazards to avoid. A connectivity feature is that when you hover over a particular type of natural or ecological disaster, other disasters of that type are also highlighted on the map to showcase similar areas of impact. An extension tool that allows you to look over an area's preexisting history of natural and/or ecological disasters. A broadcast system that allows you to watch new reports as they happen live through our application regarding concurrent natural disasters.