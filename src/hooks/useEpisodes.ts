import { useState, useEffect } from "react";
import { getEpisodesService, getSingleEpisodeService, getDatesService } from "../services/episodeServices";

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState<any>([]);

  useEffect(() => {
    const getEpisodes = async () => {
      const { data } = await getEpisodesService();
      console.log(data);
      setEpisodes(data);
    };
    getEpisodes();
  }, []);
  return { episodes };
};

export const useSingleEpisode = (episodeId: string) => {
  const [episode, setEpisode] = useState<any>([]);

  useEffect(() => {
    const getSingleEpisode = async () => {
      const { data } = await getSingleEpisodeService( episodeId );
      console.log(data);
      setEpisode(data);
    };
    getSingleEpisode();
  }, []);
  return { episode };
};

export const useEpisodesDates = () => {
  const [dates, setDates] = useState<any>([]);

  useEffect(() => {
    const getEpisodesDates = async () => {
      const { data } = await getDatesService();
      setDates(data);
    };
    getEpisodesDates();
  }, []);
  return { dates };
};