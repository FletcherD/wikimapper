'use strict';

module.exports = {

  tabs: {
    get: function(tabId, callback) {}
  },

  webNavigation: {
    onCommitted: {
      addListener: function() {}
    }
  },

  browserAction: {
    onClicked: {
      addListener: function() {}
    }
  },

  runtime: {
    onInstalled: {
      addListener: function() {}
    },
    onMessage: {
      addListener: function() {}
    }
  }

};