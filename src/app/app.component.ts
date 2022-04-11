import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name = 'Angular';

  options: any;



  ngOnInit() {
    const xAxisData = [];

    let base = +new Date(2020, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    const data1 = [[base, Math.random() * 300]];
    const data2 = [[base, Math.random() * 100]];
    for (let i = 1; i < 100; i++) {
      let now = new Date((base += oneDay));
      data1.push([+now, Math.round((Math.random() - 0.5) * 20 + data1[i - 1][1])]);
      data2.push([+now, Math.round((Math.random() - 0.5) * 20 + data1[i - 1][1])]);
    }

    this.options = {
      tooltip: {
        trigger: 'axis',
        formatter: function (a: any) {
          if(a[0].data !== null){
            return (
              'Time : '+
              a[0].name +
              '<br/>' +
              a[0].seriesName +
              ' : HANGING'
            );
          }else{
            return('');
          }
          
      },
      },
      legend: {
        data: ['WSP 5 (PC container put 4)/Flow Switch']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: ['2022-02-24T17:34:11Z', '2022-02-25T17:34:11Z', '2022-02-26T17:34:11Z', '2022-02-27T17:34:11Z', '2022-02-28T17:34:11Z', '2022-02-29T17:34:11Z']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'WSP 5 (PC container put 4)/Flow Switch',
          type: 'line',
          step: 'start',
          data: [null, 1, 1, null, 1, null]
        }
      ]
    };
    /*
    this.options = {
      title: {
        text: 'Humidity values in my locations'
      },
      tooltip: {
        //formatter: 'Time: 18:00<br/>{a}: {c} <br />{a1}  {b1}:',
        formatter: function (a) {
          return (
              'Time : ' +
              a[0].axisValueLabel +
              '<br>' +
              a[0].seriesName +
              ': ' +
              a[0].data[1] +
              ' %<br>' +
              a[1].seriesName +
              ': ' +
              a[1].data[1] +
              ' %'
          );
      },
        backgroundColor: 'rgba(0, 0, 0, 0.61)',
        textStyle: {
          color: 'rgba(255, 255, 255, 1)'
        },
        trigger: 'axis',
        axisPointer: {
          animation: false,
          type: 'cross'
        }
      },
      legend: {
        bottom: 0,
        left: 'center',
        data: [
          '02ARachel / Internal Humidity',
          '01ARachel / Internal Humidity'
        ]
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        name: 'Time',
        type: 'time',
        splitLine: {
          show: false
      },
      },
      yAxis: {
        type: 'value',
        name: "%",
        nameLocation: "middle",
        nameTextStyle: {
            fontStyle: "oblique",
            align: "center",
            fontSize: 13,
            fontWeight: "bold",
            verticalAlign: "bottom",
            lineHeight: 21
        },
        axisLabel: {
          formatter: '{value} %'
        }
      },
      
      series: [
        {
          name: '02ARachel / Internal Humidity',
          type: 'line',
    
          data: data1,
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: '01ARachel / Internal Humidity',
          type: 'line',
          data: data2
        }
      ]
    };
    */
  }
}