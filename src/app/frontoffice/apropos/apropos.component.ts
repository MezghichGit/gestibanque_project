import { ViewportScroller } from '@angular/common';
import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToSection(nomSection:any) {
    const contactSection = document.getElementById(nomSection);
    if (contactSection) {
      this.viewportScroller.scrollToAnchor(nomSection);
      // contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
