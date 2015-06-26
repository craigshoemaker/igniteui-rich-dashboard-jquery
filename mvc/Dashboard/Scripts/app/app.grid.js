(function ($, window) {

    var renderRows = function (data) {

        $('.linear-gauge').each(function () {

            var gaugeContainer = $(this);
            var weekNumber = gaugeContainer.data('week-number');
            var weekIndex = (parseInt(weekNumber) - 1);
            var rowIndex = gaugeContainer.closest('tr').index();
            var employeeData = data[rowIndex];
            var hrs = employeeData.hours[weekIndex];

            var gaugeRanges = [];

            var rangeCalculator = app.rangeCalculatorFactory(hrs);

            gaugeRanges.push(
              {
                  name: 'free',
                  startValue: rangeCalculator.free.start(),
                  endValue: rangeCalculator.free.end()
              },
              {
                  name: 'worked',
                  startValue: rangeCalculator.worked.start(),
                  endValue: rangeCalculator.worked.end()
              },
              {
                  name: 'planned',
                  startValue: rangeCalculator.planned.start(),
                  endValue: rangeCalculator.planned.end()
              },
              {
                  name: 'plannedOther',
                  startValue: rangeCalculator.plannedOther.start(),
                  endValue: rangeCalculator.plannedOther.end()
              },
              {
                  name: 'overtime',
                  startValue: rangeCalculator.overtime.start(),
                  endValue: rangeCalculator.overtime.end()
              }
            );

            gaugeContainer.igLinearGauge({
                height: '60px',
                width: '100%',
                minimumValue: 0,
                maximumValue: 40,
                value: hrs.worked,
                ranges: gaugeRanges,
                fontBrush: 'transparent',
                backingBrush: 'transparent',
                backingOutline: 'transparent',
                rangeBrushes: ['#303030', '#4fa0b5', '#84cde0', '#FBA137', '#FF5D43'],
                transitionDuration: 250,
                labelExtent: 1.5, // label positioning
                needleBreadth: 0, // needle width
                needleInnerExtent: 0,
                needleInnerPointExtent: 0,
                needleInnerPointWidth: 0,
                needleOuterExtent: 0,
                needleOuterPointExtent: 0,
                needleOuterPointWidth: 0,
                needleStrokeThickness: 0,
                ticksPostInitial: 1000 // over shoot the maxValue to remove tick marks
            });
        });
    };

    window.app = window.app || {};
    window.app.grid = {
        renderRows: renderRows
    };

}($, window));