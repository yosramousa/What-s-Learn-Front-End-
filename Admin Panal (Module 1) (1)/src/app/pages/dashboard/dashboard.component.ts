import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Router } from '@angular/router';

import { DashBordService } from 'Services/dash-bord.service';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import * as signalR from "@aspnet/signalr";

declare var $: any;


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  Name = "DashBord"
  Users: number
  Visitors: number;
  Roadmap: number;
  Maincategory: number;
  Test: string = "#"
  Data: number[]
  PieChaertTracks: string[]
  PieChaertNums: number[]
  DateChartMonth: string[]
  DateChartNums: number[]
  DateChartData: []
  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  LastUpdate: String
  PieLastUpdate: String

  constructor(private router: Router, private dashBordService: DashBordService, private toastr: ToastrService,
  ) {

  }


  private connection: any;
  private proxy: any;
  private proxy2: any;
  private proxy3: any;
  private proxy4: any;
  private proxy5: any;


  //

  // calculateDiff(dateSent){
  //   let currentDate = new Date();
  //   dateSent = new Date(dateSent);
  //  //var diff = Math.abs(new Date("2011/10/09 12:00") - new Date('2011/10/09 00:00'));
  //   return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60) *60);
  // }
  getRealtimeStaastics() {

    console.log("getRealtimeStaastics")
    this.connection = $.hubConnection(environment.api_url);
    this.proxy = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy2 = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy3 = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy4 = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy5 = this.connection.createHubProxy("WhatsLearnHub");




    this.proxy.on("VisitorCount", (VisitorCount) => {
      /// if (VisitorCount != undefined) {
      //// console.log("VisitorCount")
      this.Visitors = VisitorCount
      // this.GetStatistics()

      //   }

    });

    this.proxy2.on("UserCount", (Data) => {
      if (Data != undefined) {

        this.Users = Data.UserCount
        this.DateChartNums = Object.keys(Data.ChartData).map(key => Data.ChartData[key])
        localStorage.setItem("DateChartLastUpdate", new Date().toString())
        this.LastUpdate = new Date().toLocaleDateString() +" "+new Date().toLocaleTimeString()

       this.DrowLinChart()

      }

    });

    this.proxy3.on("MainCategoryCount", (MainCategoryCount) => {
      if (MainCategoryCount != undefined) {
        console.log("MainCategoryCount")
        this.Maincategory = MainCategoryCount
      }

    });
    this.proxy4.on("TrackCount", (TrackCount) => {
      if (TrackCount != undefined) {
        console.log("TrackCount")
        this.Roadmap = TrackCount
      }

    });
    this.proxy5.on("UpdatePieChart", (PieChartData) => {
      if (PieChartData != undefined) {
        //  console.log(PieChartData)
        this.PieChaertTracks = Object.keys(PieChartData)

        this.PieChaertNums = Object.keys(PieChartData).map(key => PieChartData[key]);
        localStorage.setItem("PieChartLastUpdate", new Date().toString())
        this.PieLastUpdate = new Date().toLocaleDateString() +" "+new Date().toLocaleTimeString()

        //   console.log(this.PieChaertNums)
        this.DrowPieChart()



      }

    });
    //UpdatePieChart
    this.connection.start({ withCredentials: false });

  }

  ngOnInit() {


    
    this.LastUpdate = new Date(localStorage.getItem("DateChartLastUpdate")).
    toLocaleDateString()
     +" "+
    new Date(localStorage.getItem("DateChartLastUpdate")).
    toLocaleTimeString()

    
    
    this.PieLastUpdate = new Date(localStorage.getItem("PieChartLastUpdate")).
    toLocaleDateString()
     +" "+
    new Date(localStorage.getItem("PieChartLastUpdate")).
    toLocaleTimeString()

    


    this.GetStatistics()

  }

  GetStatistics() {
    this.dashBordService.GetALLData().subscribe(res => {
      console.log()
      this.Users = res.Statistic.UserCount
      this.Visitors = res.Statistic.VisitorCount

      this.Roadmap = res.Statistic.trackCount
      this.Maincategory = res.Statistic.MainCategoryCount
      this.PieChaertNums = Object.keys(res.PiChart).map(key => res.PiChart[key]);
      this.PieChaertTracks = Object.keys(res.PiChart)
      this.DateChartNums = Object.keys(res.MonthlyChart).map(key => res.MonthlyChart[key])
      console.log(res)

      //this.DrowPieChart();
      this.DrowCharts();


    }, err => {

    })
    this.getRealtimeStaastics()

  }

  DrowCharts() {
    this.chartColor = "#11111";

    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.chartHours = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Noc", "Dec"],
        datasets: [
          {
            borderColor: "#6bd098",
            backgroundColor: "#6bd098",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: this.DateChartNums
          },

        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });


    console.log(localStorage.getItem("DateChartLastUpdate"))
    this.canvas = document.getElementById("chartEmail");
    this.ctx = this.canvas.getContext("2d");
    this.chartEmail = new Chart(this.ctx, {
      type: 'pie',
      data: {

        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#e3e3e3',
            '#4acccd',
            '#fcc468',
            '#ef8157'
          ],
          borderWidth: 0,
          data: this.PieChaertNums
        }]
      },

      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });

    // var speedCanvas = document.getElementById("speedChart");

    // var dataFirst = {
    //   data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
    //   fill: false,
    //   borderColor: '#fbc658',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: '#fbc658',
    //   pointRadius: 4,
    //   pointHoverRadius: 4,
    //   pointBorderWidth: 8,
    // };

    // var dataSecond = {
    //   data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
    //   fill: false,
    //   borderColor: '#51CACF',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: '#51CACF',
    //   pointRadius: 4,
    //   pointHoverRadius: 4,
    //   pointBorderWidth: 8
    // };

    // var speedData = {
    //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //   datasets: [dataFirst, dataSecond]
    // };

    // var chartOptions = {
    //   legend: {
    //     display: false,
    //     position: 'top'
    //   }
    // };

    // var lineChart = new Chart(speedCanvas, {
    //   type: 'line',
    //   hover: false,
    //   data: speedData,
    //   options: chartOptions
    // });
  }

  DrowPieChart() {
    this.chartColor = "#11111";
    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.canvas = document.getElementById("chartEmail");
    this.ctx = this.canvas.getContext("2d");

    this.canvas = document.getElementById("chartEmail");
    this.ctx = this.canvas.getContext("2d");
    this.chartEmail = new Chart(this.ctx, {
      type: 'pie',
      data: {

        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#e3e3e3',
            '#4acccd',
            '#fcc468',
            '#ef8157'
          ],
          borderWidth: 0,
          data: this.PieChaertNums
        }]
      },

      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });


  }


  DrowLinChart()
  {
    this.chartColor = "#11111";

    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.chartHours = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Noc", "Dec"],
        datasets: [
          {
            borderColor: "#6bd098",
            backgroundColor: "#6bd098",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: this.DateChartNums
          },

        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });

  }
}


