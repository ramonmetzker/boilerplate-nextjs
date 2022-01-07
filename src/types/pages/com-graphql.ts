export type LaunchQuery = {
  id: string;
  details: string | null;
  launch_year: string;
  launch_success: boolean;
  launch_site: {
    site_name: string;
    site_name_long: string;
  };
  mission_name: string;
  launch_date_utc: string;
};
export interface PageQuery {
  launchesPast: LaunchQuery[];
}
