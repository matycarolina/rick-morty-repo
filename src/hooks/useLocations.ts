import { useState, useEffect } from "react";
import { getLocationsService, getSingleLocationService } from "../services/locationServices";

export const useLocations = () => {
  const [locations, setLocations] = useState<any>([]);

  useEffect(() => {
    const getLocations = async () => {
      const { data } = await getLocationsService();
      console.log(data);
      setLocations(data);
    };
    getLocations();
  }, []);
  return { locations };
};

export const useSingleLocation = (locationId: string) => {
  const [location, setLocation] = useState<any>([]);

  useEffect(() => {
    const getSingleLocation = async () => {
      const { data } = await getSingleLocationService( locationId );
      console.log(data);
      setLocation(data);
    };
    getSingleLocation();
  }, []);
  return { location };
};
