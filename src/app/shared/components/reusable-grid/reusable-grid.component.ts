import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reusable-grid',
  standalone: false,
  templateUrl: './reusable-grid.component.html',
  styleUrls: ['./reusable-grid.component.scss']
})
export class ReusableGridComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rightScroll') rightScroll?: ElementRef<HTMLDivElement>;
  @ViewChild('headerRight') headerRight?: ElementRef<HTMLDivElement>;
  @ViewChild('headerInner') headerInner?: ElementRef<HTMLDivElement>;
  private resizeObs?: ResizeObserver;
  private scrollHandler?: (e: Event) => void;

  ngAfterViewInit(): void {
    this.updateHeaderGeometry();
    this.bindHorizontalSync();
    this.updateHeaderHeightVar();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateHeaderGeometry();
    this.updateHeaderHeightVar();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Ensure header stays aligned with grid-right on page scroll
    this.updateHeaderGeometry();
  }

  private bindHorizontalSync() {
    const scrollEl = this.rightScroll?.nativeElement;
    const headerInnerEl = this.headerInner?.nativeElement;
    if (!scrollEl || !headerInnerEl) return;

    const handler = () => {
      headerInnerEl.style.transform = `translateX(${-scrollEl.scrollLeft}px)`;
    };
    this.scrollHandler = handler;
    scrollEl.addEventListener('scroll', handler);
    // initialize position
    handler();
  }

  private updateHeaderGeometry() {
    const gridRight = this.rightScroll?.nativeElement?.parentElement; // .grid-right
    const headerEl = this.headerRight?.nativeElement;
    if (!gridRight || !headerEl) return;

    const rect = gridRight.getBoundingClientRect();
    const baseTopVar = getComputedStyle(document.documentElement).getPropertyValue('--fixed-header-top');
    const baseTop = baseTopVar ? parseInt(baseTopVar.trim(), 10) || 0 : 0;
    const topPos = Math.max(rect.top, baseTop, 0);
    headerEl.style.left = `${rect.left}px`;
    headerEl.style.width = `${rect.width}px`;
    headerEl.style.top = `${topPos}px`;
    headerEl.style.visibility = 'visible';

    // Observe container size changes to keep alignment in sync
    if (!this.resizeObs) {
      this.resizeObs = new ResizeObserver(() => {
        const r = gridRight.getBoundingClientRect();
        const baseTopVar2 = getComputedStyle(document.documentElement).getPropertyValue('--fixed-header-top');
        const baseTop2 = baseTopVar2 ? parseInt(baseTopVar2.trim(), 10) || 0 : 0;
        const topPos2 = Math.max(r.top, baseTop2, 0);
        headerEl.style.left = `${r.left}px`;
        headerEl.style.width = `${r.width}px`;
        headerEl.style.top = `${topPos2}px`;
        headerEl.style.visibility = 'visible';
      });
      this.resizeObs.observe(gridRight);
    }
  }

  private updateHeaderHeightVar() {
    const headerEl = this.headerRight?.nativeElement;
    const scrollEl = this.rightScroll?.nativeElement;
    if (!headerEl || !scrollEl) return;
    const height = headerEl.getBoundingClientRect().height;
    scrollEl.style.setProperty('--header-height', `${Math.ceil(height)}px`);
  }

  ngOnDestroy(): void {
    if (this.resizeObs) {
      this.resizeObs.disconnect();
      this.resizeObs = undefined;
    }
    const scrollEl = this.rightScroll?.nativeElement;
    if (scrollEl && this.scrollHandler) {
      scrollEl.removeEventListener('scroll', this.scrollHandler);
      this.scrollHandler = undefined;
    }
  }
}
