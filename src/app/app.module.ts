import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses/courses.component';
import { AuthorComponent } from './author/author.component';
import { BindingComponent } from './binding/binding.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { StringFormatComponent } from './string-format/string-format.component';

import { FormatStringPipe } from './format-string.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    BindingComponent,
    PipeDemoComponent,
    SummaryPipe,
    FavouriteComponent,
    StringFormatComponent,
    FormatStringPipe,
    PanelComponent,
    LikeComponent,
    IfDirectiveComponent,
    SwitchDirectiveComponent,
    ForDirectiveComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    CourseListComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
