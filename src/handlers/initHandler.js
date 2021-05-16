const Redis = require("ioredis")
require("dotenv").config()

const init = () => {
  // ***************
  // Configure Redis
  // ***************
  const redisConnectionString = `rediss://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`

  // uses defaults unless given configuration object
  const redis = new Redis(redisConnectionString)

  return { redis }
}

export default init
