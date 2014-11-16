'use strict';

jhipsterApp
    .config(function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/book', {
                    templateUrl: 'views/books.html',
                    controller: 'BookController',
                    resolve:{
                        resolvedBook: ['Book', function (Book) {
                            return Book.query();
                        }],
                        resolvedAuthor: ['Author', function (Author) {
                            return Author.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        });
