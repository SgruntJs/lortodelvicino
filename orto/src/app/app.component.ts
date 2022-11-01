import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orto';
  red = 'yellow'

  
  constructor() {
    // this.esercizio1(100);
    // this.esercizio2(2);
  }

  ngOnInit() {

  }


  esercizio1(my_number: number) {

    const lastDigit2Str = String(my_number).slice(-1);
    const lastDigit2Num = Number(lastDigit2Str);
    if (lastDigit2Num == 0) {
      console.log('zero')
    } else if (lastDigit2Num == 5) {
      console.log('five')
    }

    else if (my_number % 2) {
      console.log('odd')
    } else {
      console.log('even')
    }

  }

  esercizio2(input: number) {
    const response = [];
    for (var i = 1; i <= input; i++) {
      if (i % 15 == 0) response.push("FizzBuzz");
      else if (i % 3 == 0) response.push("Fizz");
      else if (i % 5 == 0) response.push("Buzz");
      else response.push(i);
    }
    return response;
  }


  doneOrNot(board: any) {

    const rows: Set<number>[] = [];
    const cols: Set<number>[] = [];
    const miniGrids: Set<number>[] = [];

    for (let i = 0; i < 9; ++i) {
      rows.push(new Set());
      cols.push(new Set());
      miniGrids.push(new Set());
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const gridId: number = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
        const n: number = board[i][j];
        if (rows[i].has(n) || cols[j].has(n) || miniGrids[gridId].has(n)) return false;

        rows[i].add(n);
        cols[j].add(n);
        miniGrids[gridId].add(n);
      }
    }

    return true;


  }


  esercizio4() {

  }
parseBirthday( remarkString : any) {
  var regex = /year(?<year>\d{4})|month(?<month>\d{1,2})|DAY(?<day>\d{1,2})/gm;
  
  let m;

  var formattedDate = '';
  
  while ((m = regex.exec(remarkString)) !== null) {
    
	// This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
	
	formattedDate += m[0];
  }

  console.log(formattedDate);
  const newdata = formattedDate.replace(/year/g,'');
  const newdata2 = newdata.replace(/month/g,'-');
  const newdata3 = newdata2.replace(/DAY/g,'-');
  

  return newdata3; 
}




}
