import { gql } from "@apollo/client";

export const SpaceX = gql`
  query SpaceX {
    launchesPast(limit: 10) {
      details
      launch_year
      launch_success
      launch_site {
        site_name
        site_name_long
      }
      mission_name
      launch_date_utc
    }
  }
`;
