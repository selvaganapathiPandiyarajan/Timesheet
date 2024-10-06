import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-holidaylist',
  templateUrl: './holidaylist.component.html',
  styleUrls: ['./holidaylist.component.css']
})
export class HolidaylistComponent implements OnInit {
  public holidayData:any=[];
  constructor(private api:ApiService)
  {

  }
  ngOnInit(): void {
    this.getmycalenderevent();
  }
  getmycalenderevent()
  {
    this.api.getAllholiday().subscribe((res:any)=>
      {
        this.holidayData=res;
        console.log(this.holidayData,'frrr');
      
      })
    }
    openPDF(): void {
      let DATA: any = document.getElementById('holidayTable');
      DATA.style.display = 'block';
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 650; 
        let fileHeight = 80;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
  
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        const downloadLink: any = document.createElement('a');
        downloadLink.href = PDF.output('bloburl');
        downloadLink.download = 'holiday.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
  
        DATA.style.display = 'none';
      });
    }
}
