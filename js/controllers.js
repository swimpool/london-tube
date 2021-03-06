function TubeStatusCtrl($scope, $http, Chameleon, version) {

  var bugsense = new Bugsense({ apiKey: 'cb4096c7', appversion: version });

  // This has to be done like this or it doesn't work.
  // I should probably figure out why at some point, but not right now.
  setTimeout(function () {
    Chameleon.init({ version: version });
  }, 1);

  $scope.$on('chameleon.refresh', function () {
    updateStatus();
  });

  $scope.$on('chameleon.load', startPolling);
  $scope.$on('chameleon.resume', startPolling);
  $scope.$on('chameleon.pause', stopPolling);
  $scope.$on('chameleon.connect', startPolling);
  $scope.$on('chameleon.disconnect', stopPolling);
  $scope.$on('chameleon.notchameleon', startPolling);

  $scope.lineClicked = function (line) {
    $scope.$emit('chameleon.openLink', 'http://m.tfl.gov.uk/mt/www.tfl.gov.uk/tfl/livetravelnews/realtime/tube/default.html?un_jtt_v_message=' + line.id);
  };

  function startPolling(event) {
    stopPolling();
    updateStatus();
    $scope.$emit('chameleon.polling.start', {
      id: 'status-update',
      interval: 5 * 60,
      callback: function () {
        updateStatus();
      }
    });
  }

  function stopPolling(event) {
    $scope.$emit('chameleon.polling.stop', {
      id: 'status-update'
    });
  }

  function updateStatus() {
    $http.get('http://widgetgecko.com/api/london-tube/status.json?t=' +  Math.round((new Date()).getTime() / 1000))
      .success(function (data) {
        $scope.lines = data;
        $scope.lastUpdated = new Date();
      })
      .error(function (data, status, headers, config) {
        bugsense.notify(new Error('Update Status Error'));
      });
  }

  $scope.lines = [];
}