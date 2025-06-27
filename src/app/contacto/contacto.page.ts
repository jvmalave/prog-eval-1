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

  contactoForm: FormGroup;

  // Opciones para áreas y temas
  areas = [
    { value: 'gestion', label: 'Gestión de Proyectos Informáticos' },
    { value: 'desarrollo', label: 'Desarrollo de Aplicaciones Móviles' }
  ];

  temasGestion = [
    'Planificación y control de proyectos',
    'Metodologías ágiles (Scrum, Kanban)',
    'Gestión de riesgos',
    'Gestión de calidad de software',
    'Herramientas de seguimiento y reporte'
  ];

  temasDesarrollo = [
    'Desarrollo nativo Android e iOS',
    'Desarrollo híbrido con Ionic/React Native',
    'UI/UX para apps móviles',
    'Integración con APIs y servicios web',
    'Publicación y mantenimiento en tiendas de apps'
  ];

  temas: string[] = [];  // Temas que se mostrarán según área seleccionada

  constructor(private fb: FormBuilder, private toastController: ToastController) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^04[0-9]{9}$')]], 
      area: ['', Validators.required],
      tema: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    // Actualizar temas cuando cambie el área
    this.contactoForm.get('area')?.valueChanges.subscribe(area => {
      if (area === 'gestion') {
        this.temas = this.temasGestion;
      } else if (area === 'desarrollo') {
        this.temas = this.temasDesarrollo;
      } else {
        this.temas = [];
      }
      // Resetear tema seleccionado al cambiar área
      this.contactoForm.get('tema')?.setValue('');
    });
  }

  async enviarMensaje() {
    if (this.contactoForm.valid) {
      console.log('Formulario válido, datos enviados:', this.contactoForm.value);
      const nombre = this.contactoForm.value.nombre;
      // Simulacion del envío o guardado de datos
      await this.mostrarToast(`¡Mil gracias, ${ nombre }! por tu solicitud! Nos pondremos en contacto pronto.`);
      this.contactoForm.reset();
      this.temas = [];
    } else {
      this.contactoForm.markAllAsTouched();
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 20000, // duración en ms
      position: 'middle',
      color: 'tertiary',
      icon: 'checkmark-circle-outline'
    });
    toast.present();
  }
}
