import Cl_mGrupo from "../models/Cl_mGrupo.js";
import Cl_vGrupo from "../views/Cl_vGrupo.js";
import Cl_cPersona from "./Cl_cPersona.js";

export default class Cl_cGrupo {
  private mGrupo: Cl_mGrupo = new Cl_mGrupo();
  private vGrupo: Cl_vGrupo = new Cl_vGrupo();

  constructor() {
    this.vGrupo.btProcesarPersona.onclick = () => this.procesarPersona();
  }

  procesarPersona(): void {
    new Cl_cPersona({
      callback: (persona) => {
        if (persona) {
          this.mGrupo.procesarPersona(persona);
          // Actualizando la vista solo pasando el contenedor grupo
          this.vGrupo.reportar({ grupo: this.mGrupo });
        }
      },
    });
  }
}
