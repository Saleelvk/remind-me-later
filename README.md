##remind me later(backend)
reminders :-
- Accepts reminder details like date, time, message
- Saves them in a database
- Stores data in MongoDB
- Simple and clean Express.js backend


-- this is the endpoint -- 
POST /api/v1/reminder/create

-- use this if you want a add some message --
{
  "date": "2025-05-15",
  "time": "10:00",
  "message": "Running",
  "method": "sms"
}
