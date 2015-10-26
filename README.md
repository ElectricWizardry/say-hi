
# say-hi


[Express](https://github.com/strongloop/express) middleware to say hi and monitor uptime.

## Usage


```javascript
var app = require('express')()
app.use(require('say-hi')('example'))
app.listen(process.env.PORT || 3000)
```

## Request


```http
GET /status HTTP/1.1
Accept: application/json
Host: example.com
```

## Response


```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "status": "hi from example",
  "uptime": 12345
}
```

## License


[MIT](http://ew.mit-license.org/2014)
