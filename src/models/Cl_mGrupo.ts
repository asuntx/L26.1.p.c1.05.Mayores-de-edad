import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mGrupo {
  private _cntPer: number = 0;
  private _cntMa: number = 0;

  procesarPersona(p: Cl_mPersona): void {
    this._cntPer++;
    // Condición de mayoría de edad (>= 18)
    if (p.edad >= 18) {
      this._cntMa++;
    }
  }

  get cantidadPer(): number {
    return this._cntPer;
  }
  get cantidadMa(): number {
    return this._cntMa;
  }
  get porcentajeMa(): number {
    if (this._cntPer === 0) return 0;
    return (this._cntMa / this._cntPer) * 100;
  }
}
