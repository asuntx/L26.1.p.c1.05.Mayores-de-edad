import Cl_mGrupo from "../models/Cl_mGrupo.js";

export default class Cl_vGrupo {
  lblRegistrosProcesados: HTMLElement;
  lblContPersonas: HTMLElement;
  lblContMayores: HTMLElement;
  lblPorcentajeMayores: HTMLElement;
  btProcesarPersona: HTMLButtonElement;

  constructor() {
    this.lblRegistrosProcesados = document.getElementById(
      "body_lblRegistrosProcesados",
    ) as HTMLElement;
    this.lblContPersonas = document.getElementById(
      "body_lblContPersonas",
    ) as HTMLElement;
    this.lblContMayores = document.getElementById(
      "body_lblContMayores",
    ) as HTMLElement;
    this.lblPorcentajeMayores = document.getElementById(
      "body_lblPorcentajeMayores",
    ) as HTMLElement;
    this.btProcesarPersona = document.getElementById(
      "body_btProcesarPersona",
    ) as HTMLButtonElement;
  }

  reportar({ grupo }: { grupo: Cl_mGrupo }): void {
    this.lblRegistrosProcesados!.innerHTML = `${grupo.contPersonas}`;
    this.lblContPersonas!.innerHTML = `${grupo.contPersonas}`;
    this.lblContMayores!.innerHTML = `${grupo.contMayores}`;
    this.lblPorcentajeMayores!.innerHTML = `${grupo.porcentajeMayores.toFixed(
      2,
    )}`;
  }
}
