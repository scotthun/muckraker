import urllib.parse
import urllib.request
import json
import sys


with open('key.json') as file:
    keyFile = json.load(file)

KEY = keyFile['key']

apiUrls = {
    "recent_votes_house" : "https://api.propublica.org/congress/v1/house/votes/recent.json",   
    "recent_votes_senate" : "https://api.propublica.org/congress/v1/senate/votes/recent.json", 
    "current_members_house": "https://api.propublica.org/congress/v1/117/house/members.json",
    "current_members_senate": "https://api.propublica.org/congress/v1/117/senate/members.json"
}

header={"X-API-Key" : KEY}

jsonFiles = dict() 

for keyName in apiUrls:
    url = apiUrls[keyName]
    req = urllib.request.Request(url, None, header)
    response = urllib.request.urlopen(req)
    source = response.read()
    data = json.loads(source)
    if data['status']== "OK":
        jsonFiles[keyName] = data
       
    else:
        print("Error with GET Request, try again")
        sys.exit(1)

for nombre in jsonFiles:
     with open(nombre + ".json", 'w') as json_file:
         json.dump(jsonFiles[nombre], json_file)


