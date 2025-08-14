import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Invoice } from './app/model/Invoice';
import { InvoiceComponent } from './app/components/invoice/invoice.component';

bootstrapApplication(InvoiceComponent, appConfig)
  .catch((err) => console.error(err));
