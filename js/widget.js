$(function () {

  chameleon.widget({

    onLoad: function () {
    },

    onCreate: function () {
    },

    onResume: function () {
    },

    onPause: function () {
    },

    onLayout: function () {
        chameleon.setTitle({ text: $('body').height() })
    },

    onScrollTop: function () {
    },

    onScrollElsewhere: function () {
    },

    onLayoutModeStart: function () {
    },

    onLayoutModeComplete: function () {
    },

    onConnectionAvailableChanged: function (available) {
    },

    onConfigure: function () {
    },

    onTitleBar: function () {
    },

    onRefresh: function () {
    },

    onAction: function () {
    },

    notChameleon: function () {
      $('body').addClass('not-chameleon')
    }

  })

})