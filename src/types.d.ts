type Time = {
    sec: number,
    min: number,
    hrs: number
};
type TimeZones = Array<{
    timezone: string,
    name: string
}>;
type ClockConfig = {
    timeZoneIdx: number;
};