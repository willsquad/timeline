var projects = {
    "summary" : "Main Project Summary",
    "start date" : "2018-01-01", //yyyy-mm--dd | var d=new Date(str);  //converts the string into date object | var m=d.getMonth()+1; //get the value of month
    "end date" : "2018-06-01", //yyyy-mm-dd
    "duration" : 150,
    "teams" : {
        "team 1" : {
            "summary" : "Team 1 Summary",
            "start date" : "2018-01-01", //yyyy-mm--dd | var d=new Date(str);  //converts the string into date object | var m=d.getMonth()+1; //get the value of month
            "end date" : "2018-03-19", //yyyy-mm-dd
            "duration" : 48,
            "members" : {
                0 : {
                    "name" : "John Doe",
                    "image" : "john_doe.jpg",
                },
                1 : {
                    "name" : "John Doe 1",
                    "image" : "john_doe_1.jpg",
                },
                2 : {
                    "name" : "John Doe 2",
                    "image" : "john_doe2.jpg",
                },
                3 : {
                    "name" : "John Doe 3",
                    "image" : "john_doe_3.jpg",
                },
                4 : {
                    "name" : "John Doe 4",
                    "image" : "john_doe_4.jpg",
                },
                5 : {
                    "name" : "John Doe 5",
                    "image" : "john_doe_5.jpg",
                },
                6 : {
                    "name" : "John Doe 6",
                    "image" : "john_doe_6.jpg",
                },
                7 : {
                    "name" : "John Doe 7",
                    "image" : "john_doe_7.jpg",
                },
                8 : {
                    "name" : "John Doe 8",
                    "image" : "john_doe_8.jpg",
                },
                9 : {
                    "name" : "John Doe 9",
                    "image" : "john_doe_9.jpg",
                }
            },
            "projects" : {
                "A" : {
                    "assigned to" : [0, 1, 2, 3],
                    "summary" : "Summary Project A",
                    "tasks" : {
                        "Task 1A" : {
                            "assigned to" : [0, 1],
                            "summary" : "Summary Task 1A",
                            "start date" : "2018-15-01", //yyyy-mm--dd | var d=new Date(str);  //converts the string into date object | var m=d.getMonth()+1; //get the value of month
                            "end date" : "2018-30-01", //yyyy-mm-dd
                            "duration" : 15
                        },
                        "Task 2B" : {
                            "assigned to" : [2, 3],
                            "summary" : "Summary Task 2B",
                            "start date" : "2018-31-01", //yyyy-mm--dd | var d=new Date(str);  //converts the string into date object | var m=d.getMonth()+1; //get the value of month
                            "end date" : "2018-16-02", //yyyy-mm-dd
                            "duration" : 16
                        }
                    }
                },
                "B" : {
                    "assigned to" : [4, 5, 6],
                    "summary" : "Summary Project B",
                    "tasks" : {
                        "Task 2A" : {
                            "assigned to" : [4],
                            "summary" : "Summary Task 2A",
                            "start date" : "2018-15-01", //yyyy-mm--dd | var d=new Date(str);  //converts the string into date object | var m=d.getMonth()+1; //get the value of month
                            "end date" : "2018-30-01", //yyyy-mm-dd
                            "duration" : 15
                        },
                        "Task 3A" : {
                            "assigned to" : [5, 6],
                            "summary" : "Summary Task 3A",
                            "start date" : "2018-31-01", //yyyy-mm--dd | var d=new Date(str);  //converts the string into date object | var m=d.getMonth()+1; //get the value of month
                            "end date" : "2018-16-02", //yyyy-mm-dd
                            "duration" : 16
                        }
                    }
                },
                "C" : {
                    "assigned to" : [7, 8, 9],
                    "summary" : "Summary Project C",
                    "tasks" : {
                        "Task 4A" : {
                            "assigned to" : [7, 8],
                            "summary" : "Summary Task 4A",
                            "start date" : "2018-15-01", //yyyy-mm--dd | var d=new Date(str);  //converts the string into date object | var m=d.getMonth()+1; //get the value of month
                            "end date" : "2018-30-01", //yyyy-mm-dd
                            "duration" : 15
                        },
                        "Task 5B" : {
                            "assigned to" : [9],
                            "summary" : "Summary Task 5B",
                            "start date" : "2018-31-01", //yyyy-mm--dd | var d=new Date(str);  //converts the string into date object | var m=d.getMonth()+1; //get the value of month
                            "end date" : "2018-16-02", //yyyy-mm-dd
                            "duration" : 16
                        }
                    }
                }
            }
            
        },
        "team 2" : {
    
        },
        "team 3" : {
    
        }
    }
}