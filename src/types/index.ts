import React from "react";

export interface IBase {
  testId?: string;
  style?: {
    [key: string]: string;
  };
  className?: string;
  children?: React.ReactNode;
}

export interface Location {
  id?: string;
  lat: number;
  lng: number;
}

export interface Address {
  label: string;
  countryCode: string;
  countryName: string;
  stateCode: string;
  state: string;
  countyCode: string;
  county: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
  houseNumber: string;
}

export interface Position {
  lat: number;
  lng: number;
}

export interface Hotel {
  title: string;
  address: Address;
  position: Position;
  distance: number;
}

export interface Hotels {
  infos: any;
  locations: any;
}
