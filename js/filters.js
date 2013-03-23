angular.module('widget.filters', [])

  // Titlecase Filter

  .filter('titlecase', function () {
    return function (input) {
      return input.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };
  })

  // Line Splitting Filter

  .filter('split', function () {
    return function (input, sep) {
      var replaceRegex = new RegExp(sep, 'g');
      return input.replace(replaceRegex, '<br />');
    };
  });