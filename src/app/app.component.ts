import { Component } from '@angular/core';

import { Column } from './components/table/column';
import { Element } from './element';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableColumns: Array<Column> = [
    {
      columnDef: 'company',
      header: 'Company/Asset Name',
      cell: (element: Record<string, any>) => `${element['company']}`
    },
    {
      columnDef: 'sector',
      header: 'Sector',
      cell: (element: Record<string, any>) => `${element['sector']}`,
      isLink: false,
      url: 'abc'
    },
    {
      columnDef: 'location',
      header: 'Location',
      cell: (element: Record<string, any>) => `${element['location']}`
    },
    {
      columnDef: 'cost',
      header: 'Cost',
      cell: (element: Record<string, any>) => `$${element['cost']}`
    },
    {
      columnDef: 'distrib',
      header: 'Distrib',
      cell: (element: Record<string, any>) => `$${element['distrib']}`
    },
    {
      columnDef: 'fairValue',
      header: 'Fair Value',
      cell: (element: Record<string, any>) => `$${element['fairValue']}`
    },
    {
      columnDef: 'mult',
      header: 'Mult',
      cell: (element: Record<string, any>) => `${element['mult']}x`
    },      
  ];

  tableData: Array<Element> = [
    { company: 'Low C Packaging', sector: 'Materials', location: 'Richmond, VA', cost:7.0,distrib:0.0,fairValue:33.3,mult:4.8,symbol:'h' },
    { company: 'Mobile Co.', sector: 'Communication Services', location: 'Encino, CA', cost:14.0,distrib:0.0,fairValue:15.4,mult:1.1,symbol:'h' },
    { company: 'Power Plant Co.', sector: 'Energy', location: 'Berkeley, CA', cost:6.0,distrib:0.0,fairValue:11.4,mult:1.9,symbol:'h' },
    { company: 'Small Ship Co.', sector: 'Industrials', location: 'Deerfield Beach, FL ', cost:2.5,distrib:0.0,fairValue:8.5,mult:3.4,symbol:'h' },
    { company: 'Play Learn ', sector: 'Information Technology ', location: 'Austin, TX', cost:3.0,distrib:0.0,fairValue:8.2,mult:2.7,symbol:'h' },
   
  ];

  
}
