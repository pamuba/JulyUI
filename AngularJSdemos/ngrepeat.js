//1. Create a module
var myApp = angular
                .module("myModule",[])
                .controller("myController",function($scope){
                    var employees = [
                        { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
                        { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
                        { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
                        { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
                        { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
                    ];

                    var countries = [
                        {
                            name: "UK",
                            cities: [
                                { name: "London" },
                                { name: "Birmingham" },
                                { name: "Manchester" }
                            ]
                        },
                        {
                            name: "USA",
                            cities: [
                                { name: "Los Angeles" },
                                { name: "Chicago" },
                                { name: "Houston" }
                            ]
                        },
                        {
                            name: "India",
                            cities: [
                                { name: "Hyderabad" },
                                { name: "Chennai" },
                                { name: "Mumbai" }
                            ]
                        }
                    ];

                    var technologies = [
                        {name:"Angular" , likes:0, dislikes:0},
                        {name:"React" , likes:0, dislikes:0},
                        {name:"MogoDB" , likes:0, dislikes:0},
                        {name:"VueJS" , likes:0, dislikes:0},
                        {name:"Grap QL" , likes:0, dislikes:0},
                        {name:"Native" , likes:0, dislikes:0},
                    ]

                    $scope.employees = employees;
                    $scope.countries = countries;
                    $scope.technologies = technologies;

                    $scope.incrementLikes = function(tehnology){
                        tehnology.likes++
                    }
                    $scope.incrementDislikes = function(tehnology){
                        tehnology.dislikes++
                    }
                })

