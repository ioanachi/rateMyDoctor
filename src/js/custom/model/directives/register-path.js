import {
  app
} from '../../main.js';
app.directive("registrDirective", ["$location", function($location) {
  return {
    restrictive: "A",
    link: function(scope, element, attrs) {
      element.on("click", function() {
        console.log(attrs.registrDirective, "attrs");
        scope.$apply(function() {
          $location.path(attrs.registrDirective)
        });
      });
    },
  }
}])
