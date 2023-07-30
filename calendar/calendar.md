Sure, I can help you create an Angular component that fulfills your requirements. Below is an example of an Angular component that calculates the number of weekdays as working days, determines 50% of total working days as office days, and provides a method to add or subtract holidays from the working days:

First, let's create the component:

1. Create a new Angular component using Angular CLI:
```bash
ng generate component WorkingDaysCalculator
```

2. Now, open the `working-days-calculator.component.ts` file and implement the component as follows:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-days-calculator',
  template: `
    <div>
      <h2>Working Days Calculator</h2>
      <p>Total working days: {{ totalWorkingDays }}</p>
      <p>Office days (50%): {{ officeDays }}</p>
    </div>
  `,
})
export class WorkingDaysCalculatorComponent implements OnInit {
  private holidays: number = 0; // Initialize holidays to 0
  private totalWorkingDays: number = 0;
  private officeDays: number = 0;

  ngOnInit() {
    // Assuming you want to calculate working days for a month (considering weekends only)
    this.calculateWorkingDaysForMonth(new Date().getFullYear(), new Date().getMonth() + 1);

    // Calculate 50% of total working days as office days
    this.officeDays = Math.ceil(this.totalWorkingDays * 0.5);
  }

  private calculateWorkingDaysForMonth(year: number, month: number): void {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    let workingDays = 0;

    for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
      const dayOfWeek = date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        workingDays++;
      }
    }

    this.totalWorkingDays = workingDays;
  }

  // Method to add holidays to the working days
  addHolidays(holidays: number): void {
    this.holidays += holidays;
    this.totalWorkingDays -= holidays;
    this.officeDays = Math.ceil(this.totalWorkingDays * 0.5);
  }

  // Method to subtract holidays from the working days
  subtractHolidays(holidays: number): void {
    this.holidays -= holidays;
    this.totalWorkingDays += holidays;
    this.officeDays = Math.ceil(this.totalWorkingDays * 0.5);
  }
}
```

3. Now, you can use the component in your app's template. For example, in your `app.component.html`:

```html
<app-working-days-calculator></app-working-days-calculator>
```

4. To test the component and its methods, you can add the following in the `app.component.ts`:

```typescript
import { Component } from '@angular/core';
import { WorkingDaysCalculatorComponent } from './working-days-calculator/working-days-calculator.component';

@Component({
  selector: 'app-root',
  template: `
    <app-working-days-calculator></app-working-days-calculator>
    <button (click)="addHolidays(5)">Add 5 holidays</button>
    <button (click)="subtractHolidays(3)">Subtract 3 holidays</button>
  `,
})
export class AppComponent {
  constructor(private workingDaysCalculator: WorkingDaysCalculatorComponent) {}

  addHolidays(holidays: number): void {
    this.workingDaysCalculator.addHolidays(holidays);
  }

  subtractHolidays(holidays: number): void {
    this.workingDaysCalculator.subtractHolidays(holidays);
  }
}
```

Now, when you run your Angular app, you should see the working days, office days, and the buttons to add or subtract holidays. The holidays you add or subtract will be reflected accordingly in the number of working days and office days displayed.
