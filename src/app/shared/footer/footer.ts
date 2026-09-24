import { Component } from '@angular/core';
import {NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionHeader,
    NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-footer',
  imports: [
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionDirective,
    NgbAccordionHeader,
    NgbAccordionItem,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
