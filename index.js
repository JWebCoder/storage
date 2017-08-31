const storage = {
  get: function(key) {
    let result = localStorage.getItem(key),
      pass = true;
    if (result) {
      let ttl = this.get(`${key}_ttl`);
      if (ttl) {
        if(((new Date()).getTime() - ttl.timestamp) > ttl.time) {
          pass = false;
        }
      }

      if (pass) {
        if (result[0] === '{') {
          result = JSON.parse(result);
        }
      } else {
        result = null;
      }
    }

    return result;
  },

  setTTL: function(key, value, ttl) {
    let time = (ttl || 15) * 60000;

    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    this.set(key, value);
    this.set(`${key}_ttl`, {
      time: time,
      timestamp: (new Date()).getTime()
    });
  },

  set: function(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },

  remove: function(key) {
    localStorage.removeItem(key);
  },

  count: function() {
    return localStorage.length;
  },

  all: function () {
    return localStorage;
  }
};

module.exports = storage;
