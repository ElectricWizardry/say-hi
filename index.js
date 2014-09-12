exports = module.exports = function(name) {
  const START = process.hrtime()

  return function(req, res, next) {
    if (req.method !== 'GET' || req.url !== '/status')
      return next()

    var diff = process.hrtime(START),
      message = 'hi',
      uptime = Math.floor((diff[0] * 1e9 + diff[1]) / 1e6);
    if (name && typeof name === 'string' && name.length)
      message += ' from ' + name

    res.status(200).send({
      status: message,
      uptime: uptime
    })
  }
}
