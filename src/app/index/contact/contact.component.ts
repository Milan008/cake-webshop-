import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from  'angularfire2/database';
import { NgForm } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import  { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from  '@angular/forms';
import  { Observable } from  'rxjs';





@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {

 // Adding variables
 itemName = '';
 itemEmail = '';
 itemSubject = '';
 itemMessage = '';
 items: Observable<any[]>;
 contactForm: FormGroup;


 // Setting the database
 constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
  this.items = db.list('messages').valueChanges()
  this.contactForm = fb.group({
    contactFormName: ['', Validators.required],
    contactFormEmail: ['', [Validators.required, Validators.email]],
    contactFormSubject: ['', Validators.required],
    contactFormMessage: ['', Validators.required]

});
  }
  ngOnInit() {

  }

// Pushing the contact-form to the firebase data base
  onSubmit()  {
  this.db.list('/messages').push({ name: this.itemName, email: this.itemEmail, subject: this.itemSubject,
  message: this.itemMessage});
//Popup message
  alert('Thank you for contacting us, your message has gone through!');
 }

// Clearing the form after submit
clearForm() {
  this.contactForm.reset();
 }

}
