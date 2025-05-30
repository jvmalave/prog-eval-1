import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false
})
export class ContactoPage implements OnInit {

  nombre: string = '';
  email: string = '';
  telefono: string = '';
  mensaje: string = "";

  contactoForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private formBuilder: FormBuilder
  ) {this.contactoForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern('^04[0-9]{9}')]],
     mensaje: ['', [Validators.required, Validators.minLength(8)]],
  }) }

  ngOnInit() {
  }

  async enviarMensaje() {
  if (this.contactoForm.invalid) {
    const toastError = await this.toastController.create({
      message: 'Por favor, completa todos los campos correctamente',
      duration: 3000,
      position: 'middle'
    });
    await toastError.present();
    return;
  }

  const toast = await this.toastController.create({
    message: 'Muchas gracias por tu mensaje, te contactaré a la brevedad!',
    duration: 3000,
    position: 'top'
  });
  await toast.present();

  console.log('Datos mensaje:', this.contactoForm.value);

  // Limpia el formulario
  this.contactoForm.reset();
}


}
