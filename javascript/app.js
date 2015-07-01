(function ($, window) {

    'use strict';

    var columnDefinitions = [
      {
          headerText: 'Name',
          key: 'fullName',
          dataType: 'string'
      },
      {
          headerText: 'Week 1',
          key: 'week1',
          dataType: 'string',
          template: '<div class="linear-gauge" data-week-number="1"></div>'
      },
      {
          headerText: 'Week 2',
          key: 'week2',
          dataType: 'string',
          template: '<div class="linear-gauge" data-week-number="2"></div>'
      }
    ];

    var rowsRendered = function () {
        window.app.grid.renderRows(window.app.data);
    };

    $(function () {

        $('#grid').igGrid({
            width: '100%',
            primaryKey: 'id',
            columns: columnDefinitions,
            dataSource: window.app.data,
            autoGenerateColumns: false,
            rowsRendered: rowsRendered
        });

    });
}($, window));