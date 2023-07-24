import dataSource from "../config/dataSource";
//added
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import { LocationSchema } from "../entity/Location";
import { Point } from "typeorm";
//import { Client } from "@googlemaps/google-maps-services-js";
//import axios from "axios";
const locationRepository = dataSource.getRepository(LocationSchema);

const apiKey = process.env.googleMapAPI;

export const geocodeAddress = async (address: string) => {
  try {
    //const gmaps = googlemaps.Client("apiKey");
    //var data = gmaps.geocode("address");
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (data && data.results.length > 0) {
      //const { lat, lng } = data.results[0].geometry.location;
      const lat = data.results[0].geometry.location.lat;
      const lng = data.results[0].geometry.location.lng;

      var location = await locationRepository.create({ address });
      location.address = address;
      location.coordinate = { type: "Point", coordinates: [lat, lng] };
      location = await locationRepository.save(location);
      return location;
    } else {
      throw new Error("Geocoding failed. Address not found.");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//added
//import * as NodeGeocoder from "node-geocoder";
