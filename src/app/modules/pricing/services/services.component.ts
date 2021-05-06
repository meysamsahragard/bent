import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {SelectionModel} from '@angular/cdk/collections';

import {ServiceModel} from '../../../shared/service.model';

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.scss']
})

export class ServicesComponent implements OnInit {
  @Input() TREE_DATA;
  @Output() selectedPrice: EventEmitter<number[]> = new EventEmitter<number[]>();
  public nestedTreeControl: NestedTreeControl<ServiceModel>;
  public nestedDataSource: MatTreeNestedDataSource<ServiceModel>;
  public checklistSelection = new SelectionModel<ServiceModel>(true);

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.nestedTreeControl = new NestedTreeControl<ServiceModel>(
      this.getChildren
    );
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.nestedDataSource.data = this.TREE_DATA;
  }

  public hasNestedChild = (_: number, nodeData: ServiceModel) =>
    nodeData.children.length > 0;

  public getChildren = (node: ServiceModel) => node.children;

  public changeState(node): void {
    node.expanded = !node.expanded;
  }

  descendantsAllSelected(node: ServiceModel): boolean {
    const descendants = this.nestedTreeControl.getDescendants(node);
    if (!descendants.length) {
      return this.checklistSelection.isSelected(node);
    }
    const selected = this.checklistSelection.isSelected(node);
    const allSelected = descendants.every(child => this.checklistSelection.isSelected(child));
    if (!selected && allSelected) {
      this.checklistSelection.select(node);
      this.changeDetectorRef.markForCheck();
    }
    return allSelected;
  }

  public descendantsPartiallySelected(node: ServiceModel): boolean {
    const descendants = this.nestedTreeControl.getDescendants(node);
    if (!descendants.length) {
      return false;
    }
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    if (result && !this.descendantsAllSelected(node)) {
      this.checklistSelection.deselect(node);
    }
    return result && !this.descendantsAllSelected(node);
  }

  setSelected(): void {
    const selected: number[] = [];
    this.checklistSelection.selected.forEach(item => {
      selected.push(item.price);
    });

    this.selectedPrice.emit(selected);

  }

  public todoItemSelectionToggle(node: ServiceModel): void {
    this.checklistSelection.toggle(node);
    const descendants = this.nestedTreeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);


    // Force update for the parent
    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.setSelected();

  }
}
