angular.module('widget.filters', [])
  .filter('titlecase', function () {
    return function (input) {
      return input.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };
  });