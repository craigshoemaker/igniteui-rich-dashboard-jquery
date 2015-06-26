(function (window) {

    'use strict';

    var data = [
        { 
            fullName : "Tyler Martinez",
            id: "0000009",
            hours: [
                { "worked": 10, "planned": 15, "other": 0, "overtime": 0, "total": 40 },
                { "worked": 20, "planned": 20, "other": 0, "overtime": 0, "total": 40 }
            ]
        },
        {
            fullName: "Zoey Walters",
            id: "0000007",
            hours: [
                { "worked": 33, "planned": 40, "other": 0, "overtime": 0, "total": 40 },
                { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
            ]
        },
        {
            fullName: "Jacob Johnson",
            id: "0000008",
            hours: [
                { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 },
                { "worked": 15, "planned": 30, "other": 0, "overtime": 0, "total": 40 }
            ]
        },
        {
            fullName: "Zachary Swenson",
            id: "0000002",
            hours: [
                { "worked": 22, "planned": 35, "other": 0, "overtime": 0, "total": 40 },
                { "worked": 22, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
            ]
        },
        {
            fullName: "Alexis Potts",
            id: "0000002",
            hours: [
                { "worked": 20, "planned": 20, "other": 0, "overtime": 0, "total": 40 },
                { "worked": 35, "planned": 35, "other": 0, "overtime": 0, "total": 40 }
            ]
        }
    ];


    window.app = window.app || {};
    window.app.data = data;
}(window));