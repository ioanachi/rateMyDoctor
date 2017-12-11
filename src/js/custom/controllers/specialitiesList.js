import {
  app
} from '../main.js';


app.controller("SpecilitiesListController", ["$scope", 'httpGetService', function($scope, httpGetService) {
  var tThis=this;
httpGetService.getSpecialy.then(function(raspuns){
console.log(raspuns);





})

  tThis.dummy = [{
      level: "one",
      name: "dolor sit amet, consectetur adipiscing elit. Nulla vene",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur  felis nec, feugiat ultricies mi."
    },
    {
      level: "two",

      name: " tae nunc leo. Cras sed nisl consectetur, rhoncussapien sit amet, tempu",
      description: "<p>Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis. Etiam in tempor tortor. Vivamus faucibus egestas enim, atconvallis diam pulvinar vel. Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed nisl consectetur, rhoncussapien sit amet, tempus sapien.</p><p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id anteeu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p>"
    },
    {
      level: "three",

      name: "Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. ",
      description: "<p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p>"
    },
  ];
}]);
