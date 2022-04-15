const middleware = {}

middleware['authenticate'] = require('../middleware/authenticate.js')
middleware['authenticate'] = middleware['authenticate'].default || middleware['authenticate']

middleware['notAuthenticate'] = require('../middleware/notAuthenticate.js')
middleware['notAuthenticate'] = middleware['notAuthenticate'].default || middleware['notAuthenticate']

export default middleware
