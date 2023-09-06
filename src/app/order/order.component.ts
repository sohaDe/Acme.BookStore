import { ListService, PagedResultDto, Rest } from '@abp/ng.core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { salesChannelsOptions } from '@proxy/catalog';
import { AdminSalesOrderList, OrderPaymentStatus, OrderService, OrderStatus, SalesOrderDto, SalesOrderRequestDto, orderPaymentStatusOptions, orderStatusOptions, shippingStatusOptions } from '@proxy/orders';
// import { deliveryTypeOptions } from '@proxy/stores';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';
import { Observable, filter } from 'rxjs';

export interface Order {
  id: number;
  customer: string;
  price: number;
  date: string;
  type: string;
  salesChannel:string;
  status: string;
  payment: string;
  shipping:string
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [ListService,],
})

export class OrderComponent implements OnInit {
  // order = { items: [], totalCount: 0 } as PagedResultDto<AdminSalesOrderList>;
  // orderStatus= orderStatusOptions;
  // OrderPaymentStatus = orderPaymentStatusOptions;
  // deliveryType=deliveryTypeOptions;
  // shippingStatus=shippingStatusOptions;
  // salesChannel=salesChannelsOptions;

 
  // selectedDates: Date[] = [];

  searchValue = '';
  date = null;
  dateRange: Date[];

  isEnglish = false;

  listOfData: Order[] = [
    {
      id: 1,
      customer: 'Ali',
      price: 50,
      date: '9/1/2023',
      status: 'New',
      type: 'Delivery',
      salesChannel:'Point of Sale',
      payment: 'Unpaid',
      shipping:'shipped'
    },
    {
      id: 2,
      customer: 'Sarah',
      price: 50,
      date: '3/2/2023',
      status: 'Unacceptable',
      type: 'Delivery',
      salesChannel:'Point of Sale',
      payment: 'Unpaid',
      shipping:'shipped'

    },
    {
      id: 3,
      customer: 'Amal',
      price: 100,
      date: '5/12/2023',
      status: 'Accepted',
      type: 'Received',
      salesChannel:'Store',
      payment: 'Paid',
      shipping:'Pending'

    },
    {
      id: 4,
      customer: 'Mohammad',
      price: 75,
      date: '1/3/2023',
      status: 'Ready',
      type: 'Local',
      salesChannel:'Market Bliss',
      payment: 'Unpaid',
      shipping:'shipped'

    },
    {
      id: 5,
      customer: 'Rana',
      price: 50,
      date: '2/4/2023',
      status: 'Completed',
      type: 'Received',
      salesChannel:'Store',
      payment: 'Paid',
      shipping:'shipped'

    },
    {
      id: 6,
      customer: 'Ali',
      price: 50,
      date: '1/1/2023',
      status: 'New',
      type: 'Delivery',
      salesChannel:'Store',
      payment: 'Unpaid',
      shipping:'Pending'

    },
    {
      id: 7,
      customer: 'Sarah',
      price: 50,
      date: '8/6/2023',
      status: 'Unacceptable',
      type: 'Delivery',
      salesChannel:'Point of Sale',
      payment: 'Unpaid',
      shipping:'shipped'

    },
    {
      id: 8,
      customer: 'Amal',
      price: 100,
      date: '1/4/2023',
      status: 'Accepted',
      type: 'Received',
      salesChannel:'Store',
      payment: 'Paid',
      shipping:'shipped'

    },
    {
      id: 9,
      customer: 'Mohammad',
      price: 75,
      date: '7/1/2023',
      status: 'Ready',
      type: 'Local',
      salesChannel:'Market Bliss',
      payment: 'Unpaid',
      shipping:'Pending'

    },
    {
      id: 10,
      customer: 'Rana',
      price: 50,
      date: '3/6/2023',
      status: 'Completed',
      type: 'Received',
      salesChannel:'Store',
      payment: 'Paid',
      shipping:'Pending'

    },
    {
      id: 11,
      customer: 'Ali',
      price: 50,
      date: '4/1/2023',
      status: 'New',
      type: 'Delivery',
      salesChannel:'Store',
      payment: 'Unpaid',
      shipping:'shipped'

    },
    {
      id: 12,
      customer: 'Sarah',
      price: 50,
      date: '5/1/2023',
      status: 'Unacceptable',
      type: 'Delivery',
      salesChannel:'Store',
      payment: 'Unpaid',
      shipping:'shipped'

    },
    {
      id: 13,
      customer: 'Amal',
      price: 100,
      date: '12/4/2023',
      status: 'Accepted',
      salesChannel:'Store',
      type: 'Received',
      payment: 'Paid',
      shipping:'Pending'

    },
    {
      id: 14,
      customer: 'Mohammad',
      price: 75,
      date: '7/8/2023',
      status: 'Ready',
      type: 'Local',
      salesChannel:'Store',
      payment: 'Unpaid',
      shipping:'shipped'

    },
    {
      id: 85,
      customer: 'Rana',
      price: 50,
      date: '8/7/2023',
      status: 'Completed',
      type: 'Received',
      salesChannel:'Store',
      payment: 'Paid',
      shipping:'Pending'

    },

  ]

  constructor(
    private i18n: NzI18nService,
    // public readonly list: ListService,
    // private orderService : OrderService,
   
  ) {}

  
  ngOnInit() {
    this.i18n.setLocale(en_US);
   
    // const orderCreator = (query) => this.orderService.getListV2(query);
    
    // this.list.hookToQuery(orderCreator).subscribe((response) => {
    //   this.order = response;
    // });
  }

  getColor(status: string): string {
    switch (status) {
      case 'New':
        return 'blue';
      case 'Accepted':
        return 'gold';
      case 'Ready':
        return 'purple';
      case 'Completed':
        return 'green';
      case 'Unacceptable':
        return 'red'
    }
  }

  listOfDisplayData = [...this.listOfData];
  search(search) {
    const targetValue: any[] = [];
    this.listOfDisplayData.forEach((value: any) => {
      let keys = Object.keys(value);
      for (let i = 0; i < keys.length; i++) {
        if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
          targetValue.push(value);
          break;
        }
      }
    });
    this.listOfData = targetValue;
  }


  onChange(event) {
    this.dateRange = event;
  }

  filterByDate() {
    const filteredData = this.listOfData.filter(data => {

      const date = new Date(data.date);

      return date >= this.dateRange[0] &&
        date <= this.dateRange[1];

    });

    this.listOfData = filteredData;
  }

  filteredStatus: string[] = [];
  filterTable(status: string): void {
    if (status === 'All Orders') {
      this.filteredStatus = [];
    } else {
      this.filteredStatus = [status];
    }
  }
}
  

 // @ViewChild('endDatePicker') endDatePicker!: OrderComponent;
  // fromDate: Date;
  // todDte: Date;
  // disabledStartDate = (startValue: Date): boolean => {
  //   if (!startValue || !this.todDte) {
  //     return false;
  //   }
  //   return startValue.getTime() > this.todDte.getTime();
  // };

  // disabledEndDate = (endValue: Date): boolean => {
  //   if (!endValue || !this.fromDate) {
  //     return false;
  //   }
  //   return endValue.getTime() <= this.fromDate.getTime();
  // };
  // filterByDate(): void {
  //   const filteredData = this.order.items.filter(data => {
  //     const date = new Date(data.date);
  //     return date >= this.selectedDates[0] &&
  //       date <= this.selectedDates[1];
  //   });
  //       this.order.items=filteredData
  // }
