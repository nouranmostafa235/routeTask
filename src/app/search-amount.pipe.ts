import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAmount'
})
export class SearchAmountPipe implements PipeTransform {

  transform(transactions: any[], searchTerm: string): any[] {
    if (!transactions || !searchTerm) {
      return transactions;
    }

    return transactions.filter(transaction =>
      transaction.amount.toString().includes(searchTerm)
    );
  }

}
