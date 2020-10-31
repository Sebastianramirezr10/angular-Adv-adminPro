
import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {


      @Input('title') titulo: string  = "";




 // Doughnut
 @Input('labels')  doughnutChartLabels: Label[] = ['label1','label2','label3'];
 @Input('data')   doughnutChartData: MultiDataSet = [
   [350, 450, 100],

 ];

   public colors:Colors[]=[
    {backgroundColor:['#eee','brown','black']}
   ];






}
