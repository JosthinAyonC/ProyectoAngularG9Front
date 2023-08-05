import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bus } from 'src/app/models/Bus.model';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent {
  busSeleccionado!: Bus;
  busIdSeleccionado!: number;
  busString: string = 'Esta seguro que desea eliminar este bus?';
  isAdmin: boolean = false;
  page: number = 0;
  totalPages?: Array<number>;
  buses: Bus[] = [];

  constructor(
    private router: Router,
    private busService: BusService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.listarBuses();
  }

  lastPage() {
    this.page--;
    this.listarBuses();
  }

  nextPage() {
    this.page++;
    this.listarBuses();
  }
  
  setpage(page: number): void {
    this.page = page;
    this.listarBuses();
  }

  listarBuses() {
    this.busService.getBuses().subscribe(
      {
        next: (data: Bus[]) => {
          this.buses = data;
        },
        error: (error: any) => {
          this.toastr.error(error.message);
        }
      }
    );
  }

  delete(id: number) {
    this.busService.deleteBus(id).subscribe(
      {
        next: (data: any) => {
          this.toastr.success(data.message);
          this.listarBuses();
        },
        error: (error: any) => {
          this.toastr.error(error.message);
        },
        complete: () => {
          this.listarBuses();
        }
      }
    );
  }

  obtenerBus(bus: Bus) {
    this.busSeleccionado = bus;
  }

  obtenerBusId(bus: Bus) {
    localStorage.setItem('idBus', bus.id!.toString());
    this.router.navigate(['bus/editar']);
  }

  onBusGuardado() {
    this.listarBuses();
  }

}
