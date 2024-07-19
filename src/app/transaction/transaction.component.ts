import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit, AfterViewInit {
  userId: any;
  name: any;
  searchTerm: string = "";
  alltrans: any[] = [];
  userTrans: any[] = [];
  graphData: any[] = [];
  chart: any;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];
      this.name = params['name'];
    });

    this.data.userTransction().subscribe({
      next: (response) => {
        this.alltrans = response;
        for (let i = 0; i < this.alltrans.length; i += 1) {
          if (this.alltrans[i].customer_id == this.userId) {
            this.userTrans.push(this.alltrans[i]);
          }
        }
        this.generateGraphData();
        this.renderGraph(); 
      },
    });
  }

  ngAfterViewInit(): void {
    this.renderGraph();
  }

  generateGraphData(): void {
    const dailyTransactions: { [key: string]: number } = {};
    this.userTrans.forEach((transaction) => {
      const date = new Date(transaction.date).toLocaleDateString();
      if (!dailyTransactions[date]) {
        dailyTransactions[date] = 0;
      }
      dailyTransactions[date] += transaction.amount;
    });

    this.graphData = Object.keys(dailyTransactions).map((date: any) => {
      return { date, amount: dailyTransactions[date] };
    });
  }

  renderGraph(): void {
    Chart.register(...registerables); 
    const ctx = document.getElementById('transaction-graph') as HTMLCanvasElement;
    if (!ctx) {
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }

    try {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.graphData.map((data) => data.date),
          datasets: [{
            label: 'Total Transaction Amount',
            data: this.graphData.map((data) => data.amount),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } catch (error) {
      console.error('Error creating chart:', error);
    }
  }

}