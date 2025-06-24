// hooks/useLiveTimeByCountryName.ts
import { useEffect, useState } from "react";

export function useLiveTimeByCountryName(countryName: string | null) {
    const [displayTime, setDisplayTime] = useState<string>("");

    useEffect(() => {
        if (!countryName) {
            setDisplayTime("");
            return;
        }

        const fetchTime = async () => {
            try {
                // Get time zone from country name
                const resCountry = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
                if (!resCountry.ok) throw new Error("Country fetch failed");
                const countryData = await resCountry.json();

                const timezone = countryData?.[0]?.timezones?.[0];
                if (!timezone) throw new Error("Timezone not found");

                const resTime = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
                if (!resTime.ok) throw new Error("Time API fetch failed");

                const timeData = await resTime.json();

                const date = new Date(timeData.datetime);
                const utcOffset = timeData.utc_offset;

                const formattedTime = new Intl.DateTimeFormat("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: timezone,
                }).format(date);

                const formattedDate = new Intl.DateTimeFormat("en-US", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    timeZone: timezone,
                }).format(date);

                setDisplayTime(`Time at ${countryName} (UTC ${utcOffset}) ${formattedTime}\nDate: ${formattedDate}`);
            } catch (error) {
                console.error("Failed to fetch time:", error);
                setDisplayTime("Could not retrieve time.");
            }
        };

        fetchTime();
    }, [countryName]);

    return displayTime;
}
