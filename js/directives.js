angular.module('widget.directives', [])
  .directive('statusLine', function () {
    return function (scope, element, attrs) {
      $(element).attr('data-line-id', scope.line.id);
      $(element).attr('data-ok', scope.line.status === 'good service');
      if (scope.line.status === 'good service') {
        $(element).find('.status').removeClass('colour');
      }
      else {
        $(element).find('.status').addClass('colour');
      }
    };
  })
  .directive('timeFromNow', function($timeout) {
    return function (scope, element, attrs) {
      var timeoutId = null;
      var momentDate = null;
 
      function updateTime() {
        element.text(momentDate.fromNow());
      }
 
      scope.$watch(attrs.timeFromNow, function (value) {
        momentDate = moment(value);
        updateTime();
      });
 
      function updateLater() {
        timeoutId = $timeout(function() {
          updateTime();
          updateLater();
        }, 60 * 1000);
      }
 
      element.bind('$destroy', function() {
        $timeout.cancel(timeoutId);
      });
 
      updateLater();
    }
  });