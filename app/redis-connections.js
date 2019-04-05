class RedisConnections {
  constructor(config, redis) {
    this.config = config;
    this.Redis = redis;
  }

  connect() {
    try {
      const connections = [];
      this.config.forEach((element) => {
        const redis = new this.Redis({
          host: element.host,
          port: element.port,
          autoResubscribe: false,
          retryStrategy: () => 5000,
        });
        connections.push(redis);
      });
      return connections;
    } catch (error) {
      return [];
    }
  }
}
module.exports = RedisConnections;
