(function (window) {

    'use strict';

    var factory = function (hrs) {

        var calculator = {

            hrs: hrs,

            free: {
                start: function () { return 0; },
                end: function () { return 40; }
            },

            worked: {
                start: function () { return 0; },
                end: function () { return (calculator.hrs.worked - calculator.hrs.overtime); }
            },

            planned: {
                start: function () { return (calculator.hrs.worked - calculator.hrs.overtime); },
                end: function () {
                    return ((calculator.hrs.worked > calculator.hrs.planned) ?
                            (calculator.hrs.worked - calculator.hrs.overtime) :
                             calculator.hrs.planned);
                }
            },

            plannedOther: {
                start: function () {
                    ((calculator.hrs.planned > (Math.abs(40 - calculator.hrs.other))) ?
                    ((calculator.hrs.planned <= 40) ? calculator.hrs.planned : 40) :
                      0);
                },
                end: function () {
                    ((calculator.hrs.planned > (Math.abs(40 - calculator.hrs.other))) ?
                     (Math.abs(40 - calculator.hrs.other)) :
                      0)
                }
            },

            overtime: {
                start: function () { return (calculator.hrs.worked - calculator.hrs.overtime); },
                end: function () { return calculator.hrs.worked; }
            }
        };

        return calculator;
    };

    window.app = window.app || {};
    window.app.rangeCalculatorFactory = factory;

}(window));