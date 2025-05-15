"use client";

import { useState, useEffect } from 'react';

interface DateTimeOptions {
  timeZone?: string;
  updateInterval?: number;
  format?: 'full' | 'date-only' | 'time-only';
}

export function useLocalDateTime({
  timeZone = 'Asia/Manila',
  updateInterval = 1000,
  format = 'full'
}: DateTimeOptions = {}) {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };

      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone,
        month: "long",
        day: "numeric"
      };

      let formattedDateTime = "";
      const timeString = now.toLocaleTimeString('en-US', timeOptions);
      const dateString = now.toLocaleDateString('en-US', dateOptions);

      switch (format) {
        case 'full':
          formattedDateTime = `${dateString}, ${timeString}`;
          break;
        case 'date-only':
          formattedDateTime = dateString;
          break;
        case 'time-only':
          formattedDateTime = timeString;
          break;
        default:
          formattedDateTime = `${dateString}, ${timeString}`;
      }

      setDateTime(formattedDateTime);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, updateInterval);
    return () => clearInterval(intervalId);
  }, [timeZone, updateInterval, format]);

  return dateTime;
}

export function useFormattedDateTime(
  location: string = 'Manila, Philippines',
  options: DateTimeOptions = {}
) {
  const dateTime = useLocalDateTime(options);
  return `${location} • ${dateTime}`;
}
