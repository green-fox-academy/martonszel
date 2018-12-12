'use strict'

export class Car {
  private id: number;
  private licensePlate: string;
  private manufacturYear: number;
  private hasTicket: number;
  constructor(id: number=0, licensePlate: string, manufacturYear: number, hasTicket: number) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.manufacturYear = manufacturYear;
    this.hasTicket = hasTicket;
  }

  public getId(): number {
    return this.id;
  }

  public getLicensePlate(): string {
    return this.licensePlate;
  }

  public getManucaturerYear(): number {
    return this.manufacturYear;
  }

  public getTicker(): number {
    return this.hasTicket;
  }

}
