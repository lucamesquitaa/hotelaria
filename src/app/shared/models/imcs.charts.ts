export interface ImcCharts{
  name: string;
  series: SeriesIMC[];
}
export interface SeriesIMC{
  name: string | undefined;
  value: number | undefined;
}
