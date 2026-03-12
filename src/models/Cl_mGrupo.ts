import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mGrupo {
  private _contPersonas: number = 0;
  private _contMayores: number = 0;

  procesarPersona(p: Cl_mPersona): void {
    this._contPersonas++;
    // Condición de mayoría de edad (>= 18)
    if (p.edad >= 18) {
      this._contMayores++;
    }
  }

  get contPersonas(): number {
    return this._contPersonas;
  }
  get contMayores(): number {
    return this._contMayores;
  }
  get porcentajeMayores(): number {
    if (this._contPersonas === 0) return 0;
    return (this._contMayores / this._contPersonas) * 100;
  }
}
