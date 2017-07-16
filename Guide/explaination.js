// This file is nothing is todo with project
/// The below steps are emitting and recieing events from cmoponents
// Step -1 This is event emitted from component HTML : <a href="#" class="list-group-item clearfix" (click)="onSelected()"> </a >

//Step -2 Components ts - above click event will ne handled here.Custom event recipeSelected fired: - @Output() recipeSelected = new EventEmitter<void>();onSelected(){this.recipeSelected.emit();} // The above onlcik event is capatured in in component's ts and a custom event called recipeSelected will be emiited. Since @Output is specified this event can be captured in copmonent's parent

//Step -3  This is HTML of component parent HTML and (recipeSelected listenes and onRecipeSelected function will be called:  <app-recipe-item *ngFor="let recipeEl of recipes"[recipe]="recipeEl"(recipeSelected)="onRecipeSelected(recipeEl)"></app-recipe-item> - r defined in step-2 . This intern will call onRecipeSelected(recipeEl) function  which will be handled in parent ts file.

//Step-4  This is parent's ts file. onRecipeSelected function will be handled here.Custom event recipewWasSelected fired:  @Output() recipewWasSelected = new EventEmitter<Recipe>();  onRecipeSelected(recipe : Recipe){this.recipewWasSelected.emit(recipe);}  - This is parent's ts fire another event  called recipewWasSelected which will emit Recipe object.

//Step-5 This custom event recipewWasSelected will be listend in Component's parent parent HTML - <app-recipe-list (recipewWasSelected)="selectedRecipe=$event"></app-recipe-list> : Now selectedRecipe




